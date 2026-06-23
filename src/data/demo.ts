/**
 * URL da conta de demonstração da plataforma, lida da env `VITE_PLATFORM_DEMO_URL`.
 * é uma conta de demo compartilhada (credenciais no próprio link), pensada para
 * que visitantes vejam o produto por dentro. fica vazia quando a env não está
 * definida - os CTAs de demo devem se esconder nesse caso.
 */
export const PLATFORM_DEMO_URL: string = import.meta.env.VITE_PLATFORM_DEMO_URL ?? ''
