import { h } from 'preact';

export default function Input({ name, value, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  return (
    <div class="input-group input-group-sm my-1">
      {name && (
        <div class="input-group-prepend">
          <span class="input-group-text">{name}</span>
        </div>
      )}
      <input
        type="text"
        class="form-control"
        value={value}
        onChange={setValue}
      ></input>
    </div>
  );
}
