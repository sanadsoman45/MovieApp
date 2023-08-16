import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../Utils/Config';
import {GET, getData} from '../Services/API';
import {movieDetailsStyle} from '../Styles/Style';
import Loader from './Loader';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../Utils/Colors';
import TrendingMovies from './TrendingMovies';
import TrendingPeople from './TrendingPeople';

const MovieDetails = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    getData(`/movie/${props.route.params.movieid}`)
      .then(response => {
        setDetails(response);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(details);
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={movieDetailsStyle.genreContainer}>
        <Text style={movieDetailsStyle.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={movieDetailsStyle.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={movieDetailsStyle.imageBg}
            />
            {console.log(IMAGE_POSTER_URL)}
          </View>
          <Text style={movieDetailsStyle.detailsMovieTitle}>
            {details.original_title}
          </Text>
          {details.homepage ? (
            <View style={movieDetailsStyle.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}>
                <Icon name="link" color={Colors.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={movieDetailsStyle.heading}>OVERVIEW</Text>
          <Text style={movieDetailsStyle.overview}>{details.overview}</Text>

          <View style={movieDetailsStyle.detailsContainer}>
            <View>
              <Text style={movieDetailsStyle.heading}>BUDGET</Text>
              <Text style={movieDetailsStyle.details}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={movieDetailsStyle.heading}>DURATION</Text>
              <Text style={movieDetailsStyle.details}>
                {details.runtime} min.
              </Text>
            </View>

            <View>
              <Text style={movieDetailsStyle.heading}>RELEASE DATE</Text>
              <Text style={movieDetailsStyle.details}>
                {details.release_date}
              </Text>
            </View>
          </View>

          <Text style={movieDetailsStyle.heading}>GENRE</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {getGenre()}
          </View>

          <TrendingPeople
            title="CAST"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage="details"
          />

          <TrendingMovies
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
