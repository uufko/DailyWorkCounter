import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:Colors.lightBackColor,
        justifyContent:"center",
        alignItems:"center",
        width:UserDevice.deviceWidht, flex:1,
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.05,
        fontFamily:"bont",
        color:Colors.lightTextColor,
    }
})