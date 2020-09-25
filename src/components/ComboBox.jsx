import { h } from 'preact';

export default function ComboBox({ data, selected, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  return (
    <select class="custom-select" value={selected} onChange={setValue}>
      {data.map((value, index) => (
        <option key={index} value={value.value}>
          {value.name}
        </option>
      ))}
    </select>
  );
}
