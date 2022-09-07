import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Box,
  Input,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ApiClientsContext } from "pages/_app";
import { FaCheckCircle } from 'react-icons/fa';
import { useContext, useEffect, useRef, useState } from "react";
import { useGetAllServiceWorkerQuery } from "generated/graphql";

export const ServiceWorkerTable = () => {
  const [serviceWorkers,setServiceWorker]= useState<any>([]);
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
  const { data, error, loading } = useGetAllServiceWorkerQuery(queryParams);
  useEffect(() => {
    if (data) {
      setServiceWorker(data?.serviceWorkersEntities);
      // console.log("data", data?.serviceWorkersEntities);

    }
    
  }, [data, error, loading]);
  useEffect(() => {
    console.log(serviceWorkers);
    
  }, []);  
  return (
    <Container maxW="container.lg"
    width="500px"
    >
      
      <List spacing={3}>
      { serviceWorkers.length > 0 &&  serviceWorkers.map((data:any)=>(

  <ListItem key="">
    <ListIcon as={FaCheckCircle} color='green.500' />
      {data.workers}
  </ListItem>  
      ))}
</List>
        
    </Container>
  );
};
