import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const badgeColorSchemes = {
  neutral: {
    color: 'hsl(34,30%,32%)',
    backgroundColor: 'hsl(48,25%,97%)',
    borderColor: 'hsl(42,25%,50%)',
  },
  orange: {
    color: 'legacyOrange.700',
    backgroundColor: 'legacyOrange.50',
    borderColor: 'legacyOrange.500',
  },
  red: {
    color: 'red.700',
    backgroundColor: 'red.50',
    borderColor: 'red.500',
  },
  green: {
    color: 'green.700',
    backgroundColor: 'green.50',
    borderColor: 'green.500',
  },
  outline: {
    color: 'title',
    backgroundColor: 'white',
    borderColor: 'borderDark',
  },
  gray: {
    color: 'title',
    backgroundColor: 'gray.50',
    borderColor: 'gray.500',
  },
  newsGray: {
    color: 'title',
    backgroundColor: 'white',
    borderColor: 'gray.500',
  },
  newsBrand: {
    color: 'brand.700',
    backgroundColor: 'white',
    borderColor: 'brand.500',
  },
};

export type BadgeColor = keyof typeof badgeColorSchemes;

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tagAnatomy.keys,
);

export const tagTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      color: 'title',
      bgColor: 'gray.100',
      borderRadius: 'sm',
    },
  },
  variants: {
    border: ({ badgeColor }) => ({
      container: {
        borderWidth: 'xs',
        borderRadius: 'xs',
        position: 'relative',
        ...(badgeColorSchemes[badgeColor as BadgeColor] ??
          badgeColorSchemes.outline),
        // Inner white border
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: '0.125rem solid white',
          borderRadius: 'inherit',
        },
      },
    }),
  },
});
