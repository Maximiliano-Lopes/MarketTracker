import PropTypes from "prop-types";
import React from "react";
import Navigation from "../navigation/Navigation";
import "./styles/styles.css";
import QuoteChart from "./QuoteChart";
import "chart.js/auto";

export default function QuoteDashboard({ quoteInfo }) {
  const [result, setTicker] = React.useState(null);

  const [datesChart, setDatesChart] = React.useState([]);
  const [labelsChart, setlabelsChart] = React.useState([]);

  React.useMemo(() => {
    setTicker(quoteInfo);
      if(result != null){
        let datas = []
        let dados = []
        result.results[0].historicalDataPrice.forEach(function (element) {
            let data = new Date(element.date * 1000);
            let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
            datas.push(dataFormatada);
            dados.push(element.high);
          });
        setlabelsChart(datas)
        setDatesChart(dados)
      }
  }, [quoteInfo, result]);

const labels = labelsChart
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Percurso de " + labelsChart[0] +" até " + labelsChart[(labelsChart.length - 1)],
          data: datesChart,
          borderColor: "purple",
          borderWidth: 1,
        },
      ],
    };

  


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
                <p>
                  <strong>Atualizado em:</strong>
                </p>
                <p>{result.results[0].updatedAt}</p>
              </div>
            </div>
            <div>
              <div className="card">
                <p>
                  <strong>Preço</strong>
                </p>
                <p>
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].regularMarketPrice
                  )}
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>Min. 52 Semanas</strong>
                </p>
                <p>
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].fiftyTwoWeekLow
                  )}
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>Máx. 52 Semanas</strong>
                </p>
                <p>
                  {" "}
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].fiftyTwoWeekHigh
                  )}
                </p>
              </div>
              <div className="card">
                <p>
                  <strong>Capitalização de mercado</strong>
                </p>
                <p>
                  {" "}
                  R${" "}
                  {new Intl.NumberFormat("pt-br").format(
                    result.results[0].marketCap
                  )}
                </p>
              </div>
            </div>
            <div>
              <QuoteChart chartData={data} />
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
