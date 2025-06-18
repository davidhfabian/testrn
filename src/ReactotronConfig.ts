import Reactotron from 'reactotron-react-native';
import apisauce from 'reactotron-apisauce';

if (__DEV__) {
  Reactotron.configure()
    .useReactNative()
    .use(apisauce())
    .connect();

  console.tron = Reactotron;
}

export default Reactotron;
