import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Badge,Grid,GridItem ,Box,Image ,Button, Container, Flex, FormControl, Heading, Input, Stack, Text, useColorModeValue, FormErrorMessage, useToast, ToastId } from "@chakra-ui/react";
import bgimage from "../public/assets/bg.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { FunctionComponent } from "react";
import Dashboard from "@components/dashboard";
import { useRouter } from "next/router";
import { useAccount, useBalance, useContract, useContractEvent, useSigner } from "wagmi";
import Link from "next/link";
import { ServiceWorkerTable } from "@components/Table/ServiceWorker";
import { SubmitHandler, useForm } from 'react-hook-form'
import Vehicle from "../../abis/VehicleManager.json";
import ErrorToast from "@components/Toast/errorToast";
import getErrorMessage from "utils/errorUtils";
import useVehicleContract from "hooks/contracts/useAddVehicleContract";
import SuccessToast from "@components/Toast/successToast";

interface IndexProps {

}


interface IFormInputs {
  service_address: string
}

export const Index: FunctionComponent<IndexProps> = () => {
  const router = useRouter()
  const { address, connector, isConnected } = useAccount();
  const { data: signer } = useSigner()
  

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  })
  const vehicleContract = useVehicleContract()
  const toastRef = useRef<ToastId>()
	const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>()

useEffect(()=>{
  if(!isConnected) router.replace("/");
},[isConnected]);

const onSubmit: SubmitHandler<IFormInputs> = async (data) =>{
  try {

const service_add=await vehicleContract.addServiceWorker(data.service_address);
const TransactionData = await service_add.wait()
if (TransactionData) {
  toastRef.current = toast({
    position: "top",
    render: () => (
      <SuccessToast
        heading="Car Details"
        body="car added "
        close={() => {
          if (toastRef.current) {
            toast.close(toastRef.current);
          }
        }}
      />
    ),
    onCloseComplete: () => {
      router.reload();
    },
  });
}
} catch(e: any) {
  const message = getErrorMessage(e)
  toastRef.current = toast({
    position: 'top',
    render: () => ErrorToast({
      content: message,
      close: () => {
        if(toastRef.current) {
          toast.close(toastRef.current)
        }
      },
    }),
  })
}


};

  return (
    <Dashboard>
      <Container  mb="6" >
        <Heading>Welcome to Admin</Heading>
        </Container>
        <Flex
      >
<Grid templateColumns='repeat(5, 1fr)' gap={4}>
<GridItem colSpan={2} >

<Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '30%', md: '540px' }}
        height={{ sm: '200px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {address}

          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
              {data?.formatted} {data?.symbol}
          </Text>
        </Stack>
      </Stack>
      </GridItem>
      <GridItem colStart={4}>
      <Stack
        spacing={4}
        width="400px"
        maxW={'xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'xl'}
        p={9}
        my={10}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
         Add Service worker
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl id="address" isInvalid={errors.service_address}>
          <Input
            placeholder="0x0000000000000000000000"
            _placeholder={{ color: 'gray.500' }}
            size="lg"
            type="text"
            {...register('service_address', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
          {errors.service_address && errors.service_address.message}
        </FormErrorMessage>
        </FormControl>
        <Stack spacing={6} mt="8">
          <Button
          isLoading={isSubmitting}
          type="submit"
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
        </form>
      </Stack>
      </GridItem>
      </Grid>
    </Flex>
    <Flex>
  <Stack
        spacing={4}
        width="50vh"
        height="50vh"
        maxW={'xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'xl'}
        p={9}
        overflow="scroll"
        my={10}>
        <Heading  >
         List of service worker added 
        </Heading>
        <ServiceWorkerTable data=""/>

      </Stack>
    </Flex>
    </Dashboard>
  );
};
export default Index;
