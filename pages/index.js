export async function getServerSideProps({ req, res }) {
  const ua = req.headers['user-agent']?.toLowerCase() || "";

  let redirectUrl = 'https://nynii.com'; // default fallback

  if (ua.includes('android')) {
    redirectUrl = 'https://play.google.com/store/apps/details?id=com.nynii.app';
  } else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
    redirectUrl = 'https://apps.apple.com/in/app/nynii/id6746144979';
  }

  res.writeHead(302, { Location: redirectUrl });
  res.end();

  return { props: {} };
}

export default function Home() {
  return null; // Never rendered because we redirect immediately
}
