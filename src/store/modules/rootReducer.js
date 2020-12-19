import { combineReducers } from 'redux';
import Categories from './Categories/reducer';
import Drinks from './Drinks/reducer';

export default combineReducers({ Categories, Drinks });
