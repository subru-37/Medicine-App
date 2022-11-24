import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from 'react';
import Card from "./Card";
import './Slideshow.css'
const ZoomInExample = () => {
    const data = 
    [
        {
            title: 'Med Tracker',
            content: 'The one and only medicine tracker app you would need'
        },
        {
            title: 'How to use it?',
            content: 'Submit form to add remainders, See the schedules you have planned'
        },
        {
            title: 'Pre Requisites',
            content: 'Allow notifications please'
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
        <div className="parent_box">
            {data.map((x)=>{
                return(
                    <div className="boxes" key={x.title}>
                        <Card
                            title={x.title}
                            content={x.content}
                        />
                    </div>
                );
                })}
        </div>
    );
};

export default ZoomInExample;