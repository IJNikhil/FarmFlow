import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const CustomTextInput = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default CustomTextInput;
