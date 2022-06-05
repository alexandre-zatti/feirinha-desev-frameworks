import Head from 'next/head'
import InputNumber from "../Components/Inputs/Number/InputNumber";
import ButtonDefault from "../Components/Buttons/Default/ButtonDefault";

import Background from '../public/imgs/bg1.png'

import styles from '../styles/Login.module.css'
import {useState} from "react";

export default function Home() {

    const [matricula, setMatricula] = useState('')

        const onChange = (evt) => {
            setMatricula(evt.target.value)
        }

        const sendForm = async (evt) => {
            console.log(matricula)

            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({matricula})
            })
            const json = await response.json()
            console.log(json)
            // evt.preventDefault()
        }

  return (
    <div style={{backgroundImage: `url(${Background.src})`}} className={styles.main}>

      <Head>
        <title>Feirinha GTI</title>
        <meta name="feirinha" content="Pagina da feira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.formWrap}>
        <h1>Bem-Vindo!</h1>
        <form onSubmit={sendForm} method="post">
            <InputNumber label='Matricula' name="matricula" value={matricula} onChange={onChange} />
            <ButtonDefault text='LOGIN'/>
        </form>

        <span>Ainda não possui cadastro? <a href="/register" className={styles.textLink}>Cadastre-se</a></span>

    </div>

    <div className={styles.footerWrap}>
        <footer className={styles.footer}>
            <h3> Gerência de Tecnologia da Informação - 2022</h3>
        </footer>
    </div>

    </div>
  )
}
