import { avatarAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  excessLabel: {
    backgroundColor: 'white',
    border: '0.5px solid',
    borderColor: 'gray.200',
  },
});

const sizes = {
  sm: definePartsStyle({
    container: {
      width: '2.375rem',
      height: '2.375rem',
      fontSize: `calc(2.375rem / 2.5)`,
    },
    excessLabel: {
      width: '2.375rem',
      height: '2.375rem',
    },
    label: {
      fontSize: `calc(2.375rem / 2.5)`,
      lineHeight: '2.625rem',
    },
  }),
  md: definePartsStyle({
    container: {
      padding: 1,
    },
  }),
  xs: definePartsStyle({
    container: {
      width: '1.75rem',
      height: '1.75rem',
      fontSize: `calc(1.75rem / 2.5)`,
    },
    excessLabel: {
      width: '1.75rem',
      height: '1.75rem',
    },
    label: {
      fontSize: `calc(1.75rem / 2.5)`,
      lineHeight: '1.625rem',
    },
  }),
  xxs: definePartsStyle({
    container: {
      width: '1.5rem',
      height: '1.5rem',
      fontSize: `calc(1.5rem / 2.5)`,
    },
    excessLabel: {
      width: '1.5rem',
      height: '1.5rem',
    },
    label: {
      fontSize: `calc(1.5rem / 2.5)`,
      lineHeight: '1.25rem',
    },
  }),
};

export const avatarAnatomy = defineMultiStyleConfig({
  baseStyle,
  sizes,
});
