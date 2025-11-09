'use client';

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6080.634408424036!2d175.59046571238844!3d-40.35749038353778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d404d2fe1621d6d%3A0xeb05424556bd3b63!2s28%20Shamrock%20Street%2C%20Takaro%2C%20Palmerston%20North%204412!5e0!3m2!1sen!2snz!4v1762656228106!5m2!1sen!2snz"
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: '12px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Happy Horizons Location"
    />
  );
}