import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {BASE_URL, POSTER_IMAGE} from '../Utils/Config';
import {headingStyles, trendingMovies} from '../Styles/Style';
import Loader from './Loader';
import {getData} from '../Services/API';

const TrendingMovies = props => {
  i=0;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {

    getData(props.url).then(response => {
      setMovies(response.results);
      setLoading(false);
      
    });
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={headingStyles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={movies}
            renderItem={(item=>displayMovies(item,props))}
            horizontal
          />
          
        </View>
      )}
    </View>
  );
};

const displayMovies = ({item},props) => {
    // console.log(props)
  return (
    <TouchableOpacity onPress={()=>{props.navigation.push('movieDetails', {movieid:item.id})}}>
       <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={trendingMovies.posterImage}
      />
      <Text style={trendingMovies.movieTitle}>{item.title}</Text>
      
    </TouchableOpacity>
  );
};

export default TrendingMovies;
