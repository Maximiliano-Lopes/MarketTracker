/* import PropTypes from 'prop-types'; */
import React from 'react';
import { useLocation } from 'react-router';
import QuoteDashboard from '../../components/dashboards/QuoteDashboard';

export default function SearchResult(){
    const {state} = useLocation();
    const {quote} = state;
    const [tickers, setTickers] = React.useState(null)

    React.useEffect(() => {
        fetch("http://localhost:8080/search/"+quote)
          .then((res) => res.json())
          .then((data) => {
            setTickers(data);
          });
        
    }, [quote]);


    return(
        <>
            <QuoteDashboard quoteInfo={tickers}/>
        </>
    )
}
/* SearchResult.propTypes = {
    quote: PropTypes.string
} */