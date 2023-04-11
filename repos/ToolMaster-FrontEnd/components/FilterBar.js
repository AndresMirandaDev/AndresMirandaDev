import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppFormField from './forms/AppFormField';
import AppForm from './forms/AppForm';
import AppText from './AppText';
import SubmitButton from './SubmitButton';

export default function FilterBar({ setData }) {
  const [showFilter, setShowFilter] = useState(false);
  const handleSubmit = () => {
    console.log('submit');
  };

  const showFilterBar = () => {
    setShowFilter(!showFilter);
  };
  return (
    <Animated.View
      style={showFilter ? styles.container : styles.hiddenFilterBar}
    >
      <View>
        <View style={styles.head}>
          <MaterialCommunityIcons
            name="filter-outline"
            color={colors.light}
            size={30}
          />
          <AppText style={styles.headText}>Filter</AppText>
          <TouchableWithoutFeedback onPress={showFilterBar}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color={colors.medium}
            />
          </TouchableWithoutFeedback>
        </View>
        <AppForm
          initialValues={{
            name: '',
            serieNumber: '',
            project: '',
            available: '',
            toolGroup: '',
          }}
          onSubmit={handleSubmit}
        >
          <AppFormField icon="text-search" name="name" placeholder="Name" />
          <AppFormField
            icon="text-search"
            name="serieNumber"
            placeholder="Serie Nr"
          />
          <AppFormField
            icon="text-search"
            name="project"
            placeholder="Projekt"
          />
          <AppFormField
            icon="text-search"
            name="available"
            placeholder="Status"
          />
          <AppFormField
            icon="text-search"
            name="toolGroup"
            placeholder="Group"
          />
          <SubmitButton title="search" />
        </AppForm>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightf,
    padding: 5,
  },
  head: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
  },
  headText: {
    color: colors.light,
    fontSize: 25,
  },
  hiddenFilterBar: {
    height: 60,
    overflow: 'hidden',
  },
});
