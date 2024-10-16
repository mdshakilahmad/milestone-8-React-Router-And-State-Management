import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const PagesToRead = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#2cb9dc",
    "#34dc2c",
    "#dc2c5c",
    "#b42cdc",
    "#708790",
  ];

  const data = [
    {
      name: "The Silent Patient",
      totalPages: 336,
    },
    {
      name: "Educated",
      totalPages: 352,
    },
    {
      name: "The Midnight",
      totalPages: 304,
    },
    {
      name: "Becoming",
      totalPages: 448,
    },
    {
      name: "the Crawdads",
      totalPages: 384,
    },
    {
      name: "Sapiens",
      totalPages: 464,
    },
    {
      name: "Atomic Habits",
      totalPages: 320,
    },
    {
      name: "Circe",
      totalPages: 393,
    },
    {
      name: "The Alchemist",
      totalPages: 208,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="bg-base-200 rounded-2xl px-2 sm:px-6 md:px-7 py-12">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          // width={1100}
          // height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <YAxis ticks={[0, 85, 170, 255, 340]} /> Custom Y-axis ticks */}
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;

// Chatgtp :-
/* 
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Sample data (replace with your actual data)
const data = [
  { bookName: "The Great Gatsby", totalPages: 192, fill: "#0088FE" },
  { bookName: "To Kill a Mockingbird", totalPages: 281, fill: "#00C49F" },
  { bookName: "1984", totalPages: 328, fill: "#FFBB28" },
  { bookName: "The Alchemist", totalPages: 177, fill: "#FF8042" },
  { bookName: "Pride and Prejudice", totalPages: 279, fill: "#FF4848" },
];

// Custom cone shape for bars
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const path = `M${x},${y + height} L${x + width / 2},${y} L${x + width},${
    y + height
  } Z`;
  return <path d={path} stroke="none" fill={fill} />;
};
const PagesToRead = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}>
            <LabelList dataKey="totalPages" position="top" fill="#000" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
 */
