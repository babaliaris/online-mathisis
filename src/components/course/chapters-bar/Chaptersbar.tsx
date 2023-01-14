import React from "react";
import styles from './Chaptersbar.module.css';
import * as MUI from '@mui/material';

function ChaptersBar()
{
    return (
        <MUI.Box
        className={styles.container}
        >
            ChaptersBar Works!
        </MUI.Box>
    );
}

export default React.memo(ChaptersBar);