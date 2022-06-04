import Head from 'next/head'
import { APIbase } from "../../lib/djangoApi";
import styles from '../../styles/Login.module.css'
import axios from "axios";

export default function Store({products}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="side-bar">Barra</div>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Compras
                </h1>

            <div className="card" >
                <ul>
                    {products.map(item => (
                        <li>
                            <img src={item.thumbnail} width="200px"/>
                            <h3>{item.name}</h3>
                            <h1>R$ {item.preco}</h1>

                        </li>
                    ))}
                </ul>
            </div>

            </main>
        </div>
    )
}

export async function getServerSideProps(){
    // axios.defaults.withCredentials = true
    // axios.get(`${APIbase}/product`,{
    //     withCredentials: true
    // })
    //     .then(function(response){
    //         console.log(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });

    const data = [
        {
            "id": 1,
            "name": "Coca Cola 2l",
            "quantidade": 1,
            "preco": 10.50,
            "thumbnail": "https://static.paodeacucar.com/img/uploads/1/643/20247643.jpg"
        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "https://m.media-amazon.com/images/I/614qQSTXE7L._AC_SX679_.jpg"
        }
    ];

    return {
        props: {
        products: data
        }
    };
}