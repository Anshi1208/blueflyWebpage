import {  Button,  Center,  Input,  SimpleGrid,  Stack,  Text,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  let token = true;

  const handleLogin = (event) => {
    event.preventDefault() // Prevent the default form submission behavior
    if (token) {
      navigate('/')
      alert('Login Successfully')
      console.log("yes")// Navigate to the home page if login is successful
    } else {
      alert("wrong data")
      console.log('no') // Uncomment this if you want to handle incorrect login
    }
  }

  return (
    <Center>
      <SimpleGrid w={'xl'} mt={5}>
        <Stack py={5} spacing={8}>
          <Text fontSize={'5xl'}>LOGIN</Text>
          <form onSubmit={handleLogin}>
            <Stack>
              <Center>
                <Input
                  type="email"
                  required
                  placeholder="Email"
                  h={50}
                  w={'sm'}
                />
              </Center>
              <Center>
                <Input
                  type="password"
                  required
                  placeholder="Password"
                  h={50}
                  w={'sm'}
                />
              </Center>
              <Center>
                <Button
                  type="submit"
                  h={50}
                  w={'sm'}
                  bg={'black'}
                  color={'white'}
                >
                  SIGN IN
                </Button>
              </Center>
            </Stack>
          </form>
          <Center>
            <Link to={'/signup'}>Create account</Link>
          </Center>
        </Stack>
      </SimpleGrid>
    </Center>
  )
}

export default Login
