import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('');
  return (
    <div>
      <h1>primer ejemplo en react</h1>
      <p>
        Has hecho click {count} veces y la fecha es {date}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setDate(new Date().toLocaleString());
        }}
      >
        Sumemos un click y demos la fecha
      </button>
    </div>
  );
}
