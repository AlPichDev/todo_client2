import { NavLink, Outlet } from "react-router-dom";
import s from "./Root.module.scss"

export let Root = () => {
    return (
        <>
            <header>
                <NavLink to={'/'}>Main</NavLink>
                <h1>TODO</h1>
                <ul>
                    <li>
                        <NavLink to={'/login'}>login</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>register</NavLink>
                    </li>
                </ul>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
};

