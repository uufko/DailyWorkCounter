import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:UserDevice.deviceHeight*.05,
        width:UserDevice.deviceWidht*.7,
        marginVertical:2,flex:1
        
    },
    countViewStyle:{
        flex:1,
        backgroundColor:"#7FC7D9",
        justifyContent:"center",
        alignItems:"center",
    },
    datesViewStyle:{
        flex:7,
        flexDirection:"row",
        backgroundColor:"#DCF2F1",
        justifyContent:"center",
        alignItems:"center",
    },
    textStyle:{
        fontSize:15,
        color:"#0F1035",
        fontFamily:"bont"
    },
    countTextStyle:{
        fontSize:12,
        color:"#0F1035",
        fontFamily:"bont"
    }
})