import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Matchscreen = ({route}) => {
  console.log(' -------------->', route?.params?.matchInfo?.item);
  return (
    <View>
      <Text>Matchscreen</Text>
    </View>
  );
};

export default Matchscreen;

const styles = StyleSheet.create({});
