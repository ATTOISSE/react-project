import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { PieChart } from "./pie";
import { BarChart } from "./bar";
import { getStat } from "../service/statisticService";

Chart.register(CategoryScale);

export function Statistic(){
  
  const [chartData, setChartData] = useState({})
  const [data,setData] = useState([])
  useEffect( () => {
    const loadStat  = async () => {
      const response =   await getStat()
      .then(response => {
        setData(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      console.log(response.json());
      const label = Array.isArray(data).map((item) => item.year)
      const value = Array.isArray(data).map((item) => item.userGain)
      console.log(label,value);
      
      setChartData(
        {
          labels:label, 
          datasets: [
            {
              label: "Users Gained ",
              data: value,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#FFAFCC",
                "#RTBA95",
                "#C0BF25",
                "#c1AF00"
              ],
              borderColor: "black",
              borderWidth: 2
            }
          ]
        }
      )
    }
    loadStat();
  }, []);

    return(
        <div >
         <PieChart chartData={chartData} />
         <BarChart chartData={chartData} />
        </div>
    );
}