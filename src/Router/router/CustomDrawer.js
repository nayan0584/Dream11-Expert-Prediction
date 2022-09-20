import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLORS, images} from '../../Constants';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
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
              <FontAwesome name="money" color={COLORS.white} size={18} />
              <Text style={styles.premiumText}>Premium Purchase</Text>
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
            <Ionicons name="share-social-outline" size={22} color="#333" />
            <Text style={styles.footerText}>App Share</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.appRatecontainer}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name="star" size={22} color="#333" />
            <Text style={styles.footerText}>App Rate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: COLORS.white,
  },
  imageBackContainer: {
    padding: 20,
    top: -10,
    height: 210,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden',
  },
  imageHandle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginVertical: 20,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginStart: 10,
    color: '#333',
  },
  premiumText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginStart: 10,
  },
  bottomContainer: {backgroundColor: COLORS.white, flex: 1, paddingTop: 10},
  appRatecontainer: {padding: 5, marginStart: 15, borderTopColor: '#ccc'},
});

export default CustomDrawer;
