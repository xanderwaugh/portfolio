import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Heading textAlign={"center"}>
        Hello! My name is:
        <br />
        Xander Waugh
      </Heading>
    </div>
  );
};

IndexPage.displayName = "Home Page Title";

export default IndexPage;
