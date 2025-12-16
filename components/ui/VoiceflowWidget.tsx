'use client';

import { useEffect } from 'react';

export default function VoiceflowWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      (window as any).voiceflow?.chat?.load({
        verify: { projectID: '68f8c1ba53e4e6f90008b3aa' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: 'https://runtime-api.voiceflow.com',
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // widget injects itself
}
