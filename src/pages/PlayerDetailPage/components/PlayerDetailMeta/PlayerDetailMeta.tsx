import { DYNAMIC_PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

import { capitalizeName } from '@utils/player';

interface PlayerDetailMetaProps {
    slug: string;
}

export const PlayerDetailMeta = ({ slug }: PlayerDetailMetaProps) => {
    const playerName = slug!.split('-').slice(0, -1).map(capitalizeName).join(' ');
    const title = `${playerName} | 스트라이크 존`;
    const description = `${playerName}의 스트라이크 존을 확인해보세요!`;
    const url = `${DYNAMIC_PATH.PLAYER_DETAIL(slug)}`;

    return <MetaHeader title={title} description={description} url={url} />;
};
