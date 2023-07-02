import { gameTapOptions } from '@constants/pitch';
import { useRecoilState } from 'recoil';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Loading } from '@components/Loading/Loading';

import { useGetGame } from '@hooks/@query/game/useGetGame';

import {
    GameDataSectionContainer,
    HomeAway,
    MatchupSectionContainer,
    ScoreLineContainer,
    TeamDetailWrapper,
    TeamImageWrapper,
    TeamInformation,
    TeamName,
    TopSectionContainer,
} from '@pages/GameDetailPage/components/GameDataSection/GameDataSection.styles';

import { gameViewTypeState } from '@recoils/game/atom';

import { GameViewType } from '@typings/game';
import { Team } from '@typings/team';

interface GameDataSectionProps {
    slug: string;
}

interface TeamInfoProps {
    team: Team;
    isHome: boolean;
}

interface ScoreLineProps {
    homeScore: number;
    awayScore: number;
}

const TeamInfo = ({ team, isHome }: TeamInfoProps) => {
    return (
        <TeamInformation isHome={isHome}>
            <TeamImageWrapper>
                <img src={team!.imageUrl} alt={team!.abbreviation} width={96} height={96} />
            </TeamImageWrapper>
            <TeamDetailWrapper>
                <TeamName>{team!.name}</TeamName>
                <HomeAway>{isHome ? 'Home' : 'Away'}</HomeAway>
            </TeamDetailWrapper>
        </TeamInformation>
    );
};

const ScoreLine = ({ homeScore, awayScore }: ScoreLineProps) => {
    return (
        <ScoreLineContainer>
            <h3>{homeScore}</h3>
            <span>vs</span>
            <h3>{awayScore}</h3>
        </ScoreLineContainer>
    );
};

export const GameDataSection = ({ slug }: GameDataSectionProps) => {
    const [gameViewType, setGameViewType] = useRecoilState<GameViewType>(gameViewTypeState);
    const { isLoading, data } = useGetGame(slug, { enabled: !!slug });

    if (isLoading) return <Loading size={60} />;
    else {
        const { date, homeScore, awayScore, home, away, umpire } = data!;
        return (
            <GameDataSectionContainer>
                <TopSectionContainer>
                    <h2>{date} Strike Zone</h2>
                    <span>(Umpire: {umpire!.name})</span>
                </TopSectionContainer>
                <MatchupSectionContainer>
                    <TeamInfo team={home!} isHome={true} />
                    <ScoreLine homeScore={homeScore!} awayScore={awayScore!} />
                    <TeamInfo team={away!} isHome={false} />
                </MatchupSectionContainer>
                <CategoryMenu<GameViewType, any>
                    selectedCategory={gameViewType}
                    setSelectedCategory={setGameViewType}
                    categoryOptions={gameTapOptions}
                />
            </GameDataSectionContainer>
        );
    }
};
