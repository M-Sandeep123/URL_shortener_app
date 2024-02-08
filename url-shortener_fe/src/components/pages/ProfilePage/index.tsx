import { useEffect, useState } from "react";
import Profile from "../../organisms/Profile";
import MainTemplate from "../../templates/AppTemplate";

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("user-data");
        if (data) {
            setUserData(JSON.parse(data));
        }
    }, []);

    return (
        <>
            <MainTemplate />
            {userData && <Profile user={userData} />}
        </>
    );
};

export default ProfilePage;
