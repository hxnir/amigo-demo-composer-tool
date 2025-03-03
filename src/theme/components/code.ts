import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontFamily: 'Inter',
  fontSize: 'md',
  padding: '4px',
});

export const codeTheme = defineStyleConfig({
  baseStyle,
});
