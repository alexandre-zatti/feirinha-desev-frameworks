import Head from 'next/head'
import SideBar from "../../Components/Navigation/SideBar/SideBar";
import styles from '../../styles/Store.module.css'
import {useEffect, useState} from "react";


export default function Store() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/product', {credentials: "include", mode: "cors"})
          .then((res) => res.json())
          .then((data) => {
            setProducts(data)
          })
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Feirinha GTI</title>
                <meta name="feirinha" content="Pagina da feira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar/>

            <main className={styles.main}>
                <div className={styles.topBar}>
                   <a href="/"> <img src="/logo.svg" alt="Feirinha GTI logo"/></a>
                    <h1 className={styles.title}>
                        Compras
                    </h1>
                    <a href="/"><h2>Logout</h2></a>
                </div>

                <div className={styles.cardContainer}>
                        <ul>
                            {products.map(item => (
                                <li className={styles.card}>
                                    <img src={item.thumbnail} alt="Produto"/>
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

// export function getServerSideProps(){
//
//     return {
//         props:{
//             products: [
//                 {
//                     "id": 1,
//                     "name": "Coca Cola 2l",
//                     "quantidade": 1,
//                     "preco": 10.50,
//                     "thumbnail": "/imgs/ItemTeste.png"
//                 }
//             ]
//         }
//     }
//
// }