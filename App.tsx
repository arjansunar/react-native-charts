import React from 'react';
import {BarChart, BezierLineChart, ChartsBasic} from './src/components';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, StyleSheet, View} from 'react-native';
import {PieChart} from './src/components';

// type Props = {};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Basic" component={ChartsBasic} />
        <Stack.Screen name="Bar Chart" component={BarChart} />
        <Stack.Screen name="Pie Chart" component={PieChart} />
        <Stack.Screen name="Bezier Line" component={BezierLineChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={homeStyles.container}>
      <Button
        title={'Go to Basic chart'}
        onPress={() => navigation.navigate('Basic')}
      />
      <Button
        title={'Go to Bar chart'}
        onPress={() => navigation.navigate('Bar Chart')}
      />
      <Button
        title={'Go to Pie chart'}
        onPress={() => navigation.navigate('Pie Chart')}
      />
      <Button
        title={'Go to Bezier Line chart'}
        onPress={() => navigation.navigate('Bezier Line')}
      />
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
