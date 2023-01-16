import React from "react";
import styles from './Course.module.css';
import * as MUI from '@mui/material';
import Chaptersbar from "./chapters-bar/Chaptersbar";
import * as I18n from 'react-i18next';


import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import VideoLecture from "./video-lecture/VideoLecture";
import WrittenLecture from "./written-lecture/WrittenLecture";
import CourseExercises from "./course-exercises/CourseExercises";
import CourseComments from "./course-comments/CourseComments";

function Course()
{
    const {t} = I18n.useTranslation();
    const [tab_value, setTabValue] = React.useState(0);


    //Set the tabs.
    const onTabChaged = React.useCallback((event: React.SyntheticEvent<Element, Event>, value: any)=>
    {
        setTabValue(value);
    }, []);

    return (
        <MUI.Box
        className={styles.container}
        >

            {/*Main Area*/}
            <MUI.Box
            className={styles.main_area}
            >
                
                {/*Tab Layout*/}
                <MUI.Tabs
                value={tab_value}
                onChange={onTabChaged}
                centered>
                    <MUI.Tab icon={<PhoneIcon />} label={t('video_tab')} />
                    <MUI.Tab icon={<FavoriteIcon />} label={t('written_tab')} />
                    <MUI.Tab icon={<PersonPinIcon />} label={t('exercises_tab')} />
                    <MUI.Tab icon={<PersonPinIcon />} label={t('comments_tab')} />
                </MUI.Tabs>


                {/*Tab View Area*/}
                <MUI.Box
                className={styles.tabview}
                >
                    {
                        tab_value === 0 ? <VideoLecture/> : null
                    }

                    {
                        tab_value === 1 ? <WrittenLecture/> : null
                    }

                    {
                        tab_value === 2 ? <CourseExercises/> : null
                    }

                    {
                        tab_value === 3 ? <CourseComments/> : null
                    }

                </MUI.Box>
                
            </MUI.Box>

            

            {/*Course Chapter Area*/}
            <MUI.Box
            bgcolor={"background.default"}
            borderColor="divider"
            className={styles.chapterview}
            >

                {/*Course Title*/}
                <MUI.Typography
                className={styles.course_name}
                variant="body1"
                component="h1"
                >
                    Αρχή και διατήρηση της μηχανικής ενέργειας
                </MUI.Typography>
                
                {/*Divider*/}
                <MUI.Divider
                className={styles.divider}
                />
                
                {/*Course Chapters Component*/}
                <Chaptersbar/>
                
            </MUI.Box>
            
        </MUI.Box>
    );
}

export default React.memo(Course);