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
import { GetCarDetailsQuery, useGetCarDetailsQuery } from "generated/graphql";

import { Layout } from "../components/Layout";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { ApiClientsContext } from "./_app";
import { utils } from "ethers";
import { addVehicleLogo, byte2Vin } from "utils/formatingUtils";

interface DasboardProps {}

export const SearchDetails: FunctionComponent<DasboardProps> = () => {
  const [carVin, setCarVin] = useState<string>("");
  const [getData, setData] = useState<any>({
    brand: "",
    createdAt: "",
    model: "",
    vin: "",
    year: "",
    id:""
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
  useEffect(() => {
    setQueryParams({
      client: subgraphClients.client,
      variables: {
        vin: carVin,
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
        model : data.vehicleEntities[0].model,
        vin : byte2Vin(data.vehicleEntities[0].vin),
        year: data.vehicleEntities[0].year,
       id : data.vehicleEntities[0].id,
      });
    }  }, [data, error, loading]);


    useEffect(() => {
      setQueryParams({
        client: subgraphClients.client,
        variables: {
          id: carVin,
        },
      });
    }, []);
  
    // const { data: inspect, error, loading } = useGetCarDetailsQuery(queryParams);


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
              src={
                addVehicleLogo(getData.brand)
              }
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
                    <ListItem> Model : {" "} {getData.model}</ListItem>
                  </List>
                  <List spacing={2}>
                  <ListItem>Year: {" "} {getData.year}</ListItem>{" "} 
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
                  Inspeactation Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default SearchDetails;
