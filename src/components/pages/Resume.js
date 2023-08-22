import React from 'react';
import { JCreech_Resume } from '../../assets';

// resume with option to download
export default function Resume() {
  return (
    <section>
      <h2 class="fs-4">Resume</h2>
      <figure>
          <object width="100%" height="400" data={JCreech_Resume} type="application/pdf">   </object>
      </figure>
    </section>
  );
}
