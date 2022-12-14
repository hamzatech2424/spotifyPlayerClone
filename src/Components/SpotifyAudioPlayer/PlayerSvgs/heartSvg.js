import React from 'react';
import {SvgXml} from 'react-native-svg';



const HeartSvg = ({height,width,color,size,liked}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12
  const defaultLiked =  liked ? "#1ED760" : "#FFFFFF"

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8279 2.28032C20.5471 0.964674 18.8554 0.167486 17.0581 0.0326059C15.2607 -0.102274 13.4761 0.434036 12.0263 1.54476C10.4979 0.364923 8.59567 -0.170073 6.70252 0.047511C4.80936 0.265095 3.06595 1.2191 1.82336 2.7174C0.580775 4.21571 -0.0686879 6.14702 0.00576017 8.12243C0.0802083 10.0978 0.873037 11.9706 2.22459 13.3636L9.43171 20.9062C10.1074 21.6066 11.0233 22 11.9782 22C12.9332 22 13.8491 21.6066 14.5247 20.9062L21.7318 13.3636C22.4417 12.6438 23.0074 11.7855 23.3966 10.838C23.7858 9.89058 23.9908 8.87262 23.9997 7.84269C24.0086 6.81275 23.8214 5.79113 23.4487 4.83655C23.076 3.88198 22.5252 3.01326 21.8279 2.28032Z" fill=${defaultLiked}/>
      </svg>         
        `}
    />
  );
};


export default HeartSvg;