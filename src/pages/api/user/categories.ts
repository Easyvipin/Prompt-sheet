import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user: clerkUserId } = req.query;
  console.log(clerkUserId);

  if (req.method === "GET") {
    try {
      const categories = await prismaClient.user.findUnique({
        where: {
          clerkUserId: clerkUserId,
        },
        select: {
          Categories: true,
        },
      });
      res.status(201).json({
        categories,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
