import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { plansHandler } from './server/plansHandler'

// Em dev, monta o MESMO handler do BFF no middleware do Vite, para que `npm run dev`
// sozinho sirva front + /api/plans. As envs (API_BASE_URL, LANDING_API_TOKEN) ficam
// só no processo do servidor — sem prefixo VITE_, nunca entram no bundle do browser.
function bffDev(env: Record<string, string>): PluginOption {
  return {
    name: 'bff-plans-dev',
    configureServer(server) {
      process.env.API_BASE_URL ??= env.API_BASE_URL
      process.env.LANDING_API_TOKEN ??= env.LANDING_API_TOKEN
      server.middlewares.use('/api/plans', (req, res) => {
        void plansHandler(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), bffDev(env)],
  }
})
