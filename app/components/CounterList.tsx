'use client';

import { useState, useEffect } from 'react';
import CounterItem from './CounterItem';
import AddCounterForm from './AddCounterForm';

interface Counter {
    id: string;
    name: string;
    count: number;
}

export default function CounterList() {
    const [counters, setCounters] = useState<Counter[]>([]);

    useEffect(() => {
        const savedCounters = localStorage.getItem('counters');
        if (savedCounters) {
            setCounters(JSON.parse(savedCounters));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counters', JSON.stringify(counters));
    }, [counters]);

    const addCounter = (name: string) => {
        const newCounter = { id: Date.now().toString(), name, count: 0 };
        setCounters([...counters, newCounter]);
    };

    const increment = (id: string) => {
        setCounters(prev =>
            prev.map(counter =>
                counter.id === id ? { ...counter, count: counter.count + 1 } : counter
            )
        );
    };

    const decrement = (id: string) => {
        setCounters(prev =>
            prev.map(counter =>
                counter.id === id ? { ...counter, count: counter.count - 1 } : counter
            )
        );
    };

    return (
        <div className="container">
            <AddCounterForm onAdd={addCounter} />
            {counters.map(counter => (
                <CounterItem
                    key={counter.id}
                    name={counter.name}
                    count={counter.count}
                    onIncrement={() => increment(counter.id)}
                    onDecrement={() => decrement(counter.id)}
                />
            ))}
        </div>
    );
}
