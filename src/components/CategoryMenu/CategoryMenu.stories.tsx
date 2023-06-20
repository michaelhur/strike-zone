import { useState } from 'react';

import { itemViewTypeOptions } from '@constants/menu';
import { Meta, Story } from '@storybook/react';

import { HomeIcon, UmpireIcon } from '@components/@shared/Icon';
import { CategoryMenu } from '@components/CategoryMenu/CategoryMenu';

import { TabOptions } from '@typings/input';

export default {
    title: 'Components/CategoryMenu',
    component: CategoryMenu,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '500px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof CategoryMenu>;

const Template: Story<typeof CategoryMenu> = <T1, T2>(args) => {
    const [category, setCategory] = useState<T1>(args.selectedCategory);

    return <CategoryMenu<T1, T2> {...args} selectedCategory={category} setSelectedCategory={setCategory} />;
};

const TemplateWithViewType: Story<typeof CategoryMenu> = <T1, T2>(args) => {
    const [category, setCategory] = useState<T1>(args.selectedCategory);
    const [viewType, setViewType] = useState<T2>(args.selectedViewType);

    return (
        <CategoryMenu<T1, T2>
            {...args}
            selectedCategory={category}
            setSelectedCategory={setCategory}
            selectedViewType={viewType}
            setViewType={setViewType}
        />
    );
};

const sampleCategoryOptions: TabOptions<string>[] = [
    {
        label: 'Category 1',
        value: 'category1',
    },
    {
        label: 'Category 2',
        value: 'category2',
    },
];

const sampleCategoryWithIconOptions: TabOptions<string>[] = [
    {
        label: 'Category 1',
        value: 'category1',
        iconComponent: <HomeIcon />,
    },
    {
        label: 'Category 2',
        value: 'category2',
        iconComponent: <UmpireIcon />,
    },
];

export const Categories = Template.bind({});
Categories.args = {
    selectedCategory: sampleCategoryOptions[0],
    categoryOptions: sampleCategoryOptions,
};

export const CategoriesWithIcon = Template.bind({});
CategoriesWithIcon.args = {
    selectedCategory: sampleCategoryWithIconOptions[0],
    categoryOptions: sampleCategoryWithIconOptions,
};

export const CategoriesWithViewType = TemplateWithViewType.bind({});
CategoriesWithViewType.args = {
    selectedCategory: sampleCategoryOptions[0],
    categoryOptions: sampleCategoryOptions,
    selectedViewType: 'CARD',
    viewTypeOptions: itemViewTypeOptions,
};
