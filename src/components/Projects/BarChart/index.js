import React, { useEffect, useState } from 'react';
import './index.scss';

function BarChart(props) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [widthOfColumn, setWidthOfColumn] = useState(0);
    const [gap, setGap] = useState(0);
    const startX = 30;
    const startY = 30;
    const data = [10, 20, 30, 40, 50, 60, 70, 87, 40, 69, 78];
    const maxValue = data.sort()[data.length - 1];
    const range =  (((maxValue + "").length -  1) * 10) * 2;
    console.log("range",range);
    useEffect( () => {
        const interval = setInterval( () => {
            const height = document.getElementById('bar-chart-container')?.clientHeight;
            const width = document.getElementById('bar-chart-container')?.clientWidth;
            if(height && width) {
                setHeight(height);
                setWidth(width);
                const _widthOfColumn = (width - 40) / (data.length + 5);
                const gap = (width - (_widthOfColumn * data.length) - 50) / (data.length + 2);
                setGap(gap);
                setWidthOfColumn(_widthOfColumn);
                clearInterval(interval);

            }
        }, 500);
    }, []);



   
    return (
        <div className="bar-chart-container" id="bar-chart-container">
            <svg width="100%" height="100%">
                 {/* <path d={`M 30 30 V ${height - 30} H ${width - 30}`} fill="none" strokeWidth="2" stroke="red"/> */}
                 {/** Y Axis */}
                 <line 
                    x1={startX} 
                    y1={startY} 
                    y2={height - startY} 
                    x2={startX} 
                    stroke="#bac3d2" 
                    strokeWidth="2" 
                    strokeLinecap="butt"/>
                
                {/** X Axis */}
                <line 
                    x1={startX} 
                    y1={height - startY} 
                    y2={height - startY} 
                    x2={width - startX} 
                    stroke="#bac3d2" 
                    strokeWidth="2" 
                    strokeLinecap="butt"/>

                {
                    data.map( (value, index) => {
                        return (<rect 
                                    key={index}
                                    className="bar"
                                    x={ 50 + (widthOfColumn + gap) * index } 
                                    y={ height - (startY + ((value / maxValue) * (0.9 * height)))} 
                                    width={widthOfColumn} 
                                    height={ (value / maxValue) * (0.9 * height)} 
                                    // fill="#43aea8"
                                    fill="#bac2d4"
                                    strokeWidth="2">
                                         <title> {value} </title>
                                </rect>
                        )
                    })
                }

                {
                    [0,0,0,0,0].map( (a, index) => {
                        return(<text index={index} x="5" y={ height - 30 - (index  * (height / 5 ))} class="small"> 
                        {
                            range * (index)
                        } 
                        </text>)
                    })
                   
                        
                    

                }
                
            </svg>
        </div>
    );
}

export default BarChart;