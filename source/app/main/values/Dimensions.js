import { Dimensions } from 'react-native';
import { heightP } from '../../helpers/fontSize';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Dimension = {
    width: width,
    height: height,
    Big: heightP(40),
    big: heightP(28),
    large: heightP(26),
    semilarge: heightP(22),
    small: heightP(20),
    verysmall: heightP(18),
    smallicon: heightP(16),
    iconmid: heightP(23),
    trailerIcon: heightP(10),
    borderR:10,
    start: {
        x: 1,
        y: 0.1,
    },
    end: {
        x: 0.5,
        y: 1,
    },
    large: 25,
};
