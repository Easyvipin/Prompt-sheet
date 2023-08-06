import HomeContainer from "@src/Containers/HomeContainer";
import { GetStaticProps } from "next";

export default function Home(props) {
  return <HomeContainer />;
}

/* export const getStaticProps: GetStaticProps<{}> = async () => {
  const allPrompts = await prismaClient.prompt.findMany();
  return {
    props: {
      prompts: allPrompts,
    },
  };
};
 */
