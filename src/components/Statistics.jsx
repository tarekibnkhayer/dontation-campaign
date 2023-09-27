import { useLoaderData } from 'react-router-dom';
import { getStoredDonatedCards } from '../utility/LocalStorage';
import React from 'react';
import Chart from 'react-apexcharts'
const Statistics = () => {
    const totalDonations = useLoaderData();
    const yourDonations = getStoredDonatedCards();
    const yourDonationsLength = yourDonations?.length
    const totalDonationsLength = totalDonations?.data?.length - yourDonationsLength;

    return (
    <React.Fragment className='lg:max-w-6xl md:max-w-2xl mx-auto max-w-sm '>
        <div className='lg:ml-[500px] lg:mt-24 md:ml-52 md:mt-12 '>
            <Chart
            type='pie'
            width={400}
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