import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,CancelButton, Button } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';



export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='melasCategories'>
        <Stack.Screen  name='melasCategories' component={CategoriesScreen}/>
        <Stack.Screen 
         name='melasOverview'
         component={MealsOverviewScreen}
        //  options={({route,navigation})=>{
        //   const cattitle=route.params.categoryTitle;
        //   return{
        //     title:cattitle
        //   };
        //  }}
          />
          <Stack.Screen 
          name='meal screen' 
          component={MealScreen}
          // options={{headerRight:()=>{
          //   return <Button title='Tab Me!'/>
          // }}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {   
  },
});
