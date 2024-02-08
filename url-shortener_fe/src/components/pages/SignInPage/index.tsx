import SignInForm, { SignInFormData } from "../../organisms/SignIn";
import MainTemplate from "../../templates/AppTemplate";
import { signinApi } from "../../../utils";
import { useNavigate } from "react-router";

const SignInPage = () => {
    const navigate = useNavigate();
    const handleOnSignIn = async (data : SignInFormData)=>{
        const userData = await signinApi(data).then((res)=> res.data);
        localStorage.setItem("token", userData?.isAuthenticated)
        localStorage.setItem("user-data", JSON.stringify(userData));
        navigate("/home")
    };
    return (
        <>
        <MainTemplate/>
        <SignInForm token={""} onSubmit={handleOnSignIn}/>
        </>
    )
}

export default SignInPage;
