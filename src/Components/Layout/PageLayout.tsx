import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ThemeChanger from "../UI/ThemeChanger";

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<IPageLayoutProps> = ({
  children,
}) => {
  return (
    <main className="font-sans text-gray-600 ">
      <header className="p-2 flex justify-between border border-gray-200 items-baseline">
        <h1 className="font-mono font-semibold  text-xl">PromptSheet.</h1>
        <nav className="mt-4 tracking-wide flex gap-8 justify-center items-center">
          <ThemeChanger />
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
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 border border-gray-400",
              },
            }}
            afterSignOutUrl="/sign-up"
          />
        </nav>
      </header>
      <div className="m-8">{children}</div>
    </main>
  );
};

export default PageLayout;
