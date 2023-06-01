import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../../components/Screen';
import AppFormField from '../../components/forms/AppFormField';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppText from '../../components/AppText';
import SubmitButton from '../../components/SubmitButton';
import toolGroupsApi from '../../api/toolGroups';
import UploadScreen from '../UploadScreen';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../components/AppButton';

export default function EditToolGroupScreen({ route }) {
  const navigation = useNavigation();
  const group = route.params;

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (groupInfo, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const groupToupdate = {
      name: groupInfo.name ? groupInfo.name : group.name,
      description: groupInfo.description
        ? groupInfo.description
        : group.description,
      id: group._id,
    };

    const result = await toolGroupsApi.updateGroup(
      groupToupdate,
      (progress) => {
        setProgress(progress);
      }
    );
    if (!result.ok) {
      setUploadVisible(false);
      alert('Verktyg Kunde inte uppdateras.');
    }
  };
  const handleDelete = async (group) => {};

  const handleDeleteButtonPress = (group) => {
    Alert.alert(
      'Är du säkert?',
      `Verktygs grupp kommer att raderas, vill du forsätta?`,
      [
        { text: 'Nej' },
        {
          text: 'Radera',
          onPress: () => handleDelete(group),
          style: 'destructive',
        },
      ]
    );
  };
  return (
    <Screen style={styles.screen}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => {
          setUploadVisible(false);
          setTimeout(() => {
            navigation.navigate('ToolsScreen');
          }, 1000);
        }}
      />
      <View style={styles.heading}>
        <AppText style={styles.headingText}>Redigera Grupp</AppText>
      </View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            name: '',
            description: '',
          }}
          onSubmit={handleSubmit}
        >
          <AppFormField
            name="name"
            placeholder={group.name}
            icon="alphabetical-variant"
          />
          <AppFormField
            name="description"
            placeholder={group.description}
            icon="information"
          />
          <SubmitButton title="uppdatera grupp" color="green" />
        </AppForm>
        <AppButton
          title="radera verktygs grupp"
          color="danger"
          onPress={handleDeleteButtonPress}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  heading: {
    backgroundColor: colors.yellow,
  },
  headingText: {
    fontSize: 25,
    color: colors.primaryOpacity,
    padding: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  formContainer: {
    padding: 7,
  },
});
