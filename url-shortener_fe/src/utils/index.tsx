import { SignInFormData } from "../components/organisms/SignIn";
import api from "./api";

export const signupApi = async (userData:FormData) => {
        return await api.post(`/users`, userData);
    };

    export const signinApi = async (userCredintial : SignInFormData)=>{
        return await api.post("/signin", userCredintial);
    }

export const postURLApi = async (url:string, token:string) => {
    const reqBody = {originalURL : url};
    return await api.post("/shorten", reqBody, {
      headers: {
        "x-access-token": token,
      },
    });
  };
  
export const getOriginalUrlApi = async (shortenUrl:string, token:string) => {
    return await api.get(`/${shortenUrl}`, {
      headers: {
        "x-access-token": token,
      },
    });
  };
  
export const getAllURLApi = async (token: string) => {
    return await api.get("/user/shorturls", {
        headers:{
            "x-access-token": token,
        }
    })
  }