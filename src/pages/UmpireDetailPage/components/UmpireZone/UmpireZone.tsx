import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';
import SidePlot from '@components/SidePlot/SidePlot';

import { useGetAtbatListByUmpire } from '@hooks/@query/umpire/useGetAtbatListByUmpire';
import { useGetLatestAtbatListByUmpire } from '@hooks/@query/umpire/useGetLatestAtbatListByUmpire';

import { PlotContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { UmpireZoneContainer } from '@pages/UmpireDetailPage/components/UmpireZone/UmpireZone.styles';

import { OutcomeType } from '@typings/atbat';

interface UmpireZoneProps {
    id: number;
    latest: boolean;
}

export const UmpireZone = ({ id, latest }: UmpireZoneProps) => {
    const { isLoading, data } = latest ? useGetLatestAtbatListByUmpire(id) : useGetAtbatListByUmpire(id);
    const sectionTitle = latest ? '최근 10 경기' : '시즌 전체';
    const outcomeType: OutcomeType = latest ? 'BallsAndStrikes' : 'CalledStrike';

    return (
        <UmpireZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <PlotContainer>
                {isLoading || !data ? (
                    <Loading size={60} />
                ) : (
                    <SidePlot atbats={data} outcomeType={outcomeType} hasTitle={false} latest={latest} />
                )}
            </PlotContainer>
        </UmpireZoneContainer>
    );
};
