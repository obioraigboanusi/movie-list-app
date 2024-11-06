import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow grid">{children || <Outlet />}</div>
            <Footer />
        </div>
    );
}

export default Layout;
