import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
// trying scan screen
import Scan from "../screens/Scan";
import Signup from "../screens/authentication/Signup";
import Welcome from "../screens/welcome";
import Login from "../screens/authentication/Login";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} initialParams={{}} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      <Stack.Screen name="Ingredient" component={IngredientScreen} />
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      <Stack.Screen
        name="IngredientsDetails"
        component={IngredientsDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
