import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../auth/interceptor.ts";
import { GlobalConstant } from "../Common/global-constant.ts";
import { Order } from "../Interfaces/Order.ts";

export function Orders() {
    const [ordersList, setOrdersList] = useState<Order[]>([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        try {
            const response = await axiosInstance.get(GlobalConstant.baseurl + '/api/orders');
            setOrdersList(response.data.orders);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des commandes :", error);
        }
    }

    return (
        <>
            <div className={"container"}>
                <h1>Orders :</h1>
                <div className="row d-flex">
                    {ordersList.map((order: Order, index: number) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Link to={`/order/${order.id}`} className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Order ID: {order.id}</h5>
                                        <p className="card-text">Date: {new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <div className="">
                        <a className={"btn btn-primary"} href="/cart">faire des achats</a>
                    </div>
                </div>
            </div>
        </>
    );
}
