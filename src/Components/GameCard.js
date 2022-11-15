import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setSubscription} from '../Slices/Adslice';

const GameCard = ({itemDetail}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {subscription} = useSelector(state => state?.Ads);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // dispatch(setSubscription());
        navigation.navigate('Matchscreen', {
          category_id: itemDetail?.item?.category_id,
          playName: itemDetail?.item?.category_name,
        });
      }}>
      <View style={styles.nameContainer}>
        <Text style={styles.gameName}>{itemDetail?.item?.category_name}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Image
          source={{uri: itemDetail?.item?.category_logo, cache: 'force-cache'}}
          resizeMode="contain"
          style={styles.imageContainer}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 10,
    width: '90%',
    height: 80,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  gameName: {
    fontFamily: 'Inter-Medium',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  imageContainer: {
    height: 55,
    width: 55,
    borderRadius: 27.5,
  },
});

export default GameCard;
