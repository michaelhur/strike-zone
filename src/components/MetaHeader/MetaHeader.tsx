import { Helmet } from 'react-helmet-async';

interface MetaHeaderProps {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
}

export const MetaHeader = ({ title, description, url, imageUrl }: MetaHeaderProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {imageUrl && <meta property="og:imageUrl" content={imageUrl} />}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
