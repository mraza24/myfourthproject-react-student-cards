import React from 'react';
import StudentCard from './components/StudentCard';

export default function Home() {
  const students = [
    { name: 'John Doe', age: 16, rollNumber: '101', studentClass: '10th' },
    { name: 'Jane Smith', age: 17, rollNumber: '102', studentClass: '11th' },
    { name: 'Sam Wilson', age: 15, rollNumber: '103', studentClass: '9th' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen p-4 bg-gray-100">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
        />
      ))}
    </div>
  );
}