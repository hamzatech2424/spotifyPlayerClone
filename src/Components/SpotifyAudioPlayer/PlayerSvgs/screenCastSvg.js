import React from 'react';
import {SvgXml} from 'react-native-svg';



const ScreenCastSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : '#C4C4C4'
  const defaultSize = size ? size : 26

  return (
    <SvgXml
      width={defaultSize}
      height={defaultSize}
      xml={`
      <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6C18 6.27614 17.7761 6.5 17.5 6.5C17.2239 6.5 17 6.27614 17 6C17 5.72386 17.2239 5.5 17.5 5.5C17.7761 5.5 18 5.72386 18 6Z" fill="${defaultColor}"/>
      <path d="M4 21H7M7 1H2C1.44772 1 1 1.44772 1 2V14.5C1 15.0523 1.44772 15.5 2 15.5H7M17.5 17C19.1569 17 20.5 15.6569 20.5 14C20.5 12.3431 19.1569 11 17.5 11C15.8431 11 14.5 12.3431 14.5 14C14.5 15.6569 15.8431 17 17.5 17ZM18 6C18 6.27614 17.7761 6.5 17.5 6.5C17.2239 6.5 17 6.27614 17 6C17 5.72386 17.2239 5.5 17.5 5.5C17.7761 5.5 18 5.72386 18 6ZM13 21H22C23.3807 21 24.5 19.8807 24.5 18.5V3.5C24.5 2.11929 23.3807 1 22 1H13C11.6193 1 10.5 2.11929 10.5 3.5V18.5C10.5 19.8807 11.6193 21 13 21Z" stroke="${defaultColor}" stroke-width="2"/>
      </svg>           
        `}
    />
  );
};


export default ScreenCastSvg;