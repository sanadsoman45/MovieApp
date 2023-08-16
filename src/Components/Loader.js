import {ActivityIndicator} from 'react-native'; 
import { Colors } from '../Utils/Colors';

 const Loader = ()=>{
    return <ActivityIndicator size='large' color={Colors.baseColor}/>
 };

 export default Loader;