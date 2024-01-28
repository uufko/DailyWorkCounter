import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:UserDevice.deviceHeight*.05,
        width:UserDevice.deviceWidht*.7,
        marginVertical:2,flex:1, backgroundColor:Colors.buttonColor
        
    },
    countViewStyle:{
        flex:1,
        backgroundColor:Colors.buttonColor,
        justifyContent:"center",
        alignItems:"center",
        borderRightWidth:1,borderColor:"white", borderRadius:5
    },
    datesViewStyle:{
        flex:7,
        flexDirection:"row",
        backgroundColor:Colors.listColor,
        justifyContent:"center",
        alignItems:"center",
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.02,
        color:"white",
        fontFamily:"bont"
    },
    countTextStyle:{
        fontSize:UserDevice.deviceHeight*.018,
        color:"white",
        fontFamily:"bont"
    }
})