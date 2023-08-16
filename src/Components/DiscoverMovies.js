import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {getData} from '../Services/API';
import {IMAGE_POSTER_URL} from '../../Utils/Config';
import {SliderBox} from 'react-native-image-slider-box';
import {Colors} from '../Utils/Colors';

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);

  const getMovies = async () => {
    getData('discover/movie')
      .then(response => {
        setMovies(response.results);
        const backdropImages = response.results.map(
          data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
        );
        let selectedImages = [];
        for (let i = 0; i < 10; i++) {
          selectedImages = [...selectedImages, backdropImages[i]];
        }
        setSliderImages(selectedImages);
      })
      .catch(error => {
        console.log(`Error occurred: ${error}`);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      <SliderBox images={sliderImages} dotColor={Colors.secondaryColor} />
    </View>
  );
};



export default DiscoverMovies;
