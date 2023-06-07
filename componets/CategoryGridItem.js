import { Pressable, View,Text,StyleSheet} from "react-native"; 
function CategoryGridItem({title,color,onPress}){
    return(
        <View style={[styles.outerContainer,{backgroundColor:color}]}>
            <Pressable
             android_ripple={{color:'#ccc'}} 
             style={({pressed})=> [styles.button, pressed ? styles.buttonPressed:null]}
             onPress={onPress}
             >
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
const styles=StyleSheet.create({
    outerContainer:{
        flex:1,
        margin:16,
        borderRadius:8,
        borderColor:'balck',
        //borderWidth:2,
        height:150,
        elevation:4,
        overflow:'hidden'
    },
    button:{
        flex:1,
    
    },
    buttonPressed:{
     //   opacity:0.2
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoryGridItem;