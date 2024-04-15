import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    touchableStyle:{
        backgroundColor:Colors.listColor,
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.45,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginRight:5,
        marginVertical:5,
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 }
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.03,
        fontFamily:"bont",
        color:Colors.textColor,
    }
})