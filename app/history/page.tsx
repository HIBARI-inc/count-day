'use client';

import { useEffect, useState } from 'react';
import ChartComponent from '../components/ChartComponent';

interface HistoryData {
    date: string;
    count: number;
}

export default function HistoryPage() {
    const [data, setData] = useState<HistoryData[]>([]);

    useEffect(() => {
        // ローカルストレージから履歴データを取得する
        const savedCounters = localStorage.getItem('counters');
        if (savedCounters) {
            const counters = JSON.parse(savedCounters);
            const historyData: HistoryData[] = counters.map((counter: any) => ({
                date: new Date().toISOString().split('T')[0], // 仮の日付
                count: counter.count,
            }));
            setData(historyData);
        }
    }, []);

    return (
        <div className="container">
            <h1>履歴</h1>
            {data.length > 0 ? (
                <ChartComponent data={data} />
            ) : (
                <p>履歴データがありません。</p>
            )}
        </div>
    );
}
