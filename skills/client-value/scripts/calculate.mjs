import {estimateClientValue} from './client-value.mjs';
let input='';
try {
  for await(const chunk of process.stdin){input+=chunk;if(Buffer.byteLength(input)>4096)throw Error('Input too large.');}
  const values=JSON.parse(input);
  const fields=['fee','sessions','clients','cost','investment'];
  if(!values||Array.isArray(values)||Object.keys(values).length!==fields.length||!fields.every(k=>Object.hasOwn(values,k)))throw Error('Supply exactly fee, sessions, clients, cost and investment.');
  const results=estimateClientValue(values);
  if(Object.values(results).some(v=>v!==null&&!Number.isFinite(v)))throw Error('Amounts are too large.');
  process.stdout.write(JSON.stringify({results,meaning:'Lifetime course-of-care totals for 12 months of intakes, not calendar-year cash receipts.',exclusions:['Fixed overhead','Taxes','Attendance and payment differences']})+'\n');
}catch(e){process.stderr.write('Calculation unavailable: '+e.message+'\n');process.exitCode=1;}
