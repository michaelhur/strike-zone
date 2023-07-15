import { useEffect, useState } from 'react';

import { DYNAMIC_PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

import { useGetUmpire } from '@hooks/@query/umpire/useGetUmpire';

interface UmpireDetailMetaProps {
    id: number;
}

export const UmpireDetailMeta = ({ id }: UmpireDetailMetaProps) => {
    const [title, setTitle] = useState<string>(`심판 정보 | 스트라이크 존`);
    const [description, setDescription] = useState<string>('심판의 스트라이크 존을 확인해보세요!');
    const url = DYNAMIC_PATH.UMPIRE_DETAIL(id);

    const { isLoading, data: umpire } = useGetUmpire(id);

    useEffect(() => {
        if (!isLoading && umpire) {
            setTitle(`${umpire.name} | 스트라이크 존`);
            setDescription(`${umpire.name}의 스트라이크 존을 확인해보세요!`);
        }
    });

    return <MetaHeader title={title} description={description} url={url} />;
};
