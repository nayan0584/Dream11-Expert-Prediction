import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import UpcommingMatchCard from '../Components/UpcommingMatchCard';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

const Completescreen = () => {
  return (
    <View style={styles.container}>
      {/* Card for march */}
      <ScrollView style={styles.innerContainer}>
        <UpcommingMatchCard />
        <UpcommingMatchCard />
        <UpcommingMatchCard />
        <UpcommingMatchCard />
        <UpcommingMatchCard />
      </ScrollView>

      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={TestIds.BANNER} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  innerContainer: {
    flex: 1,
  },
});

export default Completescreen;
