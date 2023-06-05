/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MLB_BASE_URL: string;
    readonly SUPABASE_BASE_URL: string;
    readonly SUPABASE_KEY: string;
    readonly DEV: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
