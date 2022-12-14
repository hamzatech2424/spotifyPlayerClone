import React from 'react';
import {SvgXml} from 'react-native-svg';



const PreviousSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.9658 22.3271L21.9658 1.68957C21.9658 0.91977 21.1325 0.438645 20.4658 0.823545L4 10.3301V0.999988C4 0.447703 3.55228 -1.19843e-05 3 -1.19843e-05H1C0.447715 -1.19843e-05 0 0.447704 0 0.999989V24C0 24.5523 0.447715 25 1 25H3C3.55228 25 4 24.5523 4 24V13.6865L20.4658 23.1931C21.1325 23.578 21.9658 23.0969 21.9658 22.3271Z" fill="white"/>
      </svg>      
        `}
    />
  );
};


export default PreviousSvg;