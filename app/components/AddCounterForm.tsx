'use client';

import { useState } from 'react';

interface AddCounterFormProps {
    onAdd: (name: string) => void;
}

export default function AddCounterForm({ onAdd }: AddCounterFormProps) {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="カウンター名"
            />
            <button type="submit">追加</button>
        </form>
    );
}
