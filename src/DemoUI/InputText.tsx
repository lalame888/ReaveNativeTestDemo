import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export function InputText() {
  const [inputText, setInputText] = useState<string>('123');
  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Text>以下是上面的訊息：</Text>
      <Text>{inputText}</Text>
    </View>
  );
}
