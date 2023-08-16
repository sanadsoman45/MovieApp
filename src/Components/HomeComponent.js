import {StyleSheet, View,Text} from 'react-native';
import DiscoverMovies from './DiscoverMovies';
import appStyle from '../Styles/Style';
import TrendingPeople from './TrendingPeople';

const Home=()=>{
    return(
        <View style={appStyle.sectionBg}>
            <DiscoverMovies/>
            <TrendingPeople/>
        </View>
    )
}



export default Home;