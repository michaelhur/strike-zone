import GameItem from '@components/GameCard/GameItem';
import { ContainerTitleWrapper, GameListContainer, GameListSection } from '@components/GameList/GameList.styles';

import { itemViewType } from '@recoils/schedule/atom';

import { Game } from '@typings/game';

interface GameListProps {
    games: Game[];
    itemViewType: itemViewType;
    cardCount: number;
    sectionLabel: string;
}

export const GameList = ({ games, itemViewType, cardCount, sectionLabel }: GameListProps) => {
    return (
        <GameListSection>
            {sectionLabel && (
                <ContainerTitleWrapper>
                    <h2>{sectionLabel}</h2>
                </ContainerTitleWrapper>
            )}
            <GameListContainer>
                {games &&
                    games.map((game) => {
                        return <GameItem key={game.id} game={game} itemViewType={itemViewType} cardCount={cardCount} />;
                    })}
            </GameListContainer>
        </GameListSection>
    );
};
