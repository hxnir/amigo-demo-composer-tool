const TextSM = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  letterSpacing: '0rem',
};
const TextXXS = {
  fontSize: '0.625rem',
  lineHeight: '0.75rem',
  letterSpacing: '0rem',
};

const Medium = {
  fontWeight: '500',
};

const SemiBold = {
  fontWeight: '600',
};

const TextXS = {
  fontSize: '0.75rem',
  lineHeight: '1rem',
};
export const baseStyle = {
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
};
export const textTheme = {
  baseStyle,
  sizes: {
    TitleLG: {
      fontSize: '2.25rem',
      lineHeight: '3.5rem',
      letterSpacing: '-0.045rem',
    },
    TitleMD: {
      fontSize: '1.875rem',
      lineHeight: '2.75rem',
      letterSpacing: '-0.0375rem',
    },
    TitleSM: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      letterSpacing: '-0.03rem',
    },
    TextXL: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
      letterSpacing: '-0.025rem',
    },
    TextLG: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      letterSpacing: '-0.0225rem',
    },
    TextMD: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '-0.01rem',
    },
    TextSM,
    TextXS,
    TextXXS,
  },
  variants: {
    Bold: {
      fontWeight: '700',
    },
    SemiBold,
    Medium,
    Regular: {
      fontWeight: '400',
    },
    breadcrumb: {
      ...TextSM,
      ...Medium,
      color: 'gray.500',
    },
    Caption: {
      ...Medium,
      ...TextXS,
      letterSpacing: '0.0125rem',
      textTransform: 'uppercase',
    },
    CaptionSM: {
      ...Medium,
      ...TextXXS,
      letterSpacing: '0.0125rem',
      textTransform: 'uppercase',
    },
    Unstyled: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
    },
  },
}; 