import React from 'react'
import Card from './Card'
import cover1 from "../images/LOG_cover1.png";
import cover2 from "../images/LOG_cover2.png";
import cover3 from "../images/LOG_cover3.png";
import cover4 from "../images/LOG_cover4.png";

export default function Display({title}) {
    return (
        <div className="display">
            <h3 className='display-title'>{title}</h3>
            <div className="display-grid">
                <Card cover={cover1}/>
                <Card cover={cover2}/>
                <Card cover={cover3}/>
                <Card cover={cover4}/>
                <Card cover={cover1}/>
                <Card cover={cover2}/>
                <Card cover={cover3}/>
                <Card cover={cover4}/>
                <Card cover={cover1}/>
                <Card cover={cover2}/>
                <Card cover={cover3}/>
                <Card cover={cover4}/>
            </div>
        </div>
    )
}
