import {CATEGORIES} from '../data/dummy-data'
import { FlatList } from 'react-native';
import CategoryGridItem from '../componets/CategoryGridItem';

//the 'navigation' prop to use it the component must be created in 'Stack.Screen 'in app.js
//if we want to use navitate without make my component in 'Stack.Screen' we can use useNavigation hook
//ex: const navigation =useNavigation(); 
function CategoriesScreen({navigation}){

  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate('melasOverview',{
        categoryId:itemData.item.id,
        categoryTitle:itemData.item.title,
      });
    }
    return <CategoryGridItem title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
}
    return <FlatList
     data={CATEGORIES} 
     key={2}
     keyExtractor={(item)=>item.id  } 
     renderItem={renderCategoryItem}
   numColumns={2}
     />;
}
export default CategoriesScreen;