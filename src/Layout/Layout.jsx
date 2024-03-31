import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div className="w-3/5 mx-auto">
            <Header></Header>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <footer>copy right by Masud Rana</footer>
        </div>
    );
};

export default Layout;