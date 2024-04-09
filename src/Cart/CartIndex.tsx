import { useState, useEffect } from "react";
import { GlobalConstant } from "../Common/global-constant.ts";
import axiosInstance from "../auth/interceptor.ts";
import { useNavigate } from "react-router-dom";

export function CartIndex() {
    const [cartData, setCartData] = useState(null);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        cart();
    }, []);

    async function cart() {
        try {
            const response = await axiosInstance.get(GlobalConstant.baseurl + '/api/order/cart');
            console.log(response.data.cart);
            setCartData(response.data.cart);
            calculateTotal(response.data.cart.items);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du panier :", error);
        }
    }

    async function add(id) {
        try {
            const response = await axiosInstance.post(GlobalConstant.baseurl + `/api/order/add/${id}`);
            setCartData(response.data.cart);
            if (response.data.cart && response.data.cart.items) {
                calculateTotal(response.data.cart.items);
            }
            window.location.reload();
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'ajout d'un élément au panier :", error);
        }
    }

    async function remove(id) {
        try {
            const response = await axiosInstance.post(GlobalConstant.baseurl + `/api/order/remove/${id}`);
            setCartData(response.data.cart);
            if (response.data.cart && response.data.cart.items) {
                calculateTotal(response.data.cart.items);
            }
            window.location.reload();
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'enlèvement d'un élément au panier :", error);
        }
    }

    async function paye() {
        try {
            const response = await axiosInstance.post(GlobalConstant.baseurl + `/api/order/payment`);
            console.log(response.data);
            navigate("/animation");
        } catch (error) {
            console.error("Une erreur s'est produite lors du paiement :", error);
        }
    }

    function calculateTotal(items) {
        let totalPrice = 0;
        items.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }

    return (
        <>
            <div className={"container"}>
                {cartData ? (
                    <div>
                        <h2>Panier de {cartData.profile.username}</h2>
                        <ul>
                            {cartData.items.map((item, index) => (
                                <li className={"d-flex align-items-center justify-content-around gap-5 mt-5 mb-5 w-100"} key={index}>
                                    <div className="d-flex align-items-center">
                                        <p>{item.name} - {item.price}€ - Quantité : {item.quantity}</p>
                                    </div>
                                    <div className="d-flex gap-5">
                                        <button onClick={() => remove(item.product_id)} className="btn btn-danger">-</button>
                                        <button onClick={() => add(item.product_id)} className="btn btn-success">+</button>
                                    </div>
                                </li>
                            ))}
                            {cartData.items.length > 0 && (
                                <h3>Total = {total}€</h3>
                            )}
                        </ul>

                        <div className="d-flex justify-content-around gap-3 mt-5">
                            <a className={"btn btn-primary"} href="/add">Ajouter un produit</a>
                            {cartData.items.length > 0 && (
                                <button onClick={paye} className="btn btn-success">Payer</button>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Chargement du panier...</p>
                )}
            </div>
        </>
    );
}
