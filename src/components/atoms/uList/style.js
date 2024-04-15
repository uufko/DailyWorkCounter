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
        backgroundColor:Colors.listColor, 
        alignItems:"center"
        
    },
    countViewStyle:{
        flex:1,
        backgroundColor:Colors.listColor,
        justifyContent:"center",
        alignItems:"center"
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
        color:Colors.textColor,
        fontFamily:"bont"
    },
    countTextStyle:{
        fontSize:UserDevice.deviceHeight*.018,
        color:Colors.textColor,
        fontFamily:"bont"
    },
    lineStyle:{
        backgroundColor:Colors.textColor, 
        height:UserDevice.deviceHeight*.045, 
        width:UserDevice.deviceWidht*.005
    }
})