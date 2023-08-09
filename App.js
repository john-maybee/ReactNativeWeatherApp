import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForecastList from './components/ForecastList';
import ForecastDetails from './components/ForecastDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        {/* similar to a Router */}
        <Stack.Navigator initialRouteName="Weekly Forecast">
          {/* Similar to Route */}
          <Stack.Screen name="Weekly Forecast" component={ForecastList} />
          <Stack.Screen name="Details" component={ForecastDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
