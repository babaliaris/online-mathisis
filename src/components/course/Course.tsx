import React from "react";
import styles from './Course.module.css';
import * as MUI from '@mui/material';
import Chaptersbar from "./chapters-bar/Chaptersbar";
import * as I18n from 'react-i18next';


import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function Course()
{
    const {t} = I18n.useTranslation();
    const [tab_value, setTabValue] = React.useState(0);

    const onTabChaged = React.useCallback((event: React.SyntheticEvent<Element, Event>, value: any)=>
    {
        setTabValue(value);
    }, []);

    return (
        <MUI.Box
        className={styles.container}
        >

            <MUI.Box
            className={styles.main_area}
            >
                <MUI.Tabs
                value={tab_value}
                onChange={onTabChaged}
                centered>
                    <MUI.Tab icon={<PhoneIcon />} label={t('video_tab')} />
                    <MUI.Tab icon={<FavoriteIcon />} label={t('written_tab')} />
                    <MUI.Tab icon={<PersonPinIcon />} label={t('exercises_tab')} />
                    <MUI.Tab icon={<PersonPinIcon />} label={t('comments_tab')} />
                </MUI.Tabs>


                <MUI.Box
                className={styles.tabview}
                >
                    tabview
                </MUI.Box>
                
            </MUI.Box>


            <MUI.Box
            bgcolor={"background.default"}
            borderColor="divider"
            className={styles.chapterview}
            >
                <MUI.Typography
                className={styles.course_name}
                variant="body1"
                component="h1"
                >
                    Αρχή και διατήρηση της μηχανικής ενέργειας
                </MUI.Typography>

                <MUI.Divider
                className={styles.divider}
                />

                <Chaptersbar/>
                
            </MUI.Box>
            
        </MUI.Box>
    );
}

export default React.memo(Course);