import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UserDevice.deviceHeight*.2,
        width:UserDevice.deviceWidht*.8,
        backgroundColor:"#365486", opacity:1, 
        justifyContent:"center", alignItems:"center",gap:10,
        borderRadius:5
    },
    textStyle:{
        fontFamily:"bont",
        fontSize:UserDevice.deviceHeight*.025, 
        color:"white"
    },
    touchableStyle:{
        height:UserDevice.deviceHeight*.06,
        width:UserDevice.deviceWidht*.3,
        backgroundColor:"white", 
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