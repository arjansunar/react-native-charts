import {View, Text} from 'react-native';
import React from 'react';
import {ProgressChart as RnProgressChart} from 'react-native-chart-kit';
import {screenWidth} from '.';

type Props = {};

const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const ProgressChart = (props: Props) => {
  return (
    <View>
      <RnProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={12}
        radius={22}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
  );
};

export default ProgressChart;
