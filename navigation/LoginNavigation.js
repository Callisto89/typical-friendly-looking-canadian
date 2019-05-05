import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const MainNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
});

export default createAppContainer(MainNavigator);
