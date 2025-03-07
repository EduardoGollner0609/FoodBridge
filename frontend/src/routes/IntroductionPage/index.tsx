import { Outlet } from "react-router-dom";
import HeaderHomePage from "../../components/HeaderHomePage";
import Footer from "../../components/Footer";

export default function IntroductionPage() {

    return (
        <>
            <HeaderHomePage />
            <Outlet />
            <Footer />
        </>
    );
}