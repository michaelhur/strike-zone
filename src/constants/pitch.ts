import { scaleLinear } from 'd3';

import { ZoneViewType } from '@typings/game';
import { TabOptions } from '@typings/input';
import { BatterPlotValueProps, PitcherPlotValueProps, SidePlotValueProps } from '@typings/player';

export enum PitchType {
    AB = 'Automatic Ball',
    AS = 'Automatic Strike',
    CH = 'Change-up',
    CU = 'Curveball',
    CS = 'Slow Curve',
    EP = 'Eephus',
    FC = 'Cutter',
    FF = 'Four-Seam Fastball',
    FO = 'Forkball',
    FS = 'Splitter',
    FT = 'Two-Seam Fastball',
    GY = 'Gyroball',
    IN = 'Intentional Ball',
    KC = 'Knuckle Curve',
    KN = 'Knuckleball',
    NP = 'No Pitch',
    PO = 'Pitchout',
    SC = 'Screwball',
    SI = 'Sinker',
    SL = 'Slider',
    SV = 'Slurve',
    ST = 'Sweeper',
    UN = 'Unknown',
}

export const StrikeZoneDimensions = {
    TOP: 3.5,
    BOTTOM: 1.5,
    LEFT: -0.85,
    RIGHT: 0.85,
    HEIGHT: 300,
    WIDTH: 250,
};

export const PitchOutcomeColorVariant = {
    CalledStrike: {
        color: 'var(--primary500)',
    },
    SwingingStrike: {
        color: 'var(--orange)',
    },
    Ball: {
        color: 'var(--green)',
    },
    Foul: {
        color: 'var(--red)',
    },
    InPlay: {
        color: 'var(--yellow)',
    },
};

export const gameTapOptions: TabOptions<ZoneViewType>[] = [
    {
        label: '요약',
        value: 'SUMMARY',
    },
    {
        label: '이닝별',
        value: 'INNING',
    },
    {
        label: '투타 방향별',
        value: 'SIDE',
    },
];

export const SidePlotValues: SidePlotValueProps[] = [
    {
        pitchHand: 'L',
        batSide: 'L',
        zoneLabel: '좌완 vs 좌타',
    },
    {
        pitchHand: 'L',
        batSide: 'R',
        zoneLabel: '좌완 vs 우타',
    },
    {
        pitchHand: 'R',
        batSide: 'L',
        zoneLabel: '우완 vs 좌타',
    },
    {
        pitchHand: 'R',
        batSide: 'R',
        zoneLabel: '우완 vs 우타',
    },
];

export const PitcherPlotValues: PitcherPlotValueProps[] = [
    {
        batSide: 'L',
        zoneLabel: 'vs 좌타',
    },
    {
        batSide: 'R',
        zoneLabel: 'vs 우타',
    },
];

export const BatterPlotValues: BatterPlotValueProps[] = [
    {
        pitchHand: 'L',
        zoneLabel: 'vs 좌완',
    },
    {
        pitchHand: 'R',
        zoneLabel: 'vs 우완',
    },
];

export const yScale = scaleLinear().domain([0.5, 4.5]).range([StrikeZoneDimensions.HEIGHT, 0]);
export const xScale = scaleLinear().domain([-1.5, 1.5]).range([0, StrikeZoneDimensions.WIDTH]);
