function Greetings (props) {
    console.log (props.lang)
    return (
        <div>
            <h2>Greetings</h2>
            <h4 lang={props.lang} > Hello {props.children} </h4> 
            {/* COMO TRADUCIR AUTOMATICAMENTE */}
        </div>
    )
}

export default Greetings