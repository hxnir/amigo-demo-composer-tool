import { extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme';
import { modalTheme } from './components/modal';
import { checkboxTheme } from './components/checkbox';
import { listTheme } from './components/list';
import { inputTheme } from './components/input';
import { textTheme } from './text';
import { tableTheme } from './components/table';
import { buttonTheme } from './components/button';
import { radioTheme } from './components/radio';
import { textareaTheme } from './components/textarea';
import { codeTheme } from './components/code';
import { stepperTheme } from './components/stepper';
import { tabsTheme } from './components/tabs';
import { linkTheme } from './components/link';
import { accordionTheme } from './components/accordion';
import { switchTheme } from './components/switch';
import { avatarAnatomy } from './components/avatar';
import { drawerTheme } from './components/drawer';
import { globalStyles } from './global';
import { COLORS } from './colors';
import { cardTheme } from './components/card';
import navBarButton from './components/navBarButton';
import { menuTheme } from './components/menu';
import sideNavBarButton from './components/sideNavBarButton';
import { tagTheme } from './components/tag';

const override = {
  colors: COLORS,
  semanticTokens: {
    colors: {
      border: COLORS.border, // This is needed for borderColor="border" to work with our COLOR.border
    },
  },
  borderWidths: {
    xs: '0.03125rem', // 0.5px
    sm: '0.0625rem', // 1px
    md: '0.125rem', // 2px
  },
  radii: {
    xs: '0.125rem', // 2px
    sm: '0.1875rem', // 3px
    base: '0.25rem', // 4px
    md: '0.3125rem', // 5px
    xl: '0.5rem', // 8px
  },
  shadows: {
    cardHover: '0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A',
    xs: '0px 1.5px 1.5px 0px rgba(0, 0, 0, 0.04)',
    sm: '0px 3px 3px 0px rgba(0, 0, 0, 0.02), 0px 1px 1px 0px rgba(0, 0, 0, 0.04)',
    base:
      '0px 4px 4px 0px rgba(0, 0, 0, 0.02), ' +
      '0px 2px 2px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 1px 1px 0px rgba(0, 0, 0, 0.04)',
    md:
      '0px 6px 6px 0px rgba(0, 0, 0, 0.02), ' +
      '0px 4px 4px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 2px 2px 0px rgba(0, 0, 0, 0.04)',
    lg:
      '0px 8px 8px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 4px 4px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 2px 2px 0px rgba(0, 0, 0, 0.04)',
    xl:
      '0px 12px 12px 0px rgba(0, 0, 0, 0.02), ' +
      '0px 8px 8px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    '2xl':
      '0px 16px 16px 0px rgba(0, 0, 0, 0.02), ' +
      '0px 12px 12px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 8px 8px 0px rgba(0, 0, 0, 0.04), ' +
      '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    outline: '0px 0px 0px 3px rgba(50, 46, 224, 0.20)',
  },
  sizes: {
    'full-screen': '80vw',
    'full-screen-small-screen': '90vw',
  },
  space: {
    cardsLayoutGap: '1rem',
  },
  breakpoints: {
    'xl+1px': '1281px',
    '3xl': '1730px',
    '4xl': '1921px',
  },
  styles: {
    global: globalStyles,
  },
  components: {
    Drawer: drawerTheme,
    Container: {
      baseStyle: {
        maxW: {
          base: 'full-screen-small-screen',
          'xl+1px': 'full-screen',
        },
        py: {
          base: '6',
          md: '6',
        },
        px: {
          base: '0',
          md: 2,
        },
      },
    },
    Switch: switchTheme,
    Text: textTheme,
    Checkbox: checkboxTheme,
    Code: codeTheme,
    List: listTheme,
    Link: linkTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
    Table: tableTheme,
    Stepper: stepperTheme,
    Alert: {
      variants: {
        subtle: (props: { status: string }) => ({
          container: {
            color: props.status === 'error' ? 'red.700' : 'title',
            bg: props.status === 'error' ? 'red.50' : 'white',
            boxShadow: '0px 1.5rem 3rem -0.75rem',
          },
        }),
      },
    },
    Modal: modalTheme,
    Card: cardTheme,
    Button: buttonTheme,
    Radio: radioTheme,
    Tabs: tabsTheme,
    Accordion: accordionTheme,
    Avatar: avatarAnatomy,
    Divider: {
      baseStyle: {
        borderColor: 'borderLight',
        borderWidth: 'sm',
      },
    },
    NavBarButton: navBarButton,
    SideNavBarButton: sideNavBarButton,
    Menu: menuTheme,
    Tooltip: {
      baseStyle: {
        border: '0.0625rem solid rgba(0,0,0,0.6)',
        px: 2.5,
        py: 1.5,
      },
    },
    Popover: {
      baseStyle: {
        content: {
          borderRadius: 'xl',
        },
        popper: {
          zIndex: 1500,
        },
      },
      variants: {
        responsive: {
          content: {
            maxWidth: 'unset',
            width: 'unset',
          },
        },
      },
    },
    Tag: tagTheme,
  },
};

const index = extendTheme(override, proTheme);

export default index;
