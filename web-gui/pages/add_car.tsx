import type { NextPage } from "next";
import { useState } from "react";
import { Flex,Stack ,Container,Input, Heading, Button, Spacer, HStack } from "@chakra-ui/react";
import bgimage from "../public/assets/bg.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header/header";
import { FunctionComponent } from "react";

interface DasboardProps {}

export const AddCar: FunctionComponent<DasboardProps> = () => {
  return (
    <Layout>
        <Heading>Hello</Heading>
        <Spacer/>
        <Flex>
          <Button>Addcar</Button>
        </Flex>
        <Flex>

  <Input placeholder="Enter services worker address" size="lg" />

  <Input placeholder="Enter services worker address" size="lg" />
  </Flex>

    </Layout>
  );
};
export default AddCar;
