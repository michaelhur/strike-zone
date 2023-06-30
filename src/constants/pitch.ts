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
};

export const PitchOutcomeColorVariant = {
    CalledStrike: {
        color: 'var(--primary500)',
    },
    SwingingStrike: {
        color: 'var(--red)',
    },
    Ball: {
        color: 'var(--green)',
    },
    InPlay: {
        color: 'var(--orange)',
    },
};
