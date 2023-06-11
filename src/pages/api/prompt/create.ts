// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { que } = req.body;

  try {
    await prismaClient.prompt.create({
      data: {
        que: que,
      },
    });
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
