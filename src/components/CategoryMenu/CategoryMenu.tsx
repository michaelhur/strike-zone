import { Dispatch, SetStateAction } from 'react';

import { CardViewIcon } from '@components/@shared/Icon/CardViewIcon';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { ListViewIcon } from '@components/@shared/Icon/ListViewIcon';
import { TabInput } from '@components/@shared/TabInput/TabInput';
import {
    CategoryMenuContainer,
    CategoryMenuWrapper,
    ItemViewChangerWrapper,
} from '@components/CategoryMenu/CategoryMenu.styles';

import { itemViewType } from '@recoils/fixture/atom';

import { TabOptions } from '@typings/input';

interface CategoryMenuProps<T> {
    selectedMenu: T;
    setSelectedMenu: Dispatch<SetStateAction<T>>;
    tabOptions: TabOptions<T>[];
    size?: 'small' | 'large';
    viewType?: itemViewType;
    setViewType?: Dispatch<SetStateAction<itemViewType>>;
}

export const CategoryMenu = <T,>({
    selectedMenu,
    setSelectedMenu,
    tabOptions,
    size = 'large',
    viewType,
    setViewType,
}: CategoryMenuProps<T>) => {
    return (
        <CategoryMenuContainer>
            <CategoryMenuWrapper>
                <TabInput<T>
                    selected={selectedMenu}
                    setSelected={setSelectedMenu}
                    tabOptions={tabOptions}
                    size={size}
                />
            </CategoryMenuWrapper>
            {viewType && setViewType && (
                <ItemViewChangerWrapper>
                    <IconWrap style={{ padding: '0.25rem', cursor: 'pointer' }} onClick={() => setViewType('CARD')}>
                        <CardViewIcon
                            color={viewType === 'CARD' ? 'var(--primary500)' : 'var(--grey700)'}
                            hoverable={true}
                        />
                    </IconWrap>
                    <IconWrap style={{ padding: '0.25rem', cursor: 'pointer' }} onClick={() => setViewType('LIST')}>
                        <ListViewIcon
                            color={viewType === 'LIST' ? 'var(--primary500)' : 'var(--grey700)'}
                            hoverable={true}
                        />
                    </IconWrap>
                </ItemViewChangerWrapper>
            )}
        </CategoryMenuContainer>
    );
};
