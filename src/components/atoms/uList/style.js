import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:UserDevice.deviceHeight*.05,
        width:UserDevice.deviceWidht*.7,
        marginVertical:2,
        flex:1, 
        backgroundColor:Colors.lightListColor, 
        alignItems:"center"
        
    },
    countViewStyle:{
        flex:1,
        backgroundColor:Colors.lightListColor,
        justifyContent:"center",
        alignItems:"center"
    },
    datesViewStyle:{
        flex:7,
        flexDirection:"row",
        backgroundColor:Colors.lightListColor,
        justifyContent:"center",
        alignItems:"center",
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.02,
        color:Colors.lightTextColor,
        fontFamily:"bont"
    },
    countTextStyle:{
        fontSize:UserDevice.deviceHeight*.018,
        color:Colors.lightTextColor,
        fontFamily:"bont"
    },
    lineStyle:{
        backgroundColor:Colors.lightTextColor, 
        height:UserDevice.deviceHeight*.04, 
        width:UserDevice.deviceWidht*.003
    }
})