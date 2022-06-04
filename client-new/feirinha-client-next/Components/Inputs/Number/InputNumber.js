import Styles from './InputNumber.module.css'

export default function InputNumber(props) {
    return (
        <div className={Styles.wrapper}>
            <label>{props.label}</label>
            <input type="number"></input>
        </div>
    )
}