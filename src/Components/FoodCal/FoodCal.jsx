import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const FoodCal = () => {
  const food = [
    {
      name: "Spaghetti Bolognese",
      calories: 650
    },
    {
      name: "Caesar Salad",
      calories: 300
    },
    {
      name: "Chicken Tikka Masala",
      calories: 750
    },
    {
      name: "Vegetable Stir Fry",
      calories: 400
    }
  ];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={food}
            dataKey="calories"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FoodCal;
