const ffmpeg     = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path       = require('path');
const fs         = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const input  = path.join(__dirname, 'Porsche 992 Kling .mp4');
const outDir = path.join(__dirname, 'public/frames');

fs.mkdirSync(outDir, { recursive: true });

console.log('Extracting frames at 24fps — this may take a minute...');

ffmpeg(input)
  .outputOptions(['-vf fps=24', '-q:v 4'])
  .output(path.join(outDir, 'frame_%04d.jpg'))
  .on('progress', p => process.stdout.write(`\rExtracting: ${Math.round(p.percent || 0)}%`))
  .on('end', () => {
    const n = fs.readdirSync(outDir).filter(f => f.endsWith('.jpg')).length;
    console.log(`\nDone — ${n} frames → public/frames/`);
  })
  .on('error', err => { console.error('\nError:', err.message); process.exit(1); })
  .run();
