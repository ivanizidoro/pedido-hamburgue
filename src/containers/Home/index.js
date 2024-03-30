import React, { useState, useRef } from "react";
import Axios from "axios";

import Home from "../../assets/Home.png"

import { Container, Image, ContianerItens, H1, InputLabel, Input, Button } from "./styles"
import { useNavigate } from "react-router-dom";

function App() {

    const [order, setOrders] = useState([])
    const navigate = useNavigate()
    const inputPedido = useRef()
    const inputName = useRef()

    const minhaUrl = "https://hamburgueria-xi-wine.vercel.app"

    async function addNewOrder() {
        const { data: newOrder } = await Axios.post(`${minhaUrl}/order`, {
            pedido: inputPedido.current.value,
            name: inputName.current.value
        })

        setOrders([...order, newOrder])

        navigate("/pedido")

    }

    function listOrder(){
        navigate("/pedido")
    }

    return (
        <Container>
            <Image alt="logo-home" src={Home} />
            <ContianerItens>
                <H1>Faça eu pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={inputPedido} placeholder="Pedido" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder="Nome do Cliente" />

                <Button onClick={addNewOrder}>Novo Pedido</Button>

                <li onClick={listOrder}>Pedidos</li>
            </ContianerItens>
        </Container>
    )

}


export default App