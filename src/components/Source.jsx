import { h } from 'preact';
import { useState } from 'preact/hooks';
import Filter from './Filter.jsx';
import Sort from './Sort.jsx';
import Table from './Table.jsx';

export default function Source({
  source,
  setSource,
  tower,
  customer,
  timePeriod,
}) {
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
  const [sorts, setSorts] = useState(source.sorts);
  const [newSort, setNewSort] = useState({
    field: fields[0].value,
    order: orders[0].value,
  });
  const updateSort = (index, updatedSort) => {
    setNewSort(updatedSort ? updatedSort : sorts[index]);
    setSorts((sorts) =>
      updatedSort
        ? sorts.map((sort, i) => (i === index ? updatedSort : sort))
        : sorts.filter((sort, i) => i !== index),
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
        <div class="card-subtitle">
          <div class="d-flex flex-row align-items-center">
            <span class="btn-sm">
              {source.description}
              {filters.length ? ', where' : ''}
            </span>
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
              class="btn btn-sm btn-outline-info"
              onClick={() => setFilters((filters) => [...filters, newFilter])}
            >
              +Filter
            </button>
            <span class="btn-sm">{sorts.length ? ', ordered by' : ''}</span>
            {sorts.map((sort, index) => (
              <Sort
                key={index}
                sort={sort}
                updateSort={(sort) => updateSort(index, sort)}
                fields={fields}
                orders={orders}
              />
            ))}
            <button
              type="button"
              class="btn btn-sm btn-outline-info"
              onClick={() => setSorts((sorts) => [...sorts, newSort])}
            >
              +Sort
            </button>
          </div>
        </div>
        <div class="card-text">
          <Table
            source={source}
            filters={filters}
            sorts={sorts}
            customer={customer}
            tower={tower}
            timePeriod={timePeriod}
          />
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
