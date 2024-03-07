import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    touchableStyle:{
        backgroundColor:Colors.buttonColor,
        height:UserDevice.deviceHeight*.05,
        width:UserDevice.deviceWidht*.6,
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
        fontSize:UserDevice.deviceHeight*.028,
        fontFamily:"bont",
        color:Colors.textColor,
    }
})