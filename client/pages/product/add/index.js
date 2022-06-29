import {useRouter} from "next/router";
import Head from "next/head";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";

import SideBar from "../../../Components/Navigation/SideBar/SideBar";
import InputNumber from "../../../Components/Inputs/Number/InputNumber";
import ButtonDefault from "../../../Components/Buttons/Default/ButtonDefault";

import styles from '../../../styles/Deposit.module.css'
import {Success, Error} from "../../../Components/Notifications/notify";
import 'react-toastify/dist/ReactToastify.css';
import InputText from "../../../Components/Inputs/Text/inputText";



export default function Adicionar() {

    const [user, setUser] = useState([]);
    const [saldo, setSaldo] = useState([]);
    const [productName, setProductName] = useState('')
    const [productQuant, setProductQuant] = useState('')
    const [productPreco, setProductPreco] = useState('')
    const [productThumb, setProductThumb] = useState('')


    function onChange(evt, field) {
        switch (field)
        {
            case "name": {
                setProductName(evt.target.value)
                return;
            }
            case "quantity": {
                setProductQuant(evt.target.value)
                return;
            }
            case "price": {
                setProductPreco(evt.target.value)
                return;
            }
            case "thumb": {
                setProductThumb(evt.target.value)
                return;
            }
        }
    }

    function clearForm(){
        setProductName('')
        setProductQuant('')
        setProductPreco('')
        setProductThumb('')
    }

    const sendForm = async (evt) => {
        evt.preventDefault()

        let newProduct = {
            "name": productName,
            "quantidade": productQuant,
            "preco": productPreco,
            "thumbnail" : productThumb
        };

        const response = await fetch('http://localhost:8000/api/product', {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        const data = await response.json()
        if(response.status == 200) {
            Success('Produto Adicionado com Sucesso!')
            clearForm()

        }else{
            Error('Erro ao adicionar produto, tente novamente mais tarde.')
            clearForm()
        }
    }
    useEffect(() => {

        fetch('http://localhost:8000/api/user', {credentials: "include", mode: "cors"})
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setSaldo(data.saldo)
            })

    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar active="addProd" feirante={true}/>
            <ToastContainer />

            <main className={styles.main}>
                <div className={styles.topBar}>
                    <a href="/"> <img src="/logo.svg" alt="Feirinha GTI logo"/></a>
                    <h1 className={styles.title}>
                        Novo Produto
                    </h1>
                    <div>
                        <h1 className={styles.title}>
                            { String(user.username) }
                        </h1>
                        <h2>Saldo atual: R$ { parseFloat(saldo).toFixed(2) }</h2>

                    </div>

                </div>

                <div className={styles.cardContainer}>
                        <form onSubmit={sendForm} method="POST">
                            <InputText label='Nome do Produto' name='name' value={productName} onChange={(evt) =>onChange(evt, "name")}/>
                            <InputNumber label='Quantidade' name="quantity" value={productQuant}  onChange={(evt) =>onChange(evt, "quantity")} />
                            <InputNumber label='Preço' name="price" value={productPreco}  onChange={(evt) =>onChange(evt, "price")} />
                            <InputText label='Imagem do Produto' name='thumb' value={productThumb} onChange={(evt) =>onChange(evt, "thumb")}/>
                            <ButtonDefault text='Adicionar Produto'/>
                        </form>
                </div>

            </main>
        </div>
    )
}
