//import ky from "ky";
import { api } from "@/lib/api";

//----------------login user-------------------------

export const loginUser = async (loginData) => {
  // console.log(loginData);

  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });
  console.log("LOGIN ACTION", response.json());
};

//------------------Register User------------------------

export const registerUser = async (formData) => {
  try {
    const response = await api.post("v1/register", { json: formData });

    if (response.ok) {
      return response.json();
    } else {
      return undefined;
    }
  } catch (error) {
    const status = error.response.status;
    const responseBody = await error.response.json();
    if (status && responseBody) {
      if (status === 409) {
        return responseBody;
      }
      return undefined;
    }
    return undefined;
  }
};

//----------------Get Movies------------------------------

export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies");
    //------------above method or below method can use------------

    // const response = await ky.get("http://localhost:3000/api/v1/movies",{
    // cache:"no-store"
    // });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Something went wronng" };
    }
  } catch (error) {
    console.log("MongoDB ERROR:: ",error);
    return {error:true, message:"Something went wronng" }
    
    //   // handle HTTP errors specifically
    //   const status = error?.response?.status; // HTTP status code (e.g. , 404, 500 )
    //   const responseBody = await error?.response?.json(); // Parse the response body if possible

    //   console.log("HTTP Error:", status, responseBody);

    //   //   // you can handledifferent status codes here
    //   //   if (status === 401) {
    //   //     console.log("Unauthorized. Check your credentials");
    //   //   }else if(status===500){
    //   //     console.log("Server error. Please try again later.");

    //   //   }else if (status===404){
    //   //     console.log(status, responseBody.message);
    //   //   }
    // } else {
    //   // Handle non-HTTP errors (e.g. , network issues)
    //   console.log("Unknown error:", error);
    // }
    // return undefined;
  }
};
