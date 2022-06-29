import Styles from './InputNumber.module.css'

export default function InputNumber(props) {
    return (
        <div className={Styles.wrapper}>
            <label>{props.label}</label>
            <input type="number" name={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}