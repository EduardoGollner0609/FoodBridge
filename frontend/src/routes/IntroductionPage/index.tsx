import { Outlet } from "react-router-dom";
import HeaderHomePage from "../../components/HeaderHomePage";

export default function IntroductionPage() {
    return (
        <>
            <HeaderHomePage />
            <Outlet />
        </>
    );
}