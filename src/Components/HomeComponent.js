import {StyleSheet, View,Text, ScrollView} from 'react-native';
import DiscoverMovies from './DiscoverMovies';
import appStyle from '../Styles/Style';
import TrendingPeople from './TrendingPeople';
import TrendingMovies from './TrendingMovies';

const Home=(props)=>{
    return(
        <ScrollView>
            <View style={appStyle.sectionBg}>
            <DiscoverMovies/>
            <TrendingPeople title="Trending People" url="/trending/person/week" />
            <TrendingMovies title="Trending Movies" url="/movie/top_rated" navigation={props.navigation}/>
        </View>
        </ScrollView>
    )
}



export default Home;