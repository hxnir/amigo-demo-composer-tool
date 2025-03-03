import React from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

export interface PageWithHeaderProps extends Omit<FlexProps, 'title'> {
  title?: string | React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  gap?: number;
}

export default function PageLayout({
  title,
  subtitle,
  children,
  rightAction,
  px = { base: '1.5rem', '2xl': '2rem' },
  py = { base: '1rem', '2xl': '1.5rem' },
  gap = 4,
  ...flexProps
}: PageWithHeaderProps) {
  const showHeader = title != null || subtitle != null || rightAction != null;
  return (
    <Flex
      gap={gap}
      direction="column"
      overflowY="auto"
      px={px}
      py={py}
      {...flexProps}
    >
      {showHeader && (
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Flex direction="column" gap={1}>
            {typeof title === 'string' ? (
              <Text variant="SemiBold" size="TitleSM">
                {title}
              </Text>
            ) : (
              title
            )}
            {subtitle ? (
              <Text variant="Medium" size="TextSM" color="subtitle">
                {subtitle}
              </Text>
            ) : null}
          </Flex>

          {rightAction || null}
        </Flex>
      )}
      {children}
    </Flex>
  );
}
