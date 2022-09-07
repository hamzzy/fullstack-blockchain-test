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
import { ApiClientsContext } from "pages/_app";
import { useGetAllCarVinQuery } from "generated/graphql";
import { byte2Vin } from "utils/formatingUtils";
import useVehicleContract from "hooks/contracts/useAddVehicleContract";
import InspectationTable from "@components/Table/InspectationTable";
interface InspectationProps {}
const VehicleCondition: Array<String> = ["Excellent", "Good", "Fair", "Bad"];
enum vehicleCondition {
  Excelent,
  Good,
  Bad,
}
interface IFormInputs {
  vin: vehicleCondition;
  brake: vehicleCondition;
  bumpers: vehicleCondition;
  interior: vehicleCondition;
  lights: vehicleCondition;
  tyres: vehicleCondition;
  mileage: number;
  engine: vehicleCondition;
}
export const Inspectation: FunctionComponent<InspectationProps> = () => {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const [getData, setData] = useState<any>([]);
  const vehicleContract = useVehicleContract();
  const apiClients = useContext(ApiClientsContext)!;
  const { subgraphClients } = apiClients;
  const [queryParams, setQueryParams] = useState<any>({
    client: subgraphClients.client,
  });

  const toastRef = useRef<ToastId>();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();
  useEffect(() => {
    setQueryParams({
      client: subgraphClients.client,
      variables: {},
    });
  }, []);

  const { data: data_d, error, loading } = useGetAllCarVinQuery(queryParams);
  useEffect(() => {
    if (data_d) {
      console.log("data", data_d);
      setData(data_d?.vehicleEntities);
    }
  }, [data_d, error, loading]);
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {

      const add_vehicle_inspection = await vehicleContract.addInspectionDetails(
        data.vin,
        data.brake,
        data.bumpers,
        data.interior,
        data.lights,
        data.tyres,
        data.mileage,
        data.engine
      )
      const updateTransactionData = await add_vehicle_inspection.wait();
      if (updateTransactionData) {
        toastRef.current = toast({
          position: "top",
          render: () => (
            <SuccessToast
              heading="Vehicle Inspecation"
              body="Add inspectation "
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
            Add Car Inspectation
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack mt="6">
              <FormControl id="vin">
                <FormLabel>VIN</FormLabel>
                <FormControl id="vin" isInvalid={errors.vin} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("vin", {
                      required: "This is required",
                    })}
                  >
                    {getData.map((data, index) => (
                      <option key="" value={data.vin}>
                        {byte2Vin(data.vin)}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormErrorMessage>
                  {errors.vin && errors.vin.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="brake">
                <FormLabel>Brake</FormLabel>
                <FormControl id="brake" isInvalid={errors.brake} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("brake", {
                      required: "This is required",
                    })}
                  >
                    {VehicleCondition.map((data, key) => (
                      <option key="" value={key}>
                        {data}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormErrorMessage>
                  {errors.brake && errors.brake.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <HStack mt="6">
              <FormControl id="bumpers">
                <FormLabel>Bumpers</FormLabel>
                <FormControl id="bumpers" isInvalid={errors.bumpers} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("bumpers", {
                      required: "This is required",
                    })}
                  >
                    {VehicleCondition.map((data, key) => (
                      <option key="" value={key}>
                        {data}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormErrorMessage>
                  {errors.bumpers && errors.bumpers.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="interior">
                <FormLabel>Interior</FormLabel>
                <FormControl id="interior" isInvalid={errors.interior} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("interior", {
                      required: "This is required",
                    })}
                  >
                    {VehicleCondition.map((data, key) => (
                      <option
                        key={key}
                        value={key}
                      >
                        {data}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormErrorMessage>
                  {errors.interior && errors.interior.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>

            <HStack mt="6">
              <FormControl id="light">
                <FormLabel>Lights</FormLabel>
                <FormControl id="lights" isInvalid={errors.lights} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("lights", {
                      required: "This is required",
                    })}
                  >
                    {VehicleCondition.map((data, key) => (
                      <option key="index" value={key}>
                        {data}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormErrorMessage>
                  {errors.lights && errors.lights.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl id="tyres">
                <FormLabel>Tyres</FormLabel>
                <FormControl id="tyres" isInvalid={errors.tyres} mt="6">
                  <Select
                    key=""
                    placeholder="select condition"
                    {...register("tyres", {
                      required: "This is required",
                    })}
                  >
                    {VehicleCondition.map((data, key) => (
                      <option key="index" value={key}>
                        {data}
                      </option>
                    ))}
                  </Select>
                </FormControl>
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
              <FormControl id="engine" isInvalid={errors.engine} mt="6">
                <Select
                  key=""
                  placeholder="select condition"
                  {...register("engine", {
                    required: "This is required",
                  })}
                >
                  {VehicleCondition.map((data, key) => (
                    <option key="index" value={key}>
                      {data}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormErrorMessage>
                {errors.engine && errors.engine.message}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={6} mt="6">
              <Button
                 isLoading={isSubmitting}

                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
      <Box>
        <InspectationTable/>

</Box>
    </Dashboard>
  );
};
export default Inspectation;
