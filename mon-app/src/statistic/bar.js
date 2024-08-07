import { Bar } from "react-chartjs-2";

export function BarChart({chartData}){
    return(
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    )
}