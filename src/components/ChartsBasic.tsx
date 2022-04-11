import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  LineChart,
  //   BarChart,
  //   PieChart,
  //   ProgressChart,
  //   ContributionGraph,
  //   StackedBarChart,
} from 'react-native-chart-kit';

export const ChartsBasic = () => {
  return (
    <View style={styles.chartContainter}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.8} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa720',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.lineChart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineChart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
