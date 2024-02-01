import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export const MyTouchableComponent = () => {
  const handlePress = () => {
    // 處理觸摸事件
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text>可觸摸元件: TouchableOpacity</Text>
      </View>
    </TouchableOpacity>
  );
};

export const MyTouchableHighlight = () => (
  <TouchableHighlight onPress={() => console.log('Button Clicked')}>
    <View style={styles.container}>
      <Text>可觸摸元件: TouchableHighlight</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
});
