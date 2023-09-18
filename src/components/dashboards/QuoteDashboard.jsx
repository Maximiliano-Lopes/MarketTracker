import PropTypes from "prop-types";
import React from "react";
import Navigation from "../navigation/Navigation";
import "./styles/styles.css";






export default function QuoteDashboard({ quoteInfo }) {
  
  const [result, setTicker] = React.useState(null); 

  React.useMemo(() => {
    setTicker(quoteInfo);
    console.log("quoteInfo: ", quoteInfo);
   
  }, [quoteInfo]);

  return (
    <div>
      <h2>Dashboard</h2>
      {!result ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <Navigation />
          <div id="container">
            <div id="titleQuote" className="card">
              <img src={result.results[0].logourl} />
              <div>
                <h3>{result.results[0].symbol}</h3>
                <p>{result.results[0].longName}</p>
              </div>
              <div>
                <p><strong>Atualizado em:</strong></p>
                <p>{result.results[0].updatedAt}</p>
              </div>
            </div>
            <div>
              <div className="card">
                <p><strong>Preço</strong></p>
                <p>
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].regularMarketPrice
                  )}
                </p>
              </div>
              {/*  <div>
              <p>Variação (dia)</p>
              <p> R$ 0,84 (2.54%)▲</p>
            </div> */}
              <div className="card">
                <p><strong>Min. 52 Semanas</strong></p>
                <p>
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].fiftyTwoWeekLow
                  )}
                </p>
              </div>
              <div className="card">
                <p><strong>Máx. 52 Semanas</strong></p>
                <p>
                  {" "}
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].fiftyTwoWeekHigh
                  )}
                </p>
              </div>
              <div className="card">
                <p><strong>Capitalização de mercado</strong></p>
                <p>
                  {" "}
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].marketCap
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
QuoteDashboard.propTypes = {
  quoteInfo: PropTypes.object,
};
