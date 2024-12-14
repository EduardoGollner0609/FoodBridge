import { Outlet } from "react-router-dom";
import HeaderPrincipalPage from "../../components/HeaderPrincipalPage";

export default function CommunityPage() {
    return (
        <>
            <HeaderPrincipalPage />
            <Outlet />
        </>
    );
}