import HomeContainer from "@src/Containers/HomeContainer";
import { GetStaticProps } from "next";

import prismaClient from "../../prisma";

export default function Home({ prompts }) {
  return <HomeContainer prompts={prompts} />;
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  const allPrompts = await prismaClient.prompt.findMany();
  return {
    props: {
      prompts: allPrompts,
    },
  };
};
