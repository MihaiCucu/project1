// import React from 'react';
// const wjs = window.require('wcjs-player');
// const wcjs = window.require('wcjs-prebuilt');

// class VideoPlayer extends React.Component {
//     state = { hidden: false };

//     componentWillReceiveProps(nextProps) {
//         if (this.props !== nextProps && !nextProps.hidden) {}
//     }

//     componentDidMount() {
//         let player = new wjs('#webVideoPlayer').addPlayer({
//             autoplay: true,
//             wcjs: wcjs
//         });

//         player.addPlaylist(this.props.video);
//     }

//     hideVideo = () => {
//         this.setState({hidden: true});
//     };

//     render() {
//         const {video} = this.props;
//         if (!video || this.state.hidden) return null;

//         return(
//             <div className="video-player">
//                 <div
//                     id="webVideoPlayer"
//                 >

//                     {/*subtitles go here*/}
//                 </div>
//                 <p onClick={this.props.stopVideo}>{'STOP'}</p>
//             </div>
//         );
//     }
// }

// export default VideoPlayer;