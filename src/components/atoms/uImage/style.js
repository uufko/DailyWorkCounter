import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        position:"absolute",
        right:15,
        flex:1, 
    },
    imageStyle:{
        resizeMode:"contain",
    },
    textStyle:{
        alignSelf:"center",
        color:"white",
        fontSize:UserDevice.deviceHeight*.015, fontFamily:"bont"
    }
})