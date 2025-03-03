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
  '.ql-editor': {
    fontFamily: 'Inter',
    fontSize: 'md',
    padding: '0.75rem 0.9375rem',
    '& a': {
      color: 'link',
    },
    '&.ql-blank::before': {
      fontStyle: 'normal',
      fontWeight: textTheme.variants.Medium.fontWeight,
      color: 'placeholder',
    },
  },
  '.ql-toolbar.ql-snow': {
    borderTopLeftRadius: 'base',
    borderTopRightRadius: 'base',
    borderColor: 'border !important',
    padding: '0.5rem',
    borderWidth: 'sm',
    transition: 'border-color 0.2s',
  },
  '.ql-container.ql-snow': {
    height: 'calc(100% - 2.7125rem)',
    borderColor: 'border !important',
    borderBottomLeftRadius: 'base',
    borderBottomRightRadius: 'base',
    borderWidth: 'sm',
    transition: 'border-color 0.2s',
  },
  '.ql-toolbar button': {
    width: '1.75rem !important',
    height: '1.5rem !important',
    padding: '0.1875rem 0.3125rem !important',
  },
  '.ql-tooltip': {
    zIndex: '1 !important',
  },
}; 