import { useEffect, useState, useRef } from 'react'
import originOption1 from '../../originOption1.json';
import * as echarts from 'echarts';


function Chart1({currentSelect}) {
  const chartRef1 = useRef();
  const handleChange = () => {
    console.log('currentSelect', currentSelect);
    // 1、处理数据 ，先复制了一份初始的option
    const newOption = {...originOption1}
    // 2、根据value的值，修改option的值, 
    // 我这里只是写一个实例，具体到时候怎么改还是要看你自己怎么处理这个数据
    // 这一步主要就是把原option修改成你想要的样子
    newOption.series.links[0].value = currentSelect;
    // 3、将处理好的数据赋值进去，react会帮你自动生效
    setOption1(newOption)
  };

  const [option1, setOption1] = useState(originOption1);


  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chartRef1.current);
    // 绘制图表
    myChart.setOption(option1);
  }, [option1])


  useEffect(() => {
    handleChange();
  }, [currentSelect])


  return (
    <div style={{ width: '200px', height: '200px'}} ref={chartRef1}></div>
  );
}

export default Chart1;
