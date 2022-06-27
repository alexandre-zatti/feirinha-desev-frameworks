import Head from 'next/head'
import InputNumber from "../../Components/Inputs/Number/InputNumber";
import ButtonDefault from "../../Components/Buttons/Default/ButtonDefault";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Background from '../../public/imgs/bg1.png'

import styles from '../../styles/Login.module.css'
import {useRouter} from "next/router";
import {useState} from "react";
import {Error} from "../../Components/Notifications/notify";
import InputText from "../../Components/Inputs/Text/inputText";


export default function Register() {
    const router = useRouter()
    const [matricula, setMatricula] = useState(0)
    const [username, setUsername] = useState('')

    const onChange = (evt) => {
       if(evt.target.name == 'matricula'){
           setMatricula(evt.target.value)
       }
        if(evt.target.name == 'username'){
            setUsername(evt.target.value)
        }
    }

    const sendForm = async (evt) => {
        evt.preventDefault()

        let formData = {
            "username" : username,
            "matricula" : matricula,
            "saldo" : 0
        }

        const response = await fetch('http://localhost:8000/api/register', {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const json = await response.json()
        if(response.status == 200) {
            console.log(response)
            router.push('/')
        }else{
            Error('Erro no cadastro.')
        }
    }

    return (
        <div style={{backgroundImage: `url(${Background.src})`}} className={styles.main}>

            <Head>
                <title>Feirinha GTI - Cadastro</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer />
            <div className={styles.formWrap}>
                <h1>Cadastro</h1>
                <form onSubmit={sendForm} method="post">
                    <InputNumber label='Digite sua matricula' name="matricula" onChange={onChange} />
                    <InputText label='Digite seu Nome' name="username" value={username} onChange={onChange} />
                    <a href="/store/index"><ButtonDefault text='CADASTRAR-SE'/></a>
                </form>

                <span>Ja possui cadastro? <a href="/" className={styles.textLink}>Efetue login</a></span>

            </div>

            <div className={styles.footerWrap}>
                <footer className={styles.footer}>
                    <h3> Gerência de Tecnologia da Informação - 2022</h3>
                </footer>
            </div>

        </div>
    )
}
