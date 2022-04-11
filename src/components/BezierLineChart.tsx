import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

type Props = {};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 100, 49, 53],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};
const BezierLineChart = (props: Props) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <LineChart
        data={data}
        chartConfig={chartConfig}
        width={screenWidth}
        height={220}
        bezier
      />
    </View>
  );
};

export default BezierLineChart;

const styles = StyleSheet.create({});
