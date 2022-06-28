import Styles from './SideBar.module.css'

export default function SideBar(props) {


    function renderStore () {
        if (props.active == 'store') {
            return <a href="/store">
                <div className={Styles.iconDivActive}>
                    <img src="/icons/cart.svg" alt="Comprar"/>
                </div>
            </a>
        } else {
            return <a href="/store">
                <div className={Styles.iconDiv}>
                    <img src="/icons/cart.svg" alt="Comprar"/>
                </div>
            </a>
        }
    }

    function renderDeposit () {
        let link = "/deposit/" + props.matricula + "/";

        if (props.active == 'deposit') {
            return <a href={link}>
                <div className={Styles.iconDivActive}>
                    <img src="/icons/deposit.svg" alt="Depositar"/>
                </div>
            </a>
        } else {
            return <a href={link}>
                <div className={Styles.iconDiv}>
                    <img src="/icons/deposit.svg" alt="Depositar"/>
                </div>
            </a>
        }
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.iconContainer}>
               <a href="/"> <img src="/icons/dots.svg" alt="Dots" /></a>
                <div>
                    <img src="/icons/page-counter.svg" alt="Page" className={Styles.pageCounter}/>
                </div>

                {renderStore()}
                {renderDeposit()}

                <a href="/logout">
                    <div className={Styles.iconDiv}>
                        <img src="/icons/logout.svg" alt="Sair"/>
                    </div>
                </a>

            </div>

        </div>
    )
}