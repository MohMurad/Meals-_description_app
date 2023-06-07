import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View,Text,Image,StyleSheet} from "react-native";
import { MEALS } from "../data/dummy-data";
function MealScreen({route}){
    const mealId=route.params.mealId;
    const mealItem=MEALS.find((meal)=>meal.id===mealId);
//  const navigation
    useLayoutEffect(()=>{

    });
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:mealItem.imageUrl}}/>
            <View>
                <Text>Ingradiant</Text>
                {mealItem.ingredients.map((ingredient)=><Text>{ingredient}</Text>)}
            </View>       
            <View>
                <Text>Steps</Text>
                {mealItem.steps.map((step)=><Text>{step}</Text>)}
            </View>   
        </View>
    );
}
export default MealScreen;
const styles=StyleSheet.create({
   container:{
    alignItems:'center',
    justifyContent:'center'
   },
    image:{
        width:'90%',
        height:200,
        borderRadius:8,
    }
})