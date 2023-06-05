import axios from 'axios';

import { Play, UpsertAtBat } from '@typings/atbat';

const MLB_URL = import.meta.env.MLB_BASE_URL;
const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

const getGames = async () => {
    let today = new Date();
    const offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - offset * 60 * 1000);
    const today_str = today.toISOString().split('T')[0];

    // const mlbData = await axios(`${MLB_URL}/api/v1/schedule/games/?date=${today_str}&sportId=1`);
    const mlbData = await axios(
        `${MLB_URL}/api/v1/schedule/games/?sportId=1&startDate=2023-04-01&endDate=${today_str}`,
    );
    const data = mlbData.data;
    const gameCount = data.totalGames;

    if (gameCount) {
        const dates = data.dates;
        const games = dates.games;
        const idList = games.map((game) => game.gamePk);
    }
};

// const MLB_URL = 'https://statsapi.mlb.com';

const getAtBat = async (gameId = 717898) => {
    const api_url = `${MLB_URL}/api/v1.1/game/${gameId}/feed/live`;
    const atBats: UpsertAtBat[] = [];
    const mlbData = await axios(api_url);
    const data = mlbData.data;
    const gameData = data.gameData;

    const officialDate = gameData.datetime.officialDate;
    const teamMatchup = gameData.teams;
    const awayId = teamMatchup.away.id;
    const homeId = teamMatchup.home.id;

    const officials = data.liveData.boxscore.officials;
    const umpireId = officials.filter((official) => official.officialType === 'Home Plate')[0].official.id;

    const playData = data.liveData.plays.allPlays;
    for await (const play of playData) {
        const eventType = play.result.type;
        if (eventType === 'atBat') {
            const playerMatchup = play.matchup;
            const batterId = playerMatchup.batter.id;
            const pitcherId = playerMatchup.pitcher.id;

            const about = play.about;
            const atBatIndex = about.atBatIndex;
            const isTopInning = about.isTopInning;
            const inning = about.inning;

            const playEvents = play.playEvents;
            const pitchEvents = playEvents.filter((e) => e.isPitch);
            const pitch = pitchEvents.map((e) => {
                return {
                    id: e.playId,
                    isPitch: true,
                    pitchType: e.details.type.code,
                    isBall: e.details.isBall,
                    isStrike: e.details.isStrike,
                    isInPlay: e.details.isInPlay,
                    velocity: e.pitchData.endSpeed,
                    strikeZoneTop: e.pitchData.strikeZoneTop,
                    strikeZoneBottom: e.pitchData.strikeZoneBottom,
                    coordinates: {
                        x: e.pitchData.coordinates.pX,
                        y: e.pitchData.coordinates.pZ,
                    },
                };
            });

            const atBat: UpsertAtBat = {
                gameId,
                atBatIndex,
                isTopInning,
                inning,
                batterId,
                pitcherId,
                homeId,
                awayId,
                umpireId,
                plays: pitch,
                gameDate: officialDate,
            };
            atBats.push(atBat);
        }
    }

    const HEADER = {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
    };

    const fetchOptions = {
        method: 'POST',
        url: `${SUPABASE_BASE_URL}/atbat`,
        headers: HEADER,
        data: JSON.stringify(atBats),
    };

    const res = await axios(fetchOptions);
    return res;
};

console.log(getAtBat());
