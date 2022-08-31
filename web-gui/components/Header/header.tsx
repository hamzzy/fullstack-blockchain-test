import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useNetwork,
} from "wagmi";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { trimAddress } from "utils/formatingUtils";
import { useRouter } from "next/router";

const Links = ["dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  })
  const router = useRouter()


  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        position="sticky"
        top="0"
        py={{ base: 2 }}
        px={{ base: 4 }}
        minH={"60px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              HiCar
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            {!isConnected ? (
              <>
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.300"}
                >
                  <Link
                    href="/connect_wallet"
                    style={{ textDecoration: "none" }}
                  >
                    Connect
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">{trimAddress(address, 8)}</Text>
                        <Text fontSize="xs" color="gray.600">
                          Admin
                        </Text>
                        <Text>
                        {data?.formatted} {data?.symbol}
                        </Text>
                        
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="/dashboard" textDecoration="none">
                        Dashboard
                      </Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Text onClick={
                        ()=>{
                          disconnect()
									       router.replace('/')
                       }
                        }>Logout</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
