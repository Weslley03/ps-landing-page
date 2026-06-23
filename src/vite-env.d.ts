/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL da conta de demonstração da plataforma (vide .env). */
  readonly VITE_PLATFORM_DEMO_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
