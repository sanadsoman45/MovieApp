import { StyleSheet } from "react-native"
import { Colors } from "../Utils/Colors"
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from "react-native"

const deviceHeight = Dimensions.get('window').height;

const appStyle = StyleSheet.create({
    sectionBg:{
        backgroundColor: Colors.baseColor,
        height: deviceHeight
    }
})

export const headerStyles = StyleSheet.create({
    // set the title name
    title:'Movies',

    // set styling to  header
    headerStyle:{

        // setting background Color
        backgroundColor: Colors.baseColor
    },
    headerTitleStyle:{
        // Setting the color
        color: Colors.textColor
    },
    //to display icon on left of header
    headerLeft:()=><Icon name="menu" size={28} color={Colors.textColor} />,
    //to display icon on right of header
    headerRight:()=><Icon name="search" size={28} color={Colors.textColor} />,

});


export const headerTitleStyle = StyleSheet.create({
    // Aligns title to center
    headerTitleAlign:'center'
})

export default appStyle;