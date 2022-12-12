import React from 'react';
import {SvgXml} from 'react-native-svg';



const HideSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L10 10L19 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
      
        `}
    />
  );
};


export default HideSvg;