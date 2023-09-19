import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

function QuoteChart({ chartData }) {
  return (
    <Line data={chartData}/>
  );
}

export default QuoteChart;

QuoteChart.propTypes = {
  chartData: PropTypes.object,
};
