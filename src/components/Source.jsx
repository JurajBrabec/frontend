import { h } from 'preact';
import { useState } from 'preact/hooks';
import Filter from './Filter.jsx';

export default function Source({ source, setSource }) {
  const changeSource = (newSource) => {
    setSource({ ...source, ...newSource });
  };
  const removeSource = () => setSource(false);
  const fields = source.fields.map((field) => ({
    value: field.name,
    name: field.title,
  }));
  const operators = [
    { value: '=', name: 'is' },
    { value: '!=', name: 'is not' },
  ];
  const orders = [
    {
      value: 'ASC',
      name: 'ascending',
    },
    {
      value: 'DESC',
      name: 'descending',
    },
  ];
  const [filters, setFilters] = useState(source.filters);
  return (
    <div class="card mb-3">
      <div class="card-header">
        <h4>
          {source.title}
          <button
            type="button"
            class="ml-2 mb-1 close"
            aria-label="Close"
            onClick={removeSource}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </h4>
      </div>
      <div class="card-body">
        <div class="card-title">{source.description}</div>
        <div class="card-text">
          Filters:
          {filters.map((filter) => (
            <Filter filter={filter} fields={fields} operators={operators} />
          ))}
          <button
            type="button"
            class="btn btn-success btn-sm"
            onClick={() =>
              setFilters((filters) => [
                ...filters,
                {
                  field: fields[0].name,
                  operator: operators[0].name,
                  value: 'value',
                },
              ])
            }
          >
            +
          </button>
          <pre>{JSON.stringify(source)}</pre>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => changeSource({ title: 'New Title' })}
        >
          Change {source.title}
        </button>
      </div>
    </div>
  );
}
