import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const UpcommingMatchCard = ({matchDetail}) => {
  const navigation = useNavigation();
  const shortDate = new Date(matchDetail?.item?.match_date);

  return (
    <TouchableOpacity
      style={styles.cardContainerView}
      onPress={() => navigation.navigate('Teamselectionscreen')}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerText}>
          {matchDetail?.item?.tournament_name}
        </Text>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.middleFirstContainer}>
          <Text style={styles.lastText}>
            {matchDetail?.item?.team1data?.team_name}
          </Text>
          <Text style={styles.lastText}>
            {matchDetail?.item?.team2data?.team_name}
          </Text>
        </View>

        <View style={styles.middleLastContainer}>
          <View style={styles.middleInnerFirst}>
            <Image
              source={{
                uri: matchDetail?.item?.team1data?.team_logo,
              }}
              style={styles.teamImageContainer}
              resizeMode="cover"
            />

            <Text style={[styles.teamShortName, {paddingStart: wp(3)}]}>
              {matchDetail?.item?.team1data?.team_short_name}
            </Text>
          </View>
          <View style={styles.middleInnerSecend}>
            <Text style={styles.middleText}>
              {shortDate?.toString('YYYY-MM-dd')?.split(' ')[2] +
                ' ' +
                shortDate?.toString('YYYY-MM-dd')?.split(' ')[1]}
            </Text>
            <Text style={styles.middleText}>
              {
                shortDate
                  .toLocaleDateString('en-US', {
                    hour12: true,
                    minute: 'numeric',
                    hour: 'numeric',
                  })
                  ?.split(', ')[1]
              }
            </Text>
          </View>
          <View style={styles.middleInnerLast}>
            <Text style={[styles.teamShortName, {paddingEnd: wp(3)}]}>
              {matchDetail?.item?.team2data?.team_short_name}
            </Text>
            <Image
              source={{
                uri: matchDetail?.item?.team2data?.team_logo,
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
