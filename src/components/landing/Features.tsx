import type { ReactNode } from 'react'
import {
  Gauge,
  Radar,
  GitCompareArrows,
  Trophy,
  Goal,
  HandHeart,
  LayoutGrid,
  ClipboardList,
  Vote,
  Save,
  Mic,
  MessagesSquare,
  Gamepad2,
  Medal,
  Share2,
  ArrowRight,
} from 'lucide-react'
import { SAMPLE_PLAYERS, TIERS, TOP_SCORERS, TOP_ASSISTS, PRESS_ROOM, FAN_QUOTES, FANTASY_RANKING, MOST_PICKED, SEASON_AWARDS, tierById } from '../../data/mock'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { PlayerCard } from '../mockups/PlayerCard'
import { MiniLeaderboard } from '../mockups/MiniLeaderboard'
import { DreamTeamField } from '../mockups/DreamTeamField'
import { RadarMini } from '../mockups/RadarMini'
import { ShareCardMock } from '../mockups/ShareCardMock'
import type { LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'
import styles from './Features.module.css'

interface TileProps {
  icon: LucideIcon
  title: string
  /** frase curta de destaque que resume e chama atenção pra funcionalidade. */
  summary: string
  text: string
  children?: ReactNode
  span?: 1 | 2 | 3
  highlight?: boolean
  /** Troca o ícone pelo selo "IA" (recursos de resenha gerada por IA). */
  ai?: boolean
}

/** Tile de funcionalidade: ícone/selo + título + sumário + copy + mockup opcional. */
function Tile({ icon: Icon, title, summary, text, children, span = 1, highlight = false, ai = false }: TileProps) {
  return (
    <article className={styles.tile} data-span={span} data-highlight={highlight}>
      {ai ? (
        <span className={styles.aiPill}>
          <span className={styles.aiDot} /> IA
        </span>
      ) : (
        <span className={styles.tileIcon}>
          <Icon size={18} />
        </span>
      )}
      <h4 className={styles.tileTitle}>{title}</h4>
      <p className={styles.tileSummary}>{summary}</p>
      <p className={styles.tileText}>{text}</p>
      {children && <div className={styles.tileVisual}>{children}</div>}
    </article>
  )
}

interface BlockProps {
  id: string
  letter: string
  title: string
  children: ReactNode
}

function Block({ id, letter, title, children }: BlockProps) {
  return (
    <div id={id} className={styles.block}>
      <div className={styles.blockHead}>
        <span className={styles.letter}>{letter}</span>
        <h3 className={styles.blockTitle}>{title}</h3>
      </div>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}

/** Itens do sumário. Os dois flagship abrem destacados; o resto, em chips. */
const FLAGSHIPS = [
  {
    href: '#squad-league',
    badge: 'Fantasy · Cartola',
    icon: Gamepad2,
    title: 'Squad League',
    text: 'A Cartola da sua pelada: escale jogadores do próprio grupo, pontue pelo desempenho real das partidas e dispute o ranking de fantasy.',
  },
  {
    href: '#resenha-ia',
    badge: 'IA',
    ai: true,
    icon: Mic,
    title: 'Resenha turbinada por IA',
    text: 'Sala de imprensa com coletiva pós-jogo e declarações da torcida geradas por IA. A zoeira data-driven que dá vida à competição.',
  },
] as const

const OTHER_GROUPS = [
  { href: '#identidade', label: 'Identidade e evolução' },
  { href: '#ranking', label: 'Ranking e disputa' },
  { href: '#partidas', label: 'Partidas e dia de jogo' },
  { href: '#temporadas', label: 'Temporadas e premiação' },
  { href: '#compartilhamento', label: 'Compartilhamento viral' },
] as const

/** Sumário das funcionalidades: destaca os dois diferenciais e indexa o resto. */
function FeatureSummary() {
  return (
    <div className={styles.summary}>
      <div className={styles.flagships}>
        {FLAGSHIPS.map((f) => (
          <a key={f.href} href={f.href} className={styles.flagship}>
            {'ai' in f && f.ai ? (
              <span className={styles.aiPill}>
                <span className={styles.aiDot} /> {f.badge}
              </span>
            ) : (
              <span className={styles.flagshipBadge}>
                <f.icon size={13} /> {f.badge}
              </span>
            )}
            <h3 className={styles.flagshipTitle}>{f.title}</h3>
            <p className={styles.flagshipText}>{f.text}</p>
            <span className={styles.flagshipCue}>
              Ver como funciona <ArrowRight size={15} />
            </span>
          </a>
        ))}
      </div>

      <div className={styles.more}>
        <span className={styles.moreLabel}>Explore também</span>
        <nav className={styles.moreLinks} aria-label='Sumário de funcionalidades'>
          {OTHER_GROUPS.map((g) => (
            <a key={g.href} href={g.href} className={styles.moreLink}>
              {g.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

/** Lista compacta de ranking (artilheiros/garçons) com cor de tier. */
function ScorerList({ rows, unit }: { rows: typeof TOP_SCORERS; unit: string }) {
  return (
    <ul className={styles.scorers}>
      {rows.map((row, i) => (
        <li key={row.name} className={styles.scorerRow}>
          <span className={styles.scorerPos}>{i + 1}</span>
          <span className={styles.dot} style={{ background: tierById(row.tier).color }} />
          <span className={styles.scorerName}>{row.name}</span>
          <span className={styles.scorerValue}>
            {row.value} {unit}
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Núcleo da página: todas as funcionalidades, agrupadas em blocos A-G. */
export function Features() {
  return (
    <Section id='funcionalidades'>
      <SectionHeader
        eyebrow='Funcionalidades'
        title='Tudo que a pelada precisa pra virar campeonato'
        subtitle='Do overall de cada craque à resenha pós-jogo turbinada por IA. Cada recurso pensado pro grupo de fut7 que leva a coisa a sério.'
      />

      <FeatureSummary />

      <div className={styles.blocks}>
        {/* Bloco A - Identidade e evolução do jogador */}
        <Block id='identidade' letter='A' title='Identidade e evolução do jogador'>
          <Tile
            icon={Gauge}
            title='Overall 0-99 + Tiers'
            summary='Cada craque com nota e tier, igual videogame.'
            text='Cada jogador ganha uma nota calculada por algoritmo - temporada, forma, fama e MVP - e um tier colorido.'
            span={2}
          >
            <div className={styles.overallShowcase}>
              <PlayerCard player={SAMPLE_PLAYERS[0]} block />
              <ul className={styles.tierScale}>
                {TIERS.map((tier) => (
                  <li key={tier.id} className={styles.tierRow}>
                    <span className={styles.tierDot} style={{ background: tier.color }} />
                    <span className={styles.tierName}>{tier.label}</span>
                    <span className={styles.tierRange}>{tier.min}+</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tile>

          <Tile
            icon={Radar}
            title='Perfil do jogador'
            summary='O dossiê completo de cada jogador.'
            text='Radar de atributos, gráfico de performance, histórico por temporada, prêmios e lista de partidas.'
          >
            <RadarMini />
          </Tile>

          <Tile
            icon={GitCompareArrows}
            title='Comparação de jogadores'
            summary='Quem é melhor? Resolva na tela.'
            text='Confronto lado a lado de dois atletas, atributo por atributo.'
          >
            <div className={styles.compare}>
              {SAMPLE_PLAYERS.map((p) => {
                const tier = tierById(p.tier)
                return (
                  <div key={p.id} className={styles.compareCol} style={{ '--tc': tier.color } as CSSProperties}>
                    <span className={styles.compareOverall}>{p.overall}</span>
                    <span className={styles.compareName}>{p.nickname ?? p.name.split(' ')[0]}</span>
                    <span className={styles.comparePos}>{p.position}</span>
                  </div>
                )
              })}
              <span className={styles.compareVs}>VS</span>
            </div>
          </Tile>
        </Block>

        {/* Bloco B - Ranking e disputa do grupo */}
        <Block id='ranking' letter='B' title='Ranking e disputa do grupo'>
          <Tile
            icon={Trophy}
            title='Leaderboard / Ranking'
            summary='A tabela que define o respeito do grupo.'
            text='Pódio ouro-prata-bronze e zona de classificação. O coração da competição da pelada.'
            span={2}
          >
            <MiniLeaderboard />
          </Tile>

          <Tile icon={Goal} title='Artilheiros' summary='A briga pela artilharia da temporada.' text='Quem mais balança a rede na temporada.'>
            <ScorerList rows={TOP_SCORERS} unit='gols' />
          </Tile>

          <Tile icon={HandHeart} title='Garçons' summary='Os reis da assistência.' text='Quem mais serve assistência pra galera.'>
            <ScorerList rows={TOP_ASSISTS} unit='assist.' />
          </Tile>

          <Tile icon={LayoutGrid} title='Dream Team' summary='O time dos sonhos da temporada.' text='A melhor escalação da temporada montada no campo, com glow por tier.' span={2}>
            <DreamTeamField />
          </Tile>
        </Block>

        {/* Bloco C - Partidas e dia de jogo */}
        <Block id='partidas' letter='C' title='Partidas e dia de jogo'>
          <Tile
            icon={ClipboardList}
            title='Registro de partidas'
            summary='Todo jogo registrado nos detalhes.'
            text='Placar, eventos e escalações por time - casa e visitante, com lineup completo.'
          >
            <div className={styles.scoreboard}>
              <div className={styles.team}>
                <span className={styles.teamName}>Casa</span>
                <span className={styles.score}>4</span>
              </div>
              <span className={styles.scoreX}>×</span>
              <div className={styles.team}>
                <span className={styles.score}>2</span>
                <span className={styles.teamName}>Visitante</span>
              </div>
            </div>
          </Tile>

          <Tile icon={Vote} title='Votação de MVP' summary='O craque eleito pela própria galera.' text='A galera vota no craque da partida. O reconhecimento que pesa no overall.'>
            <ul className={styles.vote}>
              {['Foguete', 'Maestro', 'Pedro'].map((name, i) => (
                <li key={name} className={styles.voteRow}>
                  <span className={styles.voteName}>{name}</span>
                  <span className={styles.voteBar}>
                    <span style={{ width: `${68 - i * 22}%` }} />
                  </span>
                  <span className={styles.votePct}>{68 - i * 22}%</span>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile icon={Save} title='Escalações salvas' summary='Times que deram certo, guardados.' text='Monte e guarde formações pra repetir o time que deu certo.' />
        </Block>

        {/* Bloco D - Resenha turbinada por IA (diferencial) */}
        <Block id='resenha-ia' letter='D' title='Resenha turbinada por IA'>
          <Tile
            icon={Mic}
            title='Sala de imprensa'
            summary='A coletiva pós-jogo da sua pelada.'
            text='Comentaristas geram análises e provocações sobre cada partida - e os jogadores respondem. A coletiva pós-jogo da pelada.'
            span={2}
            highlight
            ai
          >
            <ul className={styles.press}>
              {PRESS_ROOM.map((line, i) => (
                <li key={i} className={styles.pressLine} data-reply={line.reply}>
                  <span className={styles.pressAuthor}>{line.author}</span>
                  <p className={styles.pressText}>“{line.text}”</p>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile
            icon={MessagesSquare}
            title='Declarações da torcida'
            summary='A torcida que provoca sozinha.'
            text='"Torcedores" fictícios soltam declarações sobre os destaques da rodada. Zoeira data-driven, do jeito que o grupo gosta.'
            span={1}
            highlight
            ai
          >
            <ul className={styles.fans}>
              {FAN_QUOTES.map((q, i) => (
                <li key={i} className={styles.fanQuote}>
                  <p className={styles.fanText}>“{q.text}”</p>
                  <span className={styles.fanName}>- {q.fan}</span>
                </li>
              ))}
            </ul>
          </Tile>
        </Block>

        {/* Bloco E - Fantasy game */}
        <Block id='squad-league' letter='E' title='Squad League - o fantasy da pelada'>
          <Tile
            icon={Gamepad2}
            title='Fantasy game'
            summary='A Cartola da sua pelada.'
            text='Escale jogadores do próprio grupo, pontue pelo desempenho real e dispute o ranking de fantasy. A Cartola da pelada.'
            span={3}
          >
            <div className={styles.fantasy}>
              <div className={styles.fantasyCol}>
                <span className={styles.colLabel}>Ranking de fantasy</span>
                <ul className={styles.fantasyRank}>
                  {FANTASY_RANKING.map((entry, i) => (
                    <li key={entry.manager}>
                      <span className={styles.fantasyPos}>{i + 1}</span>
                      <span className={styles.fantasyTeam}>{entry.manager}</span>
                      <span className={styles.fantasyPts}>{entry.points}pts</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.fantasyCol}>
                <span className={styles.colLabel}>Mais escalados</span>
                <ul className={styles.picked}>
                  {MOST_PICKED.map((p) => (
                    <li key={p.name}>
                      <span className={styles.dot} style={{ background: tierById(p.tier).color }} />
                      <span className={styles.pickedName}>{p.name}</span>
                      <span className={styles.pickedPct}>{p.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.fantasyCol}>
                <span className={styles.colLabel}>Sua carteira</span>
                <div className={styles.wallet}>
                  <span className={styles.walletValue}>112</span>
                  <span className={styles.walletUnit}>moedas pra montar o time</span>
                </div>
              </div>
            </div>
          </Tile>
        </Block>

        {/* Bloco F - Temporadas e premiação */}
        <Block id='temporadas' letter='F' title='Temporadas e premiação'>
          <Tile
            icon={Medal}
            title='Temporadas com encerramento'
            summary='Começo, meio e fim pra competição.'
            text='Ciclos que congelam os números, distribuem premiações individuais e arquivam tudo no histórico do jogador. Começo, meio e fim pra competição.'
            span={2}
          >
            <ul className={styles.awards}>
              {SEASON_AWARDS.map((award) => (
                <li key={award.title} className={styles.award}>
                  <Medal size={16} style={{ color: tierById(award.tier).color }} />
                  <span className={styles.awardTitle}>{award.title}</span>
                  <span className={styles.awardWinner}>{award.winner}</span>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile
            icon={Save}
            title='Histórico do jogador'
            summary='A carreira do craque eternizada.'
            text='Cada temporada encerrada vira página na carreira do craque: títulos, prêmios e números congelados pra sempre.'
          />
        </Block>

        {/* Bloco G - Compartilhamento viral */}
        <Block id='compartilhamento' letter='G' title='Compartilhamento viral'>
          <Tile
            icon={Share2}
            title='Card compartilhável'
            summary='O print que viraliza no Zap.'
            text='Gere uma imagem do card do jogador ou destaque da rodada, pronta pra mandar no WhatsApp. A galera compartilha, o grupo aparece.'
            span={3}
          >
            <ShareCardMock />
          </Tile>
        </Block>
      </div>
    </Section>
  )
}
