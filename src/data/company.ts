/** Identificação legal da empresa, reutilizada no rodapé e nas páginas legais. */
export const COMPANY = {
  legalName: 'WEF Tecnologia',
  cnpj: '52.874.817/0001-92',
  product: 'player·statistics',
} as const

/** Número de WhatsApp de vendas (formato internacional, só dígitos — exigido pelo wa.me). */
export const WHATSAPP_NUMBER = '554499428194'

/** Monta o link wa.me que abre uma conversa com mensagem pré-preenchida. */
export const whatsappLink = (message: string): string => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
