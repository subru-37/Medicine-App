import React from 'react';
import Card from "./Card";
import './About.css';
const About = () => {
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
            title: 'Author',
            content: 'Subramani E, EC3A, MEC'
        }

    ]
    return (
        <div className="parent_box">
            {data.map((x)=>{
                return(
                    <div className="Boxes" key={x.title}>
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

export default About;