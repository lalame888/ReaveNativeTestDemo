/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {
  InputText,
  MyFlatList,
  MyRandomPictureButton,
  MyModal,
  MyTouchableComponent,
  MyTouchableHighlight,
  MyActivityIndicator,
} from './src/DemoUI';
import React from 'react';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <InputText />
        <MyRandomPictureButton />
        <MyModal />
        <MyTouchableComponent />
        <MyTouchableHighlight />
        <MyActivityIndicator />
      </ScrollView>
      <MyFlatList />
    </SafeAreaView>
  );
}

export default App;
