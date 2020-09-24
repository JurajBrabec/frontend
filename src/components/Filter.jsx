import { h } from 'preact';
import { useState } from 'preact/hooks';
import ComboBox from './ComboBox.jsx';
import Input from './Input.jsx';

export default function Filter({ filter, updateFilter, fields, operators }) {
  const [editable, setEditable] = useState(false);
  return (
    <div class="d-flex flex-row align-items-center py-0 px-1">
      {editable ? (
        <div class="input-group input-group-sm align-items-center bg-success py-1">
          <div class="input-group-prepend mx-1">
            <ComboBox
              data={fields}
              selected={filter.field}
              onChange={(value) =>
                updateFilter({ ...filter, ...{ field: value } })
              }
            />
            <span>&nbsp;</span>
            <ComboBox
              data={operators}
              selected={filter.operator}
              onChange={(value) =>
                updateFilter({ ...filter, ...{ operator: value } })
              }
            />
          </div>
          <Input
            value={filter.value}
            onChange={(value) => updateFilter({ ...filter, ...{ value } })}
          />
          <div class="input-group-append">
            <button
              type="submit"
              class="btn btn-success"
              onClick={(e) => {
                e.stopPropagation();
                setEditable(false);
              }}
            >
              <span>&radic;</span>
            </button>
          </div>
        </div>
      ) : (
        <div class="btn-group p-1 btn-group-sm">
          <button
            type="button"
            class="btn btn-light"
            onClick={(e) => {
              e.stopPropagation();
              setEditable(true);
            }}
          >
            <span>
              {fields.map((f) => (f.value === filter.field ? f.name : ''))}
              &nbsp;
            </span>
            <span>
              {operators.map((o) =>
                o.value === filter.operator ? o.name : '',
              )}
            </span>
            &nbsp;{`'${filter.value}'`}&nbsp;
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={(e) => {
              e.stopPropagation();
              updateFilter();
            }}
          >
            <span>&times;</span>
          </button>
        </div>
      )}
    </div>
  );
}
