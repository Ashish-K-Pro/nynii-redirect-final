import Head from 'next/head';

export default function AppRedirect() {
  return (
    <div>
      <Head>
        <title>Nynii App Redirect</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const ua = navigator.userAgent.toLowerCase();
              if (ua.includes('android')) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.nynii.app';
              } else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
                window.location.href = 'https://apps.apple.com/in/app/nynii/id6746144979';
              } else {
                window.location.href = 'https://nynii.com';
              }
            `,
          }}
        />
      </Head>
      <main style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
        <p>Redirecting you to the Nynii App...</p>
      </main>
    </div>
  );
}

