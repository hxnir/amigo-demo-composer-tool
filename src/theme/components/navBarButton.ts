import { StyleConfig } from '@chakra-ui/styled-system';

const navBarButton: StyleConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'relative',
    opacity: '0.6',
    borderRadius: 'full',
    px: 3,
    py: 1.5,
    gap: 2,
    _hover: {
      opacity: 0.8,
    },
    transition: 'opacity 0.2s ease-in-out',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: 'full',
      transition: 'all 0.2s',
      transform: 'scale(0.7)',
      bg: 'neutrals.300',
      opacity: 0,
    },

    '&[data-state=active]': {
      color: 'white',
      opacity: 1,
      '&::before': {
        transform: 'scale(1)',
        opacity: 0.1,
      },
    },
  },
};

export default navBarButton;
