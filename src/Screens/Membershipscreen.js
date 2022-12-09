import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import BackHeader from '../Components/BackHeader';

const Membershipscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <BackHeader HeadingTitle="Premium Purchase" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Membershipscreen;
