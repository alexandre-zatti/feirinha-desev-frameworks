import Head from 'next/head'
import {useEffect, useState} from "react";
import Background from '../../public/imgs/bg1.png'
import styles from '../../styles/Login.module.css'
import {ToastContainer} from "react-toastify";
import {Success} from "../../Components/Notifications/notify";
import 'react-toastify/dist/ReactToastify.css';


export default function logout() {

    const [user, setUser] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8000/api/logout', {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }).then((res) => res.json())
            .then((data) => {
                console.log('Logout efetuado')
            })
    }, [])

    return (
        <div style={{backgroundImage: `url(${Background.src})`}} className={styles.main}>

            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer />

            <div className={styles.formWrap}>
                <h2>Obrigado por utilizar a feirinha GTI, volte sempre!</h2>
                <h2><a href="/" className={styles.textLink}>Voltar a pagina de login.</a></h2>


            </div>

            <div className={styles.footerWrap}>
                <footer className={styles.footer}>
                    <h3> Gerência de Tecnologia da Informação - 2022</h3>
                </footer>
            </div>

        </div>
    )
}
