/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Button, StyleSheet, Image, Text} from 'react-native';
import {useSecureStore} from '../hook';

export const MyRandomPictureButton = () => {
  const [showIndex, setShowImage] = useSecureStore<number>('@e:imageIndex', 0);
  const handlePress = () => {
    setShowImage(old => {
      if (old) {
        return old + 1;
      }
      return 1;
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://picsum.photos/300?random=${showIndex}`,
        }}
      />
      <Text>計數：{showIndex}</Text>
      <View style={styles.buttonRow}>
        <Button title="按我" onPress={handlePress} />
        <Button title="清0" onPress={() => setShowImage(0)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
  image: {width: 100, height: 100, resizeMode: 'cover'},
});

export default MyRandomPictureButton;
