"use client";
import { Button } from "@/components/ui/button";
// keep this as the client component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "../../lib/apis/server";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString();
    const email = formData.get("email").toString();
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm_password") ?? "";

    // basic frontend validation logic
    //if (name && email && password && confirmPassword){
    if (password === confirmPassword) {
      setError(DEFAULT_ERROR);
      setLoading(true);
      const registerResp = await registerUser({ name, email, password });
      setLoading(false);

      if (registerResp?.error) {
        setError({ error: true, message: registerResp.error });
      } else {
        toast({
          variant: "success",
          title: "Registration successful !",
          description: "Please continue with login.",
          action: (
            <Link href="/login">
              <ToastAction altText="Login" className="hover:bg-green-500/90">
                Login
              </ToastAction>
            </Link>
          ),
        });
      }
    } else {
      setError({ error: true, message: "Password doesn't match" });
    }

    //console.log("Form Data : ",{name,password,email,confirmPassword});
    //}

    //console.log("error",error );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="confirm_password">Confirm password</Label>
                <Input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Enter password to confirm"
                />
              </div>

              {/* form error */}

              <div className="flex justify-center">
                {error?.error && (
                  <span className="text-red-600 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-1 text-xs">
                Already have an accont?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
