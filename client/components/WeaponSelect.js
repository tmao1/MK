import React from 'react';

class WeaponSelect extends React.Component {
// export default () => {
  constructor(props) {
    super(props);
    this.state = { weapons: [] };
  }

  componentDidMount() {
    fetch('//localhost:3333/weapon/all')
    .then(r => r.json())
    .then(j => {
      console.log(j);
      this.setState({ weapons: j.weapons });
    });
  }

  render() {
    return (
      <div>
        <h1>Choose your weapon</h1>
        <div>
          <label>Weapon</label>
          <select ref='weapon'>
            {this.state.weapons.map((t, i) => <option key={i} value={t._id} >{t.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default WeaponSelect;
