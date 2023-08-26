// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import prismaClient from "../../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { userId } = getAuth(req);
      const { category: desiredCategory, tool: desiredTool } = req.query;
      const filterObj = {};
      let userPrompts;

      if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      if (desiredCategory) {
        filterObj["categoryIds"] = desiredCategory;
      }
      if (desiredTool) {
        filterObj["aiTool"] = desiredTool;
      }

      /* check the userId exist in associated db */

      const userExist = await prismaClient.user.findUnique({
        where: {
          clerkUserId: userId,
        },
      });

      if (userExist) {
        userPrompts = await prismaClient.user.findMany({
          where: {
            clerkUserId: userId,
          },
          select: {
            Prompts: {
              where: filterObj,
              select: {
                id: true,
                content: true,
                aiTool: true,
                category: true,
                createdAt: true,
              },
            },
          },
        });
        res.status(200).json({
          prompts: userPrompts[0].Prompts,
        });
      } else {
        res.status(200).json({
          prompts: [],
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
