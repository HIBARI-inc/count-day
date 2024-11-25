import Link from 'next/link';
import CounterList from './components/CounterList';

export default function Home() {
  return (
    <div>
      <h1>カウントデイ</h1>
      <div className="container">
        <CounterList />
        <Link href="/history" className="nav-button">
          履歴ページへ
        </Link>
      </div>
    </div>
  );
}
