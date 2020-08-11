import { h } from 'preact';
import Source from './Source.jsx';

export default function Sources({ sources, setSources }) {
  const setSource = (index, newSource) =>
    setSources((sources) =>
      newSource
        ? sources.map((value, key) => (key === index ? newSource : value))
        : sources.filter((value, key) => key !== index),
    );
  return (
    <div>
      {sources.map((source, index) => (
        <Source
          source={source}
          setSource={(newSource) => setSource(index, newSource)}
        />
      ))}
    </div>
  );
}
