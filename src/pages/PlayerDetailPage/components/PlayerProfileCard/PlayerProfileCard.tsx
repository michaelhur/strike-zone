import { PlayerProfileCardContainer } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard.styles';
import { ProfileStatsSection } from '@pages/PlayerDetailPage/components/PlayerProfileCard/components/ProfileStatsSection/ProfileStatsSection';
import { ProfileTopSection } from '@pages/PlayerDetailPage/components/PlayerProfileCard/components/ProfileTopSection/ProfileTopSection';

interface PlayerProfileCardProps {
    slug: string;
}

export const PlayerProfileCard = ({ slug }: PlayerProfileCardProps) => {
    return (
        <PlayerProfileCardContainer>
            <ProfileTopSection slug={slug} />
            <ProfileStatsSection slug={slug} />
        </PlayerProfileCardContainer>
    );
};
