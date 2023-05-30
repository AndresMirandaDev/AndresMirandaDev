import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';

export default function ToolGroupListItem({ group, onPress }) {
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.name}>{group.name}</AppText>
        <AppText style={styles.description}>{group.description}</AppText>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{ marginLeft: 5 }}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={50}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    textTransform: 'capitalize',
    color: colors.primaryOpacity,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  description: {
    color: colors.medium,
  },
});
