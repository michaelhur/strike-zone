import { PATH } from '@constants/routes';

import { MetaHeader } from '@components/MetaHeader/MetaHeader';

interface FixtureMetaProps {
    dateStr: string;
}

export const FixtureMeta = ({ dateStr }: FixtureMetaProps) => {
    const title = `${dateStr} 경기 일정 | 스크라이트 존`;
    const description = `${dateStr} 경기 일정 | 스크라이트 존`;
    const url = `${PATH.FIXTURE}`;

    return <MetaHeader title={title} description={description} url={url} />;
};
