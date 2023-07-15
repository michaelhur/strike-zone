import { PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

export const UmpireListMeta = () => {
    const title = `심판 리스트 | 스트라이크 존`;
    const description = `심판별 스트라이크 존을 확인해보세요`;
    const url = PATH.UMPIRE_LIST;

    return <MetaHeader title={title} description={description} url={url} />;
};
