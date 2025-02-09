import React from 'react';

const StudentCard = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-1/3 lg:w-1/4 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1"><strong>Age:</strong> {age}</p>
      <p className="text-gray-600 mb-1"><strong>Roll Number:</strong> {rollNumber}</p>
      <p className="text-gray-600 mb-1"><strong>Class:</strong> {studentClass}</p>
    </div>
  );
};

export default StudentCard;