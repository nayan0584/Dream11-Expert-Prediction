import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

import {COLORS} from '../Constants/index';
import {DUMMY_SPORT} from '../../assets/Data/DummyData';
import GameCard from '../Components/GameCard';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import {getAppInfo, getCategories} from '../https';
import {setAppInfo} from '../Slices/Detailslice';

const Homescreem = () => {
  const dispatch = useDispatch();
  const [categoriesData, setCategoriesData] = useState();

  useEffect(() => {
    getAppDetail();
    getCategoriesMatch();
  }, []);

  const getAppDetail = async () => {
    const params = {};
    try {
      const {data} = await getAppInfo(params);
      dispatch(setAppInfo(data));
    } catch (err) {
      console.log('Error on Dashboard getAppDetail Function =====>', err);
    }
  };

  const getCategoriesMatch = async () => {
    try {
      const {data} = await getCategories({});
      setCategoriesData(data?.ResultData);
    } catch (err) {
      console.log(
        'Error on Dashboard getCategoriesDetail Function =====>',
        err,
      );
    }
  };

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
          data={categoriesData}
          numColumns={1}
          extraData={10}
          estimatedItemSize={50}
          renderItem={item => <GameCard itemDetail={item} />}
        />
      </View>
      <BannerAd size={BannerAdSize.ADAPTIVE_BANNER} unitId={TestIds.BANNER} />
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
