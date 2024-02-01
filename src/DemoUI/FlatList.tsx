import React, {useMemo} from 'react';
import {FlatList, Text} from 'react-native';

export const MyFlatList = () => {
  const data = useMemo(() => {
    return Array.from(Array(10)).map((t, index) => {
      return {
        id: (index + 1).toString(),
        text: `項目 ${index + 1}`,
      };
    });
  }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Text key={item.id}>{item.text}</Text>}
    />
  );
};

export default MyFlatList;
