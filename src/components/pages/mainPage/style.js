import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:Colors.backColor
    },
    textsStyle: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    datePickerStyle: {
        flex:2,
        justifyContent: "center",
        alignItems: "center", 
    },
    buttonsStyle: {
        flex: 2,
        justifyContent: "center",
        alignItems:"center", 
    },
    flatListStyle: {
        flex: 8,
        justifyContent:"center",
        alignItems:"center",
    },
    absoluteViewStyle:{
        position: "absolute", justifyContent: "center", alignItems: "center",
        height: UserDevice.deviceHeight, width: UserDevice.deviceWidht,
        backgroundColor:Colors.backColor
    }


})