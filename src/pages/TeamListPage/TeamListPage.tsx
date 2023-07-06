import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { leagueTabOptions } from '@constants/menu';
import { DYNAMIC_PATH } from '@constants/routes';

import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';
import { Loading } from '@components/Loading/Loading';

import { useGetTeamList } from '@hooks/@query/team/useGetTeamList';

import { TeamListPageContainer } from '@pages/TeamListPage/TeamListPage.styles';
import { TeamList } from '@pages/TeamListPage/components/TeamList/TeamList';

import { LeagueType } from '@typings/league';

const TeamListPage = () => {
    const navigate = useNavigate();
    const [leagueId, setLeagueId] = useState<LeagueType>('ALL');

    const onSelectLeagueId = (selectedLeague: LeagueType) => {
        setLeagueId(selectedLeague);
    };

    const onClickTeam = (id: number) => {
        sessionStorage.setItem('teamList_leagueId', JSON.stringify(leagueId));
        navigate(`${DYNAMIC_PATH.TEAM_DETAIL(id)}`);
    };

    const { isLoading, data } = leagueId === 'ALL' ? useGetTeamList() : useGetTeamList(leagueId);

    useEffect(() => {
        const handlePopState = () => {
            const league = sessionStorage.getItem('teamList_leagueId');
            if (league) {
                setLeagueId(JSON.parse(league));
                sessionStorage.removeItem('teamList_leagueId');
            }
        };
        handlePopState();
    }, []);

    return (
        <TeamListPageContainer>
            <CategoryMenu<LeagueType, unknown>
                selectedCategory={leagueId}
                setSelectedCategory={onSelectLeagueId}
                categoryOptions={leagueTabOptions}
            />
            {isLoading ? <Loading size={60} /> : <TeamList teams={data!} onClickTeam={onClickTeam} />}
        </TeamListPageContainer>
    );
};

export default TeamListPage;
