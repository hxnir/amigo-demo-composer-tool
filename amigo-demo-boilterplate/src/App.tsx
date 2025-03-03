import { useState } from 'react'
import { ChakraProvider, Box, Button, Heading, Image, Link, Text } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import customTheme from './theme/theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" py={10}>
        <Box>
          <Link href="https://vite.dev" isExternal>
            <Image src={viteLogo} className="logo" alt="Vite logo" boxSize="100px" />
          </Link>
          <Link href="https://react.dev" isExternal>
            <Image src={reactLogo} className="logo react" alt="React logo" boxSize="100px" />
          </Link>
        </Box>
        <Heading as="h1" size="2xl" my={4}>
          Vite + React
        </Heading>
        <Box className="card" p={5} shadow="md" borderWidth="1px">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Text mt={3}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Box>
        <Text className="read-the-docs" mt={5}>
          Click on the Vite and React logos to learn more
        </Text>
      </Box>
    </ChakraProvider>
  )
}

export default App
