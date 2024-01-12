import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    touchableStyle:{
        backgroundColor:"#7FC7D9",
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
        color:"#F5F7F8",
        
    }
})