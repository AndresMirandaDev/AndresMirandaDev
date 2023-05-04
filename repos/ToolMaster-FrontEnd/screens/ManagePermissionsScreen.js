import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import usersApi from '../api/users';
import AppText from '../components/AppText';

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

  return (
    <View>
      {users.map((u) => {
        return <AppText key={u._id}>{u.name}</AppText>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
