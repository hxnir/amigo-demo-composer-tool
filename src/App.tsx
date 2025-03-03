import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react'
import customTheme from './theme/theme'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex height="100vh" width="100vw">
        <Text margin="auto" size="TextMD">Create your own demo here! 📺</Text>
      </Flex>
    </ChakraProvider>
  )
}

export default App
