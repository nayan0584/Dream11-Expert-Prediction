import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../Constants';

const ComponentHeader = ({iconName, firstTextName}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.openDrawer}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.drawerMenu}>
          <Icons name={iconName} size={20} style={{color: COLORS.white}} />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.titleContainer}>
        <View style={styles.firstTextContainer}>
          <Text style={styles.textContainer}>{firstTextName}</Text>
        </View>
      </View>

      <View style={{flex: 0.3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  openDrawer: {
    flex: 0.108,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerMenu: {
    flex: 0.3,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  firstTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});

export default ComponentHeader;
