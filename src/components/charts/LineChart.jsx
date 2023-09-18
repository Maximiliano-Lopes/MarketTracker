import { Line } from "react-chartjs-2";


const data = {
  labels: ["Cat","Dog","Bird","Mouse"],
  dataSets:[
    {
      label: "Teste",
      data: [10, 20, 30, 40],
      borderColor:"#f44336",
      borderWidth: 1
    },
  ],
}




export const LineChart = () =>{
  return (
    <div>
      <Line data={data}
      />
    </div>
  );
}


