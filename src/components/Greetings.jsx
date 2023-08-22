function Greetings (props) {
    console.log (props.lang)
    console.log("children",props.children)
    return (
        <div>
            <h2>Greetings</h2>
            <p>{props.lang === "en" ? "Hello"  : null} </p>
          

            <p>{props.lang === "de" ? `Hallo ${props.children} `  : null} </p>
            <p>{props.lang === "fr" ? "Bonjour " + props.children   : null} </p>
            {/* COMO TRADUCIR AUTOMATICAMENTE */}
            {/* !! NO AUTOMATIC TRANSLATION */}
        </div>
    )
}

export default Greetings