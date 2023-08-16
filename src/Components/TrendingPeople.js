import {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {getData} from '../Services/API';
import Loader from './Loader';
import {headingStyles, trendingPeopleStyles} from '../Styles/Style';
import { IMAGE_POSTER_URL } from '../Utils/Config';

const TrendingPeople = (props) => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getData('trending/person/week')
      .then(response => {
        setPeople(props.isForPage === 'details' ? response.cast : response.results);
        setLoading(false);
      })
      .catch(error => console.log('Errors are:' + error));
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
            <Text style={headingStyles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({item}) => {
  return (
    <View style={trendingPeopleStyles.trendingPeopleContainer}>
      <Image
        style={trendingPeopleStyles.trendingPeopleImage}
        source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
      />
      <Text style={trendingPeopleStyles.trendingPeopleName}>{item.name}</Text>
    </View>
  );
};

export default TrendingPeople;
