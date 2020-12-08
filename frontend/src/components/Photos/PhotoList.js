import React from 'react';

import FlickrPhoto from './FlickrPhoto';
import './PhotoList.css';

const PhotoList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any Photos.</p>;
  } else {
    content = (
      <ul className="photo-list">
        {props.items.map(p => (
          <FlickrPhoto key={Math.random()+ "-" + p.server +"-"+ p.id +"-"+ p.secret} serverId={p.server} id={p.id} secret={p.secret} title={p.title}/>
        ))}
      </ul>
    );
  }

  return <section id="photos">{content}</section>;
};

export default PhotoList;