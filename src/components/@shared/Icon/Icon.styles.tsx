import styled from '@emotion/styled';

interface SVGIconProps {
    hoverable: boolean;
    color: string;
}

export const SVGIcon = styled.svg<SVGIconProps>`
    &.active,
    :active {
        fill: var(--primary500);
    }

    &:hover {
        cursor: ${({ hoverable }) => (hoverable ? 'pointer' : 'unset')};
        & path {
            fill: ${({ hoverable, color }) => (hoverable ? 'var(--primary500)' : color)};
        }
    }
`;

export const IconWrap = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

interface IconWrapWithBorderProps {
    isDisabled: boolean;
}

export const IconWrapWithBorder = styled(IconWrap)(
    {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '0.25rem',
        borderCollapse: 'collapse',
    },
    ({ isDisabled }: IconWrapWithBorderProps) => ({
        borderColor: isDisabled ? 'var(--grey300)' : 'var(--grey900)',

        '&:hover': {
            background: isDisabled ? 'var(--grey200)' : 'var(--primary100)',
        },
    }),
);
