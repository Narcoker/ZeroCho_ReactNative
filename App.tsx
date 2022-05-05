import * as React from 'react';
import { Provider} from 'react-redux';
import AppInner from './AppInner';
import store from './src/store';



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


function App() {
  return (
    <Provider store={store}>
      <AppInner/>
    </Provider>
  );
}

export default App;