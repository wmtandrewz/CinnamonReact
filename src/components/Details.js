import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hellow from Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'

  },

  section: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
  }
});