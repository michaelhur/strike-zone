import axios from 'axios';

import { Play } from '@typings/atbat';

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
    const data = await mlbData.data;
    const gameCount = await data.totalGames;

    if (gameCount) {
        const dates = await data.dates;
        const games = await dates.games;
        const idList = await games.map((game) => game.gamePk);
    }
};

// const getAtBat = async (gamePk: number | string) => {
//     const plays: Play[] = [];
//     const mlbData = await axios(`${MLB_URL}/api/v1.1/game/${gamePk}/feed/live`);
//     const data = await mlbData.data;
//
//     const gameData = await data.gameData;
//     const gameDate = await gameData.datetime.officialDate;
// };

// const MLB_URL = 'https://statsapi.mlb.com';

const getAtBat = async () => {
    const api_url = `${MLB_URL}/api/v1.1/game/717898/feed/live`;
    const plays = [];
    const mlbData = await axios(api_url);
    const data = await mlbData.data;
    const gameData = await data.gameData;

    const officialDate = await gameData.datetime.officialDate;
    const teamMatchup = await gameData.teams;
    const awayId = await teamMatchup.away.id;
    const homeId = await teamMatchup.home.id;

    const playData = await data.liveData.plays.allPlays;
    for await (const play of playData) {
        const eventType = await play.result.type;
        if (eventType === 'atBat') {
            const playerMatchup = await play.matchup;
            const batterId = await playerMatchup.batter.id;
            const pitcherId = await playerMatchup.pitcher.id;

            const about = await play.about;
            const atBatIndex = await about.atBatIndex;
            const isTopinning = await about.isTopInning;
            const inning = await about.inning;

            const playEvents = await play.playEvents;
            const pitchEvents = await playEvents.filter((e) => e.isPitch);
        }
        console.log(eventType);
    }
    console.log(playData);

    return gameData;
};

console.log(getAtBat());
