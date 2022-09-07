import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Box,
  Input,
} from "@chakra-ui/react";
import { utils } from "ethers";
import { useGetAllCarQuery } from "generated/graphql";
import { ApiClientsContext } from "pages/_app";

import { FunctionComponent, useContext, useEffect, useState } from "react";
import Card from "./Card";
import { addVehicleLogo, byte2Vin } from "utils/formatingUtils";
interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const [getdata, setData] = useState<any>([]);

  const [searchInput, setSearchInput] = useState([]);
  const apiClients = useContext(ApiClientsContext)!;
  const { subgraphClients } = apiClients;
  const [queryParams, setQueryParams] = useState<any>({
    client: subgraphClients.client,
  });

  useEffect(() => {
    setQueryParams({
      client: subgraphClients.client,
      variables: {},
    });
  }, []);
  const { data, error, loading } = useGetAllCarQuery(queryParams);
  useEffect(() => {
    if (data) {
      console.log("data", data);
      setData(data?.vehicleEntities);
    }
  }, [data, error, loading]);
  const searchItems = (searchValue: string) => {
    if(!searchValue || !searchValue?.length) {
			return
		}
    const vin = utils.formatBytes32String(searchValue);
    const filteredData = getdata.filter((item: any) => {
      return item.vin === vin;
    });
    setSearchInput(filteredData);
    
    
  };

  return (
    <Container maxW="container.lg">
      <Center p={4} minHeight="50vh">
        <VStack>
          <Container maxW="container.md" textAlign="center">
            <Heading size="2xl" mb={4} color="gray.700">
              Want to verify a car details
            </Heading>

            <Text fontSize="xl" color="gray.500">
              use this blockchain powered Vin search solution
            </Text>
            <Box mt={9}>
              <Input
                name="vin"
                placeholder="Enter a car VIN"
                size="lg"
                onChange={(e) => searchItems(e.target.value)}
              />
            </Box>
          </Container>

          <Container mt="100px">

            { searchInput.length > 0 &&searchInput.map((data:any)=>(
              <Card
              key=""
              vin={data.vin}
              image={addVehicleLogo(data.brand)}
               brand={data.brand}
               model = {data.model}
              />
              
)
            )
            }
          </Container>
        </VStack>
      </Center>
    </Container>
  );
};
