function Input(props) {
 return(
    <input type='text' value={props.user} onChange={e => {props.setUser(e.target.value)}}></input>
 )
}

export default Input