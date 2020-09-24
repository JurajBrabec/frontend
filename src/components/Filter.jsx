import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import ComboBox from './ComboBox.jsx';
import Input from './Input.jsx';

export default function Filter({ filter, updateFilter, fields, operators }) {
  const [editable, setEditable] = useState(false);
  return (
    <div class="d-flex flex-row align-items-center">
      {editable ? (
        <Fragment>
          <span class="badge badge-primary">
            <ComboBox
              data={fields}
              selected={filter.field}
              onChange={(value) =>
                updateFilter({ ...filter, ...{ field: value } })
              }
            />
          </span>
          <span class="badge badge-dark">
            <ComboBox
              data={operators}
              selected={filter.operator}
              onChange={(value) =>
                updateFilter({ ...filter, ...{ operator: value } })
              }
            />
          </span>
          <span class="badge badge-info">
            <Input
              value={filter.value}
              onChange={(value) => updateFilter({ ...filter, ...{ value } })}
            />
          </span>
          <button
            type="button"
            class="btn btn-sm btn-success"
            onClick={(e) => {
              e.stopPropagation();
              setEditable(false);
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            onClick={() => updateFilter()}
          >
            Remove
          </button>
        </Fragment>
      ) : (
        <button
          type="button"
          class="btn btn-light btn-sm"
          onClick={() => setEditable(true)}
        >
          <span class="badge badge-primary">{filter.field}</span>
          <span class="badge badge-dark">{filter.operator}</span>
          <span class="badge badge-info">{`"${filter.value}"`}</span>
        </button>
      )}
    </div>
  );
}
