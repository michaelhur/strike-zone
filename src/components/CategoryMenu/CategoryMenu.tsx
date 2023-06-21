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
    selectedCategory: T1;
    setSelectedCategory: (T1) => void;
    categoryOptions: TabOptions<T1>[];
    size?: 'small' | 'large';
    selectedViewType?: T2;
    setViewType?: (T2) => void;
    viewTypeOptions?: ViewTypeOptions<T2>[];
}

export const CategoryMenu = <T1, T2>({
    selectedCategory,
    setSelectedCategory,
    categoryOptions,
    size = 'large',
    selectedViewType,
    setViewType,
    viewTypeOptions,
}: CategoryMenuProps<T1, T2>) => {
    return (
        <CategoryMenuContainer>
            <CategoryMenuWrapper>
                <TabInput<T1>
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                    tabOptions={categoryOptions}
                    size={size}
                />
            </CategoryMenuWrapper>
            {selectedViewType && setViewType && viewTypeOptions && (
                <ItemViewChangerWrapper>
                    {viewTypeOptions.map((viewType) => {
                        const isActive = selectedViewType === viewType.value;
                        return (
                            <ItemViewIconWrap
                                key={viewType.key}
                                isActive={isActive}
                                onClick={() => setViewType(viewType.value)}
                            >
                                {viewType.iconComponent}
                            </ItemViewIconWrap>
                        );
                    })}
                </ItemViewChangerWrapper>
            )}
        </CategoryMenuContainer>
    );
};
