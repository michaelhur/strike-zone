import { useEffect, useState } from 'react';

import { DYNAMIC_PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

import { useGetTeam } from '@hooks/@query/team/useGetTeam';

export const TeamDetailHelmet = ({ teamId }: { teamId: number }) => {
    const { isLoading, data } = useGetTeam(teamId);
    const [title, setTitle] = useState<string>('팀 정보 | 스트라이크 존');
    const [description, setDescription] = useState<string>('팀 정보 | 스트라이크 존');
    const url = DYNAMIC_PATH.TEAM_DETAIL(teamId);

    useEffect(() => {
        if (!isLoading && data) {
            setTitle(`${data!.name} | 스트라이크 존`);
            setDescription(`${data!.name}의 스트라이크 존을 확인해보세요!`);
        }
    }, [isLoading, data]);

    return <MetaHeader title={title} description={description} url={url} />;
};
