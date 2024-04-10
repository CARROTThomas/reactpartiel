import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../auth/interceptor.ts";
import { GlobalConstant } from "../Common/global-constant.ts";
import { OrderDetails } from "../Interfaces/OrderDetails.ts";

export function Order() {
    const { id } = useParams<{ id: string }>();
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
    const [orderTotal, setOrderTotal] = useState<number>(0);

    useEffect(() => {
        fetchOrder();
    }, []);

    async function fetchOrder() {
        try {
            const response = await axiosInstance.get(GlobalConstant.baseurl + `/api/order/show/${id}`);
            setOrderDetails(response.data.order);
            if (response.data.order) {
                calculateTotal(response.data.order);
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération de la commande :", error);
        }
    }

    function calculateTotal(order: OrderDetails) {
        let total = 0;
        if (order && order.items) {
            order.items.forEach((item) => {
                total += item.price * item.quantity;
            });
        }
        setOrderTotal(total);
    }

    return (
        <div className="order-details-container">
            <div className="header">
                <a className="btn btn-secondary" href="/orders">Retour</a>
                <hr/>
            </div>

            <h1>Détails de la commande</h1>
            {orderDetails ? (
                <div>
                    <p>Numéro de commande : {orderDetails.id}</p>
                    <p>Nom d'utilisateur : {orderDetails.profile.username}</p>
                    <p>Articles :</p>
                    <ul>
                        {orderDetails.items.map((item, index) => (
                            <li key={index}>{item.name} - Quantité : {item.quantity} - Prix : ${item.price * item.quantity}</li>
                        ))}
                    </ul>
                    <p>Total : ${orderTotal}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
}
