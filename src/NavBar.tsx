import {GlobalConstant} from "./Common/global-constant.ts";
import {useEffect, useState} from "react";

export function NavBar() {

    const [state, setState] = useState(false)

    function logout() {
        localStorage.removeItem("bearerToken");
        window.location.reload();
    }

    function readLocalStorage() {
        if (GlobalConstant.isLogged) {
            setState(true)
        }
    }

    useEffect(() => {
        return readLocalStorage
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-lg d-flex align-items-center justify-content-between">
                        <a className="nav-link text-light" id="logoNavBarre" href="/">LOGO</a>
                        <div className="text-light">
                            <ul className="d-flex gap-3">
                                {state ?
                                    <li className={"d-flex gap-5"}>
                                        <a className="nav-link text-light" href="/orders">Order</a>
                                        <button onClick={logout} className="nav-link text-light">logout</button>
                                    </li> :
                                    <>
                                    <li>
                                            <a className="nav-link text-light" href="/register">Register</a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-light" href="/login">Login</a>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
