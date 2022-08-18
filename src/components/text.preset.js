import { Typography } from '../Theme/Typograpy'

const BASE = {
  fontSize: 16,
  fontFamily: Typography.primary,
}
const BASE_BOLD = {
  fontSize: 16,
  fontFamily: Typography.primariBold,
}
const BOLD = {
  fontSize: 16,
  fontFamily: Typography.primary,
}

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BOLD,
    fontSize: 26,
  },

  h4: {
    ...BASE_BOLD,
    fontSize: 16,
  },
  small: {
    ...BOLD,
    fontSize: 14,
  },
}
