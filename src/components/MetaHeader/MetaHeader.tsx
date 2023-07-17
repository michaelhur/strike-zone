import { Helmet } from 'react-helmet-async';

interface MetaHeaderProps {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
}

export const MetaHeader = ({ title, description, url, imageUrl }: MetaHeaderProps) => {
    const baseUrl = import.meta.env.VITE_DOMAIN_URL;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${baseUrl}${url}`} />
            {imageUrl ? (
                <meta property="og:imageUrl" content={imageUrl} />
            ) : (
                <meta
                    property="og:imageUrl"
                    content={`https://tjbrktyhlzfcdujyevju.supabase.co/storage/v1/object/public/logo/sz_logo.svg`}
                />
            )}
            <link rel="canonical" href={`${baseUrl}${url}`} />
        </Helmet>
    );
};
