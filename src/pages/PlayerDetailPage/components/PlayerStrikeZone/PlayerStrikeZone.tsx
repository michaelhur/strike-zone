import { SectionTitleWrapper } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';

import { useGetAtbatsByPlayerSlug } from '@hooks/@query/player/useGetAtbatsByPlayerSlug';
import { useGetLatestAtbatsByPlayerSlug } from '@hooks/@query/player/useGetLatestAtbatsByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { PlayerStrikeZoneContainer } from '@pages/PlayerDetailPage/components/PlayerStrikeZone/PlayerStrikeZone.styles';
import { PlayerZoneType } from '@pages/PlayerDetailPage/components/PlayerZoneType/PlayerZoneType';

import { OutcomeType, PlotTypes } from '@typings/atbat';

interface PlayerStrikeZoneProps {
    slug: string;
    latest: boolean;
}

const PlayerStrikeZone = ({ slug, latest }: PlayerStrikeZoneProps) => {
    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug!);
    const positionType = player?.positionType;

    const { isLoading: isLoadingAtbats, data: atbats } = latest
        ? useGetLatestAtbatsByPlayerSlug(slug, positionType!, {
              enabled: !!positionType,
          })
        : useGetAtbatsByPlayerSlug(slug, positionType!, {
              enabled: !!positionType,
          });

    const sectionTitle = latest ? '최근 5경기' : '시즌 전체';
    const plotType: PlotTypes = latest ? 'zone' : 'heatmap';
    const outcomeType: OutcomeType = latest ? 'BallsAndStrikes' : 'CalledStrike';

    return (
        <PlayerStrikeZoneContainer>
            <SectionTitleWrapper>
                <h2>{sectionTitle}</h2>
            </SectionTitleWrapper>
            {isLoadingAtbats || !atbats ? (
                <Loading size={60} />
            ) : (
                <PlayerZoneType
                    atbats={atbats}
                    positionType={positionType!}
                    plotType={plotType}
                    outcomeType={outcomeType}
                />
            )}
        </PlayerStrikeZoneContainer>
    );
};

export default PlayerStrikeZone;
