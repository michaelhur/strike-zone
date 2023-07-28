import { ViewItemProps } from '@components/GameItem/GameItem';
import {
    ListViewContainer,
    ListViewGameStatus,
    ListViewScore,
    ListViewScoreLine,
    ListViewScoreSectionContainer,
    ListViewTeamImage,
    ListViewTeamName,
    ListViewTeamSectionContainer,
} from '@components/GameItem/components/ListViewItem/ListViewItem.styles';

import { Team } from '@typings/team';

const ListViewScoreSection = ({
    isFinal,
    homeScore,
    awayScore,
}: {
    isFinal: boolean;
    homeScore: number | null;
    awayScore: number | null;
}) => {
    const gameStatus = isFinal ? '종료' : '취소';

    return (
        <ListViewScoreSectionContainer>
            {isFinal && (
                <ListViewScoreLine>
                    <ListViewScore>{homeScore}</ListViewScore>
                    <ListViewScore>:</ListViewScore>
                    <ListViewScore>{awayScore}</ListViewScore>
                </ListViewScoreLine>
            )}
            <ListViewGameStatus>{gameStatus}</ListViewGameStatus>
        </ListViewScoreSectionContainer>
    );
};

const ListViewTeamSection = ({ team, homeOrAway }: { team: Team; homeOrAway: 'Home' | 'Away' }) => {
    const { franchiseName, teamName, abbreviation, imageUrl } = team;

    return (
        <ListViewTeamSectionContainer homeOrAway={homeOrAway}>
            <ListViewTeamName>
                <span>{franchiseName}</span>
                <span>{teamName}</span>
            </ListViewTeamName>
            <ListViewTeamImage>
                <img src={imageUrl} alt={abbreviation} />
            </ListViewTeamImage>
        </ListViewTeamSectionContainer>
    );
};

export const ListViewItem = ({ game, onClickItem, cardCount }: ViewItemProps) => {
    const { id, home, away, isFinal, homeScore, awayScore } = game;

    return (
        <ListViewContainer key={id} onClick={onClickItem} cardCount={cardCount}>
            <ListViewTeamSection team={home!} homeOrAway={'Home'} />
            <ListViewScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} />
            <ListViewTeamSection team={away!} homeOrAway={'Away'} />
        </ListViewContainer>
    );
};
