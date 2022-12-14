import React from 'react';
import {SvgXml} from 'react-native-svg';



const RepeatSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 18H18C20.2091 18 22 16.2091 22 14V5C22 2.79086 20.2091 1 18 1H5C2.79086 1 1 2.79086 1 5V14C1 16.2091 2.79086 18 5 18H5.75M10.5 18L14 14.5M10.5 18L14 21.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>      
        `}
    />
  );
};


export default RepeatSvg;