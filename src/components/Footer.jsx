import { h } from 'preact';

export default function Footer({ config }) {
  return (
    <div class="card text-center border-white">
      <div class="card-body">{config.copyright}</div>
    </div>
  );
}
