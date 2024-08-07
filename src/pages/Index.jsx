import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const data = [
  { date: '2023-01-01', stockPrice: 100, pressRelease: 'Q4 2022 Results' },
  { date: '2023-02-01', stockPrice: 105, pressRelease: null },
  { date: '2023-03-01', stockPrice: 110, pressRelease: 'New Drug Approval' },
  { date: '2023-04-01', stockPrice: 108, pressRelease: null },
  { date: '2023-05-01', stockPrice: 115, pressRelease: 'Q1 2023 Results' },
  { date: '2023-06-01', stockPrice: 120, pressRelease: 'Clinical Trial Success' },
  { date: '2023-07-01', stockPrice: 125, pressRelease: null },
];

const pressReleases = data.filter(item => item.pressRelease);

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Novo Nordisk Press Release Effectiveness Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Stock Price and Press Releases Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stockPrice" stroke="#8884d8" name="Stock Price" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Press Releases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pressReleases.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.date}</span>
                  <Badge>{item.pressRelease}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Total Press Releases: {pressReleases.length}</li>
              <li>Current Stock Price: ${data[data.length - 1].stockPrice}</li>
              <li>Price Change: {((data[data.length - 1].stockPrice - data[0].stockPrice) / data[0].stockPrice * 100).toFixed(2)}%</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
