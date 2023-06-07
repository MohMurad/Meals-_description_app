import { View ,StyleSheet,FlatList,Text} from "react-native";
import{MEALS,CATEGORIES}from '../data/dummy-data';
import {useRoute}from'@react-navigation/native';
import MealItem from "../componets/MealItem";
import { useEffect,useLayoutEffect } from "react";

function MealsOverviewScreen({route,navigation}){
   const catId=route.params.categoryId;
    // const catId=useRoute();
    const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >=0;
    });
    
    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
        navigation.setOptions({title:categoryTitle});
    },[catId,navigation]);

    // function pressHandler(id){
    //     navigation.navigate('meal screen',{
    //         mealId:id
    //     });
    // }
    function renderMealsItem(itemData){
        const item=itemData.item;
        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration
        };
        return(
          <MealItem {...mealItemProps}/>
        );
    }
    return(
            <View>
                {/* <Text>meals screen-{catId.params.categoryId}</Text>
                <Text>{catId.params.categoryTitle}</Text> */}
                <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealsItem}/>
            </View>
    );
}
export default MealsOverviewScreen;
const styles =StyleSheet.create({
    
})