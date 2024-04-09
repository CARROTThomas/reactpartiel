import {Route, Routes} from "react-router-dom";
import {User} from "./User.tsx";
import App from "./App.tsx";
import {CartIndex} from "./Cart/CartIndex.tsx";
import Scan from "./Cart/Scan.tsx";
import {Orders} from "./Order/Orders.tsx";
import {Order} from "./Order/Order.tsx";
import AnimationPayment from "./animation/Animation.tsx";

export const Router = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="register" element={<User />} />
            <Route path="login" element={<User />} />
            <Route path="logout" element={<User />} />

            <Route path="/cart" element={<CartIndex />} />
            <Route path="/add" element={<Scan />} />


            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<Order />} />


            <Route path="/animation" element={<AnimationPayment />} />
        </Routes>
        </>
    )
}
