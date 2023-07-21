import React from "react";
import {useTranslation} from 'react-i18next';
import about_gardener from "../../images/about_gardener.jpg";
import video_blog from "../../videos/video_blog.mp4";
import './About.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {ChevronDoubleRight} from 'react-bootstrap-icons';

export default function About(){
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()

    return <div className="aboutSection">
    <h1>{t('about_title')}</h1>
    <div className="container">
    <img src={about_gardener} alt="LILA Owner picture gardening"/>
    <p>{t('about_text')}</p>
    </div>
    <div className="about_btn">
    <Button onClick={() => navigate('/Bouquets')}>
      <div className='buttonContext'>
      {t('about_button')}  
      <ChevronDoubleRight size={30}/>
      </div>
    </Button>
    </div>
    <div className="sustainablePractices">
        <h1>{t('about_video_title')}</h1>
        <div className="video">
        <video autoPlay loop muted>
            <source src={video_blog} type="video/mp4" alt="Video on sustainability practices"/>
        </video>
        </div>
    </div>
    </div>
}