import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const UpcommingMatchCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainerView}
      onPress={() => navigation.navigate('Teamselectionscreen')}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerText}>Asia Cup 2022</Text>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.middleFirstContainer}>
          <Text style={styles.lastText}>South Africa</Text>
          <Text style={styles.lastText}>India</Text>
        </View>

        <View style={styles.middleLastContainer}>
          <View style={styles.middleInnerFirst}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_Afghanistan_%281929%E2%80%931931%29.svg/2560px-Flag_of_Afghanistan_%281929%E2%80%931931%29.svg.png',
              }}
              style={styles.teamImageContainer}
              resizeMode="cover"
            />

            <Text style={[styles.teamShortName, {paddingStart: wp(3)}]}>
              AFG
            </Text>
          </View>
          <View style={styles.middleInnerSecend}>
            <Text style={styles.middleText}>7 Sep</Text>
            <Text style={styles.middleText}>7:30 PM</Text>
          </View>
          <View style={styles.middleInnerLast}>
            <Text style={[styles.teamShortName, {paddingEnd: wp(3)}]}>IND</Text>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
              }}
              style={styles.teamImageContainer}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <View style={styles.lastContainer}>
        <Text style={styles.lastText}>Dream Team</Text>
        <Text style={styles.lastText}>View Team</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainerView: {
    height: hp(27),
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(1),
    borderRadius: hp(3),
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: 'hidden',
  },
  topContainer: {
    height: hp(6),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
  topContainerText: {
    color: COLORS.white,
    fontSize: hp(2.2),
    marginStart: wp(4),
    fontFamily: 'Inter-Bold',
  },
  middleContainer: {
    height: hp(15),
    backgroundColor: COLORS.white,
  },
  middleFirstContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4.5),
    alignItems: 'center',
  },
  middleLastContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  middleInnerFirst: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: wp(4),
  },
  teamImageContainer: {
    height: hp(8),
    width: wp(16),
    borderRadius: hp(4),
    overflow: 'hidden',
  },
  teamShortName: {
    color: COLORS.black,
    fontFamily: 'Inter-ExtraBold',
  },
  middleInnerSecend: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleText: {
    color: COLORS.darkGrey,
    fontFamily: 'Inter-Medium',
  },
  middleInnerLast: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: wp(4),
  },
  lastContainer: {
    height: hp(6),
    backgroundColor: COLORS.third,
    justifyContent: 'center',
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    alignItems: 'center',
  },
  lastText: {
    color: COLORS.black,
    fontFamily: 'Inter-Medium',
    fontSize: hp(2),
  },
});

export default UpcommingMatchCard;
