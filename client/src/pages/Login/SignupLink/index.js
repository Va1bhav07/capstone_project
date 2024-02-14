import React from "react";

function SignupLink() {
  return (
    <>
      <hr className="hr my-4" />
      <p className="text-center">
        Don't have an account?{" "}
        <a className="link-opacity-75" href="/signup">
          Sign up
        </a>
      </p>
    </>
  );
}

export default SignupLink;
