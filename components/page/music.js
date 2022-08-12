import Image from "next/image";
import { Box, Center, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import MusicCard from "../Cards/musicCard";

export default function Music() {
  return (
    
      <SimpleGrid minChildWidth="300px" spacing="10px">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </SimpleGrid>
  );
}
