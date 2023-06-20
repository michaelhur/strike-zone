import { Dispatch, SetStateAction } from 'react';

import { SetterOrUpdater } from 'recoil';

import { TabInput } from '@components/@shared/TabInput/TabInput';
import {
    CategoryMenuContainer,
    CategoryMenuWrapper,
    ItemViewChangerWrapper,
    ItemViewIconWrap,
} from '@components/CategoryMenu/CategoryMenu.styles';

import { TabOptions, ViewTypeOptions } from '@typings/input';

interface CategoryMenuProps<T1, T2> {
    selectedMenu: T1;
    setSelectedMenu: Dispatch<SetStateAction<T1>> | SetterOrUpdater<T1>;
    tabOptions: TabOptions<T1>[];
    size?: 'small' | 'large';
    selectedViewType?: T2;
    setViewType?: Dispatch<SetStateAction<T2>> | SetterOrUpdater<T2>;
    viewTypeOptions?: ViewTypeOptions<T2>[];
}

export const CategoryMenu = <T1, T2>({
    selectedMenu,
    setSelectedMenu,
    tabOptions,
    size = 'large',
    selectedViewType,
    setViewType,
    viewTypeOptions,
}: CategoryMenuProps<T1, T2>) => {
    return (
        <CategoryMenuContainer>
            <CategoryMenuWrapper>
                <TabInput<T1>
                    selected={selectedMenu}
                    setSelected={setSelectedMenu}
                    tabOptions={tabOptions}
                    size={size}
                />
            </CategoryMenuWrapper>
            {selectedViewType && setViewType && viewTypeOptions && (
                <ItemViewChangerWrapper>
                    {viewTypeOptions.map((viewType) => {
                        return (
                            <ItemViewIconWrap key={viewType.key} onClick={() => setViewType(viewType.value)}>
                                {viewType.iconComponent}
                            </ItemViewIconWrap>
                        );
                    })}
                </ItemViewChangerWrapper>
            )}
        </CategoryMenuContainer>
    );
};
