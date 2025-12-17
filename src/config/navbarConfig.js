export const NAVBAR_MOTION = {
  initial: { y: -80, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const NAVBAR_CLASSES =
  'fixed top-0 left-0 w-full z-50 bg-primary py-3 shadow-lg';

export const LOGO = (
  <>
    <span className="text-white">CodeVista</span>{' '}
    <span className="text-blue-600">Digital</span>
  </>
);
