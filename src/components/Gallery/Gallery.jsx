import React from 'react';
import style from './Gallery.module.scss'

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <div className={style.container}>
        <h2 className={style.title}>Fotogalelerya bo'limida Tamirlash ishlari olib borilmoqda</h2>
      </div>
    </div>
  );
}

export default Gallery;
