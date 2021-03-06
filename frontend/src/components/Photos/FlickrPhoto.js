import React from 'react';

import './FlickrPhoto.css';

const FlickrPhoto = props => {
  //https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
  const photo = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`;
  //https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg t-100 m-240 n-320 w-400
  const photoT = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_t.jpg`;
  const photoM = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_m.jpg`;
  const photoN = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_n.jpg`;
  const photoW = `https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_w.jpg`;
  const imgSrcSet = `${photoT} 200w, ${photoM} 480w, ${photoN} 640w, ${photoW} 800w`

  return (
    <li>
      <div className="img-container">
        <img className="flickr-photo" src={photo} alt={props.title} srcSet={imgSrcSet}/> 
        <span className="img-title">{props.title}</span>
      </div>
    </li>
  );
};

export default FlickrPhoto;
