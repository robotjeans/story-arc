import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <section className="bg-sa-black h-full">
      <div className="max-w-3xl mx-auto flex justify-center items-center">
        <Button
          className="w-44 mt-10"
          color="purple"
          variant="outlined"
          ripple
          onClick={() => signIn()}
        >
          Login With Google
        </Button>
      </div>
    </section>
  );
};

export default LoginPage;
