import React from 'react';
import {
  Flex,
  FlexProps,
  Icon,
  Text,
  Tooltip,
  TooltipProps,
} from '@chakra-ui/react';
import { COLORS, rgbaFromHexColor } from '../theme/colors';

const SIZES: Record<
  BadgeSizes,
  {
    text: string;
    paddingX: number;
    paddingY: number;
    iconSize: string;
    gap: string;
  }
> = {
  sm: {
    text: 'TextXS',
    paddingX: 0.375,
    paddingY: 0.125,
    iconSize: '0.75rem',
    gap: '0.25rem',
  },
  md: {
    text: 'TextSM',
    paddingX: 0.5,
    paddingY: 0.125,
    iconSize: '0.75rem',
    gap: '0.375rem',
  },
  lg: {
    text: 'TextSM',
    paddingX: 0.625,
    paddingY: 0.25,
    iconSize: '0.875rem',
    gap: '0.375rem',
  },
};

export const BADGE_COLORS: Record<
  BadgeColors,
  {
    backgroundColor: string;
    text: string;
    outlineBorderColor: string;
    dividerColor: string;
  }
> = {
  neutral: {
    text: 'gray.600',
    outlineBorderColor: 'gray.300',
    backgroundColor: rgbaFromHexColor(COLORS.gray[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.gray[300], 0.4),
  },
  red: {
    text: 'red.500',
    outlineBorderColor: 'red.400',
    backgroundColor: rgbaFromHexColor(COLORS.red[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.red[300], 0.4),
  },
  orange: {
    text: 'orange.600',
    outlineBorderColor: 'orange.400',
    backgroundColor: rgbaFromHexColor(COLORS.orange[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.orange[600], 0.2),
  },
  yellow: {
    text: 'yellow.600',
    outlineBorderColor: 'yellow.400',
    backgroundColor: rgbaFromHexColor(COLORS.yellow[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.yellow[600], 0.2),
  },
  green: {
    text: 'green.600',
    outlineBorderColor: 'green.500',
    backgroundColor: rgbaFromHexColor(COLORS.green[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.green[600], 0.2),
  },
  primary: {
    text: 'primary.500',
    outlineBorderColor: 'primary.400',
    backgroundColor: rgbaFromHexColor(COLORS.primary[300], 0.2),
    dividerColor: rgbaFromHexColor(COLORS.primary[500], 0.2),
  },
};

export enum BadgeColors {
  neutral = 'neutral',
  red = 'red',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  primary = 'primary',
}

export enum BadgeSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type BadgeSize = keyof typeof BadgeSizes;
export type BadgeColor = keyof typeof BadgeColors;

export type AimBadgeContentProps = {
  text: string;
  size?: BadgeSize;
  color?: BadgeColor;
  outline?: boolean;
  onClick?: () => void;
  ['data-testid']?: string;
} & (
  | {
      type?: 'regular';
      leftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
      rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;

      number?: never;
    }
  | {
      type: 'counter';
      number: number;

      leftIcon?: never;
      rightIcon?: never;
    }
);

export type AimBadgeProps = AimBadgeContentProps & {
  tooltip?: Omit<TooltipProps, 'children'>;
} & Omit<FlexProps, 'outline'>;

const OUTLINE_BORDER_WIDTH_REM = 0.0625;

const AimBadgeContent = React.forwardRef<HTMLDivElement, AimBadgeContentProps>(
  (
    {
      text,
      size = 'md',
      color = 'neutral',
      leftIcon,
      rightIcon,
      outline,
      onClick,
      number,
      type,
      'data-testid': dataTestId,
      ...props // Extra props is needed for Tooltip
    }: AimBadgeContentProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const paddingY =
      SIZES[size].paddingY - (outline ? OUTLINE_BORDER_WIDTH_REM : 0);
    const paddingX =
      SIZES[size].paddingX - (outline ? OUTLINE_BORDER_WIDTH_REM : 0);
    return (
      <Flex
        backgroundColor={
          outline ? 'white' : BADGE_COLORS[color].backgroundColor
        }
        boxSizing={outline ? 'border-box' : undefined}
        borderColor={
          outline
            ? BADGE_COLORS[type !== 'counter' ? color : 'neutral']
                .outlineBorderColor
            : undefined
        }
        borderWidth={outline ? `${OUTLINE_BORDER_WIDTH_REM}rem` : undefined}
        borderRadius="base"
        display="inline-flex"
        alignItems="center"
        width="fit-content"
        justifyContent="space-between"
        paddingX={`${paddingX}rem`}
        paddingY={`${paddingY}rem`}
        gap={SIZES[size].gap}
        cursor={onClick !== undefined ? 'pointer' : 'default'}
        onClick={onClick}
        ref={ref}
        data-testid={dataTestId}
        {...props} // Extra props is needed for Tooltip
      >
        {leftIcon !== undefined ? (
          <Icon
            as={leftIcon}
            width={SIZES[size].iconSize}
            height={SIZES[size].iconSize}
            color={BADGE_COLORS[color].text}
          />
        ) : null}
        <Text
          size={SIZES[size].text}
          textColor={BADGE_COLORS[color].text}
          whiteSpace="nowrap"
        >
          {text}
        </Text>
        {rightIcon !== undefined ? (
          <Icon
            as={rightIcon}
            width={SIZES[size].iconSize}
            height={SIZES[size].iconSize}
            color={BADGE_COLORS[color].text}
          />
        ) : null}
        {type === 'counter' && number > 1 ? (
          <Text
            size={SIZES[size].text}
            textColor={BADGE_COLORS[color].text}
            borderLeft={`1px solid ${
              BADGE_COLORS[outline ? 'neutral' : color].dividerColor
            }`}
            paddingLeft={`${SIZES[size].paddingX}rem`}
            boxSizing="border-box"
          >
            {number}
          </Text>
        ) : null}
      </Flex>
    );
  },
);

AimBadgeContent.displayName = 'AimBadgeContent';

export default function AimBadge({
  tooltip = undefined,
  ...props
}: AimBadgeProps) {
  return tooltip !== undefined ? (
    <Tooltip {...tooltip}>
      <AimBadgeContent {...props} />
    </Tooltip>
  ) : (
    <AimBadgeContent {...props} />
  );
}
