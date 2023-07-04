import { useRecoilValue } from 'recoil';

import { Loading } from '@components/Loading/Loading';

import { useGetAtbat } from '@hooks/@query/atbat/useGetAtbat';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import InningPlot from '@pages/GameDetailPage/components/InningPlot/InningPlot';

import { zoneViewTypeState } from '@recoils/game/atom';

interface ZoneTypeProps {
    slug: string;
}

export const ZoneType = ({ slug }: ZoneTypeProps) => {
    const { isLoading, data } = useGetAtbat(slug);
    const zoneViewType = useRecoilValue(zoneViewTypeState);
    const inningList = data ? [...new Set(data.flatMap((atbat) => atbat.inning))] : [];

    if (isLoading) return <Loading size={60} />;

    switch (zoneViewType) {
        case 'INNING':
            return (
                <>
                    {inningList.map((inning) => (
                        <InningPlot key={inning} atbats={data!} inning={inning} />
                    ))}
                </>
            );
        default:
            return (
                <StrikeZoneList>
                    Default
                    {/*<StrikeZone atbats={data!} outcomeType={'All'} sideType={sideType} plotType={'zone'} radius={24} />*/}
                    {/*<StrikeZone*/}
                    {/*    atbats={data!}*/}
                    {/*    outcomeType={'BallsAndStrikes'}*/}
                    {/*    sideType={sideType}*/}
                    {/*    plotType={'zone'}*/}
                    {/*    radius={24}*/}
                    {/*/>*/}
                    {/*<StrikeZone atbats={data!} outcomeType={'Ball'} sideType={sideType} plotType={'zone'} radius={24} />*/}
                    {/*<StrikeZone*/}
                    {/*    atbats={data!}*/}
                    {/*    outcomeType={'CalledStrike'}*/}
                    {/*    sideType={sideType}*/}
                    {/*    plotType={'zone'}*/}
                    {/*    radius={24}*/}
                    {/*/>*/}
                </StrikeZoneList>
            );
    }
};
