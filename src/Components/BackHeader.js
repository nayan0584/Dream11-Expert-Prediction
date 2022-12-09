import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BackHeader = ({HeadingTitle}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="md-chevron-back" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.headingText}>{HeadingTitle}</Text>
      </View>
      <View style={{flex: 0.3}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});

export default BackHeader;
