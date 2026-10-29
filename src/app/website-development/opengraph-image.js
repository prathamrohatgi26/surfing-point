import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = "Website & Landing Page Design in Meerut - Surfing Point";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const features = ["Landing Pages", "Business Websites", "Mobile-Friendly", "Google & Local SEO", "WhatsApp Buttons"];

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
        <div style={{ fontSize: 36, opacity: 0.9, marginBottom: 16 }}>{site.name}</div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.1, marginBottom: 48 }}>
          Website & Landing Page Design in Meerut
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
          {features.map((feature) => (
            <div
              key={feature}
              style={{
                fontSize: 28,
                padding: '10px 24px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.18)',
              }}
            >
              {feature}
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
