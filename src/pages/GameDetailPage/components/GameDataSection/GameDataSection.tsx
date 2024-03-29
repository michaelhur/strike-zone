import { Helmet } from 'react-helmet-async';

import { gameTapOptions } from '@constants/pitch';
import { PATH } from '@constants/routes';
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
    UmpireInfo,
} from '@pages/GameDetailPage/components/GameDataSection/GameDataSection.styles';

import { zoneViewTypeState } from '@recoils/game/atom';

import { ZoneViewType } from '@typings/game';
import { Team } from '@typings/team';

import { YYYYMMDD_to_locale } from '@utils/date';

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
                <HomeAway>{isHome ? '홈' : '원정'}</HomeAway>
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
    const [zoneViewType, setZoneViewType] = useRecoilState<ZoneViewType>(zoneViewTypeState);
    const { isLoading, data } = useGetGame(slug, { enabled: !!slug });

    return (
        <GameDataSectionContainer>
            <TopSectionContainer>
                {isLoading || !data ? (
                    <Loading size={60} />
                ) : (
                    <>
                        <h2>{YYYYMMDD_to_locale(data!.date)} 스트라이크 존</h2>
                        <UmpireInfo>(주심: {data.umpire!.name})</UmpireInfo>
                    </>
                )}
            </TopSectionContainer>
            <MatchupSectionContainer>
                {isLoading || !data ? (
                    <Loading size={60} />
                ) : (
                    <>
                        <TeamInfo team={data.home!} isHome={true} />
                        <ScoreLine homeScore={data.homeScore!} awayScore={data.awayScore!} />
                        <TeamInfo team={data.away!} isHome={false} />
                    </>
                )}
            </MatchupSectionContainer>
            <CategoryMenu<ZoneViewType, any>
                selectedCategory={zoneViewType}
                setSelectedCategory={setZoneViewType}
                categoryOptions={gameTapOptions}
            />
        </GameDataSectionContainer>
    );
};
