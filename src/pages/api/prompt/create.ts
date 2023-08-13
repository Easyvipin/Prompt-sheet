// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      let { category, tool, prompt, userId } = req.body;
      let categoryDoc;
      /* check if the current category exist */
      const categoryExist = await prismaClient.category.findFirst({
        where: {
          authorId: userId,
          type: category,
        },
      });

      if (!categoryExist) {
        categoryDoc = await prismaClient.category.create({
          data: {
            type: category,
            authorId: userId,
          },
        });
      } else {
        categoryDoc = categoryExist;
      }

      /* Create a prompt with determined category */

      const newPrompt = await prismaClient.prompt.create({
        data: {
          content: prompt,
          aiTool: tool,
          author: { connect: { clerkUserId: userId } },
          category: {
            connect: {
              id: categoryDoc?.id,
            },
          },
        },
      });
      res.status(201).end();
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
