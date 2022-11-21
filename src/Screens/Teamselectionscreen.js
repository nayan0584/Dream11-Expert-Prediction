import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ComponentHeader from '../Components/ComponentHeader';
import {showMessage} from 'react-native-flash-message';
import {COLORS, images} from '../Constants';
import Icons from 'react-native-vector-icons/FontAwesome';
import {TEAMTYPE} from '../../assets/Data/DummyData';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {BannerAdSize, TestIds} from '@react-native-admob/admob';
import {BannerAds} from '../Ads';

const Teamselectionscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    showMessage({
      message: 'Information',
      description: 'Please check your team after toss',
      type: 'default',
      backgroundColor: COLORS.primary,
      color: COLORS.white,
      icon: props => (
        <Icons name="info-circle" size={18} color={COLORS.white} {...props} />
      ),
    });
  }, []);

  const renderData = data => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          navigation.navigate('Teamscreen', {
            data: data?.item,
          });
        }}>
        <View style={styles.imageContainer}>
          <Image source={{uri: data?.item?.icons}} style={styles.imageStyles} />
        </View>
        <View style={styles.textMainContainer}>
          <Text style={styles.textContainer}>{data?.item?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ComponentHeader
        iconName="ios-chevron-back"
        firstTextName="Team Selection"
      />
      <View style={styles.innerContainer}>
        <FlatList
          contentContainerStyle={styles.flatContainer}
          numColumns={2}
          data={TEAMTYPE}
          renderItem={items => renderData(items)}
          keyExtractor={(item, index) => index}
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
  firstContainr: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  innerContainer: {
    flex: 1,
  },
  flatContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    height: hp(20),
    width: wp(40),
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
  imageContainer: {alignSelf: 'center', marginTop: 20},
  imageStyles: {height: 80, width: 80},
  textMainContainer: {marginTop: 10, alignSelf: 'center'},
  textContainer: {
    color: COLORS.black,
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
  },
});

export default Teamselectionscreen;
