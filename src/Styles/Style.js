import {StyleSheet} from 'react-native';
import {Colors} from '../Utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const appStyle = StyleSheet.create({
  sectionBg: {
    backgroundColor: Colors.baseColor,
    height: deviceHeight,
  },
});

export const headerStyles = StyleSheet.create({
  // set the title name
  title: 'Movies',

  // set styling to  header
  headerStyle: {
    // setting background Color
    backgroundColor: Colors.baseColor,
  },
  headerTitleStyle: {
    // Setting the color
    color: Colors.textColor,
  },
  //to display icon on left of header
  headerLeft: () => <Icon name="menu" size={28} color={Colors.textColor} />,
  //to display icon on right of header
  headerRight: () => <Icon name="search" size={28} color={Colors.textColor} />,
});

export const headerTitleStyle = StyleSheet.create({
  // Aligns title to center
  headerTitleAlign: 'center',
});

export const trendingPeopleStyles = StyleSheet.create({
  trendingPeopleContainer: {
    margin: 10,
  },
  trendingPeopleName: {
    width: 60,
    color: Colors.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
});

export const trendingMovies = StyleSheet.create({
  posterImage: {
    height: 200,
    width: 150,
    borderRadius: 10,
    margin:10
  },
  movieTitle: {
    color: Colors.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
});

export const headingStyles = StyleSheet.create({
  heading: {
    fontSize: 19,
    color: Colors.fadedColor,
    margin: 10,
  },
});

export const movieDetailsStyle = StyleSheet.create({
    imageBg: {
        width: deviceWidth,
        height: 250,
      },
      detailsMovieTitle: {
        fontSize: 28,
        color: Colors.textColor,
        textAlign: 'center',
        marginTop: -40,
      },
      linkContainer: {
        backgroundColor: Colors.secondaryColor,
        borderRadius: 100,
        padding: 10,
        width: 45,
        marginLeft: 20,
        marginTop: -20,
      },
      overview: {
        color: Colors.textColor,
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 16,
      },
      details: {
        color: Colors.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      genreContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.textColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      },
      genre: {
        color: Colors.textColor,
        fontSize: 16,
      },
})

export default appStyle;
