import Head from 'next/head'
import SideBar from "../../Components/Navigation/SideBar/SideBar";
import styles from '../../styles/Store.module.css'
import {Success, Error} from "../../Components/Notifications/notify";
import {useEffect, useState} from "react";
import ButtonDefault from "../../Components/Buttons/Default/ButtonDefault";
import moment from "moment";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";

export default function Store() {

    const router = useRouter()

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    const [saldo, setSaldo] = useState([]);

    async function getProducts(){
        const response = await fetch('http://localhost:8000/api/product', {
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
        const data = await response.json()
        if(response.status == 200) {
             setProducts(data)
        }else{
            router.push('/error')
        }
    }

    function buyItem(id, price) {
        let buyList = {
            "user": 123,
            "product": id,
            "quantidade": 1,
            "total": price,
            "data_compra": moment().format("YYYY-MM-DD")
        };
        fetch('http://localhost:8000/api/buy', {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(buyList)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.id){
                    setSaldo(() => saldo - data.total)
                    Success('Compra realizada com succeso!')
                }else {
                    Error(data.detail)
                }
            })

    }

    useEffect(() => {
        getProducts();

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

            <SideBar active="store" matricula={user.matricula}/>
            <ToastContainer />

            <main className={styles.main}>
                <div className={styles.topBar}>
                    <a href="/"> <img src="/logo.svg" alt="Feirinha GTI logo"/></a>
                    <h1 className={styles.title}>
                        Comprar
                    </h1>
                    <div>
                        <h1 className={styles.title}>
                            { String(user.username) }
                        </h1>
                        <h2>Saldo atual: R$ { parseFloat(saldo).toFixed(2) }</h2>

                    </div>

                </div>

                <div className={styles.cardContainer}>
                    <ul>
                        {products.map(item => (
                            <li key={item.id} className={styles.card}>
                                <img src={item.thumbnail} alt="Produto"/>
                                <h3>{item.name}</h3>
                                <h1>R$ {item.preco}</h1>
                                <button onClick={() => buyItem(item.id, item.preco)}>Comprar</button>

                            </li>
                        ))}

                    </ul>
                </div>

            </main>
        </div>
    )
}
