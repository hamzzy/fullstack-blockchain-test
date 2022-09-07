import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import {
  useInspectationDetailsOnlyQuery,
  useGetCarDetailsQuery,
} from "generated/graphql";

import { Layout } from "../components/Layout";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { ApiClientsContext } from "./_app";
import { utils } from "ethers";
import { addVehicleLogo, byte2Vin, convertEnum } from "utils/formatingUtils";

interface DasboardProps {}

export const SearchDetails: FunctionComponent<DasboardProps> = () => {
  const [carVin, setCarVin] = useState<String>("");
  const [getInpsect, setInspect] = useState<any>([]);
  const [getData, setData] = useState<any>({
    brand: "",
    createdAt: "",
    model: "",
    vin: "",
    year: "",
    id: "",
  });

  const apiClients = useContext(ApiClientsContext)!;
  const { subgraphClients } = apiClients;
  const router = useRouter();
  useEffect(() => {
    if (router.query) {
      const query: any = router.query;
      setCarVin(query.carId);
    }
  }, [router]);

  const [queryParams, setQueryParams] = useState<any>({
    client: subgraphClients.client,
  });

  const [queryParams1, setQueryParams1] = useState<any>({
    client: subgraphClients.client,
  });
  useEffect(() => {
    setQueryParams({
      client: subgraphClients.client,
      variables: {
        vin: carVin,
      },
    });
  }, []);

  useEffect(() => {
    setQueryParams1({
      client: subgraphClients.client,
      variables: {
        car: getData.id,
      },
    });
  }, []);

  const { data, error, loading } = useGetCarDetailsQuery(queryParams);
  useEffect(() => {
    if (data) {
      console.log("cardetails", data.vehicleEntities[0]);
      setData({
        brand: data.vehicleEntities[0].brand,
        createdAt: data.vehicleEntities[0].createdAt,
        model: data.vehicleEntities[0].model,
        vin: byte2Vin(data.vehicleEntities[0].vin),
        year: data.vehicleEntities[0].year,
        id: data.vehicleEntities[0].id,
      });
    }
  }, [data, error, loading]);

  const {
    data: inspect,
    error: inspect_error,
    loading: inspect_loading,
  } = useInspectationDetailsOnlyQuery(queryParams1);

  useEffect(() => {
    if (inspect) {
      console.log("inspect", inspect.inspectationDetailsEntities);
      setInspect(inspect.inspectationDetailsEntities);

      // setData({
      //   brand: data.vehicleEntities[0].brand,
      //   createdAt: data.vehicleEntities[0].createdAt,
      //   model : data.vehicleEntities[0].model,
      //   vin : byte2Vin(data.vehicleEntities[0].vin),
      //   year: data.vehicleEntities[0].year,
      //  id : data.vehicleEntities[0].id,
      // });
    }
  }, [inspect, inspect_error, inspect_loading]);

  return (
    <Layout>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={addVehicleLogo(getData.brand)}
              fit={"contain"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                autoCapitalize="true"
              >
                {getData.brand}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {getData.vin}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Car Details
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem> Model : {getData.model}</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Year: {getData.year}</ListItem>{" "}
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Inspectation Details
                </Text>

                <List spacing={2}>
                  {getInpsect.length === 0 ? (
                    <>
                      <Text> No details found</Text>
                    </>

                  ) : (
                    getInpsect.map((dt)=>(
                    
                    <>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Brake:
                        </Text>{" "}
                        {convertEnum(dt.brake)}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Bumpers:
                        </Text>{" "}
                        {convertEnum(dt.bumpers)}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Light:
                        </Text>{" "}
                        {convertEnum(dt.light)}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Milleage:
                        </Text>{" "}
                        {dt.milleage}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Tyres:
                        </Text>{" "}
                        {convertEnum(dt.tyres)}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Engine:
                        </Text>{" "}
                        {convertEnum(dt.engine)}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Interior:
                        </Text>{" "}
                        {convertEnum(dt.interior)}
                      </ListItem>
                    </>
                    ))
                  )}
                </List>
              </Box>
            </Stack>

          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default SearchDetails;
