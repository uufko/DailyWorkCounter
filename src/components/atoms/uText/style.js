import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:"#365486",
        justifyContent:"center",
        alignItems:"center",
        width:UserDevice.deviceWidht, flex:1
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.05,
        fontFamily:"bont",
        color:"#F5F7F8",
    }
})