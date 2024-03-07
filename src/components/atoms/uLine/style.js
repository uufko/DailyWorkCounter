import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:Colors.textColor,
        height:UserDevice.deviceHeight*.001,
        width:UserDevice.deviceWidht*.8
    }
})