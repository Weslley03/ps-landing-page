# ps-landing-page

<img width="1186" height="617" alt="Captura de tela de 2026-06-22 13-16-23" src="https://github.com/user-attachments/assets/016a3685-a283-4b60-a4e1-25b498ef4aa2" />
<img width="983" height="644" alt="Captura de tela de 2026-06-22 13-16-53" src="https://github.com/user-attachments/assets/6a3fdb58-b8d1-431e-8993-151cbe467730" />

Protótipo da landing page do **player-statistics** - a plataforma que transforma a
pelada de fut7 em competição de verdade (ranking, overall, tiers, dream team,
fantasy e resenha turbinada por IA).

Construída em **Vite + React + TypeScript**, seguindo rigorosamente o
`player-statistics/DESIGN_SYSTEM.md` (dark-first, cor só como semântica, cards
translúcidos, fontes do sistema).

## Stack e convenções

- Vite + React 19 + TypeScript, **CSS Modules** por componente.
- Tokens do design system em `src/index.css` (`:root`).


- Ícones via **Lucide React**.
- Lint/Prettier alinhados às regras do monorepo: aspas simples, sem ponto e
  vírgula, `trailingComma: all`, `printWidth: 180` (`.prettierrc` +
  `eslint-plugin-prettier`).

## Scripts

```bash
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # typecheck + build de produção
npm run lint     # ESLint + Prettier (--fix)
npm run format   # Prettier --write
npm run preview  # serve o build de produção
```

## Estrutura

```
src/
  data/mock.ts
  components/
    ui/                        # Section, SectionHeader, TierBadge, Wordmark
    mockups/                   # PlayerCard, MiniLeaderboard, DreamTeamField, RadarMini, ShareCardMock
    landing/                   # uma seção por arquivo (Header, Hero, Features, Pricing, ...)
  App.tsx                      # composição das seções
  index.css                    # tokens do design system + base global
```
