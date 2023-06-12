import { Dispatch, SetStateAction } from 'react';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { StyledTab, TabInputList, TabInputWrapper } from '@components/@shared/TabInput/TabInput.styles';

import { TabOptions } from '@typings/input';

interface TabInputProps<T> {
    selected: T[];
    setSelected: Dispatch<SetStateAction<T[]>>;
    onClickTab: (value: T, selected: T[], setSelected: Dispatch<SetStateAction<T[]>>, maxSelect?: number) => void;
    tabOptions: TabOptions<T>[];
    size: 'small' | 'large';
    maxSelect?: number;
}

export const TabInput = <T,>({ selected, setSelected, onClickTab, tabOptions, size, maxSelect }: TabInputProps<T>) => {
    return (
        <TabInputWrapper>
            <TabInputList>
                {tabOptions.map(({ label, value, iconComponent }) => {
                    return (
                        <StyledTab
                            key={`${value}` as const}
                            className={selected.includes(value) ? 'active' : ''}
                            size={size}
                            onClick={() => onClickTab(value, selected, setSelected, maxSelect)}
                        >
                            {iconComponent && <IconWrap>{iconComponent}</IconWrap>}
                            {label}
                        </StyledTab>
                    );
                })}
            </TabInputList>
        </TabInputWrapper>
    );
};
