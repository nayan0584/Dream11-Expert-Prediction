import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {COLORS} from '../Constants';

const Header = ({iconName, firstTextName, secendTextName, thirdTextName}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.openDrawer}>
      <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
        <View style={styles.drawerMenu}>
          <Icon name={iconName} size={20} style={{color: COLORS.white}} />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.titleContainer}>
        <View style={styles.firstTextContainer}>
          <Text style={styles.textContainer}>{firstTextName}</Text>
        </View>
        <View style={styles.elevenContainer}>
          <Text style={styles.elevenText}>{secendTextName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textContainer}>{thirdTextName}</Text>
        </View>
      </View>

      <View style={{flex: 0.3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  openDrawer: {
    flex: 0.12,
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
    alignItems: 'flex-end',
  },
  textContainer: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  elevenContainer: {
    borderRadius: 20,
    width: wp(8),
    height: hp(4.05),
    backgroundColor: COLORS.purpule,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  elevenText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    alignSelf: 'center',
  },
});

export default Header;
