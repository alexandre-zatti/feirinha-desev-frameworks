import Head from 'next/head'
import SideBar from "../../Components/Navigation/SideBar/SideBar";
import styles from '../../styles/Store.module.css'


export default function Store({products}) {

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
            "thumbnail": "/imgs/ItemTeste.png"
        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"
        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        },
        {
            "id": 2,
            "name": "Biscoito Oreo",
            "quantidade": 2,
            "preco": 2.99,
            "thumbnail": "/imgs/ItemTeste.png"

        }
    ];

    return {
        props: {
        products: data
        }
    };
}