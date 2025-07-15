import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";

export default function Root() {
 

    return (
        <>
            <Appbar/>
            <Outlet />
        </>
    )
}