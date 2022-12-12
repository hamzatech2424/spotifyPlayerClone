import React from 'react';
import {SvgXml} from 'react-native-svg';



const PauseSvg = ({height,width,color,size}) => {
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
      <path d="M0 1C0 0.447715 0.447715 0 1 0H3.70588C4.25817 0 4.70588 0.447715 4.70588 1V18C4.70588 18.5523 4.25817 19 3.70588 19H1C0.447715 19 0 18.5523 0 18V1Z" fill="${defaultColor}"/>
      <path d="M12.2941 1C12.2941 0.447715 12.7418 0 13.2941 0H16C16.5523 0 17 0.447715 17 1V18C17 18.5523 16.5523 19 16 19H13.2941C12.7418 19 12.2941 18.5523 12.2941 18V1Z" fill="${defaultColor}"/>
      </svg>
        `}
    />
  );
};


export default PauseSvg;