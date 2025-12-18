import PropTypes from 'prop-types';

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy',
  decoding = 'async',
  sizes = '100vw',
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={decoding}
      sizes={sizes}
      className={className}
    />
  );
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priority: PropTypes.bool,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  sizes: PropTypes.string,
};
