import BarChart from './BarChart';
import {ChartsBasic} from './ChartsBasic';
import PieChart from './PieChart';
import BezierLineChart from './BezierLineChart';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export {BarChart, BezierLineChart, ChartsBasic, PieChart, screenWidth};
