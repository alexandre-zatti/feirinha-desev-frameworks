import Styles from './ButtonDefault.module.css'

export default function ButtonDefault(props) {
    return (
        <div className={Styles.wrapper}>
            <button> {props.text} </button>
        </div>
    )
}