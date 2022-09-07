import type { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  useColorModeValue,
  Container,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Select,
  useToast,
  ToastId,
  FormErrorMessage,
} from "@chakra-ui/react";
import carlist from "../../utils/cars_brand_logo.json";
import { useRouter } from "next/router";
import {
  useAccount,
} from "wagmi";
import { FunctionComponent } from "react";
import Dashboard from "@components/dashboard";
import ErrorToast from "@components/Toast/errorToast";
import getErrorMessage from "utils/errorUtils";
import { SubmitHandler, useForm } from "react-hook-form";
import SuccessToast from "@components/Toast/successToast";
import { utils } from "ethers";
import useVehicleContract from "hooks/contracts/useAddVehicleContract";
import { useGetAllCarQuery } from "generated/graphql";
import { ApiClientsContext } from "pages/_app";
import CustomTable from "@components/Table/carTable";
interface CarProps {}

interface IFormInputs {
  vin: string;
  brand: string;
  model: string;
  year: number;
}
export const Car: FunctionComponent<CarProps> = () => {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const toastRef = useRef<ToastId>();
  const toast = useToast();
  const vehicleContract = useVehicleContract()


  
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();
  useEffect(() => {
    if (!isConnected) router.replace("/");
  }, [isConnected]);

  

  

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const vin: string = utils.formatBytes32String(data.vin);

      const service_add = await vehicleContract.addCar(
        vin,
        data.brand,
        data.model,
        data.year
      );
      const updateTransactionData = await service_add.wait();
      if (updateTransactionData) {
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
    } catch (e: any) {
      const message = getErrorMessage(e);
      toastRef.current = toast({
        position: "top",
        render: () =>
          ErrorToast({
            content: message,
            close: () => {
              if (toastRef.current) {
                toast.close(toastRef.current);
              }
            },
          }),
      });
    }
  };
  return (
    <Dashboard>
      <Container>
        <Stack
          spacing={4}
          width="100vh"
          maxW={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"xl"}
          p={9}
          my={10}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Add Car
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="vin" isInvalid={errors.vin}>
              <Input
                placeholder="vin"
                _placeholder={{ color: "gray.500" }}
                size="lg"
                type="text"
                {...register("vin", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.vin && errors.vin.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="brand" mt="6" isInvalid={errors.brand}>
              <Select key="" placeholder="Select car">
                {carlist.map((data) => (
                  <option
                    key=""
                    value={data.name}
                    {...register("brand", {
                      required: "This is required",
                    })}
                  >
                    {data.name}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.brand && errors.brand.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="model" mt="6" isInvalid={errors.model}>
              <Input
                placeholder="model"
                _placeholder={{ color: "gray.500" }}
                size="lg"
                type="text"
                {...register("model", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.model && errors.model.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="year" mt="6" isInvalid={errors.year}>
              <Input
                placeholder="year"
                _placeholder={{ color: "gray.500" }}
                size="lg"
                type="text"
                {...register("year", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.year && errors.year.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6} mt="6">
              <Button
                isLoading={isSubmitting}
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
      <Box>

      <CustomTable />

        </Box>
    </Dashboard>
  );
};
export default Car;
