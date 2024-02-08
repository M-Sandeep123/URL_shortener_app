import { useEffect, useState } from "react";
import ShortUrlDisplay from "../../organisms/URLInput";
import MainTemplate from "../../templates/AppTemplate";
import { getAllURLApi } from "../../../utils";

const HomePage = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const getUrls = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const response = await getAllURLApi(token).then(res=> res);
                    setUrls(response.data.shortURLs)
                } else {
                    console.error("Token not found in local storage.");
                }
            } catch (error) {
                console.error("Error fetching URLs:", error);
            }
        };
        getUrls();
    }, [urls]);

    return (
        <>
            <MainTemplate/>
            <ShortUrlDisplay shortenURLs={urls}/>
        </>
    );
}

export default HomePage;
