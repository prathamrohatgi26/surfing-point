import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = "Surfing Point - Travel, Insurance, Digital Signature, Passport & Website Design Services in Meerut";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const services = ["Travel Ticketing", "Insurance", "Digital Signature", "Passport", "Online Works", "Business Websites"];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, marginBottom: 16 }}>{site.name}</div>
        <div style={{ fontSize: 40, opacity: 0.9, marginBottom: 48 }}>
          Your trusted service partner in Meerut
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
          {services.map((service) => (
            <div
              key={service}
              style={{
                fontSize: 28,
                padding: '10px 24px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.18)',
              }}
            >
              {service}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 32, fontWeight: 700 }}>
          {`Call / WhatsApp ${site.phone.display}`}
        </div>
      </div>
    ),
    size
  );
}
