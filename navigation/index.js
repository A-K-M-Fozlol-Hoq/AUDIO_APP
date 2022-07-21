import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeadPhones from '../src/screens/headPhones';
import EarPhones from '../src/screens/EarPhones';
import Home from '../src/screens/home';
import Details from '../src/screens/product-details';
import Speakers from '../src/screens/speakers';
import Checkout from '../src/screens/checkout';
import Cart from '../src/screens/cart';

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Tab = createBottomTabNavigator();

// const HomeStack = createStackNavigator();
const HomeStack = createNativeStackNavigator();
function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

// const HeadPhonesStack = createStackNavigator();
const HeadPhonesStack = createNativeStackNavigator();
function HeadPhonesStackScreens() {
  return (
    <HeadPhonesStack.Navigator>
      <HeadPhonesStack.Screen name="HeadPhones" component={HeadPhones} />
      <HeadPhonesStack.Screen name="Details" component={Details} />
    </HeadPhonesStack.Navigator>
  );
}

// const EarPhonesStack = createStackNavigator();
const EarPhonesStack = createNativeStackNavigator();
function EarPhonesStackScreens() {
  return (
    <EarPhonesStack.Navigator>
      <EarPhonesStack.Screen name="EarPhones" component={EarPhones} />
      <EarPhonesStack.Screen name="Details" component={Details} />
    </EarPhonesStack.Navigator>
  );
}

// const SpeakersStack = createStackNavigator();
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

// const CartStack = createStackNavigator();
const CartStack = createNativeStackNavigator();
function CartStackScreens() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="HeadPhones" component={HeadPhonesStackScreens} />
        <Tab.Screen name="EarPhones" component={EarPhonesStackScreens} />
        <Tab.Screen name="Speakers" component={SpeakersStackScreens} />
        <Tab.Screen name="Cart" component={CartStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
