import React from 'react';
import {SvgXml} from 'react-native-svg';



const ShareSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3C11 4.10457 11.8954 5 13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1C11.8954 1 11 1.89543 11 3ZM11 3L4.5 6.67709M11 13C11 14.1046 11.8954 15 13 15C14.1046 15 15 14.1046 15 13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13ZM11 13L4.5 9.32291M4.5 6.67709C4.13353 6.26188 3.59735 6 3 6C1.89543 6 1 6.89543 1 8C1 9.10457 1.89543 10 3 10C3.59735 10 4.13353 9.73812 4.5 9.32291M4.5 6.67709C4.81118 7.02965 5 7.49278 5 8C5 8.50722 4.81118 8.97035 4.5 9.32291" stroke="white" stroke-width="2"/>
      </svg>          
        `}
    />
  );
};


export default ShareSvg;