import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';

export default function Table({
  source,
  filters,
  sorts,
  tower,
  customer,
  timePeriod,
}) {
  const [html, setHtml] = useState('table');
  useEffect(() => {
    const url = `http://localhost:3000/api/v1/${source.name}?mode=html`; //&tower=${tower}&customer=${customer}`;
    axios.get(url).then(
      (response) => {
        console.log('Table read');
        setHtml(response.data);
      },
      (error) => {
        console.log('Table NOT read', error);
      },
    );
  }, []);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      <pre>{JSON.stringify(source)}</pre>
      <pre>{JSON.stringify(filters)}</pre>
      <pre>{JSON.stringify(sorts)}</pre>
      {html}
    </div>
  );
}
