/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MLB_BASE_URL: string;
    readonly VITE_SUPABASE_BASE_URL: string;
    readonly VITE_SUPABASE_API_URL: string;
    readonly VITE_SUPABASE_KEY: string;
    readonly DEV: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
