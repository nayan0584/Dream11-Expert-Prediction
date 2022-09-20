import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {COLORS} from '../Constants/index';
import {DUMMY_SPORT} from '../../assets/Data/DummyData';
import GameCard from '../Components/GameCard';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Homescreem = () => {
  return (
    <View style={styles.container}>
      {/* Header here */}
      <View
        style={{
          flex: 0.15,
          backgroundColor: COLORS.primary,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View style={{flex: 0.3, alignItems: 'center'}}>
          <Icon name="menu" size={20} style={{color: COLORS.white}} />
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              fontFamily: 'Inter-Medium',
              textTransform: 'uppercase',
            }}>
            Dream
          </Text>
          <View
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              justifyContent: 'center',
              padding: 5,
              height: 30,
              width: 30,
              borderRadius: 15,
              alignContent: 'center',
              alignItems: 'center',
              marginStart: 5,
            }}>
            <Text
              style={
                {
                  // fontSize: 18,
                  // color: COLORS.white,
                  // fontFamily: 'Inter-Medium',
                  // textTransform: 'uppercase',
                }
              }>
              11
            </Text>
          </View>
        </View>
        <View style={{flex: 0.3}} />
      </View>

      {/* Content here */}
      <View style={{flex: 1}}>
        <FlashList
          showsVerticalScrollIndicator={false}
          data={DUMMY_SPORT}
          numColumns={1}
          extraData={10}
          estimatedItemSize={50}
          renderItem={item => <GameCard itemDetail={item} />}
        />
      </View>

      {/* here advertisement setup */}
      <View style={{flex: 0.1}}>{/* here advertisement setup */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});

export default Homescreem;
