import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

export default function PlaceSubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  const [submitted, setSubmitted] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleSubmit();
        setSubmitted(true);
      }}
    >
      <View
        style={[
          styles.icon,
          { backgroundColor: submitted ? colors.green : colors.light },
        ]}
      >
        <MaterialCommunityIcons
          name="check"
          color={submitted ? colors.light : colors.green}
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
    borderRadius: 50,
    padding: 10,
  },
});
