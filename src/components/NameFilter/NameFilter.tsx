import { NameFilterButtonWrap, NameFilterContainer, NameFilterWrapper } from '@components/NameFilter/NameFilter.styles';

interface NameFilterProps {
    selected: string;
    onSelectName: (name: string) => void;
}

const AlphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

export const NameFilter = ({ selected, onSelectName }: NameFilterProps) => {
    return (
        <NameFilterContainer>
            <NameFilterWrapper>
                {AlphabetArray.map((alphabet) => {
                    return (
                        <NameFilterButtonWrap
                            key={alphabet}
                            className={selected === alphabet ? 'active' : ''}
                            onClick={() => onSelectName(alphabet)}
                        >
                            {alphabet}
                        </NameFilterButtonWrap>
                    );
                })}
            </NameFilterWrapper>
        </NameFilterContainer>
    );
};
