import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import NewsCard from "../Cards/newsCard";

export default function News() {
  return (
    <SimpleGrid minChildWidth="160px" spacing="10px">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </SimpleGrid>
  );
}
