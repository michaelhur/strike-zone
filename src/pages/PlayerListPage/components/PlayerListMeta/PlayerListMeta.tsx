import { PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

import { PositionType, PositionTypeEnum } from '@typings/player';

interface PlayerListMetaProps {
    positionType: PositionType;
}

export const PlayerListMeta = ({ positionType }: PlayerListMetaProps) => {
    const position = !positionType || positionType === 'ALL' ? '선수' : PositionTypeEnum[positionType];
    const title = `${position} 리스트 | 스트라이크 존`;
    const description = `선수별 스트라이크 존을 확인해보세요`;
    const url = `${PATH.PLAYER_LIST}`;

    return <MetaHeader title={title} description={description} url={url} />;
};
