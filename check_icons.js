
import * as icons from 'simple-icons';

const customTools = [
  'Anthropic', 'OpenAI', 'Google', 'Meta', 
  'Cursor', 'GitHub', 'Microsoft', 'Codeium',
  'Lovable', 'StackBlitz', 'Vercel', 'Replit',
  'n8n', 'Make', 'Zapier', 'Activepieces',
  'Midjourney', 'Figma', 'Stability AI', 
  'Netlify', 'Supabase', 'Railway'
];

const mapping = {
  'Anthropic': 'siAnthropic',
  'OpenAI': 'siOpenai',
  'Google': 'siGoogle',
  'Meta': 'siMeta',
  'Cursor': 'siCursor', // Likely missing
  'GitHub': 'siGithub',
  'Microsoft': 'siMicrosoft', // or siVisualstudiocode for VS Code
  'Codeium': 'siCodeium',
  'Lovable': 'siLovable', // Likely missing
  'StackBlitz': 'siStackblitz',
  'Vercel': 'siVercel',
  'Replit': 'siReplit',
  'n8n': 'siN8n',
  'Make': 'siMake',
  'Zapier': 'siZapier',
  'Activepieces': 'siActivepieces', // Likely missing
  'Midjourney': 'siMidjourney',
  'Figma': 'siFigma',
  'Stability AI': 'siStabilityai', // or siStablediffusion
  'Netlify': 'siNetlify',
  'Supabase': 'siSupabase',
  'Railway': 'siRailway'
};

console.log('Checking available icons...');
for (const [tool, key] of Object.entries(mapping)) {
  if (icons[key]) {
    console.log(`[FOUND] ${tool}: ${key}`);
  } else {
    // Try to find a partial match
    const match = Object.keys(icons).find(k => k.toLowerCase().includes(tool.toLowerCase().replace(/\s+/g, '')));
    if (match) {
        console.log(`[FOUND-MATCH] ${tool}: ${match}`);
    } else {
        console.log(`[MISSING] ${tool}`);
    }
  }
}
