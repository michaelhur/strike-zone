import { PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

export const HomeMeta = () => {
    const title = '스트라이크 존';
    const description = '경기별, 팀별, 선수별 스트라이크 존을 확인해보세요!';
    const url = `${PATH.HOME}`;

    return <MetaHeader title={title} description={description} url={url} />;
};
