import AddCounterForm from '../components/AddCounterForm';

export default function AddPage() {
    return (
        <div>
            <h1>カウンターを追加</h1>
            <AddCounterForm onAdd={() => { }} />
        </div>
    );
}
