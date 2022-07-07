import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Taxable Investments', value: 10, unit: '%', fill: '#00BDF3' },
  { name: 'Qualified Retirement', value: 20, unit: '%', fill: '#FDCC4A' },
  { name: 'Health Savings Accounts', value: 20, unit: '%', fill: '#6673E5' },
  { name: 'Cash Equivalents', value: 35, unit: '%', fill: '#FE8856' },
  { name: 'Realestate', value: 15, unit: '%', fill: '#EB8EED' },
];

const renderLegend = (value, entry, index) => {
  return <span style={{ color: 'var(--dark, #000)' }}>{value}</span>;
};

function App() {
  return (
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
        formatter={renderLegend}
      />
      <Pie
        data={data}
        cx={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
  );
}

export default App;
