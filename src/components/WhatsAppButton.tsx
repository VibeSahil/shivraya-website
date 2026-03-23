const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918766837945"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.5-1.77A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.26 19.6c-.3.84-1.76 1.6-2.42 1.7-.62.1-1.4.14-2.26-.14-.52-.17-1.18-.4-2.04-.78-3.58-1.54-5.92-5.14-6.1-5.38-.18-.24-1.44-1.92-1.44-3.66 0-1.74.9-2.6 1.22-2.96.3-.34.66-.42.88-.42h.64c.2 0 .48-.08.74.56.28.66.94 2.3.94 2.46 0 .16.08.36-.04.58-.1.2-.16.32-.32.5-.16.18-.34.4-.48.54-.16.16-.32.34-.14.66.18.32.82 1.36 1.76 2.2 1.2 1.08 2.22 1.42 2.54 1.58.32.16.5.14.68-.08.2-.22.82-.96 1.04-1.28.22-.32.44-.26.74-.16.3.1 1.92.9 2.24 1.06.32.16.54.24.62.38.08.14.08.8-.22 1.64z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
