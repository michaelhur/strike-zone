import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';
import SidePlot from '@components/SidePlot/SidePlot';
import { StrikeZoneList } from '@components/StrikeZone/StrikeZone.styles';

import { useGetAtbatListByUmpire } from '@hooks/@query/umpire/useGetAtbatListByUmpire';
import { useGetLatestAtbatListByUmpire } from '@hooks/@query/umpire/useGetLatestAtbatListByUmpire';

import { PlotContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { UmpireZoneContainer } from '@pages/UmpireDetailPage/components/UmpireZone/UmpireZone.styles';

interface UmpireZoneProps {
    id: number;
    latest: boolean;
}

export const UmpireZone = ({ id, latest }: UmpireZoneProps) => {
    const { isLoading, data } = latest ? useGetLatestAtbatListByUmpire(id) : useGetAtbatListByUmpire(id);
    const sectionTitle = latest ? '최근 5경기' : '시즌 전체';

    return (
        <UmpireZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <PlotContainer>
                {isLoading || !data ? (
                    <Loading size={60} />
                ) : (
                    <SidePlot atbats={data} outcomeType={'BallsAndStrikes'} hasTitle={false} />
                )}
            </PlotContainer>
        </UmpireZoneContainer>
    );
};
