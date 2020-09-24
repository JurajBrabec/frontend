import { h } from 'preact';

export default function Input({ name, value, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  const input = (
    <input type="text" class="form-control" value={value} onChange={setValue} />
  );
  return name ? (
    <div class="input-group input-group-sm mx-0 my-1">
      <div class="input-group-prepend">
        <span class="input-group-text">{name}</span>
      </div>
      {input}
    </div>
  ) : (
    input
  );
}
