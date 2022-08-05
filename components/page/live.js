import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import LiveCard from "../Cards/liveCard";

export default function Live() {
  return (
    <SimpleGrid minChildWidth="200px" spacing="20px">
      <LiveCard />
      <LiveCard />
      <LiveCard />
      <LiveCard />
      <LiveCard />
    </SimpleGrid>
  );
}
