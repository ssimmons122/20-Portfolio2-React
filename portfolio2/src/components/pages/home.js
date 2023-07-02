import React from 'react';
import avatar from '../../images/avatar.png';

export default function Home() {
    return (
      <section class="container is-max-widescreen">
        <section class="section is-medium">
          <h1 class="title is-size-1 has-text-link">About me</h1>
          <figure class="image is-128x128 my-6">
              <img src={avatar} alt="avatar Steph in laptop"></img>
            </figure>



            </section>
      </section>
    
  );
}