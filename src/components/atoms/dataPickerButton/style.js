import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"center",
        alignItems:"center"
    },
    touchableStyle:{
        backgroundColor:"#7FC7D9",
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
        shadowOffset: { height: 7, width: 3 },
    },
    textStyle:{
        fontSize:20,
        fontFamily:"bont",
        color:"white",
    }
})