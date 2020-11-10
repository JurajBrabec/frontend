import { h } from 'preact';
import { useState } from 'preact/hooks';
import ComboBox from './ComboBox.jsx';
import Input from './Input.jsx';

export default function Filter({ filter, updateFilter, fields, operators }) {
  const [editable, setEditable] = useState(true);
  return (
    <div class="d-flex flex-row align-items-center pr-1">
      {editable ? (
        <div class="input-group input-group-sm border-success">
          <ComboBox
            data={fields}
            selected={filter.field}
            onChange={(value) =>
              updateFilter({ ...filter, ...{ field: value } })
            }
          />
          <ComboBox
            data={operators}
            selected={filter.operator}
            onChange={(value) =>
              updateFilter({ ...filter, ...{ operator: value } })
            }
          />
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
              <span>&#10003;</span>
            </button>
          </div>
        </div>
      ) : (
        <div class="btn-group btn-group-sm">
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
            class="btn btn-secondary"
            onClick={(e) => {
              e.stopPropagation();
              updateFilter();
            }}
          >
            <span>&#10005;</span>
          </button>
        </div>
      )}
    </div>
  );
}
