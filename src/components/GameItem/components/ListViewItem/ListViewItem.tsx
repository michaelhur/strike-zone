import { ViewItemProps } from '@components/GameItem/GameItem';
import {
    ListViewContainer,
    ListViewDate,
    ListViewGameStatus,
    ListViewScore,
    ListViewScoreLine,
    ListViewScoreSectionContainer,
    ListViewTeamImage,
    ListViewTeamName,
    ListViewTeamSectionContainer,
} from '@components/GameItem/components/ListViewItem/ListViewItem.styles';

import { Team } from '@typings/team';

import { YYYYMMDD_to_YYMMDD } from '@utils/date';

const ListViewScoreSection = ({
    isFinal,
    homeScore,
    awayScore,
    date,
}: {
    isFinal: boolean;
    homeScore: number | null;
    awayScore: number | null;
    date: string;
}) => {
    const gameStatus = isFinal ? '종료' : '취소';

    return (
        <ListViewScoreSectionContainer>
            <ListViewDate>{date}</ListViewDate>
            <ListViewScoreLine>
                {isFinal ? (
                    <>
                        <ListViewScore>{homeScore}</ListViewScore>
                        <ListViewScore>:</ListViewScore>
                        <ListViewScore>{awayScore}</ListViewScore>
                    </>
                ) : (
                    <ListViewGameStatus>{gameStatus}</ListViewGameStatus>
                )}
            </ListViewScoreLine>
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
    const { id, date, home, away, isFinal, homeScore, awayScore } = game;
    const dateStr = YYYYMMDD_to_YYMMDD(date);

    return (
        <ListViewContainer key={id} onClick={onClickItem} cardCount={cardCount}>
            <ListViewTeamSection team={home!} homeOrAway={'Home'} />
            <ListViewScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} date={dateStr} />
            <ListViewTeamSection team={away!} homeOrAway={'Away'} />
        </ListViewContainer>
    );
};
