
import React from 'react';
import Stack1 from './source/navigation/navigation';
import MyStack from './source/navigation/navigationscreen';
import Context from './source/context/context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App=()=> {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Context>
    <MyStack/>
    </Context>
    
    </GestureHandlerRootView>
  );
}

export default App;