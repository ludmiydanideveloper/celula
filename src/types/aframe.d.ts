import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-assets': any;
      'a-asset-item': any;
      'a-camera': any;
      'a-sphere': any;
      'a-torus': any;
      'a-text': any;
    }
  }
}
