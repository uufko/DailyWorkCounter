import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    touchableStyle:{
        backgroundColor:Colors.lightBackColor,
        height:UserDevice.deviceHeight*.07,
        width:UserDevice.deviceWidht*.2,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginBottom:5,
    },
    textStyle:{
        fontSize:13,
        fontFamily:"bont",
        color:Colors.lightTextColor,
        
    }
})