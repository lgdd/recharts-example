import { PieChart, Pie, Tooltip, Legend, Label } from 'recharts';

const data0 = [
  { name: 'Taxable Investments', value: 10, unit: '%', fill: '#00BDF3' },
  { name: 'Qualified Retirement', value: 20, unit: '%', fill: '#FDCC4A' },
  { name: 'Health Savings Accounts', value: 20, unit: '%', fill: '#6673E5' },
  { name: 'Cash Equivalents', value: 35, unit: '%', fill: '#FE8856' },
  { name: 'Realestate', value: 15, unit: '%', fill: '#EB8EED' },
];

const data1 = [
  { name: 'Goal', value: 90, unit: '%', fill: '#00BDF3' },
  { name: 'Stretch Goal', value: 10, unit: '%', fill: '#FDCC4A' },
];

const renderLegend = (value, entry, index) => {
  return <span style={{ color: 'var(--dark, #000)' }}>{value}</span>;
};

const renderGoalLegend = (value, entry, index) => {
  if (value === 'Goal') {
    return (
      <span style={{ color: 'var(--dark, #000)' }}>
        {value}: <span style={{ fontWeight: 900 }}>$185M</span>
      </span>
    );
  }
  if (value === 'Stretch Goal') {
    return (
      <span style={{ color: 'var(--dark, #000)' }}>
        {value}: <span style={{ fontWeight: 900 }}>$200M</span>
      </span>
    );
  }
  return <span style={{ color: 'var(--dark, #000)' }}>{value}</span>;
};

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <PieChart
        style={{ background: 'var(--white, #fff)', marginRight: '1.5rem' }}
        width={480}
        height={200}
      >
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{ left: '250px', top: '40px' }}
          iconType={'circle'}
          iconSize={8}
          formatter={renderLegend}
        />
        <Pie
          data={data0}
          cx={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Label value="Total AUM" position="center" />
        </Pie>
      </PieChart>
      <PieChart
        style={{ background: 'var(--white, #fff)' }}
        width={500}
        height={200}
      >
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{ left: '250px', top: '40px' }}
          iconType={'circle'}
          iconSize={8}
          formatter={renderGoalLegend}
        />
        <Pie
          data={data1}
          cx={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Label value="Year-End Goals" position="center" />
        </Pie>
      </PieChart>
    </div>
  );
}

export default App;
