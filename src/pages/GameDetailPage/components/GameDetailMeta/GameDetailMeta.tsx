import { DYNAMIC_PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

import { YYMMDD_to_locale } from '@utils/date';

interface GameDetailMetaProps {
    slug: string;
}

export const GameDetailMeta = ({ slug }: GameDetailMetaProps) => {
    const gameSlugToMeta = (slug: string): string[] => {
        const [date, home, away, _] = slug.split('-');
        const dateStr = YYMMDD_to_locale(date);
        return [dateStr, home, away];
    };

    const [dateStr, home, away] = gameSlugToMeta(slug);
    const title = `${dateStr} ${home} vs ${away} | 스크라이트 존`;
    const description = `${dateStr} ${home} vs ${away} 경기의 스트라이크 존을 확인해보세요!`;
    const url = `${DYNAMIC_PATH.GAME_DETAIL(slug)}`;

    return <MetaHeader title={title} description={description} url={url} />;
};
