import { Outlet, Link } from "react-router-dom"
import webSiteLOGO from "../upload-icon.webp"
export const Layout = ()=>{
    return (
        <>
            <nav>
                <div>

                    <Link to = "/">
                        <img className = "home-page-btn" src = {webSiteLOGO} alt="home page logo"/>
                    </Link>
                    <Link to = "/formats">فرمت های استاندارد</Link>
                    <Link to= "/rules">قوانین</Link>
                    <Link to = "/about-us">درباره ما</Link>
                </div>
                <div>
                    <button>
                        ورود / ثبت نام
                    </button>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}