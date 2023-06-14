import React from 'react';
import { useNavigate } from 'react-router-dom';

import { gameList } from '@mocks/data/game';

import { MatchCardProps } from '@components/MatchCard/MatchCard';
import {
    ListViewContainer,
    ListViewGameStatus,
    ListViewScore,
    ListViewScoreLine,
    ListViewScoreSectionContainer,
    ListViewTeamImage,
    ListViewTeamName,
    ListViewTeamSectionContainer,
} from '@components/MatchListItem.styles';

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
    const gameStatus = isFinal ? 'Final' : 'Postponed';

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

const MatchListItem = ({ game }: MatchCardProps) => {
    const navigate = useNavigate();
    const { id, slug, date, home, away, isFinal, homeScore, awayScore } = game;
    const onClickMatchCard = () => {
        if (isFinal) navigate(`/games/${slug}`);
        else alert('취소된 경기의 정보는 열람할 수 없습니다.');
    };

    return (
        <ListViewContainer key={id} onClick={onClickMatchCard}>
            <ListViewTeamSection team={home!} homeOrAway={'Home'} />
            <ListViewScoreSection isFinal={isFinal!} homeScore={homeScore} awayScore={awayScore} />
            <ListViewTeamSection team={away!} homeOrAway={'Away'} />
        </ListViewContainer>
    );
};

export default MatchListItem;
