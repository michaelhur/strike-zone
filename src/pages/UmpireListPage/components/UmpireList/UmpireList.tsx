import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';

import { Loading } from '@components/Loading/Loading';
import { Pagination } from '@components/Pagination/Pagination';

import { useGetUmpireList } from '@hooks/@query/umpire/useGetUmpireList';

import { UmpireListContainer } from '@pages/UmpireListPage/components/UmpireList/UmpireList.styles';
import { UmpireListItem } from '@pages/UmpireListPage/components/UmpireListItem/UmpireListItem';

export const UmpireList = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState<number>(1);
    const { isLoading, data } = useGetUmpireList(page);

    const onClickUmpireItem = (id: number) => navigate(`${DYNAMIC_PATH.UMPIRE_DETAIL(id)}`);
    const onClickPage = (page: number) => setPage(page);

    return (
        <>
            <UmpireListContainer>
                {isLoading || !data ? (
                    <Loading size={60} />
                ) : (
                    data.umpires.map((umpire) => (
                        <UmpireListItem key={umpire.id} umpire={umpire} onClickItem={onClickUmpireItem} />
                    ))
                )}
            </UmpireListContainer>
            {data && data.count > 20 && (
                <Pagination currentPage={page} totalPage={Math.ceil(data.count / 20)} onClickPage={onClickPage} />
            )}
        </>
    );
};
