import React from "react";
import { View, Text, StyleSheet } from 'react-native';


export default function TrolleyCart(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Trolley Cart</Text>
        <Text>This is your Trolley Cart tab.</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  });