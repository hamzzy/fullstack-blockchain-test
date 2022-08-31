import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
    Box,
    Input
  } from "@chakra-ui/react";

  import { FunctionComponent } from "react";
  
  interface HeroSectionProps {}
  
  export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
      <Container maxW="container.lg" 
        
      >
        <Center p={4} minHeight="50vh" >
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading size="2xl" mb={4} color="gray.700">
                Want to verify a car details 
              </Heading>
  
              <Text fontSize="xl" color="gray.500">
                use this blockchain powered Vin  search solution
              </Text>
  
              <Text my={2} fontSize="sm" color="gray.500">
                102+ builders have signed up in the last 30 days
              </Text>
              <Box mt={9}>
              <Input name="vin" placeholder='Enter a car VIN' size='lg'/>

              <Button
                mt={9}
                colorScheme='blue'                
              >
                Search →
              </Button>
  </Box>
              
            </Container>
          </VStack>
        </Center>
      </Container>
    );
  };