import {useRouter} from "next/router";
import Head from "next/head";
import SideBar from "../../Components/Navigation/SideBar/SideBar";
import {ToastContainer} from "react-toastify";
import styles from '../../styles/Deposit.module.css'
import {Success, Error} from "../../Components/Notifications/notify";
import {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';

import InputNumber from "../../Components/Inputs/Number/InputNumber";
import ButtonDefault from "../../Components/Buttons/Default/ButtonDefault";
import moment from "moment";


export default function Deposit() {
    const router = useRouter();
    const {matricula} = router.query;
    const [user, setUser] = useState([]);
    const [saldo, setSaldo] = useState([]);
    const [depositValue, setDepositValue] = useState('')

    const onChange = (evt) => {
        setDepositValue(evt.target.value)
    }

    const sendForm = async (evt) => {
        evt.preventDefault()

        if (depositValue <= 0){
            Error('Valor do depósito inválido!')
            setDepositValue('')
            return;
        }

        let depositForm = {
            "username": user.username,
            "saldo": Number(saldo) + Number(depositValue),
            "feirante": false
        };

        const response = await fetch('http://localhost:8000/api/user/' + matricula + '/', {
            credentials: "include",
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(depositForm)
        })
        const data = await response.json()
        if(response.status == 200) {
            setSaldo(data.saldo)
            Success('Depósito realizado com Sucesso! Novo saldo: R$ ' + data.saldo)
            setDepositValue('')
        }else{
            Error('Erro ao realizar depósito, tente novamente mais tarde.')
            setDepositValue('')
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

            <SideBar active="deposit" matricula={matricula}/>
            <ToastContainer />

            <main className={styles.main}>
                <div className={styles.topBar}>
                    <a href="/"> <img src="/logo.svg" alt="Feirinha GTI logo"/></a>
                    <h1 className={styles.title}>
                        Depositar
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
                            <InputNumber label='Valor a depositar' name="deposit" value={depositValue} onChange={onChange} />
                            <ButtonDefault text='Depositar'/>
                        </form>
                </div>

                <div className={styles.pixContainer}>
                    <h1>Pix do feirante!</h1>
                    <img src="/icons/qr-code-big.svg" alt="Qr code pix"/>
                </div>

            </main>
        </div>
    )
}
