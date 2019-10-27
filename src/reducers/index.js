import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Balada o pisonji i zugi', duration: '6:17'},
        {title: 'Trideset', duration: '3:25'},
        {title: 'Nothing Else Matters', duration: '14:20'}    
    ]
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})