import React from 'react';
import {SvgXml} from 'react-native-svg';



const PlaySvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.23323e-07 1.70437C5.46428e-07 0.940784 0.821253 0.458935 1.48782 0.83143L15.4379 8.62706C16.1208 9.00868 16.1208 9.99132 15.4379 10.3729L1.48782 18.1686C0.82125 18.5411 2.84659e-08 18.0592 5.15702e-08 17.2956L5.23323e-07 1.70437Z" fill="${defaultColor}"/>
      </svg>      
        `}
    />
  );
};


export default PlaySvg;