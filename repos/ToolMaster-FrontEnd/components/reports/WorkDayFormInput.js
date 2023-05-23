import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppDatePicker from '../forms/AppDatePicker';
import AppFormPicker from '../forms/AppFormPicker';
import projectsApi from '../../api/projects';
import useApi from '../../hooks/useApi';
import AppButton from '../AppButton';
import colors from '../../config/colors';
import AppFormField from '../forms/AppFormField';

const projectsButtons = [
  {
    placeholder: 'Välj projekt',
    id: 1,
  },
];

export default function WorkDayFormInput() {
  const [projectButtons, setProjectButtons] = useState(projectsButtons);
  const { data: projects, request: loadProjects } = useApi(
    projectsApi.getProjects
  );

  useEffect(() => {
    loadProjects();
  }, []);

  const handleAddProjectInput = () => {
    setProjectButtons((s) => {
      return [
        ...s,
        {
          placeholder: 'Välj projekt',
          id: projectButtons.length,
        },
      ];
    });
  };

  const handleRemoveProjectInput = (button) => {
    setProjectButtons(
      projectButtons.filter((b) => {
        return b.id !== button.id;
      })
    );
  };
  return (
    <>
      <AppDatePicker />
      {projectButtons.map((button) => {
        return (
          <View style={styles.projectInput}>
            <AppFormPicker
              placeholder={button.placeholder}
              items={projects}
              width={'50%'}
            />
            <AppFormField width={100} placeholder="Timmar" />
            <TouchableWithoutFeedback
              onPress={() => handleRemoveProjectInput(button)}
            >
              <View style={styles.removeInputIcon}>
                <MaterialCommunityIcons
                  name="close"
                  size={30}
                  color={colors.primary}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
      <AppButton title="Lägg till projekt" onPress={handleAddProjectInput} />
    </>
  );
}

const styles = StyleSheet.create({
  projectInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeInputIcon: {
    backgroundColor: colors.light,
    marginLeft: 20,
    borderRadius: 50,
    padding: 10,
  },
});
