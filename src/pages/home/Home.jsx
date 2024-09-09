import React from "react";
import { MdEmojiTransportation } from "react-icons/md";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Feb",
    inTransit: 50,
    delay: 10,
    dealerPoint: 11,
    onTime: 80,
    totalTransport: 120,
  },
  {
    name: "Mar",
    inTransit: 60,
    delay: 6,
    dealerPoint: 25,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Apr",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "May",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Jun",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Jul",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Aug",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Sep",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Oct",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Nov",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
  {
    name: "Dec",
    inTransit: 40,
    delay: 6,
    dealerPoint: 17,
    onTime: 100,
    totalTransport: 120,
  },
];

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const data10 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const Home = () => {
  return (
    <div className="container px-5 py-4">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-3 p-2 d-flex">
          <div className="container bg-primary text-light py-2 rounded-pill">
            <div className="text-center">
              <MdEmojiTransportation />
              <span className="mx-2">Total Transports</span>
            </div>
            <div className="text-center">
              <span className="fs-1 fw-bold">48</span>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex">
          <div
            className="container text-light py-2 rounded-pill"
            style={{ backgroundColor: "#F39F5A" }}
          >
            <div className="text-center">
              <MdEmojiTransportation />
              <span className="mx-2">In-Transit Transports</span>
            </div>
            <div className="text-center">
              <span className="fs-1 fw-bold">17</span>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex">
          <div className="container text-light bg-danger py-2 rounded-pill">
            <div className="text-center">
              <MdEmojiTransportation />
              <span className="mx-2">Delay Transports</span>
            </div>
            <div className="text-center">
              <span className="fs-1 fw-bold">6</span>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex">
          <div className="container text-light bg-secondary py-2 rounded-pill">
            <div className="text-center">
              <MdEmojiTransportation />
              <span className="mx-2">Dealer-Point Transports</span>
            </div>
            <div className="text-center">
              <span className="fs-1 fw-bold">10</span>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 d-flex">
          <div className="container text-light bg-success py-2 rounded-pill">
            <div className="text-center">
              <MdEmojiTransportation />
              <span className="mx-2">On-Time Transports</span>
            </div>
            <div className="text-center">
              <span className="fs-1 fw-bold">39</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 gap-4">
        <div
          className="col-12 bg-white rounded p-4"
          style={{ minHeight: "400px" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="inTransit" stroke="#8884d8" />
              <Line type="monotone" dataKey="delay" stroke="#82fa9d" />
              <Line type="monotone" dataKey="dealerPoint" stroke="#82aa9d" />
              <Line type="monotone" dataKey="onTime" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className="col-12 bg-white rounded p-4"
          style={{ minHeight: "400px" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className="col-12 bg-white rounded p-4"
          style={{ minHeight: "400px" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data10}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
