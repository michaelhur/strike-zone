import { Dispatch, SetStateAction } from 'react';

import { ArrowLeftIcon, ArrowRightIcon, ThreeDotsIcon } from '@components/@shared/Icon';

import { PaginationButtonWrap, PaginationContainer, PaginationWrapper } from './Pagination.styles';

interface PaginationProps {
    currentPage: number;
    totalPage: number;
    onClickPage: Dispatch<SetStateAction<number>>;
}

const getPageToShow = (currentPage: number, totalPage: number): Array<number | 'before' | 'after'> => {
    if (totalPage <= 5) return Array.from({ length: totalPage }, (_, i) => i + 1);

    if (currentPage <= 2) return [1, 2, 3, 'after', totalPage];
    if (currentPage >= totalPage - 1) return [1, 'before', totalPage - 2, totalPage - 1, totalPage];

    return [1, 'before', currentPage - 1, currentPage, currentPage + 1, 'after', totalPage];
};

export const Pagination = ({ currentPage, totalPage, onClickPage }: PaginationProps) => {
    const pages = getPageToShow(currentPage, totalPage);

    return (
        <PaginationContainer>
            <PaginationWrapper>
                <ArrowLeftIcon
                    color={'var(--grey700)'}
                    hoverable={true}
                    onClickIcon={currentPage > 1 ? () => onClickPage(currentPage - 1) : () => onClickPage(1)}
                />
                {pages.map((page) => {
                    const isNumber = page !== 'before' && page !== 'after';
                    const oncClickPageButton = () => {
                        if (isNumber) return onClickPage(page);
                        else return;
                    };
                    return (
                        <PaginationButtonWrap
                            key={page}
                            className={currentPage === page ? 'active' : ''}
                            onClick={oncClickPageButton}
                        >
                            {isNumber ? page : <ThreeDotsIcon hoverable={false} />}
                        </PaginationButtonWrap>
                    );
                })}
                <ArrowRightIcon
                    color={'var(--grey700)'}
                    hoverable={true}
                    onClickIcon={
                        currentPage < totalPage ? () => onClickPage(currentPage + 1) : () => onClickPage(totalPage)
                    }
                />
            </PaginationWrapper>
        </PaginationContainer>
    );
};
