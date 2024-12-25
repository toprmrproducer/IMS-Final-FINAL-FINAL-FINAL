import React from 'react';

export default function VideoPlayer() {
  return (
    <div className="max-w-[400px] mx-auto">
      <div className="hover-scale aspect-[9/16] bg-gradient-to-br from-black/80 to-[#FF0000]/20 rounded-xl relative overflow-hidden border border-[#FF0000]/20">
        <div style={{ padding: '176.67% 0 0 0', position: 'relative' }}>
          <iframe 
            src="https://player.vimeo.com/video/1041470723?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="IMS Marketing Video"
            data-ready="true"
            data-thumb="https://static.wixstatic.com/media/4671a5_ffe3e4df8fbc41d1bacb96383a31a1ce~mv2.png/v1/fill/w_295,h_524,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/4671a5_ffe3e4df8fbc41d1bacb96383a31a1ce~mv2.png"
          />
        </div>
      </div>
    </div>
  );
}