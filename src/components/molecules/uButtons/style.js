import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 },flex:1
    }
})