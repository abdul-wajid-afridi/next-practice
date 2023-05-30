import { prisma } from "@/app/db";
import { NextApiRequest, NextApiResponse } from "next";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await prisma?.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        password: "passKod",
      },
    });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
