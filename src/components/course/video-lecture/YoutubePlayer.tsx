import React from "react";
import styles from "./YoutubePlayer.module.css";

type VideoLectureProps = {
    video_id: string
}

function VideoLecture({video_id}: VideoLectureProps)
{
    return (
        <React.Fragment>
            <div
            className={styles.container}
            >
                <iframe
                    title="Youtube Player"
                    className={styles.iframe}
                    src={`https://www.youtube.com/embed/${video_id}`}
                    allowFullScreen={true}
                    >
                </iframe>

            </div>

        </React.Fragment>
    );
}

export default React.memo(VideoLecture);