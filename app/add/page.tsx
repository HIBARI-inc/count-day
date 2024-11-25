"use client";

import AddCounterForm from '../components/AddCounterForm';

export default function AddPage() {
    const handleAdd = (name: string) => {
        console.log(`カウンターが追加されました: ${name}`);
    };

    return (
        <div>
            <h1>カウンターを追加</h1>
            <AddCounterForm onAdd={handleAdd} />
        </div>
    );
}