import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UserDevice.deviceHeight*.3,
        width:UserDevice.deviceWidht*.85,
        backgroundColor:Colors.listColor, opacity:1, 
        justifyContent:"center", alignItems:"center",gap:10,
        borderRadius:5,
    },
    textStyle:{
        fontFamily:"bont",
        fontSize:UserDevice.deviceHeight*.025, 
        color:Colors.textColor
    },
    touchableStyle:{
        height:UserDevice.deviceHeight*.06,
        width:UserDevice.deviceWidht*.3,
        backgroundColor:Colors.headerColor, 
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:5
    },
    buttonTextStyle:{
        fontFamily:"bont",
        color:Colors.textColor,
        fontSize:UserDevice.deviceHeight*.02
    },
    textInputStyle:{
        height:UserDevice.deviceHeight*.07,
        width:UserDevice.deviceWidht*.5,
        borderWidth:0, 
        fontFamily:"bont",color:Colors.textColor, borderColor:Colors.textColor, 
        borderWidth:1, borderRadius:5
    }
})