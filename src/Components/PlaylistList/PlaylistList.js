import React from "react";
import { PlaylistListItem } from "../PlaylistListItem/PlaylistListItem";
import './PlaylistList.css';

export class PlaylistList extends React.Component {
    render() {
        return (
            <div className="PlaylistList">
                <h2>Local Playlist</h2>
                {
                    this.props.playlistList?.map(playlist => {
                        return <PlaylistListItem playlist={playlist} key={playlist.id} />
                    })                   
                }
            </div>
        );
    }
}