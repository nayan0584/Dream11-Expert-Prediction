import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ComponentHeader from '../Components/ComponentHeader';
import {COLORS} from '../Constants';

const Teamselectionscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ComponentHeader
          iconName="ios-chevron-back"
          firstTextName="Team Selection"
        />
      </View>

      {/* here advertisement setup */}
      <View style={{flex: 0.1, borderTopWidth: 1, justifyContent: 'center'}}>
        <Text style={[{color: COLORS.black, alignSelf: 'center'}]}>
          Adverticement Pannel
        </Text>
        {/* here advertisement setup */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});

export default Teamselectionscreen;
