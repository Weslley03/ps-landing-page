import { LegalPage, type LegalSection } from '../components/legal/LegalPage'
import { COMPANY } from '../data/company'

const UPDATED_AT = '22 de junho de 2026'

const sections: LegalSection[] = [
  {
    id: 'aceitacao',
    heading: 'Aceitação dos Termos',
    body: (
      <>
        <p>
          Estes Termos de Uso regulam o acesso e a utilização da plataforma {COMPANY.product} ("Plataforma"), operada por {COMPANY.legalName}, inscrita no CNPJ sob o nº{' '}
          {COMPANY.cnpj} ("nós"). Ao criar uma conta, acessar ou utilizar a Plataforma, você ("usuário") declara ter lido, compreendido e concordado integralmente com estes Termos.
        </p>
        <p>Caso não concorde com qualquer disposição aqui prevista, você não deve utilizar a Plataforma.</p>
      </>
    ),
  },
  {
    id: 'servico',
    heading: 'Descrição do Serviço',
    body: (
      <p>
        A Plataforma oferece organização de estatísticas de futebol amador (fut7/pelada) por grupo, incluindo overall e tiers de jogadores, rankings, artilheiros, dream team,
        premiações de temporada, ligas de fantasy e conteúdos editoriais gerados por inteligência artificial. Os recursos disponíveis podem variar conforme o plano contratado e
        podem ser alterados, suspensos ou descontinuados a qualquer momento, mediante aviso quando aplicável.
      </p>
    ),
  },
  {
    id: 'conta',
    heading: 'Conta e Cadastro',
    body: (
      <>
        <p>
          A criação de um grupo exige cadastro com nome e número de telefone (WhatsApp), utilizado para autenticação e comunicação. Você é responsável pela veracidade das
          informações fornecidas e pela guarda das suas credenciais de acesso.
        </p>
        <ul>
          <li>Você se compromete a manter seus dados de cadastro atualizados.</li>
          <li>Toda atividade realizada na sua conta é de sua responsabilidade.</li>
          <li>Notifique-nos imediatamente em caso de uso não autorizado da sua conta.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'planos',
    heading: 'Planos, Pagamento e Cancelamento',
    body: (
      <>
        <p>
          A Plataforma oferece um plano gratuito e planos pagos com diferentes limites de jogadores e de partidas. Os valores e limites vigentes são exibidos na página de planos e
          podem ser atualizados periodicamente.
        </p>
        <ul>
          <li>Os pagamentos podem ser realizados de forma recorrente ou mês a mês, via Pix.</li>
          <li>A assinatura é renovada automaticamente conforme a modalidade escolhida, até que seja cancelada.</li>
          <li>
            O cancelamento pode ser solicitado a qualquer momento e interrompe as renovações futuras, sem reembolso de períodos já pagos, salvo disposição legal em contrário.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'conduta',
    heading: 'Conduta do Usuário',
    body: (
      <>
        <p>Ao utilizar a Plataforma, você concorda em não:</p>
        <ul>
          <li>Inserir dados falsos, ofensivos, discriminatórios ou que violem direitos de terceiros;</li>
          <li>Tentar acessar áreas restritas, comprometer a segurança ou a integridade dos sistemas;</li>
          <li>Utilizar a Plataforma para fins ilícitos ou em desacordo com a legislação aplicável.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ia',
    heading: 'Conteúdo Gerado por Inteligência Artificial',
    body: (
      <p>
        Parte do conteúdo da Plataforma - como comentários de imprensa e declarações de torcida - é gerada automaticamente por inteligência artificial, com finalidade de
        entretenimento. Esse conteúdo é ficcional, pode conter imprecisões e não representa opinião de {COMPANY.legalName}, dos usuários ou de terceiros mencionados.
      </p>
    ),
  },
  {
    id: 'propriedade',
    heading: 'Propriedade Intelectual',
    body: (
      <p>
        A marca, o software, o design, os textos e os demais elementos da Plataforma são de titularidade de {COMPANY.legalName} ou de seus licenciadores, protegidos pela legislação
        aplicável. Os dados inseridos por você permanecem seus; ao utilizá-los na Plataforma, você nos concede licença limitada para processá-los e exibi-los na prestação do
        serviço.
      </p>
    ),
  },
  {
    id: 'responsabilidade',
    heading: 'Limitação de Responsabilidade',
    body: (
      <p>
        A Plataforma é fornecida "no estado em que se encontra". Na máxima extensão permitida pela lei, {COMPANY.legalName} não se responsabiliza por indisponibilidades
        temporárias, perdas de dados decorrentes de fatores fora de seu controle, ou por danos indiretos relacionados ao uso ou à impossibilidade de uso da Plataforma.
      </p>
    ),
  },
  {
    id: 'vigencia',
    heading: 'Vigência e Rescisão',
    body: (
      <p>
        Estes Termos vigoram enquanto você utilizar a Plataforma. Podemos suspender ou encerrar contas que violem estes Termos ou a legislação. Você pode encerrar sua conta a
        qualquer momento. Podemos atualizar estes Termos periodicamente; alterações relevantes serão comunicadas, e o uso continuado após a vigência implica concordância.
      </p>
    ),
  },
  {
    id: 'foro',
    heading: 'Lei Aplicável e Foro',
    body: (
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio do consumidor para dirimir eventuais controvérsias, salvo disposição
        legal cogente em sentido diverso.
      </p>
    ),
  },
]

export function Terms() {
  return (
    <LegalPage
      title='Termos de Uso'
      updatedAt={UPDATED_AT}
      intro={`Estas condições estabelecem as regras de uso da plataforma ${COMPANY.product}. Leia com atenção antes de utilizar nossos serviços.`}
      sections={sections}
    />
  )
}
