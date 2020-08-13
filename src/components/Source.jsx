import { h } from 'preact';

export default function Source({ source, setSource }) {
  const changeSource = (newSource) => {
    setSource({ ...source, ...newSource });
  };
  const removeSource = () => setSource(false);
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
        <div className="card-text">
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
