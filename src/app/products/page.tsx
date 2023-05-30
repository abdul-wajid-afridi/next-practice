import Head from "next/head";
import React, { Suspense } from "react";
import { prisma } from "../db";

const ProductScreen = async () => {
  // const addUsers = await prisma.user.create({
  //   data: { email: "lili22@gmail.com", name: "lili", password: "123456" },
  // });
  // const addAcoiun = await prisma.accounts.create({
  //   data: { title: "game", content: "content data" },
  // });

  const getUsers = await prisma.user.findMany();
  const getAccounts = await prisma.accounts.findMany();

  return (
    <div>
      <title>Product title</title>
      {/* <Head>
        <title>Sling Academy</title>
        <meta
          name="description"
          content="I hope this tutorial is helpful for you"
        />
      </Head> */}
      <Suspense fallback={<p>loading the accounts ......</p>}>
        <>
          {getAccounts.map((it) => {
            return (
              <div key={it.id}>
                <p>{it.content}</p>
                <p>{it.title}</p>
              </div>
            );
          })}
        </>
      </Suspense>
      <hr className="h-[2px] w-full bg-slate-600" />
      <Suspense fallback={<p>loading the users ......</p>}>
        <>
          {getUsers.map((it) => {
            return (
              <div key={it.id}>
                <p>{it.email}</p>
                <p>{it.name}</p>
                <p>{it.password}</p>
              </div>
            );
          })}
        </>
      </Suspense>
    </div>
  );
};

export default ProductScreen;
