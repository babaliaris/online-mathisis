import React from "react";
import styles from './Topbar.module.css';
import * as MUI from '@mui/material';
import * as I18n from 'react-i18next'

import CalculateIcon from '@mui/icons-material/Calculate';

function Topbar()
{
    const {t} = I18n.useTranslation();

    return (
        <MUI.Box
        bgcolor="primary.main"
        className={styles.container}
        >
            {/*Logo*/}
            <MUI.Box
            className={styles.logo_column}
            >
                <CalculateIcon
                className={styles.logo}
                />

            </MUI.Box>

            {/*Title*/}
            <MUI.Box
            className={styles.title_column}
            >
                <MUI.Typography
                variant="h4"
                component="label"
                >
                    {t('title')}
                </MUI.Typography>

            </MUI.Box>


            {/*Tools*/}
            <MUI.Box
            className={styles.tools_column}
            >
                <CalculateIcon
                className={styles.logo}
                />

                <CalculateIcon
                className={styles.logo}
                />

                <CalculateIcon
                className={styles.logo}
                />

                <CalculateIcon
                className={styles.logo}
                />

            </MUI.Box>

        </MUI.Box>
    )
}

export default React.memo(Topbar);