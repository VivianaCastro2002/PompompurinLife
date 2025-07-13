import { Text, TextProps } from 'react-native';

export default function CustomText(props: TextProps) {
  return (
       <Text {...props} style={[{ fontFamily: 'PressStart2P' }, props.style]}>
         {props.children}
       </Text>
      );
}
