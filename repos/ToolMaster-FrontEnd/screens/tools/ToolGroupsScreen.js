import { Button, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';

import toolGroupsApi from '../../api/toolGroups';
import Screen from '../../components/Screen';
import useApi from '../../hooks/useApi';
import ConnectivityError from '../../components/ConnectivityError';
import colors from '../../config/colors';
import AppActivityIndicator from '../../components/AppActivityIndicator';
import ToolGroupListItem from '../../components/toolGroups/ToolGroupListItem';
import AppText from '../../components/AppText';
import ListItemSeparator from '../../components/ListItemSeparator';
import { useIsFocused } from '@react-navigation/native';

export default function ToolGroupsScreen({ navigation }) {
  const {
    data: toolGroups,
    request: loadGroups,
    loading,
    error,
  } = useApi(toolGroupsApi.getToolGroups);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadGroups();
    }
  }, [isFocused]);

  return (
    <Screen style={styles.screen}>
      {error && <ConnectivityError loadDataFunction={loadGroups} />}
      <AppActivityIndicator visible={loading} />
      <View style={styles.heading}>
        <AppText style={styles.headingText}>Verktygs grupper</AppText>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={toolGroups}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <ToolGroupListItem
                group={item}
                onPress={() =>
                  navigation.navigate('ToolGroupDetailScreen', item)
                }
              />
            );
          }}
          ItemSeparatorComponent={ListItemSeparator}
        />
        <Button
          title="+ Lägg till grupp"
          color={colors.primaryOpacity}
          onPress={() => navigation.navigate('RegisterToolGroupScreen')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    minHeight: '100%',
  },
  heading: {
    backgroundColor: colors.yellow,
  },
  headingText: {
    fontSize: 25,
    color: colors.primaryOpacity,
    padding: 10,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    paddingBottom: 50,
  },
});
