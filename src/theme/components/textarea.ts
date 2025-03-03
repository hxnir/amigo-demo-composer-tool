import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { textTheme } from '../text';

const baseStyle = defineStyle({
  '&::placeholder': {
    color: 'placeholder',
    ...textTheme.variants.Medium,
    ...textTheme.sizes.TextMD,
  },
  _disabled: {
    backgroundColor: 'gray.300',
  },
  borderRadius: 'base',
});

const variants = {
  outline: {
    borderRadius: 'base',
    borderWidth: 'sm',
    borderColor: 'border',
  },
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  variants,
});
