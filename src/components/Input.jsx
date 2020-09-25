import { h } from 'preact';

export default function Input({ value, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  return (
    <input type="text" class="form-control" value={value} onChange={setValue} />
  );
}
