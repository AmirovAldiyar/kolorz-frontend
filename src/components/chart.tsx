import React, { useEffect, useState } from 'react';
import withStyles from 'react-jss'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const styles ={ 

}

const UnstyledChart = (classes) => {
    const options = {
        chart: {
          height: 500,
          width: 450,
          zoom: {
            enabled: false
          }
        }
      };
    
      const [series, setSeries] = useState([])
      useEffect(() => {
        fetch("/api/getInfo").then((r) => {
          r.json().then((res) => {
            setSeries(res)
          })
        })
      }, [])
    
      return (
          <ReactApexChart
            type="bar"
            options={options}
            series={series}
            height={500}
          />
      );
}

const Chart = withStyles(styles)(UnstyledChart);
export default Chart;