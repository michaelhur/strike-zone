import { Dispatch, SetStateAction } from 'react';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { StyledTab, TabInputList, TabInputWrapper } from '@components/@shared/TabInput/TabInput.styles';

import { TabOptions } from '@typings/input';

interface TabInputProps<T> {
    selected: T;
    setSelected: Dispatch<SetStateAction<T>>;
    tabOptions: TabOptions<T>[];
    size: 'small' | 'large';
}

export const TabInput = <T,>({ selected, setSelected, tabOptions, size }: TabInputProps<T>) => {
    return (
        <TabInputWrapper>
            <TabInputList>
                {tabOptions.map(({ label, value, iconComponent }) => {
                    return (
                        <StyledTab
                            key={`${value}` as const}
                            className={selected === value ? 'active' : ''}
                            size={size}
                            onClick={() => setSelected(value)}
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
