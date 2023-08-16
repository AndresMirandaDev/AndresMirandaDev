import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useContext } from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import { LanguageContext } from '../language/languageContext';

//text options
const serieNumberText = {
  en: 'Serial nr',
  sv: 'Serie nr',
  es: 'Nr de serie',
};

const groupText = {
  en: 'Group',
  sv: 'Grupp',
  es: 'Grupo',
};

const projectText = {
  en: 'Project',
  sv: 'Projekt',
  es: 'Projecto',
};

const storageText = {
  en: 'Storage',
  sv: 'Förråd',
  es: 'Bodega',
};

const statusInfoText = {
  en: {
    isAvailable: 'Available',
    notAvailable: 'In use',
    inReparation: 'In reparation',
  },
  sv: {
    isAvailable: 'Tillgängligt',
    notAvailable: 'I användning',
    inReparation: 'På reparation',
  },
  es: {
    isAvailable: 'Libre',
    notAvailable: 'En uso',
    inReparation: 'En reparación',
  },
};
export default function ToolListItem({ tool, onPress }) {
  const { name, serieNumber, toolGroup, project, available, reparation } = tool;
  const { language, options, updateLanguage } = useContext(LanguageContext);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <AppText style={styles.toolName}>{name}</AppText>
          <AppText style={styles.info}>
            {serieNumberText[language]}: {serieNumber}
          </AppText>
          {toolGroup && (
            <AppText style={styles.info}>
              {groupText[language]}: {toolGroup.name}
            </AppText>
          )}
          {(project && (
            <AppText style={styles.info}>
              {projectText[language]}: {project.name}
            </AppText>
          )) || <AppText style={styles.info}>{storageText[language]}</AppText>}
          <AppText
            style={[
              styles.status,
              { color: available ? colors.green : colors.danger },
            ]}
          >
            {available
              ? statusInfoText[language]['isAvailable']
              : !available && !reparation
              ? statusInfoText[language]['notAvailable']
              : reparation
              ? statusInfoText[language]['inReparation']
              : ''}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
  },
  toolName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.primaryOpacity,
    textTransform: 'capitalize',
  },
  info: {
    textTransform: 'capitalize',
    color: colors.medium,
    padding: 5,
    fontStyle: 'italic',
  },
  status: {
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
