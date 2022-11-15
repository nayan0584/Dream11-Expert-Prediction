import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../Constants';
import ComponentHeader from '../Components/ComponentHeader';
import {FlashList} from '@shopify/flash-list';
import {DUMMY_TEAM} from '../../assets/Data/DummyData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

const Teamscreen = ({route}) => {
  const navigation = useNavigation();
  // routes accourding api call karvani thase

  const renderData = data => {
    console.log('data --------->', data);
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate('Fullscreenteam', {
            data: data,
          })
        }>
        <View style={styles.imageContainer}>
          <Image source={{uri: data?.item?.image}} style={styles.imageStyles} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyles}>{data?.item?.team}</Text>
          <Text style={styles.textStyles}>View</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ComponentHeader
        iconName="ios-chevron-back"
        firstTextName={route?.params?.data?.name}
      />

      <View style={styles.innerContainer}>
        <FlashList
          estimatedItemSize={50}
          data={DUMMY_TEAM}
          renderItem={data => renderData(data)}
          keyExtractor={(data, index) => index}
        />
      </View>

      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={TestIds.BANNER} />
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
  textContainer: {
    backgroundColor: COLORS.primary,
    flex: 0.28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyles: {
    alignSelf: 'center',
    marginHorizontal: 20,
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'OpenSans-Medium',
  },
});

export default Teamscreen;
