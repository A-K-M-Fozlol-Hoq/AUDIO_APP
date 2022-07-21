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
import { colors } from '../src/theme';
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

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
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

// const HeadPhonesStack = createStackNavigator();
const HeadPhonesStack = createNativeStackNavigator();
function HeadPhonesStackScreens() {
  return (
    <HeadPhonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadPhonesStack.Screen name="HeadPhones" component={HeadPhones} />
      <HeadPhonesStack.Screen name="Details" component={Details} />
    </HeadPhonesStack.Navigator>
  );
}

// const EarPhonesStack = createStackNavigator();
const EarPhonesStack = createNativeStackNavigator();
function EarPhonesStackScreens() {
  return (
    <EarPhonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarPhonesStack.Screen name="EarPhones" component={EarPhones} />
      <EarPhonesStack.Screen name="Details" component={Details} />
    </EarPhonesStack.Navigator>
  );
}

// const SpeakersStack = createStackNavigator();
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

// const CartStack = createStackNavigator();
const CartStack = createNativeStackNavigator();
function CartStackScreens() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

// function TabBarIcon({ fontFamily, name, color }) {
//   if (fontFamily === 'MaterialCommunityIcons') {
//     return <MaterialCommunityIcons name={name} size={24} color={color} />;
//   } else if (fontFamily === 'Ionicons') {
//     return <Ionicons name={name} size={24} color={color} />;
//   } else if (fontFamily === 'SimpleLineIcons') {
//     return <SimpleLineIcons name={name} size={24} color={color} />;
//   }
// }

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        color={color}
        style={{ marginBottom: -3 }}
        size={24}
        name={name}
      />
    );
  } else if (fontFamily === 'SimpleLineIcons') {
    return (
      <SimpleLineIcons
        color={color}
        style={{ marginBottom: -3 }}
        size={24}
        name={name}
      />
    );
  } else {
    return (
      <Ionicons
        color={color}
        size={24}
        style={{ marginBottom: -3 }}
        name={name}
      />
    );
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily="MaterialCommunityIcons"
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreens}
        />
        <Tab.Screen
          options={{
            title: 'HeadPhones',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily="MaterialCommunityIcons"
                name="headphones"
                color={color}
              />
            ),
          }}
          name="HeadPhonesTab"
          component={HeadPhonesStackScreens}
        />
        <Tab.Screen
          options={{
            title: 'EarPhones',
            tabBarIcon: ({ color }) => {
              return (
                <TabBarIcon
                  fontFamily="SimpleLineIcons"
                  name="earphones-alt"
                  color={color}
                />
              );
            },
          }}
          name="EarPhonesTab"
          component={EarPhonesStackScreens}
        />
        <Tab.Screen
          options={{
            title: 'Speakers',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily="MaterialCommunityIcons"
                name="speaker"
                color={color}
              />
            ),
          }}
          name="SpeakersTab"
          component={SpeakersStackScreens}
        />
        <Tab.Screen
          options={{
            title: 'Cart',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily="Ionicons"
                name="cart-outline"
                color={color}
              />
            ),
          }}
          name="CartTab"
          component={CartStackScreens}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
