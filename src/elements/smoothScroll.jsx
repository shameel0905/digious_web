import Scrollbar from 'smooth-scrollbar';
import { useEffect, useRef } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#fff',
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(containerRef.current, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(containerRef.current);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ overflow: 'auto' }}>
      {children}
    </div>
  );
};

export default Scroll;