import React from 'react';
import {SvgXml} from 'react-native-svg';



const NextSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-1.52588e-05 3.63045L-1.71661e-05 24.2679C-1.71661e-05 25.0377 0.833317 25.5189 1.49998 25.134L17.9658 15.6274V24.9575C17.9658 25.5098 18.4135 25.9575 18.9658 25.9575H20.9658C21.5181 25.9575 21.9658 25.5098 21.9658 24.9575L21.9658 1.95753C21.9658 1.40525 21.5181 0.957531 20.9658 0.957531H18.9658C18.4135 0.957531 17.9658 1.40525 17.9658 1.95753L17.9658 12.271L1.49998 2.76443C0.833319 2.37953 -1.52588e-05 2.86065 -1.52588e-05 3.63045Z" fill="white"/>
      </svg>
      
        `}
    />
  );
};


export default NextSvg;