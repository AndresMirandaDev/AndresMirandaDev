import {
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppDatePicker from '../forms/AppDatePicker';
import AppFormPicker from '../forms/AppFormPicker';
import projectsApi from '../../api/projects';
import useApi from '../../hooks/useApi';
import colors from '../../config/colors';
import AppFormField from '../forms/AppFormField';
import AppForm from '../forms/AppForm';
import PlaceSubmitButton from './PlaceSubmitButton';
import SubmitButton from '../SubmitButton';
import { useFormikContext } from 'formik';
import SubmittedDayListitem from './SubmittedDayListitem';
import SubmittedDaysHeader from './SubmittedDaysHeader';
import SubmittedWorkDaysListFooter from './SubmittedWorkDaysListFooter';

const projectsButtons = [
  {
    placeholder: 'Välj projekt',
    id: 1,
  },
];

const placeSchema = Yup.object().shape({
  project: Yup.object().required(),
  hours: Yup.string().required(),
});

export default function WorkDayFormInput({ name }) {
  const { setFieldValue, values } = useFormikContext();

  const [workPlaces, setWorkPlaces] = useState([]);
  const [projectButtons, setProjectButtons] = useState(projectsButtons);
  const { data: projects, request: loadProjects } = useApi(
    projectsApi.getProjects
  );

  useEffect(() => {
    loadProjects();
  }, []);

  const resetPlaces = () => {
    setProjectButtons([]);
    setWorkPlaces([]);
  };

  const handleAddProjectInput = () => {
    setProjectButtons((s) => {
      return [
        ...s,
        {
          placeholder: 'Välj projekt',
          id: s.length + 1,
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

  const handlePlaceSubmit = (place) => {
    setWorkPlaces((w) => {
      return [
        ...w,
        {
          project: place.project,
          hours: place.hours,
        },
      ];
    });
  };

  const handleWorkDaySubmit = (workDay, { resetForm }) => {
    const newWorkDay = {
      date: workDay.date,
      places: [...workPlaces],
    };

    setFieldValue(name, [...values[name], newWorkDay]);

    resetForm();
    resetPlaces();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <AppForm
          initialValues={{
            date: '',
          }}
          onSubmit={handleWorkDaySubmit}
        >
          <AppDatePicker name="date" />
          {projectButtons.map((button) => {
            return (
              <View style={styles.projectInput} key={button.id}>
                <AppForm
                  initialValues={{
                    project: '',
                    hours: '',
                  }}
                  onSubmit={handlePlaceSubmit}
                  validationSchema={placeSchema}
                >
                  <View>
                    <AppFormPicker
                      placeholder={button.placeholder}
                      items={projects}
                      width={200}
                      name="project"
                    />
                    <AppFormField
                      width={200}
                      placeholder="Timmar"
                      name="hours"
                    />
                  </View>
                  <PlaceSubmitButton />
                </AppForm>
                <TouchableWithoutFeedback
                  onPress={() => handleRemoveProjectInput(button)}
                >
                  <View style={styles.removeInputIcon}>
                    <MaterialCommunityIcons
                      name="close"
                      size={30}
                      color={colors.medium}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            );
          })}
          <Button
            title="+ Lägg till projekt"
            onPress={handleAddProjectInput}
            color={colors.primaryOpacity}
          />
          <SubmitButton title="Skicka in arbetsdag" />
        </AppForm>
        <View style={styles.separator} />
        <View>
          <SubmittedDaysHeader />
          <FlatList
            data={values[name]}
            nestedScrollEnabled
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => {
              return <SubmittedDayListitem workDay={item} />;
            }}
            ListFooterComponent={
              <SubmittedWorkDaysListFooter workDays={values[name]} />
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  projectInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeInputIcon: {
    backgroundColor: colors.light,
    marginLeft: 10,
    borderRadius: 50,
    padding: 10,
  },
  separator: {
    width: '100%',
    minHeight: 2,
    backgroundColor: colors.light,
  },
});
