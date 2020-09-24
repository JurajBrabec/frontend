import { h } from 'preact';

export default function ComboBox({ name, data, selected, onChange }) {
  const setValue = (e) => onChange(e.target.value);
  const select = (
    <select
      class="custom-select custom-select-sm"
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
  );
  return name ? (
    <div class="input-group input-group-sm mx-1 my-0">
      <div class="input-group-prepend">
        <label class="input-group-text" for={'inputGroup' + name}>
          {name}
        </label>
      </div>
      {select}
    </div>
  ) : (
    select
  );
}
