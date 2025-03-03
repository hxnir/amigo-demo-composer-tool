import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tabsAnatomy.keys,
);

export const tabsTheme = defineMultiStyleConfig({
  baseStyle: {
    tab: {
      // padding: '0 0.5rem 0.5rem 0.5rem !important',
      marginTop: '-0.5rem',
    },
    tablist: {
      gap: 2,
      borderBottom: '1px',
    },
    tabpanel: {
      padding: '1rem 0 0 0',
    },
  },

  defaultProps: { colorScheme: 'brand' },
});
