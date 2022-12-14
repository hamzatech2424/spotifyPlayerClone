import React from 'react';
import {SvgXml} from 'react-native-svg';



const ShuffleSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 19H2.65285C3.82482 19 4.93783 18.486 5.69782 17.5939L11.0687 11.2889L14.8022 6.90614C15.5622 6.01398 16.6752 5.5 17.8472 5.5H23.5M23.5 5.5L19.5 1.5M23.5 5.5L19.5 9.5M1 4H2.82597C3.97281 4 5.06448 4.49225 5.82376 5.35175L8.96427 8.90676M24.3333 17.5H18.3592C17.2124 17.5 16.1207 17.0077 15.3614 16.1483L13.5 14.0411M24.3333 17.5L20.1852 21.5M24.3333 17.5L20.1852 13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
        `}
    />
  );
};


export default ShuffleSvg;