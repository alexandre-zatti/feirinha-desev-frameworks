import {useRouter} from "next/router";
import styles from '../../styles/Login.module.css'

export default function Deposit() {
    const router = useRouter();
    const {matricula} = router.query;
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                   Deposito para: {matricula}
                </h1>

            </main>

        </div>
    )
}
