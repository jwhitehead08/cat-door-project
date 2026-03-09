declare module '*.jpeg' {
  const content: { src: string; height: number; width: number };
  export default content;
}

declare module '*.jpg' {
  const content: { src: string; height: number; width: number };
  export default content;
}

declare module '*.png' {
  const content: { src: string; height: number; width: number };
  export default content;
}

declare module '*.webp' {
  const content: { src: string; height: number; width: number };
  export default content;
}

declare module '*.svg' {
  import type React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
