import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { byte2Vin } from "utils/formatingUtils";

interface CardItem {
  id:number;
  image: string;
  brand: string;
  model: string;
  vin: string;
}
export default function Card({ image, brand, model, vin,id }: CardItem) {
  const router = useRouter()

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {model}
          </Heading>
          <Stack direction={"column"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {byte2Vin(vin)}
            </Text>

            <Button 
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
             onClick={
              () => router.push({
                pathname: '/search_details',
                query: {
                  carId: vin
                },
              })
            }>
              Click for more
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
