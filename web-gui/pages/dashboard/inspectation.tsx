import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
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
  FormLabel,
  useToast,
  HStack,
  ToastId,
  FormErrorMessage,
} from "@chakra-ui/react";
import carlist from "../../utils/cars_brand.json";
import bgimage from "../public/assets/bg.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { FunctionComponent } from "react";
import Dashboard from "@components/dashboard";
import {
  useAccount,
  useBalance,
  useContract,
  useContractEvent,
  useSigner,
} from "wagmi";
import { useRouter } from "next/router";

import Vehicle from "../../abis/VehicleManager.json";
import ErrorToast from "@components/Toast/errorToast";
import getErrorMessage from "utils/errorUtils";
import { SubmitHandler, useForm } from "react-hook-form";
import SuccessToast from "@components/Toast/successToast";
interface InspectationProps {}
const VehicleCondition: Array<string> = ["Excelent", "Good", "Fair", "Bad"];
enum vehicleCondition{
  Excelent,
  Good,
  Bad,
}
interface IFormInputs {
  vin: vehicleCondition,
  brake: vehicleCondition,
  bumpers: vehicleCondition,
  interior: vehicleCondition,
  lights: vehicleCondition,
  tyres: vehicleCondition,
  mileage: number,
  engine: vehicleCondition,
}
export const Inspectation: FunctionComponent<InspectationProps> = () => {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const toastRef = useRef<ToastId>();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {

  }
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
            Add Car Inspectation
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>

          <HStack mt="6">
              
          <FormControl id="brand" >
          <FormLabel>VIN</FormLabel>

            <Select key="" placeholder="select condition">
              {VehicleCondition.map((data,index) => (
                <option key="index" value={index}
                {...register("vin", {
                  required: "This is required",
                })}
                >
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.vin && errors.vin.message}
              </FormErrorMessage>
            </FormControl>
          <FormControl id="brake" >
            <FormLabel>Brake</FormLabel>
            <Select key="" placeholder="select condition">
             {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.brake && errors.brake.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack mt="6">

          <FormControl id="bumper" >
            <FormLabel>Bumpers</FormLabel>

            <Select key="" placeholder="select condition">
              {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}ondition
            </Select>
          <FormErrorMessage>
                {errors.bumpers && errors.bumpers.message}
              </FormErrorMessage>
            </FormControl>
          <FormControl id="interior">
            <FormLabel>Interior</FormLabel>
            <Select key="" placeholder="select condition">
     {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.interior && errors.interior.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>

          <HStack mt="6">

          <FormControl id="light" >
            <FormLabel>Lights</FormLabel>

            <Select key="" placeholder="select condition">
              {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.lights && errors.lights.message}
              </FormErrorMessage>
            </FormControl>

          <FormControl id="brand" >
            <FormLabel>Tyres</FormLabel>

            <Select key="" placeholder="select condition">
              {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.tyres && errors.tyres.message}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl id="mileage" isInvalid={errors.mileage} mt="6">
          <FormLabel>Mileage</FormLabel>
            <Input
              placeholder="Mileage"
              _placeholder={{ color: "gray.500" }}
              size="lg"
              type="text"
              {...register("mileage", {
                required: "This is required",
              })}
            />
          <FormErrorMessage>
                {errors.mileage && errors.mileage.message}
              </FormErrorMessage>
            </FormControl>
          <FormControl id="engine" mt="6">
            <FormLabel>Engine</FormLabel>
            <Select key="" placeholder="select condition">
              {VehicleCondition.map((data,index) => (
                <option key="index" value={index}>
                  {data}
                </option>
              ))}
            </Select>
          <FormErrorMessage>
                {errors.engine && errors.engine.message}
              </FormErrorMessage>
            </FormControl>
          <Stack spacing={6} mt="6">
            <Button
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
    </Dashboard>
  );
};
export default Inspectation;
