import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId: clerkUserId } = req.body;
  console.log(clerkUserId);
  if (req.method === "POST") {
    try {
      const existUser = await prismaClient.user.findUnique({
        where: {
          clerkUserId: clerkUserId,
        },
      });
      if (!existUser) {
        const newUser = await prismaClient.user.create({
          data: {
            clerkUserId: clerkUserId,
          },
        });
      }
      res.status(201).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
