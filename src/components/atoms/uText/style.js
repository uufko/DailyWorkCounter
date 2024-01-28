import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:Colors.headerColor,
        justifyContent:"center",
        alignItems:"center",
        width:UserDevice.deviceWidht, flex:1,
        borderBottomWidth:0.5, borderColor:"white", borderRadius:100
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.05,
        fontFamily:"bont",
        color:"#F5F7F8",
    }
})