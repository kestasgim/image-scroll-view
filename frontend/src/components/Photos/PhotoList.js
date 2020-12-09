import React from 'react';

import FlickrPhoto from './FlickrPhoto';
import './PhotoList.css';

const PhotoList = props => {
  return (<section id="photos">
      <ul className="photo-list">
        {props.items.map((p, i) => (
          <FlickrPhoto key={""+ i + "-" + p.server +"-"+ p.id +"-"+ p.secret} serverId={p.server} id={p.id} secret={p.secret} title={p.title}/>
        ))}
      </ul>
    </section>);
};

export default PhotoList;