import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

export type LoggedInParamList = { // 로그인했을때 출력되는 화면
  Orders: undefined; // 주문 화면
  Settings: undefined; // 
  Delivery: undefined; // 주문 수락시 고객집과 가게의 경로 출력
  Complete: { orderId: string }; // 배달 완료 처리 화면: 고객에게 배달완료 된 사진을 보여줌, orderId 는 주문정보를 받아오는 파라미터이다.
  // 파라미터는 다른페이지의 정보를 가지고 오고싶을 때 사용하는 것이 좋다.
};

export type RootStackParamList = { //로그인 안했을때 출력되는 화면
  SignIn: undefined; //로그인 화면
  SignUp: undefined; //회원가입 화면
};

// type을 나눠두면 좋은 이유: 혹시나 로그인화면에서 setting을 넘어가는 말도안되는 현상을 막기 위한 대비책

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{title: '오더 목록'}}
          />
          <Tab.Screen
            name="Delivery"
            component={Delivery}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;