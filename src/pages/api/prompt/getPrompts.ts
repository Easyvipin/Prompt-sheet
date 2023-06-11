// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const allPrompts = await prismaClient.prompt.findMany();
    res.status(200).json({ prompts: allPrompts });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
