import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLORS, images} from '../../Constants';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BannerAds} from '../../Ads';
import {BannerAdSize, TestIds} from '@react-native-admob/admob';
import {useSelector} from 'react-redux';

const CustomDrawer = props => {
  const {AppDetail} = useSelector(state => state.Detail);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.constainer}>
        <ImageBackground
          source={images.drawerBg}
          style={styles.imageBackContainer}>
          <Image source={images.userProfile} style={styles.imageHandle} />
          <Text style={styles.textStyle}>
            <Icon name="user" size={18} color={COLORS.white} />
            {'  '}Dream Member
          </Text>

          <View style={{marginTop: 5}}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <FontAwesome name="info-circle" color={COLORS.white} size={18} />
              <Text style={styles.premiumText}>
                {`Version ${
                  AppDetail?.ResultData?.app_version
                    ? AppDetail?.ResultData?.app_version
                    : '1.0'
                }`}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.bottomContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.appRatecontainer}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={COLORS.darkBlack}
            />
            <Text style={styles.footerText}>App Share</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.appRatecontainer}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name="star" size={22} color={COLORS.darkBlack} />
            <Text style={styles.footerText}>App Rate</Text>
          </View>
        </TouchableOpacity>
      </View>

      {BannerAds(BannerAdSize.BANNER, TestIds.BANNER)}
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: COLORS.white,
  },
  imageBackContainer: {
    padding: hp(3.5),
    top: hp(-1),
    height: hp(29),
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
    overflow: 'hidden',
  },
  imageHandle: {
    height: hp(11),
    width: wp(22),
    borderRadius: wp(11),
    marginVertical: wp(5.5),
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: 'Inter-Bold',
    fontSize: wp(4.5),
  },
  footerText: {
    fontSize: wp(4),
    fontFamily: 'Inter-Medium',
    marginStart: hp(3),
    color: COLORS.darkBlack,
  },
  premiumText: {
    color: COLORS.white,
    fontSize: wp(4),
    fontFamily: 'Inter-Medium',
    marginStart: wp(3),
  },
  bottomContainer: {backgroundColor: COLORS.white, flex: 1, paddingTop: wp(3)},
  appRatecontainer: {
    padding: hp(0.3),
    marginStart: wp(4),
    borderTopColor: COLORS.greySolid,
  },
});

export default CustomDrawer;
