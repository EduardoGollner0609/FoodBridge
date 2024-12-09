import { Outlet } from "react-router-dom";
import HeaderPrincipalPage from "../../components/HeaderPrincipalPage";
import SideBarNavegation from "../../components/SideBarNavegation";

export default function CommunityPage() {
    return (
        <>
            <HeaderPrincipalPage />
            <SideBarNavegation />
            <Outlet />
        </>
    );
}