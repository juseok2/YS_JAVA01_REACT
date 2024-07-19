import React, { useState } from 'react';

const expensiveFunction = (list, input) => {
  console.log('Filtering list...');
  // 필터링 작업을 모방한 시간 지연
  for (let i = 0; i < 1000000000; i++) {}
  return list.filter(item => item.toLowerCase().includes(input.toLowerCase()));
};

export const UseMemoExampleWithoutMemo = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState(['apple', 'banana', 'cherry', 'date', 'elderberry']);

  const filteredList = expensiveFunction(list, input);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Filter list..." />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


