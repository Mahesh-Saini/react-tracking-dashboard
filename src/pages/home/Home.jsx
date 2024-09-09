import React from "react";
import { MdEmojiTransportation } from "react-icons/md";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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

const Home = () => {
  return (
    <div className="container-fluid px-5 py-4">
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

      <div className="row mt-4">
        <div
          className="col-12 bg-white rounded p-4"
          style={{ minHeight: "400px" }}
        >
          <div className="container">
            <LineChart
              width={1000}
              height={400}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
          </div>
        </div>
        <div className="col-6 bg-primary" style={{ minHeight: "400px" }}>
          Hi
        </div>
        <div className="col-6 bg-danger" style={{ minHeight: "400px" }}>
          Good
        </div>
        <div className="col-6 bg-secondary" style={{ minHeight: "400px" }}>
          Good
        </div>
      </div>
      <div className="row">
        <div className="col-12 bg-success" style={{ minHeight: "560px" }}>
          hello
        </div>
        <div className="col-12 bg-primary" style={{ minHeight: "560px" }}>
          Hi
        </div>
      </div>
    </div>
  );
};

export default Home;
