import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../Constants';
import ComponentHeader from '../Components/ComponentHeader';
import Upcommingscreen from '../Screens/Upcommingscreen';
import Livescreen from '../Screens/Livescreen';
import Completescreen from '../Screens/Completescreen';

const Matchscreen = ({route}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Upcoming', category_id: route?.params?.category_id},
    {key: 'second', title: 'Live', category_id: route?.params?.category_id},
    {key: 'third', title: 'Completed', category_id: route?.params?.category_id},
  ]);

  const renderScene = SceneMap({
    first: Upcommingscreen,
    second: Livescreen,
    third: Completescreen,
  });

  return (
    <View style={styles.container}>
      <ComponentHeader
        iconName="ios-chevron-back"
        firstTextName={`${route?.params?.playName} MATCHES`}
      />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        showPageIndicator={true}
        renderTabBar={props => (
          <TabBar
            {...props}
            activeColor={COLORS.white}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            renderLabel={({focused, route}) => {
              return (
                <Text
                  style={{
                    color: focused ? COLORS?.white : '#f5f5f5 ',
                    fontFamily: 'OpenSans-Medium',
                    padding: 5,
                  }}>
                  {route.title}
                </Text>
              );
            }}
            renderIcon={({route, focused}) => (
              <Icons
                name={
                  route?.title === 'Upcoming'
                    ? 'timer-outline'
                    : route?.title === 'Live'
                    ? 'videocam-outline'
                    : 'ios-checkmark-circle-outline'
                }
                color={focused ? COLORS?.white : '#f5f5f5 '}
                size={18}
              />
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    // backgroundColor: 'transparent',
    // backgroundColor: 'rgba(255, 255, 255, 0)',
    // backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  indicatorStyle: {
    backgroundColor: COLORS.white,
  },
  tabBar: {
    borderBottomRightRadius: hp(4),
    borderBottomLeftRadius: hp(4),
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
});

export default Matchscreen;
