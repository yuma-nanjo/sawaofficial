import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import BlogCard from "../Cards/blogCard";

export default function Blog() {
  return (
    <SimpleGrid minChildWidth="160px" spacing="10px">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </SimpleGrid>
  );
}
