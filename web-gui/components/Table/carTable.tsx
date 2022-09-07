import { useContext, useEffect, useRef, useState } from "react";
import { useTable, usePagination } from "react-table";
import { ApiClientsContext } from "pages/_app";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  TableContainer,
  Text,
  Image,
} from "@chakra-ui/react";
import { useGetAllCarQuery } from "generated/graphql";
import { addVehicleLogo, byte2Vin } from "utils/formatingUtils";

const columns = ["Logo", "Vin", "Brand", "Model", "Year", "Date"];

export default function CustomTable() {
  const [getData, setData] = useState<any>([]);
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

  const { data: data_d, error, loading } = useGetAllCarQuery(queryParams);
  useEffect(() => {
    if (data_d) {
      console.log("data", data_d);
      setData(data_d?.vehicleEntities);
    }
  }, [data_d, error, loading]);
  return (
    <>
      <TableContainer width="100%">
        <Table
          variant="simple"
          size="lg"
          bg={useColorModeValue("white", "gray.700")}
        >
          <Thead>
            <Tr>
              {columns.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {getData.length > 0 ? (
              getData.map((dt, index) => (
                <>
                  <Tr key={index}>
                    <Td>
                      <Image
                        rounded={"lg"}
                        height={200}
                        objectFit={"contain"}
                        src={addVehicleLogo(dt.brand)}
                      />
                    </Td>

                    <Td>{byte2Vin(dt.vin)}</Td>
                    <Td>{dt.brand}</Td>
                    <Td>{dt.model}</Td>
                    <Td>{dt.year}</Td>
                    <Td>{dt.createdAt}</Td>
                  </Tr>
                </>
              ))
            ) : (
              <>
                <Text> No record found</Text>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
