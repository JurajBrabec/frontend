import { h } from 'preact';
import { useState } from 'preact/hooks';
import customers from './assets/customers';
import timePeriods from './assets/timePeriods';
import towers from './assets/towers';
import Navbar from './components/Navbar.jsx';
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [name, setName] = useState('me');
  const [tower, setTower] = useState('All');
  const towerData = {
    data: towers,
    selected: tower,
    onChange: setTower,
  };
  const [customer, setCustomer] = useState('All');
  const customerData = {
    data: customers,
    selected: customer,
    onChange: setCustomer,
  };
  const [timePeriod, setTimePeriod] = useState('Week');
  const timePeriodData = {
    data: timePeriods,
    selected: timePeriod,
    onChange: setTimePeriod,
  };
  const reports = [];
  return (
    <div className="container-fluid px-0">
      <Navbar
        customer={customerData}
        timePeriod={timePeriodData}
        tower={towerData}
      />
      <div className="container-fluid">
        <span>
          Customer:{customer} Time Period:{timePeriod} Tower: {tower}
        </span>
        <Title name={name} setName={setName} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
