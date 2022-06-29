import Styles from './../Number/InputNumber.module.css'

export default function InputText(props) {
    return (
        <div className={Styles.wrapper}>
            <label>{props.label}</label>
            <input type="text" name={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}