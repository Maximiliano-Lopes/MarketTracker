import React from "react";
import BtnSearch from "../buttons/btnSearch";
import "./styles/styles.css"

export default function Navigation(){
    
      const [quote, setQuote] = React.useState("")

    return(
        <>
            <nav>
                <input value={quote} onChange={(e) => {setQuote(e.target.value)}} type="textfield" placeholder="Digite o código da ação... "/>
                <BtnSearch id="btnSearch" quote={quote}/>
            </nav>
        </>
    )
}