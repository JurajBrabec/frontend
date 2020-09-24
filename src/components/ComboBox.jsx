import { h } from 'preact';

export default function ComboBox({ name, data, selected, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  return (
    <div class="input-group input-group-sm my-1">
      {name && (
        <div class="input-group-prepend">
          <label class="input-group-text" for={'inputGroup' + name}>
            {name}
          </label>
        </div>
      )}
      <select
        class="custom-select"
        id={'inputGroup' + name}
        value={selected}
        onChange={setValue}
      >
        {data.map((value, index) => (
          <option key={index} value={value.value}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}
