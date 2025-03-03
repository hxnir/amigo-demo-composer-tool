import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  tableLayout: 'fixed',
  th: {
    backgroundColor: 'white',
    borderRadius: 'base',
  },
  table: {
    borderRadius: 'base',
  },
});

const numericStyles = defineStyle({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
});

const simpleTableStyle = definePartsStyle({
  th: {
    borderColor: 'borderLight',
    borderBottomWidth: 'sm',
    background: 'gray.25',
    ...numericStyles,
  },
  tr: {
    '&:last-of-type': {
      td: { borderBottomWidth: 0 },
    },
  },
  td: {
    borderBottomWidth: 'sm',
    borderColor: 'borderLight',
    ...numericStyles,
  },
  caption: {
    color: 'gray.600',
  },
  tfoot: {
    tr: {
      '&:last-of-type': {
        th: { borderBottomWidth: 0 },
      },
    },
  },
});

const cardsStyle = definePartsStyle({
  ...simpleTableStyle,
  table: {
    borderSpacing: '0 0.5rem',
    borderCollapse: 'separate',
    background: 'transparent',
  },
  th: {
    ...simpleTableStyle.th,
    background: 'pageBackground', // TODO: should be transparent, that's a patch
    borderBottomWidth: 0,
    fontWeight: '600',
    py: 0,
  },
  tr: {
    backgroundColor: 'white',
    td: {
      borderTopWidth: 'sm',
      borderTopColor: 'border',
      borderBottomWidth: 'sm',
      borderBottomColor: 'border',
      borderStyle: 'solid',
      '&:first-of-type': {
        borderTopLeftRadius: 'md',
        borderBottomLeftRadius: 'md',
        borderLeftWidth: 'sm',
        borderLeftColor: 'border',
      },
      '&:last-of-type': {
        borderTopRightRadius: 'md',
        borderBottomRightRadius: 'md',
        borderRightWidth: 'sm',
        borderRightColor: 'border',
      },
    },
  },
});

const subTableStyle = definePartsStyle({
  ...simpleTableStyle,
  th: {
    ...simpleTableStyle.th,
    background: 'white',
  },
});

const nakedStyle = defineStyle({
  ...simpleTableStyle,
  th: {
    ...simpleTableStyle.th,
    background: 'transparent',
    border: 'none',
  },
  tr: {
    borderRadius: 'base',
    td: {
      '&:first-of-type': {
        borderTopLeftRadius: 'base',
        borderBottomLeftRadius: 'base',
      },
      '&:last-of-type': {
        borderTopRightRadius: 'base',
        borderBottomRightRadius: 'base',
      },
    },
  },
  td: {
    borderColor: 'white',
    borderBottomWidth: 'md',
  },
});

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subTable: subTableStyle,
    simple: simpleTableStyle,
    cards: cardsStyle,
    naked: nakedStyle,
  },
  sizes: {
    sm: {
      td: {
        px: '3',
        py: '3',
      },
      th: {
        px: '3',
        py: '2',
      },
    },
    md: {
      td: {
        px: '3',
        py: '3',
      },
      th: {
        px: '3',
        py: '2',
      },
    },
  },
});
