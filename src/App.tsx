import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react'
import customTheme from './theme/theme'
import AimBadge from './components/AimBadge'
import PageLayout from './components/PageLayout'
import { Activity, InfoCircle } from "./components/icons";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <PageLayout title="Create Your Demo Here! 📺">
        <Flex height="100vh" width="100vw" justifyContent="center">
          <Flex direction="column" gap={2}>
            <Text variant="SemiBold" size="TextMD">
              The following are instructions to bolt.new for how to build
              websites using this code base
            </Text>
            <Text variant="Regular" size="TextMD">
              Ever page should be implemented with the PageLayout component as
              this page
            </Text>
            <Flex
              gap={1}
              direction="column"
              justifyContent="center"
              width="100%"
            >
              <Text variant="Regular" size="TextSM">
                An example of the badge usage, use it for all the badges that
                you need!
                Note the text is capitalized, this is intentional.
              </Text>
              <Flex gap={1}>
                <AimBadge size="md" text="Success" color="green" />
                <AimBadge size="md" text="Error" color="red" />
                <AimBadge size="md" text="Warning" color="yellow" />
                <AimBadge size="md" text="Activity" color="primary" leftIcon={Activity} />
                <AimBadge size="md" text="Info" color="primary" rightIcon={InfoCircle} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </PageLayout>
    </ChakraProvider>
  )
}

export default App
