import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  View,
  Modal,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppFormField from './forms/AppFormField';
import AppForm from './forms/AppForm';
import AppText from './AppText';
import SubmitButton from './SubmitButton';
import Screen from './Screen';
import AppPicker from './AppPicker';
import AppFormPicker from './forms/AppFormPicker';
import AppPickerItem from './AppPickerItem';
import AppButton from './AppButton';
import FormResetButton from './forms/FormResetButton';

const projects = [
  { name: 'spiralen', projectNumber: 12333, id: 1 },
  { name: 'drakenberg', projectNumber: 11133, id: 2 },
  { name: 'tuben', projectNumber: 67633, id: 3 },
  { name: 'varberg', projectNumber: 44543, id: 4 },
];

export default function FilterBar({ setData }) {
  const [showFilter, setShowFilter] = useState(false);
  const handleSubmit = () => {
    console.log('submit');
  };

  const showFilterBar = () => {
    setShowFilter(!showFilter);
  };
  return (
    <View style={showFilter ? styles.container : styles.hiddenFilterBar}>
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
      <Modal visible={showFilter} animationType="fade">
        <Screen>
          <Button title="close" onPress={() => setShowFilter(false)} />
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
            <AppFormPicker
              items={projects}
              name="project"
              placeholder="Projekt"
              width="50%"
              PickerItemComponent={AppPickerItem}
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
            <FormResetButton title="reset" color="secondary" />
          </AppForm>
        </Screen>
      </Modal>
    </View>
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
