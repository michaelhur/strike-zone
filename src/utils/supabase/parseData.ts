import axios from 'axios';

import { AtBat, Game } from '@typings/atbat';
import { Player } from '@typings/player';
import { Umpire } from '@typings/umpire';

import { fetchSupabase } from '@utils/supabase/fetchSupabase';

const MLB_URL = import.meta.env.VITE_MLB_BASE_URL;

const getGames = async () => {
    const mlbData = await axios(`${MLB_URL}/api/v1/schedule/games/?sportId=1&startDate=2023-04-09&endDate=2023-04-30`);
    const scheduleData = mlbData.data;
    const { totalGames: gameCount, dates } = scheduleData;

    if (!gameCount) return;

    const idList = dates.map((d) => {
        const games = d.games;
        const fullTimeGames = games.filter((game) => game.status.codedGameState === 'F');
        return fullTimeGames.map((game) => game.gamePk);
    });

    const flatIdList = idList.flat();

    console.log(`${flatIdList.length} data to be parsed`);

    let i = 0;

    for await (const id of flatIdList) {
        console.log(`${i + 1}: ${id}`);
        const response = await getMLBData(id);
        await wait(1000);
        i++;
    }
};

const getMLBData = async (gamePk: number) => {
    try {
        const response = await axios(`${MLB_URL}/api/v1.1/game/${gamePk}/feed/live`);
        const MLBData = response.data;
        const { gameData, liveData } = MLBData;
        const { game, datetime, status, teams, players } = gameData;
        const { plays, boxscore } = liveData;
        const allPlays = plays.allPlays;

        if (status.codedGameState !== 'F') return;

        const gameSlug = getGameSlug(game.id);
        const season = game.season;
        const gameDate = datetime.officialDate;
        const awayId = teams.away.id;
        const homeId = teams.home.id;

        const umpire: Umpire = boxscore.officials
            .map((o) => {
                return {
                    officialType: o.officialType,
                    official: {
                        id: o.official.id,
                        name: o.official.fullName,
                    },
                };
            })
            .filter((official) => official.officialType === 'Home Plate')[0].official;
        const umpireId = umpire.id;

        const gameInfo: Game = {
            id: gamePk,
            slug: gameSlug,
            date: gameDate,
            season,
            awayId,
            homeId,
            umpireId,
        };

        const playerData: Player[] = Object.keys(players)
            .map((key) => players[key])
            .map((player) => {
                return {
                    id: player.id,
                    name: player.fullName,
                    lastName: player.lastName,
                    batSide: player.batSide.code,
                    pitchHand: player.pitchHand.code,
                };
            });

        const atbats: AtBat[] = allPlays
            .filter((p) => p.result.type === 'atBat')
            .map((play) => {
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
                        pitchType: e.details?.type?.code || 'UN',
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

                return {
                    id: `${gameDate}_${gamePk}_${atBatIndex}`,
                    gameId: gamePk,
                    atBatIndex,
                    isTopInning,
                    inning,
                    batterId,
                    pitcherId,
                    homeId,
                    awayId,
                    umpireId,
                    plays: pitch,
                    date: gameDate,
                };
            });

        const umpireResponse = await fetchSupabase('umpire', umpire);
        const playerResponse = await fetchSupabase('player', playerData);
        const gameResponse = await fetchSupabase('game', gameInfo);
        const atbatResponse = await fetchSupabase('atbat', atbats);
    } catch (e) {
        console.log(`${gamePk} failed with error ${e}`);
    }

    return;
};

const getGameSlug = (id) => {
    const [YYYY, MM, DD, game] = id.split('/');
    const YY = YYYY.substring(2);
    const matchup = game.replace(/mlb/g, '').toUpperCase();

    return `${YY}${MM}${DD}-${matchup}`;
};

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
