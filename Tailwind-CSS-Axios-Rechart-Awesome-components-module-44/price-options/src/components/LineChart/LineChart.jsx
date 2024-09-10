import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const subjectMarksData = [
    { id: 1, name: "John", math: 85, physics: 78, chemistry: 82 },
    { id: 2, name: "Emily", math: 78, physics: 84, chemistry: 75 },
    { id: 3, name: "Michael", math: 92, physics: 89, chemistry: 91 },
    { id: 4, name: "Sarah", math: 74, physics: 77, chemistry: 80 },
    { id: 5, name: "David", math: 88, physics: 85, chemistry: 83 },
    { id: 6, name: "Jessica", math: 80, physics: 79, chemistry: 85 },
    { id: 7, name: "Daniel", math: 95, physics: 92, chemistry: 94 },
    { id: 8, name: "Sophia", math: 83, physics: 81, chemistry: 88 },
    { id: 9, name: "James", math: 77, physics: 74, chemistry: 79 },
    { id: 10, name: "Olivia", math: 90, physics: 87, chemistry: 86 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey={"math"} stroke="red"></Line>
        <Line dataKey={"physics"} stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
