import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Pressable, Button, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, Text, View } from 'react-native';
import { useCallback } from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    < >
      <View style={{ flex: 2, backgroundColor: 'yellow', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Pressable onPress={onClick} style={{
          paddingHorizontal: 40, paddingVertical: 20, backgroundColor: "blue"
        }}>
          <Text style={{ color: 'white' }}>Home Screen</Text>
        </Pressable>
      </View>
      <View style={{ flex: 5, backgroundColor: 'orange' }}><Text>Second</Text></View>
    </>
  );
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈화면' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;