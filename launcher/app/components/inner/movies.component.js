import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
// import VideoPlayer from './videoPlayer.component';

const { shell } = window.require('electron');
const mapStateToProps = store => {
    return store;
};

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoToPlay: null
        };
    }
    componentWillMount() {
        store.dispatch({
            type: 'GET_MOVIES'
        });
    }

    renderMovieList = (movies) => {
        return (
            <ul>
                {movies.map((movie, i) => (
                    <li key={i} data-file={movie} onClick={this.playVideo}>
                        {movie.split('/')[movie.split('/').length - 1]}
                    </li>
                ))}
            </ul>
        );
    };

    playVideo = (evt) => {
        shell.openItem(evt.target.dataset.file);
        // this.setState({
        //     videoToPlay: evt.target.dataset.file,
        //     hideVideo: false
        // });
    };

    stopVideo = () => {
        this.setState({ hideVideo: true });
    };

    render() {
        const { movies } = this.props;
        if (!movies || !movies.files) { return null; }
        let movieList = this.renderMovieList(movies.files.video);
        return (
            <div className="movies-wrapper">
                {movieList}

            </div>
        );
    }
}

export default connect(mapStateToProps)(Movies)
