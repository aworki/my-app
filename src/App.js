import './App.css';
import { Select } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react'
import Chart1 from './components/Chart1';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Chart4 from './components/Chart4';

function App() {

  // 一个值对应一个筛选框哈
  const [currentSelect, setCurrentSelect] = useState(5); // 第一个筛选框的值  这个地方的5是初始值
  // const [currentSelect, setCurrentSelect] = useState(5); // 第二个筛选框的值 根据需求增加！！注意别重复
  // const [currentSelect, setCurrentSelect] = useState(5); // 第三个筛选框的值 根据需求增加 ！！注意别重复
  // const [currentSelect, setCurrentSelect] = useState(5); // 第四个筛选框的值 根据需求增加 ！！注意别重复

  const handleChange = (value) => {
    setCurrentSelect(value)
  }
  return (
    <div className="App">
      {/* 筛选框 1*/}
      <Select
        defaultValue="a-a1是5"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: '10', label: 'a-a1变成10' },
          { value: '20', label: 'a-a1变成20' },
          { value: '30', label: 'a-a1变成30' },
          { value: '40', label: 'a-a1变成40' },
        ]}
      />
      {/* 筛选框 2*/}
      {/* <Select
        defaultValue="a-a1是5"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: '10', label: 'a-a1变成10' },
          { value: '20', label: 'a-a1变成20' },
          { value: '30', label: 'a-a1变成30' },
          { value: '40', label: 'a-a1变成40' },
        ]}
      /> */}

      {/* 筛选框 3*/}
      {/* <Select
        defaultValue="a-a1是5"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: '10', label: 'a-a1变成10' },
          { value: '20', label: 'a-a1变成20' },
          { value: '30', label: 'a-a1变成30' },
          { value: '40', label: 'a-a1变成40' },
        ]}
      /> */}

      {/* 筛选框 4*/}
      {/* <Select
        defaultValue="a-a1是5"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: '10', label: 'a-a1变成10' },
          { value: '20', label: 'a-a1变成20' },
          { value: '30', label: 'a-a1变成30' },
          { value: '40', label: 'a-a1变成40' },
        ]}
      /> */}

      {/* 图表1 */}
      <Chart1 currentSelect={currentSelect} />
      {/* 图表2 */}
      <Chart2 currentSelect={currentSelect} />
      {/* 图表3 */}
      <Chart3 currentSelect={currentSelect} />
      {/* 图表4 */}
      <Chart4 currentSelect={currentSelect} />
    </div>
  );
}

export default App;
