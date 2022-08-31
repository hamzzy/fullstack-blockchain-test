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

import { FunctionComponent } from "react";

interface serviceWorkerTableProps {
  data: any;
}

export const ServiceWorkerTable: FunctionComponent<
  serviceWorkerTableProps
> = () => {
  return (
    <Container maxW="container.lg"
    >
      <List spacing={3}>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  <ListItem>
    <ListIcon as="svg" color='green.500' />
    0xEB64e8Ff1c1d58fFaFF0999974F3B3D652D72f29
  </ListItem>
  
</List>
    </Container>
  );
};
