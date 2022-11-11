import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css'
const ZoomInExample = () => {
    const data = [
        {
            content: <div className="box"><h1>Med Tracker</h1><p>The one and only medicine tracker app you would need</p></div>,
            class1: 'a'
        },
        {
            content:
                    <div className="box">
                        <h1>How to use it?</h1>
                        <ul>
                            <li>Submit form to get remainders</li>
                            <li>See the schedules you have planned</li>
                            <li>Edit and delete the planned schedules</li>
                        </ul>
                    </div>,
            class1: 'b'
        },
        {
            content: <div className="box"><h1>Pre Requisites</h1><p>Allow notifications please</p></div>,
            class1: 'c'
        }
       ]
    const theme = createTheme({
        breakpoints: {
          values: {
            xxs: 0,
            xs: 360,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      });
    return (
    <ThemeProvider theme={theme}>
        <div className='slideshow'>
            <Zoom scale={1} indicators={true} pauseOnHover={true} canSwipe={true}>
                {data.map((each, index) => {
                const {content, class1} = each;
                return(
                    <div key={index} className={class1} style={{maxWidth: '100vw'}}>
                        {content}
                    </div>
                );
                })}
            </Zoom>
        </div>
    </ThemeProvider>
    );
};

export default ZoomInExample;