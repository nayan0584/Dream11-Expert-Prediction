import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import UpcommingMatchCard from '../Components/UpcommingMatchCard';
import {COLORS} from '../Constants';

const Livescreen = () => {
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
  },
  innerContainer: {
    flex: 1,
  },
});

export default Livescreen;
