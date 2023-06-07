import { View,Text, Pressable,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigation=useNavigation();
  function preesHandler(){
    navigation.navigate('meal screen',{
        mealId:id
    });
  }
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#cca'}} onPress={preesHandler}>
                <View>
                    <Image style={styles.image} source={{uri:imageUrl}}/>
                </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.contentData}>
                <Text>{duration}m</Text>
                <Text>{complexity.toUpperCase()}</Text>
                <Text>{affordability.toUpperCase()}</Text>
            </View>
            </Pressable> 
        </View>
    );
}
export default MealItem;
const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:8
    },
    contentData:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    }

})