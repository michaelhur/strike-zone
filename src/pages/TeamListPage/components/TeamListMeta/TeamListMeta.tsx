import { PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

export const TeamListMeta = () => {
    const title = `팀 리스트 | 스트라이크 존`;
    const description = `팀별 스트라이크 존을 확인해보세요`;
    const url = PATH.TEAM_LIST;

    return <MetaHeader title={title} description={description} url={url} />;
};
