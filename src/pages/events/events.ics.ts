import type { APIRoute } from 'astro';

const events = [
  { title: "Re-Wild Yourself", start: "2025-08-13", end: "2025-08-18", url: "retreats/wild-woman/" },
  { title: "Family Holiday Week", start: "2025-12-10", end: "2025-12-15", url: "retreats/family-holiday/" },
  { title: "Blue Moon Ocean Retreat", start: "2026-02-05", end: "2026-02-10", url: "retreats/blue-moon/" }
];

function esc(text: string) {
  return text.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,|;/g, m => (m === ',' ? '\\,' : '\\;'));
}

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL;
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Halo Gaia//Events//EN'];
  for (const e of events) {
    lines.push('BEGIN:VEVENT');
    lines.push(`SUMMARY:${esc(e.title)}`);
    lines.push(`DTSTART;VALUE=DATE:${e.start.replaceAll('-','')}`);
    lines.push(`DTEND;VALUE=DATE:${e.end.replaceAll('-','')}`);
    lines.push(`URL:${base}${e.url}`);
    lines.push('END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return new Response(lines.join('\r\n'), { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
};
