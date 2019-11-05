import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: "192.168.0.108"}) // usar o ip do computador quando for usar o android como usb
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear(); // limpa a timeline quando dá um refresh na aplicação
}

//{host: "192.168.0.108"}
