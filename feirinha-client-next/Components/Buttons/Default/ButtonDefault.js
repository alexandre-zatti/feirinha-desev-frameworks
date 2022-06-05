import Styles from './ButtonDefault.module.css'

export default function ButtonDefault(props) {
    return (
        <div className={Styles.wrapper}>
            <button type="submit"> {props.text} </button>
        </div>
    )
}