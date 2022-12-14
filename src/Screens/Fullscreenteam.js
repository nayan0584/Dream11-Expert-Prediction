import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../Constants';
import ComponentHeader from '../Components/ComponentHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {BannerAdSize, TestIds} from '@react-native-admob/admob';
import {BannerAds} from '../Ads';

const currentHeight = Dimensions.get('screen').height;
const flexs = 0.1;

const Fullscreenteam = ({route}) => {
  const navigation = useNavigation();
  console.log('route?.params? ------>', route?.params?.data?.item?.team);

  return (
    <View style={styles.container}>
      <ComponentHeader
        iconName="ios-chevron-back"
        firstTextName={route?.params?.data?.item?.team}
      />

      <View style={styles.innerContainer}>
        <Image
          source={{uri: route?.params?.data?.item?.image}}
          style={styles.imageStyles}
        />
      </View>

      {BannerAds(BannerAdSize.ADAPTIVE_BANNER, TestIds.BANNER)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  cardContainer: {
    height: hp(28),
    borderRadius: hp(2),
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    elevation: 2,
    marginTop: 20,
    marginHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
  },
  imageStyles: {
    height: '100%',
    width: '100%',
  },
});

export default Fullscreenteam;
