import { useState } from 'react';

import { LeagueTabOptions } from '@constants/menu';
import { useRecoilState } from 'recoil';

import { CategoryMenu } from '@components/FilterMenu/FilterMenu';
import { GameListWrapper } from '@components/GameListSection/GameListSection.styles';
import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { PageSectionContainer, SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { itemViewType, itemViewTypeState } from '@recoils/fixture/atom';

import { LeagueType } from '@typings/league';

interface GameListSectionProps {
    fixtureDate: string;
    sectionLabel?: string;
}

export const GameListSection = ({ fixtureDate, sectionLabel }: GameListSectionProps) => {
    const [leagueFilter, setLeagueFilter] = useState<LeagueType>('ALL');
    const [viewType, setViewType] = useRecoilState<itemViewType>(itemViewTypeState);

    const { isLoading, data: gameList } = leagueFilter
        ? useGetGameList(`date=${fixtureDate}&leagues=${leagueFilter}`)
        : useGetGameList(`date=${fixtureDate}`);

    if (isLoading) return <Loading size={40} />;

    return (
        <PageSectionContainer>
            <SectionTitleWrapper>
                <h2>{sectionLabel ? sectionLabel : fixtureDate || '날짜가 선택되지 않았습니다'}</h2>
            </SectionTitleWrapper>
            <CategoryMenu<LeagueType>
                selectedMenu={leagueFilter}
                setSelectedMenu={setLeagueFilter}
                tabOptions={LeagueTabOptions}
                viewType={viewType}
                setViewType={setViewType}
            />
            {fixtureDate && (
                <GameListWrapper>
                    <GameList games={gameList!} itemViewType={viewType} cardCount={2} />
                </GameListWrapper>
            )}
        </PageSectionContainer>
    );
};
