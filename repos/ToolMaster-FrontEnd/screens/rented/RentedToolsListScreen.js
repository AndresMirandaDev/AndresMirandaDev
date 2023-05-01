import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';

import RentedToolListItem from '../../components/RentedToolListItem';
import colors from '../../config/colors';

const rentedTools = [
  {
    name: 'dianova',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 1,
  },
  {
    name: 'cobra',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 2,
  },
  {
    name: 'fräsmaskin',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 3,
  },
  {
    name: 'dammsugare liten',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 4,
  },
  {
    name: 'dammsugare',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 5,
  },
  {
    name: 'cobra',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 6,
  },
  {
    name: 'hilti 1500',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 7,
  },
  {
    name: 'flex',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 8,
  },
];

export default function RentedToolsListScreen({ navigation }) {
  const [data, setData] = useState(rentedTools);
  const [showData, setShowData] = useState(rentedTools);

  // const getData = async () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setShowData(json.splice(0, 10));
  //     });
  // };

  // useEffect(() => {
  //   const fetchData = getData();
  //   setData(fetchData);
  // }, []);

  // const loadMore = () => {
  //   const last = showData.length - 1;
  //   const newData = data.splice(showData[last], 10);

  //   setShowData([...showData, ...newData]);
  // };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={rentedTools}
        renderItem={({ item }) => {
          return (
            <RentedToolListItem
              tool={item}
              onPress={() =>
                navigation.navigate('RentedToolDetailsScreen', item)
              }
            />
          ); //pass on press to edit the rented tool and change its status
        }}
        keyExtractor={(item) => item.id}
        // onTouchEnd={loadMore}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
