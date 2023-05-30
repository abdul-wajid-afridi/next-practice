import { prisma } from "@/app/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await prisma?.user.findMany();
    res.status(200).json(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
export default handler;
