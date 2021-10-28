import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RecommendedArticlesScreen from "./screens/Recommendation";
import PopularArticlesScreen from "./screens/Popular";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen: RecommendedArticlesScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#F2D4D6" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },
  PopularArticles: {
    screen: PopularArticlesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#FFA6F7" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  }
});

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#fff",
        headerTitle: "Articles",
        headerStyle: {
          backgroundColor: '#E1B0FE' 
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: RFValue(18)
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);