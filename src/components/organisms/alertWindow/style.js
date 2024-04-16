import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UserDevice.deviceHeight*.2,
        width:UserDevice.deviceWidht*.8,
        backgroundColor:Colors.lightListColor, opacity:1, 
        justifyContent:"center", alignItems:"center",gap:10,
        borderRadius:5
    },
    textStyle:{
        fontFamily:"bont",
        fontSize:UserDevice.deviceHeight*.025, 
        color:Colors.lightTextColor
    },
    touchableStyle:{
        height:UserDevice.deviceHeight*.06,
        width:UserDevice.deviceWidht*.3,
        backgroundColor:Colors.lightBackColor, 
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:5
    },
    buttonTextStyle:{
        fontFamily:"bont",
        color:"black",
        fontSize:UserDevice.deviceHeight*.02
    }
})