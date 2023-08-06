import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<IPageLayoutProps> = ({
  children,
}) => {
  return (
    <main className="font-sans text-gray-600">
      <header className="p-2  flex flex-col justify-center border border-gray-200 items-center">
        <h1 className=" font-mono font-semibold">PromptSheet.</h1>
        <nav className="mt-4 tracking-wide flex gap-8 justify-center">
          <Link
            href="/categories"
            className=" font-serif hover:text-gray-500 hover:underline"
          >
            categories
          </Link>
          <Link
            href="/"
            className=" font-serif hover:text-gray-500 hover:underline"
          >
            home
          </Link>
          <Link
            href="/create"
            className=" font-serif hover:text-gray-500 hover:underline"
          >
            create
          </Link>
          <UserButton  afterSignOutUrl="/sign-up" />
        </nav>
      </header>
      <div className="m-8">{children}</div>
    </main>
  );
};

export default PageLayout;
