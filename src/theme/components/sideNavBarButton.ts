import { StyleConfig } from '@chakra-ui/styled-system';

const sideNavBarButton: StyleConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'left',
    bg: 'transparent',
    color: 'gray.500',
    position: 'relative',
    padding: '0.375rem 0.375rem 0.375rem 0.375rem',
    borderRadius: 'base',
    py: 2,
    px: 3,
    backgroundColor: 'transparent',

    _hover: {
      backgroundColor: 'gray300Alpha.10',
    },

    '&[data-state=active]': {
      background: 'gray300Alpha.20',
      opacity: 1,
    },
  },
  variants: {
    subItem: {
      paddingLeft: '2rem',
    },
  },
};

export default sideNavBarButton;
