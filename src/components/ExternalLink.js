import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';

export const ExternalLink = (props) => {
  const { url, children, style = {} } = props;

  const onPress = () => Linking.canOpenURL(url).then(() => {
    Linking.openURL(url);
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  );
};
