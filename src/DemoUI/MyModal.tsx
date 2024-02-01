import React, {useState} from 'react';
import {View, Modal, Text, Button, StyleSheet} from 'react-native';

export const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="打開Modal" onPress={handlePress} />

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrap}>
            <Text>這是一個Modal</Text>
            <Button title="關閉" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalWrap: {
    backgroundColor: 'white',
    padding: 100,
  },
});

export default MyModal;
