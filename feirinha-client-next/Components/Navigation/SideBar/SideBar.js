import Styles from './SideBar.module.css'

export default function SideBar(props) {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.iconContainer}>
               <a href="/"> <img src="/icons/dots.svg" alt="Dots" /></a>
                <div>
                    <img src="/icons/page-counter.svg" alt="Page" className={Styles.pageCounter}/>
                </div>

                <a href="/store">
                    <div className={Styles.iconDiv}>
                        <img src="/icons/cart.svg" alt="Comprar"/>
                    </div>
                </a>

                <a href="/deposit">
                    <div className={Styles.iconDiv}>
                        <img src="/icons/deposit.svg" alt="Depositar"/>
                    </div>
                </a>

                <a href="/deposit">
                    <div className={Styles.iconDiv}>
                        <img src="/icons/qrCode.svg" alt="Depositar por qrCode"/>
                    </div>
                </a>

            </div>

        </div>
    )
}