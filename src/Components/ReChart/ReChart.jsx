import React from 'react';
import { LineChart, Line ,XAxis, YAxis } from 'recharts';

const ReChart = () => {
    const studentSubjectData =  [
        {
            "id": 1,
            "name": "Alice Johnson",
            "math": 85,
            "physics": 78,
            "chemistry": 92,
            "ict": 88
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "math": 90,
            "physics": 84,
            "chemistry": 76,
            "ict": 95
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "math": 70,
            "physics": 65,
            "chemistry": 80,
            "ict": 75
        },
        {
            "id": 4,
            "name": "Daisy Evans",
            "math": 88,
            "physics": 90,
            "chemistry": 85,
            "ict": 92
        },
        {
            "id": 5,
            "name": "Ethan Wright",
            "math": 95,
            "physics": 89,
            "chemistry": 94,
            "ict": 91
        },
        {
            "id": 6,
            "name": "Ethan ",
            "math": 85,
            "physics": 70,
            "chemistry": 80,
            "ict": 88
        }
    ]
    
    return (
        <div className=' mt-[10rem] mb-[6rem]' >
        <LineChart width={900} height={700} data={studentSubjectData}>

            <Line type="monotone" dataKey="math" stroke="pink" />
            <Line type="monotone" dataKey="physics" stroke="red" />
            <Line type="monotone" dataKey="chemistry" stroke="green" />
            <Line type="monotone" dataKey="ict" stroke="blue" />

            <XAxis dataKey="name" />
            <YAxis />

        </LineChart>
           
        </div>
    );
};

export default ReChart;