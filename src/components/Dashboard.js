import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';
const generateMonthlyData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    expenses: Math.floor(Math.random() * 2000) + 3000
  }));
};

const COLORS = ['#00C49F', '#FFBB28'];

const Dashboard = () => {
  const [monthlyData, setMonthlyData] = useState(generateMonthlyData());
  const [currentMonth] = useState('September');
  const [totalExpenses] = useState(4524.09);
  const [mainExpense] = useState(3030.98);
  const [secondaryExpense] = useState(223.98);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonthlyData(generateMonthlyData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>FinanceSync©</h1>
      </nav>
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li>Inicio</li>
            <li>Gastos</li>
            <li>Ingresos</li>
            <li>Reportes</li>
            <li>Configuración</li>
          </ul>
        </aside>
        <section className="content">
          <div className="charts">
            <div className="chart">
              <h2>Gastos del Mes Actual</h2>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-2">Gastos de {currentMonth}</h2>
                    <p className="text-3xl font-bold">${totalExpenses.toFixed(2)}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-green-500">${mainExpense.toFixed(2)}</span>
                      <span className="text-yellow-500">${secondaryExpense.toFixed(2)}</span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-2">Gastos Mensuales</h2>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={monthlyData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-2">Inversiones</h2>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Invested', value: totalExpenses },
                            { name: 'Goal', value: 10000 - totalExpenses }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {monthlyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <p className="text-center mt-2">${totalExpenses.toFixed(2)} / $10,000.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart">
              <h2>Gastos Semanales</h2>
              {/* Aquí iría el componente del gráfico semanal */}
            </div>
          </div>
          <div className="upcoming-payments">
            <h2>Próximos Pagos</h2>
            <ul>
              <li>Pago de alquiler - 01/11/2023</li>
              <li>Factura de electricidad - 05/11/2023</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;