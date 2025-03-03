import { textTheme } from './text';

export const globalStyles = {
  html: {
    fontSize: {
      base: '16px',
      '4xl': '18px',
    },
  },
  '::-webkit-scrollbar': {
    width: '1.25rem',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'gray.300',
    borderRadius: '1.25rem',
    border: '0.375rem solid transparent',
    backgroundClip: 'content-box',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'gray.400',
  },
  body: {
    bg: 'pageBackground',
    color: 'title',
    overflow: 'hidden',
  },
  '.quill': {
    backgroundColor: 'red',
    '&:hover': {
      '.ql-toolbar, .ql-container': {
        borderColor: 'borderHover !important',
      },
    },
  },
}; 