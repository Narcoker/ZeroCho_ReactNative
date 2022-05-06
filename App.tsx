import * as React from 'react';
import { Provider } from 'react-redux';
import AppInner from './AppInner';
import store from './src/store';


// type을 나눠두면 좋은 이유: 혹시나 로그인화면에서 setting을 넘어가는 말도안되는 현상을 막기 위한 대비책

function App() {
  return (
    <Provider store={store}>
      <AppInner/>
    </Provider>
  );
}

export default App;


