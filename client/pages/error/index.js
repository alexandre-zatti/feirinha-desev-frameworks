import Head from 'next/head'
import Background from '../../public/imgs/bg1.png'
import styles from '../../styles/Login.module.css'
import 'react-toastify/dist/ReactToastify.css';


export default function error() {

    return (
        <div style={{backgroundImage: `url(${Background.src})`}} className={styles.main}>

            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.formWrap}>
                <h2>Você não tem permissão para executar essa ação!</h2>
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
