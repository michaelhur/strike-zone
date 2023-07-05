import { useRecoilValue } from 'recoil';

import InningPlot from '@components/InningPlot/InningPlot';
import { Loading } from '@components/Loading/Loading';
import SidePlot from '@components/SidePlot/SidePlot';
import SummaryPlot from '@components/SummaryPlot/SummaryPlot';

import { useGetAtbat } from '@hooks/@query/atbat/useGetAtbat';

import { PlotContainer } from '@pages/GameDetailPage/GameDetailPage.styles';

import { zoneViewTypeState } from '@recoils/game/atom';

interface ZoneTypeProps {
    slug: string;
}

export const ZoneType = ({ slug }: ZoneTypeProps) => {
    const { isLoading, data } = useGetAtbat(slug);
    const zoneViewType = useRecoilValue(zoneViewTypeState);
    const inningList = data ? [...new Set(data.flatMap((atbat) => atbat.inning))].sort() : [];

    if (isLoading) return <Loading size={60} />;

    switch (zoneViewType) {
        case 'SIDE':
            return (
                <PlotContainer>
                    <SidePlot atbats={data!} outcomeType={'All'} />
                    <SidePlot atbats={data!} outcomeType={'CalledStrike'} />
                    <SidePlot atbats={data!} outcomeType={'Ball'} />
                </PlotContainer>
            );
        case 'INNING':
            return (
                <PlotContainer>
                    {inningList.map((inning) => (
                        <InningPlot key={inning} atbats={data!} inning={inning} />
                    ))}
                </PlotContainer>
            );
        default:
            return (
                <PlotContainer>
                    <SummaryPlot atbats={data!} sideType={'All'} />
                    <SummaryPlot atbats={data!} sideType={'Home'} />
                    <SummaryPlot atbats={data!} sideType={'Away'} />
                </PlotContainer>
            );
    }
};
