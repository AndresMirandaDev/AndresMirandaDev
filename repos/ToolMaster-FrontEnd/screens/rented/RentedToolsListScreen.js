import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';

export default function RentedToolsListScreen() {
  const [data, setData] = useState([]);

  const getData = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    const fetchData = getData();
    setData(fetchData);
  }, []);
  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <AppText>{item.id}</AppText>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
