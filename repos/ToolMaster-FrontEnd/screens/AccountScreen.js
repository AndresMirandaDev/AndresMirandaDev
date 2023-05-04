import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Icon from '../components/Icon';

import Screen from '../components/Screen';
import AuthContext from '../auth/context';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

export default function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.icon}>
            <Icon
              name="account"
              iconColor={colors.white}
              backgroundColor={colors.primaryOpacity}
            />
          </View>
          <AppText style={styles.username}>{user.name}</AppText>
          <AppText style={styles.info}>{user.email}</AppText>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.icon}>
            <Icon
              name="phone"
              iconColor={colors.white}
              backgroundColor={colors.primaryOpacity}
            />
          </View>
          <AppText>Mobil Nummer</AppText>
          <AppText style={styles.info}>{user.phone}</AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="regidera min information"
            color="primary"
            onPress={() => navigation.navigate('EditUserInfoScreen', user)}
          />
          {user.isAdmin && (
            <AppButton
              title="hantera behörigheter"
              onPress={() => navigation.navigate('ManagePermissionsScreen')}
            />
          )}
          <AppButton title="logga ut" onPress={logOut} color="danger" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    minHeight: '100%',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: colors.white,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 25,
    textTransform: 'capitalize',
  },
  info: {
    color: colors.medium,
    marginVertical: 10,
  },
  icon: {
    marginVertical: 10,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    padding: 5,
  },
});
