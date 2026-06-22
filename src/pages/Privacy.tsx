import { LegalPage, type LegalSection } from '../components/legal/LegalPage'
import { COMPANY } from '../data/company'

const UPDATED_AT = '22 de junho de 2026'

const sections: LegalSection[] = [
  {
    id: 'controlador',
    heading: 'Controlador dos Dados',
    body: (
      <p>
        Esta Política de Privacidade descreve como {COMPANY.legalName}, inscrita no CNPJ sob o nº {COMPANY.cnpj} ("nós"), coleta, utiliza e protege os dados pessoais dos usuários
        da plataforma {COMPANY.product} ("Plataforma"), em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — "LGPD").
      </p>
    ),
  },
  {
    id: 'dados-coletados',
    heading: 'Dados que Coletamos',
    body: (
      <ul>
        <li>
          <strong>Dados de cadastro:</strong> nome e número de telefone (WhatsApp) do responsável pelo grupo e dos jogadores adicionados.
        </li>
        <li>
          <strong>Dados de uso:</strong> partidas, estatísticas, resultados e demais informações que você insere na Plataforma.
        </li>
        <li>
          <strong>Dados técnicos:</strong> informações de acesso necessárias à autenticação, segurança e funcionamento do serviço.
        </li>
      </ul>
    ),
  },
  {
    id: 'finalidades',
    heading: 'Finalidades do Tratamento',
    body: (
      <ul>
        <li>Permitir o cadastro, a autenticação e a operação da Plataforma;</li>
        <li>Calcular e exibir estatísticas, rankings e demais recursos do serviço;</li>
        <li>Enviar comunicações operacionais via WhatsApp (ex.: boas-vindas e avisos sobre o grupo);</li>
        <li>Gerar conteúdos editoriais por inteligência artificial a partir das partidas do grupo;</li>
        <li>Garantir a segurança, prevenir fraudes e cumprir obrigações legais.</li>
      </ul>
    ),
  },
  {
    id: 'bases-legais',
    heading: 'Bases Legais',
    body: (
      <p>
        O tratamento dos dados se fundamenta na execução do contrato e dos procedimentos preliminares (prestação do serviço contratado), no cumprimento de obrigações legais e
        regulatórias, no legítimo interesse para segurança e melhoria do serviço e, quando aplicável, no consentimento do titular.
      </p>
    ),
  },
  {
    id: 'compartilhamento',
    heading: 'Compartilhamento com Terceiros',
    body: (
      <>
        <p>Não vendemos dados pessoais. Compartilhamos informações apenas com operadores que viabilizam o serviço, sob obrigações de segurança e confidencialidade:</p>
        <ul>
          <li>
            <strong>Twilio:</strong> envio de mensagens via WhatsApp;
          </li>
          <li>
            <strong>Amazon Web Services (AWS):</strong> hospedagem e armazenamento de arquivos;
          </li>
          <li>
            <strong>OpenRouter:</strong> processamento dos conteúdos gerados por inteligência artificial;
          </li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'retencao',
    heading: 'Retenção e Eliminação',
    body: (
      <p>
        Mantemos os dados pelo tempo necessário às finalidades descritas e ao cumprimento de obrigações legais. Encerrada a conta, os dados são eliminados ou anonimizados,
        ressalvadas as hipóteses de guarda obrigatória previstas em lei.
      </p>
    ),
  },
  {
    id: 'direitos',
    heading: 'Direitos do Titular',
    body: (
      <>
        <p>Nos termos da LGPD, você pode, a qualquer momento, solicitar:</p>
        <ul>
          <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>Portabilidade e revogação do consentimento, quando aplicável.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies e Tecnologias Semelhantes',
    body: (
      <p>
        A Plataforma utiliza apenas os cookies e armazenamentos locais estritamente necessários ao seu funcionamento (como autenticação e preferências). Não utilizamos cookies de
        publicidade de terceiros.
      </p>
    ),
  },
  {
    id: 'seguranca',
    heading: 'Segurança',
    body: (
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados e situações de destruição, perda, alteração ou difusão indevidas.
      </p>
    ),
  },
  {
    id: 'contato-encarregado',
    heading: 'Contato do Controlador',
    body: (
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato com {COMPANY.legalName} (CNPJ {COMPANY.cnpj}), responsável pelo tratamento dos seus
        dados na Plataforma {COMPANY.product}.
      </p>
    ),
  },
]

export function Privacy() {
  return (
    <LegalPage
      title='Política de Privacidade'
      updatedAt={UPDATED_AT}
      intro={`Levamos a sua privacidade a sério. Esta política explica quais dados a plataforma ${COMPANY.product} coleta, por que coleta e quais são os seus direitos.`}
      sections={sections}
    />
  )
}
