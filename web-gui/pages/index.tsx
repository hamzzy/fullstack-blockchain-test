import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import bgimage from "../public/assets/bg.png";
import NextLink from "next/link";
import { Layout } from "../components/Layout";
import { HeroSection } from "../components/HeroSection";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    <Layout>
      <Flex
        w={"full"}
        h={"100vh"}
        marginTop="0"
        backgroundImage={
          `url(${bgimage})`
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <HeroSection />
      </Flex>
    </Layout>
  );
};

export default Home;
