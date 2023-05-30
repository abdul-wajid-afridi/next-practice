import { prisma } from "@/app/db";
import React from "react";

const Dashboard = async () => {
  const createUser = async (data: FormData) => {
    "use server";
    const name = data.get("name")?.valueOf();
    const email = data.get("email")?.valueOf();
    const password = data.get("password")?.valueOf();
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      throw new Error("invalid data");
    }
    const user = await prisma.user.create({ data: { name, email, password } });
  };
  return (
    <div>
      <form action={createUser}>
        <input type="text" name="name" placeholder="userName" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
