import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import UpcommingMatchCard from '../Components/UpcommingMatchCard';

const Upcommingscreen = () => {
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

      {/* here advertisement setup */}
      <View style={{flex: 0.12, borderTopWidth: 1, justifyContent: 'center'}}>
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
    // backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  innerContainer: {
    flex: 1,
  },
});

export default Upcommingscreen;
