import {View, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {BarChart as RnBarChart} from 'react-native-chart-kit';

type Props = {};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const BarChart = (props: Props) => {
  return (
    <View>
      <RnBarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const graphStyle = StyleSheet.create({});
export default BarChart;
