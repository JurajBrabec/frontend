import { h, Component } from 'preact';

export default function Title({ name, setName }) {
  const s = () => setName('aa');
  return (
    <button type="button" class="btn btn-primary" onClick={s}>
      Primary {name}
    </button>
  );
}

class Title1 extends Component {
  render({ name, setName }) {
    this.setName = () => setName('aa');
    return <h1 onClick={this.setName}>TITLE {name}</h1>;
  }
}
