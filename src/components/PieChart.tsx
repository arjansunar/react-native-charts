import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PieChart as RnPieChart} from 'react-native-chart-kit';

type Props = {};

export const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const PieChart = (props: Props) => {
  const screenWidth = Dimensions.get('window').width;

  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <RnPieChart
        style={styles.pieChart}
        data={data}
        width={screenWidth * 0.8}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        center={[0, 0]}
        absolute
        height={190}
      />
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  pieChart: {},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});
