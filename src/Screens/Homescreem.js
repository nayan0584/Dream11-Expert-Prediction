import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {COLORS} from '../Constants/index';
import {DUMMY_SPORT} from '../../assets/Data/DummyData';
import GameCard from '../Components/GameCard';
import Header from '../Components/Header';

const Homescreem = () => {
  return (
    <View style={styles.container}>
      {/* Header here */}
      <Header
        iconName="menu"
        firstTextName="Dream "
        secendTextName="11"
        thirdTextName=" Team"
      />

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
      <View style={{flex: 0.1, borderTopWidth: 1, justifyContent: 'center'}}>
        <Text style={[{color: COLORS.black, alignSelf: 'center'}]}>
          Adverticement Pannel
        </Text>
        {/* here advertisement setup */}
      </View>
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
