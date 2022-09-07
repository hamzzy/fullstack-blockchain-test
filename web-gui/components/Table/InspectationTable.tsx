import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import {
  useGetAllCarQuery,
  useGetAllInspectationQuery,
} from "generated/graphql";
import { addVehicleLogo, byte2Vin, convertEnum } from "utils/formatingUtils";

const columns: Array<String> = [
  "vin",
  "brake",
  "bumpers",
  "interior",
  "light",
  "tyres",
  "milleage",
  "engine",
];

interface Details {
  brake: number;
  bumpers: number;
  interior: number;
  light: number;
  tyres: number;
  milleage: number;
  engine: number;
}

export default function InspectationTable() {
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

  const {
    data: data_d,
    error,
    loading,
  } = useGetAllInspectationQuery(queryParams);
  useEffect(() => {
    if (data_d) {
      console.log("data", data_d);
      setData(data_d?.inspectationDetailsEntities);
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
              getData.map((dt: Details, index: Key | null | undefined) => (
                <>
                  <Tr key={index}>
                  <Td>{byte2Vin(dt.car_id.vin)}</Td>
                    <Td>{convertEnum(dt.brake)}</Td>
                    <Td>{convertEnum(dt.bumpers)}</Td>
                    <Td>{convertEnum(dt.interior)}</Td>
                    <Td>{convertEnum(dt.light)}</Td>
                    <Td>{convertEnum(dt.tyres)}</Td>
                    <Td>{dt.milleage}</Td>
                    <Td>{convertEnum(dt.engine)}</Td>
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
