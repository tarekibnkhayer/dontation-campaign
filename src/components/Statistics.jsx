import { useLoaderData } from 'react-router-dom';
import { getStoredDonatedCards } from '../utility/LocalStorage';
import React from 'react';
import Chart from 'react-apexcharts'
const Statistics = () => {
    const totalDonations = useLoaderData();
    const yourDonations = getStoredDonatedCards();
    const yourDonationsLength = yourDonations.length
    const totalDonationsLength = totalDonations.data.length - yourDonationsLength;
    console.log(yourDonationsLength, totalDonationsLength);

    return (
    <React.Fragment>
        <div>
            <Chart
            type='pie'
            width={1300}
            height={550}
            series={[totalDonationsLength, yourDonationsLength]} 
            options={
                {
                noData: {text: "Empty data"},
                labels: ['Total Donation', 'Your Donation'],
                legend: {position: 'bottom'}
                
            }
        }
            >

            </Chart>
        </div>
    </React.Fragment>
    );
};

export default Statistics;