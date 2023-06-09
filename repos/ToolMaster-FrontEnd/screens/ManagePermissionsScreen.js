import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import usersApi from '../api/users';
import UserListItem from '../components/UserListItem';
import AppActivityIndicator from '../components/AppActivityIndicator';
import ConnectivityError from '../components/ConnectivityError';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

export default function ManagePermissionsScreen() {
  const {
    data: users,
    error,
    loading,
    request: loadUsers,
  } = useApi(usersApi.getAllUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAdminPermission = async (user) => {
    const result = await usersApi.updatePermission(user);

    if (result.ok) loadUsers();
  };

  console.log(users);
  return (
    <View style={styles.container}>
      <AppActivityIndicator visible={loading} />
      {error && <ConnectivityError loadDataFunction={loadUsers} />}
      <FlatList
        data={users}
        keyExtractor={(user) => user._id}
        renderItem={({ item }) => {
          return (
            <UserListItem
              user={item}
              onPress={() => handleAdminPermission(item)}
            />
          );
        }}
        ItemSeparatorComponent={<ListItemSeparator color={colors.primary} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryOpacity,
    minHeight: '100%',
  },
});
