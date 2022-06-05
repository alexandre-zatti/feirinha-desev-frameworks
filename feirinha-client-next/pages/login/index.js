import Head from 'next/head'
import { APIbase } from "../../lib/djangoApi";
import styles from '../../styles/Login.module.css'
import axios from "axios";

export default function Login({allProfiles}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Login
                </h1>
                {allProfiles}

            </main>
        </div>
    )
}

export async function getServerSideProps(){
    // axios.defaults.withCredentials = true
    // axios.post(`${APIbase}/login`, {
    //         withCredentials: true,
    //         headers: {
    //         "Content-Type": "application/json"
    //     },
    //     matricula: 123
    // },
    // ).then(function(response) {
    //     console.log('Authenticated');
    //     console.log(response);
    // }).catch(function(error) {
    //     console.log(error);
    // });




    return {
        props: {

        }
    };
}