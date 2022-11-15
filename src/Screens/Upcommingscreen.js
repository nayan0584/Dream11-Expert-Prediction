import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import UpcommingMatchCard from '../Components/UpcommingMatchCard';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';
import {getUpcomming} from '../https';
import {FlashList} from '@shopify/flash-list';

const Upcommingscreen = ({route}) => {
  const [matchList, setMatchList] = useState();
  useEffect(() => {
    getUpcommingMatch();
  }, []);

  const getUpcommingMatch = async () => {
    const params = {
      category_id: route?.category_id,
    };
    try {
      const {data} = await getUpcomming(params);
      setMatchList(data?.ResultData);
    } catch (err) {
      console.log('Error for getupcommingmatch in match screen ---->', err);
    }
  };

  return (
    <View style={styles.container}>
      {/* Card for march */}
      <FlashList
        showsVerticalScrollIndicator={false}
        data={matchList}
        numColumns={1}
        extraData={100}
        estimatedItemSize={50}
        renderItem={item => <UpcommingMatchCard matchDetail={item} />}
      />
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

export default Upcommingscreen;
