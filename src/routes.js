import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Main from './pages/main/index'
import User from './pages/user/index'

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  },{
    headerLayoutPreset: 'center', //deixar o layout do cabeçalho sempre no centro
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle:{
        backgroundColor: '#7159c1'
      },
      headerTintColor: '#FFF'
    }
  })
);

export default Routes;
