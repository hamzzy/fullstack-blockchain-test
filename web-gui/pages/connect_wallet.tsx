import type { NextPage } from "next";
import { useState } from "react";
import NextLink from "next/link";
import { Layout } from "../components/Layout";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container,
  } from '@chakra-ui/react';
  import { FunctionComponent } from "react";
import { useConnect } from "wagmi";
import { useRouter } from 'next/router'


interface ConnectWalletProps {}

export const ConnectWallet: FunctionComponent<ConnectWalletProps> = () => {
    const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
    const router = useRouter()

  return (
    <Layout>
      <Container >
      <Flex
      minH={'50vh'}
      mt="9"
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Stack spacing={10}>
            {connectors.map((connector) => (

              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={() =>{ 
                    connect({ connector })
                    if(connector.ready){
                        router.push({ pathname: '/dashboard' })
                    }
                }
                }
                key={connector.id}
                _hover={{
                  bg: 'blue.500',

                }}>
          {connector.name}
          {!connector.ready && ' (unsupported)'}
            </Button>
            
            ))
}

{error && <Flex>{error.message}</Flex>}

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Container>
    </Layout>
  );
};
export default ConnectWallet;
