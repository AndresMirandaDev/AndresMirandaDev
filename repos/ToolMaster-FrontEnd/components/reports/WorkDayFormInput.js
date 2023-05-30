import {
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Swipeable } from 'react-native-gesture-handler';

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
import ListItemDeleteAction from '../ListItemDeleteAction';

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

const workDaySchema = Yup.object().shape({
  date: Yup.date().required(),
});

export default function WorkDayFormInput({ name }) {
  const { setFieldValue, values } = useFormikContext();

  const [workPlaces, setWorkPlaces] = useState([]);
  const [projectButtons, setProjectButtons] = useState(projectsButtons);
  const { data: projects, request: loadProjects } = useApi(
    projectsApi.getProjects
  );
  const [submittedDays, setSubmittedDays] = useState([]);

  useEffect(() => {
    setSubmittedDays(values[name]);
  }, [values[name]]);

  const submittedDaysScrollView = useRef();
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
    if (workPlaces.length > 0) {
      const newWorkDay = {
        date: workDay.date,
        places: [...workPlaces],
      };

      setFieldValue(name, [...values[name], newWorkDay]);
    } else {
      alert('Ingen projekt har valts');
    }

    resetForm();
    resetPlaces();
  };

  const handleDeleteSubmittedDay = (workDay) => {
    const newWorkDays = values[name].filter((i) => {
      return i.date !== workDay.date;
    });
    setFieldValue(name, newWorkDays);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <AppForm
          initialValues={{
            date: '',
            workPlaces: [],
          }}
          onSubmit={handleWorkDaySubmit}
          validationSchema={workDaySchema}
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
                      icon="city"
                    />
                    <AppFormField
                      width={200}
                      placeholder="Timmar"
                      name="hours"
                      icon="clock"
                      keyboardType="numeric"
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
      </ScrollView>
      <ScrollView
        ref={submittedDaysScrollView}
        onContentSizeChange={() =>
          submittedDaysScrollView.current.scrollToEnd()
        }
        stickyHeaderIndices={[0]}
      >
        <SubmittedDaysHeader />
        {submittedDays.map((item) => {
          return (
            <Swipeable
              renderRightActions={() => {
                return (
                  <ListItemDeleteAction
                    onPress={() => handleDeleteSubmittedDay(item)}
                  />
                );
              }}
              key={item.places[0].project._id + item.date}
            >
              <View>
                <SubmittedDayListitem workDay={item} />
              </View>
            </Swipeable>
          );
        })}
        <SubmittedWorkDaysListFooter workDays={values[name]} />
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
