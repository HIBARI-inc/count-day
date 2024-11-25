"use client";

import { useState } from 'react';

interface AddCounterFormProps {
    onAdd: (name: string) => void;
}

export default function AddCounterForm({ onAdd }: AddCounterFormProps) {
    const [counterName, setCounterName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (counterName.trim()) {
            onAdd(counterName);
            setCounterName(""); // 入力欄をクリア
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-counter-form">
            <input
                type="text"
                value={counterName}
                onChange={(e) => setCounterName(e.target.value)}
                placeholder="カウンター名を入力"
            />
            <button type="submit">追加</button>
        </form>
    );
}
