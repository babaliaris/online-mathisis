import React from "react";
import styles from './Course.module.css';
import * as MUI from '@mui/material';
import Chaptersbar from "./chapters-bar/Chaptersbar";

function Course()
{
    return (
        <MUI.Box
        className={styles.container}
        >

            <MUI.Box
            className={styles.tabview}
            >
                
            </MUI.Box>


            <MUI.Box
            className={styles.chapterview}
            >
                <Chaptersbar/>
                
            </MUI.Box>
            
        </MUI.Box>
    );
}

export default React.memo(Course);