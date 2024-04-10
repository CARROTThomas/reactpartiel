import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../auth/interceptor.ts";
import { GlobalConstant } from "../Common/global-constant.ts";

interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}

interface OrderDetails {
    id: string;
    profile: {
        username: string;
    };
    items: OrderItem[];
}

export function Order() {
    const { id } = useParams<{ id: string }>(); // Spécifier le type pour id
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null); // Définir le type pour orderDetails
    const [orderTotal, setOrderTotal] = useState<number>(0); // Définir le type pour orderTotal

    useEffect(() => {
        fetchOrder();
    }, []);

    async function fetchOrder() {
        try {
            const response = await axiosInstance.get(GlobalConstant.baseurl + `/api/order/show/${id}`);
            setOrderDetails(response.data.order);
            if (response.data.order) {
                calculateTotal(response.data.order); // Vérifier si orderDetails existe avant de l'utiliser
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération de la commande :", error);
        }
    }

    function calculateTotal(order: OrderDetails) { // Spécifier le type pour le paramètre order
        let total = 0;
        if (order && order.items) { // Vérifier si order et order.items existent avant de les utiliser
            order.items.forEach((item: OrderItem) => { // Spécifier le type pour item
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
                        {orderDetails.items.map((item: OrderItem, index: number) => ( // Spécifier les types pour item et index
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
