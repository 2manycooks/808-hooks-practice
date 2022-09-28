function Input(props) {
 return(
    <input type='text' value={props.stringArray} onChange={e => {props.setStringArray([...props.stringArray, e.target.value])}}></input>
 )
}

export default Input