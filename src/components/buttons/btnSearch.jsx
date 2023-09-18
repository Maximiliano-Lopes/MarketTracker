import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router';
import "./styles/btnSearch.css"


export default function BtnSearch({quote}){
        const navigate = useNavigate();
 
    return(
        <><button onClick={() => navigate("/search", {state: {quote: quote}})}>Pesquisar</button></>
    )
}

BtnSearch.propTypes = {
    quote: PropTypes.string
}