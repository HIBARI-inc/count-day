'use client';

interface CounterItemProps {
    name: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export default function CounterItem({
    name,
    count,
    onIncrement,
    onDecrement,
}: CounterItemProps) {
    return (
        <div className="counter-item">
            <h2>{name}</h2>
            <p>{count}</p>
            <div>
                <button onClick={onIncrement}>+1</button>
                <button onClick={onDecrement} style={{ marginLeft: '10px' }}>-1</button>
            </div>
        </div>
    );
}
