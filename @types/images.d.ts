declare module '*.png';
declare module '*.jpeg';
declare module '*.json';
declare module '*.gif';
declare module 'react-native-vector-icons/*';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
