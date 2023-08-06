import { SignUp } from "@clerk/nextjs";
import * as React from "react";

interface ISignupPageProps {}

const SignupPage: React.FunctionComponent<ISignupPageProps> = (props) => {
  return (
    <div>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignupPage;
