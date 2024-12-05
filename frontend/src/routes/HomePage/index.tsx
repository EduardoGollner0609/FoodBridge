import { Outlet } from "react-router-dom";
import HeaderHomePage from "../../components/HeaderHomePage";

export default function HomePage() {
    return (
        <>
            <HeaderHomePage />
            <Outlet />
        </>
    );
}