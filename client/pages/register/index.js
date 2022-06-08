import Head from 'next/head'
import InputNumber from "../../Components/Inputs/Number/InputNumber";
import ButtonDefault from "../../Components/Buttons/Default/ButtonDefault";

import Background from '../../public/imgs/bg1.png'

import styles from '../../styles/Login.module.css'

export default function Register() {
    return (
        <div style={{backgroundImage: `url(${Background.src})`}} className={styles.main}>

            <Head>
                <title>Feirinha GTI - Cadastro</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.formWrap}>
                <h1>Cadastro</h1>
                <form>
                    <InputNumber label='Digite sua matricula'/>
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
