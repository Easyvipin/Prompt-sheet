import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";
import {
  CategoryType,
  promptCategoriesMapWithUser,
} from "@src/utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId: clerkUserId } = req.body;
  if (req.method === "POST") {
    try {
      const existUser = await prismaClient.user.findUnique({
        where: {
          clerkUserId: clerkUserId,
        },
      });
      if (!existUser) {
        await prismaClient.user.create({
          data: {
            clerkUserId: clerkUserId,
          },
        });
        /* creating default categories for each user */
        const defaultCategories = promptCategoriesMapWithUser(clerkUserId);
        await prismaClient.category.createMany({
          data: defaultCategories,
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
