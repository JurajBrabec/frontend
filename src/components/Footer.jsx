import { h } from 'preact';

export default function Footer({ config }) {
  return (
    <div class="card text-center border-white">
      <div
        class="card-body text-muted"
        dangerouslySetInnerHTML={{ __html: config.copyright }}
      />
    </div>
  );
}
