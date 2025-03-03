import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { COLORS, rgbaFromHexColor } from '../colors';

const baseStyle = defineStyle({
  borderRadius: 'base',
});

const primary = defineStyle({
  width: 'fit-content',
  backgroundColor: 'brand.500',
  color: 'white',
  borderColor: 'brand.500',
  borderWidth: 'sm',
  _hover: {
    backgroundColor: 'brand.700',
  },
  _disabled: {
    opacity: '50%',
  },
});

const primaryDanger = defineStyle({
  ...primary,
  backgroundColor: 'red.500',
  borderColor: 'red.500',
  _hover: {
    backgroundColor: 'red.700',
  },
});

const outline = defineStyle({
  backgroundColor: 'white',
  color: 'title',
  borderColor: 'border',
  borderWidth: 'sm',
  _hover: {
    backgroundColor: 'gray.200',
  },
  _disabled: {
    opacity: '50%',
  },
});

const outlineDanger = defineStyle({
  ...outline,
  borderColor: 'red.400',
  color: 'red.500',
  _hover: {
    backgroundColor: 'red.100',
  },
});

const ghost = defineStyle({
  backgroundColor: 'transparent',
  color: 'title',
  _hover: {
    backgroundColor: 'gray.200',
  },
  _disabled: {
    opacity: '50%',
  },
});

const link = defineStyle({
  backgroundColor: 'transparent',
  color: 'primary.500',
  _hover: {
    textDecoration: 'underline',
    color: 'primary.500',
  },
  _active: {
    textDecoration: 'underline',
    color: 'primary.700',
  },
  _focus: {
    borderRadius: '4px',
    boxShadow: `0px 0px 0px 4px ${rgbaFromHexColor(
      COLORS.primary['500'],
      0.16,
    )}`,
  },
  _disabled: {
    opacity: '40%',
  },
});

const linkSecondary = defineStyle({
  ...link,
  color: 'neutrals.800',
  _hover: {
    // eslint-disable-next-line no-underscore-dangle
    ...link._hover,
    textDecoration: 'underline',
    color: 'neutrals.800',
  },
});

const iconButtonGhost = defineStyle({
  _hover: {
    backgroundColor: 'gray.200',
  },
  cursor: 'pointer',
  minWidth: 'initial',
  height: 'initial',
  svg: {
    width: '1rem',
    height: '1rem',
  },
});

const iconButtonGhostSmall = defineStyle({
  _hover: {
    backgroundColor: 'gray.200',
  },
  cursor: 'pointer',
  borderRadius: 'base',
  svg: {
    width: '1rem',
    height: '1rem',
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    primary,
    primaryDanger,
    outline,
    outlineDanger,
    ghost,
    link,
    linkSecondary,
    iconButtonGhost,
    iconButtonGhostSmall,
  },
  sizes: {
    small: {
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      fontWeight: '500',
      px: '0.5rem',
      py: '0.25rem',
    },
    default: {
      fontSize: '0.865rem',
      lineHeight: '0.865rem',
      fontWeight: '500',
      px: '0.5rem',
      py: '0.25rem',
      minHeight: '2rem',
    },
  },
  defaultProps: {
    size: 'default',
  },
});
