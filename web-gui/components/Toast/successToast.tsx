import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface Props {
  heading: string;
  body: string;
  close: () => void;
}

function SuccessToast({ heading, body, close }: Props) {
  return (
    <Flex
      p={7}
      bg="#BCF1DF"
      border="2px solid #69B399"
      borderRadius="6px"
      minW="578px"
      // maxH="94px"
      direction="row"
      justify="center"
      align="center"
    >
      <Flex direction="column" align="start" justify="start">
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight="700"
          color="#334640"
        >
          {heading}
        </Text>
        <Text
          fontSize="16px"
          lineHeight="23px"
          fontWeight="400"
          color="#334640"
        >
          {body}
        </Text>
      </Flex>
      <Box m="auto" />
      <Flex h="full" align="center" justify="center">
      <IconButton
					_hover={{}}
					variant="ghost"
					_active={{}}
					icon={<CloseIcon/>}
					aria-label="Close"
					onClick={close}
				/>      </Flex>
    </Flex>
  );
}

export default SuccessToast;
