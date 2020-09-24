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
  const [newFilter, setNewFilter] = useState({
    field: fields[0].value,
    operator: operators[0].value,
    value: '',
  });
  const updateFilter = (index, updatedFilter) => {
    setNewFilter(updatedFilter ? updatedFilter : filters[index]);
    setFilters((filters) =>
      updatedFilter
        ? filters.map((filter, i) => (i === index ? updatedFilter : filter))
        : filters.filter((filter, i) => i !== index),
    );
  };
  return (
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="card-title">
          {source.title}
          <button type="button" class="ml-2 mb-1 close" onClick={removeSource}>
            <span>&times;</span>
          </button>
        </h5>
      </div>
      <div class="card-body">
        <div class="card-subtitle">{source.description}</div>
        <div class="card-text">
          <div class="d-flex flex-row align-items-center">
            {filters.map((filter, index) => (
              <Filter
                key={index}
                filter={filter}
                updateFilter={(filter) => updateFilter(index, filter)}
                fields={fields}
                operators={operators}
              />
            ))}
            <button
              type="button"
              class="btn btn-sm btn-info"
              onClick={() => setFilters((filters) => [...filters, newFilter])}
            >
              +Filter
            </button>
          </div>
        </div>
        <div class="card-text">
          <pre>{JSON.stringify(filters)}</pre>
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
