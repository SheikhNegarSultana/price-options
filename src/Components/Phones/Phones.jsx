import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis, YAxis  } from 'recharts';

const Phones = () => {
    const [phone, setPhone] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data;
                const fakePhoneObj = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    };
                    return obj;
                });
                setPhone(fakePhoneObj);
            })
            
    }, []);

    return (
        <div>
            <h1>Total Phone: {phone.length}</h1>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>

                
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;
