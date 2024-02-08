import { signupApi } from "../../../utils"
import SignUpForm from "../../organisms/signup"
import MainTemplate from "../../templates/AppTemplate"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
    const navigate = useNavigate();
    const handleOnSignIn = async (userInfo:any) => {
        try {
            await signupApi(userInfo);
            navigate("/signin");
        } catch (error) {
            console.error("Error occurred while signing up:", error);
        }
    }

    return (
        <>
            <MainTemplate/>
            <SignUpForm onSubmit={handleOnSignIn}/>
        </>
    )
}

export default SignUpPage
