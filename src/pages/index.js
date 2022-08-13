import * as React from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Divider,
} from "@chakra-ui/react";
import EventCard from "../components/EventCard";

function Hello() {
  return (
    <Box p="7">
      <EventCard />
    </Box>
  );
}

const IndexPage = () => {
  return (
    <main>
      <Box p="4">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal">Sign Up</Button>
            <Button colorScheme="teal">Log in</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Divider />
      <Box p="4">
        <Hello />
      </Box>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
