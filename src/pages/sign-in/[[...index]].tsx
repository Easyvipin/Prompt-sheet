import { SignIn } from "@clerk/nextjs";
import React from "react";

interface ISigninPageProps {}

const SigninPage: React.FunctionComponent<ISigninPageProps> = (props) => {
  return (
    <div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SigninPage;
