'use client';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartComponentProps {
    data: { date: string; count: number }[];
}

export default function ChartComponent({ data }: ChartComponentProps) {
    const chartData = {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: 'カウント履歴',
                data: data.map(d => d.count),
                borderColor: '#3498db',
                backgroundColor: '#ecf0f1',
                fill: false,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
        },
    };

    return <Line data={chartData} options={options} />;
}
