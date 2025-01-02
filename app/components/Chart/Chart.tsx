import { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import styles from './Chart.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Loading } from '../Loading/Loading';

export const Chart = () => {
    const [data, setData] = useState<any>(null);
    const [stockChartXValues, setStockChartXValues] = useState<string[]>([]);
    const [stockChartYValues, setStockChartYValues] = useState<number[]>([]);
    const symbol = useSelector((state: RootState) => state.symbol)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=OH4VLYNMRWKRX3FP`
                );
                if (response.data && response.data['Time Series (Daily)']) {
                    const timeSeries = response.data['Time Series (Daily)'];

                    const xValues = Object.keys(timeSeries);
                    const yValues = xValues.map((key) => timeSeries[key]['4. close']);

                    setStockChartXValues(xValues);
                    setStockChartYValues(yValues);
                    setData(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, [symbol]);
    return (
        <div className={styles.wrapper}>
            {
                data ? <>
                <h1>{symbol}</h1>
            <div className={styles.chartContainer}>
                <Plot
                    data={[
                        {
                            x: stockChartXValues,
                            y: stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: '#000' },
                        },
                    ]}
                    layout={{
                        width: 800,
                        height: 400,
                    }}
                />
            </div></> : null //<Loading/> 
            }
        </div>
    );
};

