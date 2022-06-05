import Styles from './SideBar.module.css'

export default function SideBar(props) {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.iconContainer}>
               <a href="/"> <img src="/icons/dots.svg" alt="Dots" /></a>
                <img src="/icons/page-counter.svg" alt="Page" className={Styles.pageCounter}/>
                <img src="/icons/cart.svg" alt="Page"/>
                <img src="/icons/deposit.svg" alt="Page"/>
                <img src="/icons/qrCode.svg" alt="Page"/>
            </div>

        </div>
    )
}