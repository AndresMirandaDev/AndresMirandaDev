import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import usersApi from '../api/users';
import AppText from '../components/AppText';
import UserListItem from '../components/UserListItem';

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

  console.log(users);
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user._id}
        renderItem={({ item }) => {
          return <UserListItem user={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
