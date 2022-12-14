import React from 'react';
import {SvgXml} from 'react-native-svg';



const OptionsSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="3" height="19" viewBox="0 0 3 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="white"/>
      <path d="M3 9.5C3 10.3284 2.32843 11 1.5 11C0.671573 11 0 10.3284 0 9.5C0 8.67157 0.671573 8 1.5 8C2.32843 8 3 8.67157 3 9.5Z" fill="white"/>
      <path d="M3 17.5C3 18.3284 2.32843 19 1.5 19C0.671573 19 0 18.3284 0 17.5C0 16.6716 0.671573 16 1.5 16C2.32843 16 3 16.6716 3 17.5Z" fill="white"/>
      </svg>
       `}
    />
  );
};


export default OptionsSvg;