import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

export interface CustomTextProps {
  style?: StyleProp<TextStyle>;
  text?: string;
}

const CustomText = ({
  children,
  text,
  ...props
}: CustomTextProps & TextProps) => {
  return (
    <Text
      className={`text-black`}
      allowFontScaling={false}
      {...props}>
      {children}
      {text}
    </Text>
  );
};

export default CustomText;
