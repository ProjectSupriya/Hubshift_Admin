import React from 'react';
import { PieChart, Pie} from 'recharts';


const Piechart = () => {

// Sample data
const data = [
{name: 'Goals Added', students: 400},
{name: 'Goals Completed', students: 700},

];


return (
		<PieChart width={200} height={200}>
		<Pie data={data} dataKey="students" outerRadius={100} fill="green" />
		</PieChart>
);
}

export default Piechart;
