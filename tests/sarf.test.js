// Çekim motoru testleri: node tests/sarf.test.js
global.window = {};
require(require('path').join(__dirname, '..', 'js', 'sarf.js'));
const S = window.Sarf;
const strip = s => s; let fail = 0, pass = 0;
function check(root, babN, field, idx, exp) {
  const an = S.analyze(root); if (an.error) { console.log('ERR', root, an.error); fail++; return; }
  const out = S.conjugate(an, S.BABS[babN - 1]); if (out.error) { console.log('ERR', root, out.error); fail++; return; }
  const got = idx == null ? out.r[field] : out.r[field][idx];
  if (got !== exp.normalize("NFC")) { console.log(`✗ ${root} b${babN} ${field}[${idx}] got ${got} exp ${exp}`); fail++; } else pass++;
}
function mz(root, key, field, idx, exp) {
  const out = S.mezid(S.analyze(root), key); if (out.error) { console.log('ERR', out.error); fail++; return; }
  const got = idx == null ? out.r[field] : out.r[field][idx];
  if (got !== exp.normalize("NFC")) { console.log(`✗ ${root} ${key} ${field}[${idx}] got ${got} exp ${exp}`); fail++; } else pass++;
}
// mehmûz
check('أكل',1,'muzariMalum',0,'يَأْكُلُ'); check('أكل',1,'muzariMalum',12,'آكُلُ'); check('أكل',1,'emir',0,'كُلْ');
check('أكل',1,'ismiFail',null,'آكِلٌ'); check('أكل',1,'ismiMeful',null,'مَأْكُولٌ'); check('أكل',1,'maziMechul',0,'أُكِلَ');
check('أكل',1,'muzariMechul',12,'أُوكَلُ'); check('أذن',4,'emir',0,'اِيذَنْ');
check('سأل',3,'maziMalum',0,'سَأَلَ'); check('سأل',3,'maziMechul',0,'سُئِلَ'); check('سأل',3,'emir',0,'اِسْأَلْ');
check('سأل',3,'ismiFail',null,'سَائِلٌ'); check('سأل',3,'ismiMeful',null,'مَسْؤُولٌ');
check('قرأ',3,'maziMalum',1,'قَرَآ'); check('قرأ',3,'maziMalum',2,'قَرَؤُوا'); check('قرأ',3,'maziMalum',12,'قَرَأْتُ');
check('قرأ',3,'muzariMalum',0,'يَقْرَأُ'); check('قرأ',3,'muzariMalum',9,'تَقْرَئِينَ'); check('قرأ',3,'maziMechul',0,'قُرِئَ');
check('قرأ',3,'ismiFail',null,'قَارِئٌ'); check('قرأ',3,'ismiMeful',null,'مَقْرُوءٌ'); check('قرأ',3,'emir',0,'اِقْرَأْ');
check('قرأ',3,'nehy',0,'لَا تَقْرَأْ'); check('أخذ',1,'emir',2,'خُذُوا'); check('أكل',1,'nehy',0,'لَا تَأْكُلْ');
// muzâaf
check('مدد',1,'maziMalum',0,'مَدَّ'); check('مدد',1,'maziMalum',2,'مَدُّوا'); check('مدد',1,'maziMalum',12,'مَدَدْتُ');
check('مدد',1,'muzariMalum',0,'يَمُدُّ'); check('مدد',1,'muzariMalum',5,'يَمْدُدْنَ'); check('مدد',1,'muzariMalum',9,'تَمُدِّينَ');
check('مدد',1,'maziMechul',0,'مُدَّ'); check('مدد',1,'muzariMechul',0,'يُمَدُّ'); check('مدد',1,'emir',2,'مُدُّوا');
check('مدد',1,'emir',5,'اُمْدُدْنَ'); check('مدد',1,'ismiFail',null,'مَادٌّ'); check('مدد',1,'ismiMeful',null,'مَمْدُودٌ');
check('فرر',2,'muzariMalum',0,'يَفِرُّ'); check('عضض',4,'maziMalum',12,'عَضِضْتُ');
// misâl
check('وعد',2,'muzariMalum',0,'يَعِدُ'); check('وعد',2,'emir',0,'عِدْ'); check('وعد',2,'muzariMechul',0,'يُوعَدُ');
check('وعد',2,'maziMechul',0,'وُعِدَ'); check('وعد',2,'ismiFail',null,'وَاعِدٌ'); check('وعد',2,'ismiMeful',null,'مَوْعُودٌ');
check('وعد',2,'nehy',0,'لَا تَعِدْ'); check('وضع',3,'muzariMalum',0,'يَضَعُ'); check('وجل',4,'muzariMalum',0,'يَوْجَلُ');
check('وجل',4,'emir',0,'اِيجَلْ'); check('يسر',2,'muzariMalum',0,'يَيْسِرُ'); check('يسر',2,'muzariMechul',0,'يُوسَرُ');
// ecvef
check('قول',1,'maziMalum',0,'قَالَ'); check('قول',1,'maziMalum',2,'قَالُوا'); check('قول',1,'maziMalum',12,'قُلْتُ');
check('قول',1,'maziMalum',5,'قُلْنَ'); check('قول',1,'muzariMalum',0,'يَقُولُ'); check('قول',1,'muzariMalum',5,'يَقُلْنَ');
check('قول',1,'maziMechul',0,'قِيلَ'); check('قول',1,'muzariMechul',0,'يُقَالُ'); check('قول',1,'emir',0,'قُلْ');
check('قول',1,'emir',1,'قُولَا'); check('قول',1,'emir',5,'قُلْنَ'); check('قول',1,'nehy',0,'لَا تَقُلْ');
check('قول',1,'ismiFail',null,'قَائِلٌ'); check('قول',1,'ismiMeful',null,'مَقُولٌ');
check('بيع',2,'maziMalum',12,'بِعْتُ'); check('بيع',2,'muzariMalum',0,'يَبِيعُ'); check('بيع',2,'emir',0,'بِعْ'); check('بيع',2,'ismiMeful',null,'مَبِيعٌ');
check('خوف',4,'maziMalum',0,'خَافَ'); check('خوف',4,'maziMalum',12,'خِفْتُ'); check('خوف',4,'muzariMalum',0,'يَخَافُ'); check('خوف',4,'emir',0,'خَفْ'); check('خوف',4,'emir',3,'خَافِي');
// nâkıs
const da = ['دَعَا','دَعَوَا','دَعَوْا','دَعَتْ','دَعَتَا','دَعَوْنَ','دَعَوْتَ','دَعَوْتُمَا','دَعَوْتُمْ','دَعَوْتِ','دَعَوْتُمَا','دَعَوْتُنَّ','دَعَوْتُ','دَعَوْنَا'];
da.forEach((e,i)=>check('دعو',1,'maziMalum',i,e));
const ya = ['يَدْعُو','يَدْعُوَانِ','يَدْعُونَ','تَدْعُو','تَدْعُوَانِ','يَدْعُونَ','تَدْعُو','تَدْعُوَانِ','تَدْعُونَ','تَدْعِينَ','تَدْعُوَانِ','تَدْعُونَ','أَدْعُو','نَدْعُو'];
ya.forEach((e,i)=>check('دعو',1,'muzariMalum',i,e));
['دُعِيَ','دُعِيَا','دُعُوا','دُعِيَتْ','دُعِيَتَا','دُعِينَ','دُعِيتَ'].forEach((e,i)=>check('دعو',1,'maziMechul',i,e));
['يُدْعَى','يُدْعَيَانِ','يُدْعَوْنَ','تُدْعَى','تُدْعَيَانِ','يُدْعَيْنَ'].forEach((e,i)=>check('دعو',1,'muzariMechul',i,e));
['اُدْعُ','اُدْعُوَا','اُدْعُوا','اُدْعِي','اُدْعُوَا','اُدْعُونَ'].forEach((e,i)=>check('دعو',1,'emir',i,e));
check('دعو',1,'ismiFail',null,'دَاعٍ'); check('دعو',1,'ismiMeful',null,'مَدْعُوٌّ');
['رَمَى','رَمَيَا','رَمَوْا','رَمَتْ','رَمَتَا','رَمَيْنَ','رَمَيْتَ'].forEach((e,i)=>check('رمي',2,'maziMalum',i,e));
['يَرْمِي','يَرْمِيَانِ','يَرْمُونَ','تَرْمِي','تَرْمِيَانِ','يَرْمِينَ','تَرْمِي','تَرْمِيَانِ','تَرْمُونَ','تَرْمِينَ'].forEach((e,i)=>check('رمي',2,'muzariMalum',i,e));
['اِرْمِ','اِرْمِيَا','اِرْمُوا','اِرْمِي','اِرْمِيَا','اِرْمِينَ'].forEach((e,i)=>check('رمي',2,'emir',i,e));
check('رمي',2,'ismiMeful',null,'مَرْمِيٌّ'); check('رمي',2,'nehy',0,'لَا تَرْمِ');
['رَضِيَ','رَضِيَا','رَضُوا','رَضِيَتْ','رَضِيَتَا','رَضِينَ','رَضِيتَ'].forEach((e,i)=>check('رضي',4,'maziMalum',i,e));
['يَرْضَى','يَرْضَيَانِ','يَرْضَوْنَ'].forEach((e,i)=>check('رضي',4,'muzariMalum',i,e));
['اِرْضَ','اِرْضَيَا','اِرْضَوْا','اِرْضَيْ','اِرْضَيَا','اِرْضَيْنَ'].forEach((e,i)=>check('رضي',4,'emir',i,e));
check('رضي',4,'ismiMeful',null,'مَرْضِيٌّ'); check('سعي',3,'maziMalum',0,'سَعَى'); check('سعي',3,'muzariMalum',0,'يَسْعَى'); check('سعي',3,'emir',0,'اِسْعَ');
// mezîd
mz('كرم','ifal','maziMalum',0,'أَكْرَمَ'); mz('كرم','ifal','muzariMalum',0,'يُكْرِمُ'); mz('كرم','ifal','muzariMalum',12,'أُكْرِمُ');
mz('كرم','ifal','emir',0,'أَكْرِمْ'); mz('كرم','ifal','nehy',0,'لَا تُكْرِمْ'); mz('كرم','ifal','masdar',null,'إِكْرَامٌ'); mz('كرم','ifal','maziMechul',0,'أُكْرِمَ');
mz('علم','tefil','maziMalum',0,'عَلَّمَ'); mz('علم','tefil','muzariMalum',0,'يُعَلِّمُ'); mz('علم','tefil','masdar',null,'تَعْلِيمٌ'); mz('علم','tefil','ismiFail',null,'مُعَلِّمٌ');
mz('قتل','mufaale','maziMalum',0,'قَاتَلَ'); mz('قتل','mufaale','maziMechul',0,'قُوتِلَ'); mz('قتل','mufaale','muzariMalum',0,'يُقَاتِلُ');
mz('جنب','iftial','maziMalum',0,'اِجْتَنَبَ'); mz('جنب','iftial','muzariMalum',0,'يَجْتَنِبُ'); mz('جنب','iftial','emir',2,'اِجْتَنِبُوا'); mz('جنب','iftial','maziMechul',0,'اُجْتُنِبَ');
mz('صبر','iftial','maziMalum',0,'اِصْطَبَرَ'); mz('تبع','iftial','maziMalum',0,'اِتَّبَعَ'); mz('تبع','iftial','muzariMalum',0,'يَتَّبِعُ'); mz('طلع','iftial','maziMalum',0,'اِطَّلَعَ'); mz('زجر','iftial','maziMalum',0,'اِزْدَجَرَ');
mz('كسر','infial','maziMalum',0,'اِنْكَسَرَ'); mz('كسر','infial','muzariMalum',0,'يَنْكَسِرُ');
mz('كلم','tefaul_','maziMalum',0,'تَكَلَّمَ'); mz('كلم','tefaul_','muzariMalum',0,'يَتَكَلَّمُ'); mz('كلم','tefaul_','masdar',null,'تَكَلُّمٌ'); mz('كلم','tefaul_','nehy',0,'لَا تَتَكَلَّمْ');
mz('بعد','tefaul','maziMalum',0,'تَبَاعَدَ'); mz('بعد','tefaul','muzariMalum',0,'يَتَبَاعَدُ');
mz('خرج','istifal','maziMalum',0,'اِسْتَخْرَجَ'); mz('خرج','istifal','muzariMalum',0,'يَسْتَخْرِجُ'); mz('خرج','istifal','muzariMechul',0,'يُسْتَخْرَجُ'); mz('خرج','istifal','masdar',null,'اِسْتِخْرَاجٌ'); mz('خرج','istifal','ismiFail',null,'مُسْتَخْرِجٌ');
// rubâî
function rb(root, key, field, idx, exp) {
  const out = S.rubai(S.analyzeRubai(root), key);
  const got = idx == null ? out.r[field] : out.r[field][idx];
  if (got !== exp.normalize("NFC")) { console.log(`✗ ${root} ${key} ${field}[${idx}] got ${got} exp ${exp}`); fail++; } else pass++;
}
[['maziMalum',0,'دَحْرَجَ'],['maziMalum',12,'دَحْرَجْتُ'],['maziMechul',0,'دُحْرِجَ'],['muzariMalum',0,'يُدَحْرِجُ'],['muzariMalum',12,'أُدَحْرِجُ'],['muzariMechul',0,'يُدَحْرَجُ'],['emir',0,'دَحْرِجْ'],['nehy',0,'لَا تُدَحْرِجْ'],['ismiFail',null,'مُدَحْرِجٌ'],['ismiMeful',null,'مُدَحْرَجٌ'],['masdar',null,'دَحْرَجَةٌ / دِحْرَاجٌ']].forEach(([f,i,e]) => rb('دحرج','rubai',f,i,e));
rb('زلزل','rubai','maziMalum',0,'زَلْزَلَ'); rb('ترجم','rubai','muzariMalum',0,'يُتَرْجِمُ'); rb('وسوس','rubai','muzariMalum',0,'يُوَسْوِسُ');
[['maziMalum',0,'تَدَحْرَجَ'],['muzariMalum',0,'يَتَدَحْرَجُ'],['emir',0,'تَدَحْرَجْ'],['masdar',null,'تَدَحْرُجٌ'],['ismiFail',null,'مُتَدَحْرِجٌ']].forEach(([f,i,e]) => rb('دحرج','tefallul',f,i,e));
[['maziMalum',0,'اِحْرَنْجَمَ'],['muzariMalum',0,'يَحْرَنْجِمُ'],['masdar',null,'اِحْرِنْجَامٌ'],['ismiFail',null,'مُحْرَنْجِمٌ']].forEach(([f,i,e]) => rb('حرجم','ifinlal',f,i,e));
[['maziMalum',0,'اِقْشَعَرَّ'],['maziMalum',12,'اِقْشَعْرَرْتُ'],['muzariMalum',0,'يَقْشَعِرُّ'],['emir',0,'اِقْشَعْرِرْ'],['emir',1,'اِقْشَعِرَّا'],['masdar',null,'اِقْشِعْرَارٌ'],['ismiFail',null,'مُقْشَعِرٌّ']].forEach(([f,i,e]) => rb('قشعر','ifillal',f,i,e));
[['maziMalum',0,'اِطْمَأَنَّ'],['muzariMalum',0,'يَطْمَئِنُّ'],['ismiFail',null,'مُطْمَئِنٌّ'],['masdar',null,'اِطْمِئْنَانٌ']].forEach(([f,i,e]) => rb('طمأن','ifillal',f,i,e));
// emsile
const e = S.emsile(S.analyze('نصر'), S.BABS[0]); console.log(e.map(x => x.ar).join(' | '));
console.log(S.emsile(S.analyze('جلس'), S.BABS[1]).find(x=>x.k==='zarf').ar);
// lefîf ve birleşik
check('وقي',2,'maziMalum',0,'وَقَى'); check('وقي',2,'maziMalum',12,'وَقَيْتُ'); check('وقي',2,'muzariMalum',0,'يَقِي'); check('وقي',2,'muzariMalum',2,'يَقُونَ');
check('وقي',2,'emir',0,'قِ'); check('وقي',2,'emir',2,'قُوا'); check('وقي',2,'nehy',0,'لَا تَقِ'); check('وقي',2,'maziMechul',0,'وُقِيَ');
check('وقي',2,'muzariMechul',0,'يُوقَى'); check('وقي',2,'ismiFail',null,'وَاقٍ'); check('وقي',2,'ismiMeful',null,'مَوْقِيٌّ');
check('ولي',6,'muzariMalum',0,'يَلِي'); check('ولي',6,'maziMalum',0,'وَلِيَ');
check('طوي',2,'maziMalum',0,'طَوَى'); check('طوي',2,'muzariMalum',0,'يَطْوِي'); check('طوي',2,'emir',0,'اِطْوِ'); check('طوي',2,'ismiMeful',null,'مَطْوِيٌّ');
check('أتي',2,'maziMalum',0,'أَتَى'); check('أتي',2,'muzariMalum',0,'يَأْتِي'); check('أتي',2,'muzariMalum',12,'آتِي'); check('أتي',2,'ismiFail',null,'آتٍ');
check('جيء',2,'maziMalum',0,'جَاءَ'); check('جيء',2,'maziMalum',12,'جِئْتُ'); check('جيء',2,'muzariMalum',0,'يَجِيءُ'); check('جيء',2,'ismiFail',null,'جَاءٍ'); check('جيء',2,'emir',0,'جِئْ');
check('أمم',1,'maziMalum',0,'أَمَّ'); check('أمم',1,'muzariMalum',0,'يَؤُمُّ');
console.log(S.analyze('رأي').error?.slice(0,10), '|', S.analyze('قال').error?.slice(0,20));
// mezîd: mehmûz, muzâaf, misâl
mz('أمن','ifal','maziMalum',0,'آمَنَ'); mz('أمن','ifal','muzariMalum',0,'يُؤْمِنُ'); mz('أمن','ifal','muzariMalum',12,'أُومِنُ'); mz('أمن','ifal','masdar',null,'إِيمَانٌ'); mz('أمن','ifal','ismiFail',null,'مُؤْمِنٌ');
mz('أخذ','iftial','maziMalum',0,'اِتَّخَذَ'); mz('أخذ','iftial','muzariMalum',0,'يَتَّخِذُ');
mz('حبب','ifal','maziMalum',0,'أَحَبَّ'); mz('حبب','ifal','maziMalum',12,'أَحْبَبْتُ'); mz('حبب','ifal','muzariMalum',0,'يُحِبُّ'); mz('حبب','ifal','ismiFail',null,'مُحِبٌّ'); mz('حبب','ifal','ismiMeful',null,'مُحَبٌّ'); mz('حبب','ifal','emir',2,'أَحِبُّوا'); mz('حبب','ifal','muzariMalum',5,'يُحْبِبْنَ');
mz('حجج','mufaale','maziMalum',0,'حَاجَّ'); mz('حجج','mufaale','muzariMalum',0,'يُحَاجُّ');
mz('مدد','istifal','maziMalum',0,'اِسْتَمَدَّ'); mz('مدد','istifal','maziMalum',12,'اِسْتَمْدَدْتُ'); mz('مدد','istifal','muzariMalum',0,'يَسْتَمِدُّ');
mz('حلل','iftial','maziMalum',0,'اِحْتَلَّ'); mz('حلل','iftial','muzariMalum',0,'يَحْتَلُّ'); mz('شقق','infial','maziMalum',0,'اِنْشَقَّ');
mz('حدد','tefil','maziMalum',0,'حَدَّدَ'); mz('حدد','tefil','muzariMalum',0,'يُحَدِّدُ');
mz('وجد','ifal','maziMalum',0,'أَوْجَدَ'); mz('وجد','ifal','muzariMalum',0,'يُوجِدُ'); mz('وجد','ifal','masdar',null,'إِيجَادٌ'); mz('وجد','ifal','ismiFail',null,'مُوجِدٌ');
mz('وصل','iftial','maziMalum',0,'اِتَّصَلَ'); mz('وصل','iftial','muzariMalum',0,'يَتَّصِلُ'); mz('وصل','iftial','masdar',null,'اِتِّصَالٌ');
mz('وجب','istifal','maziMalum',0,'اِسْتَوْجَبَ'); mz('وجب','istifal','masdar',null,'اِسْتِيجَابٌ');
// mezîd: ecvef
const q = [['maziMalum',0,'أَقَامَ'],['maziMalum',12,'أَقَمْتُ'],['maziMechul',0,'أُقِيمَ'],['muzariMalum',0,'يُقِيمُ'],['muzariMalum',5,'يُقِمْنَ'],['muzariMechul',0,'يُقَامُ'],['emir',0,'أَقِمْ'],['emir',2,'أَقِيمُوا'],['nehy',0,'لَا تُقِمْ'],['masdar',null,'إِقَامَةٌ'],['ismiFail',null,'مُقِيمٌ'],['ismiMeful',null,'مُقَامٌ'],['muzariMalum',12,'أُقِيمُ']];
q.forEach(([f,i,e]) => mz('قوم','ifal',f,i,e));
[['maziMalum',0,'اِسْتَقَامَ'],['muzariMalum',0,'يَسْتَقِيمُ'],['emir',0,'اِسْتَقِمْ'],['masdar',null,'اِسْتِقَامَةٌ'],['ismiFail',null,'مُسْتَقِيمٌ'],['maziMechul',0,'اُسْتُقِيمَ']].forEach(([f,i,e]) => mz('قوم','istifal',f,i,e));
[['maziMalum',0,'اِخْتَارَ'],['maziMalum',12,'اِخْتَرْتُ'],['maziMechul',0,'اُخْتِيرَ'],['muzariMalum',0,'يَخْتَارُ'],['emir',0,'اِخْتَرْ'],['emir',2,'اِخْتَارُوا'],['masdar',null,'اِخْتِيَارٌ'],['ismiFail',null,'مُخْتَارٌ'],['muzariMalum',5,'يَخْتَرْنَ']].forEach(([f,i,e]) => mz('خير','iftial',f,i,e));
[['maziMalum',0,'اِنْقَادَ'],['muzariMalum',0,'يَنْقَادُ'],['masdar',null,'اِنْقِيَادٌ']].forEach(([f,i,e]) => mz('قود','infial',f,i,e));
mz('قوم','tefil','maziMalum',0,'قَوَّمَ'); mz('قوم','tefil','muzariMalum',0,'يُقَوِّمُ');
// mezîd: nâkıs
[['maziMalum',0,'أَعْطَى'],['maziMalum',12,'أَعْطَيْتُ'],['maziMalum',2,'أَعْطَوْا'],['maziMechul',0,'أُعْطِيَ'],['maziMechul',2,'أُعْطُوا'],['muzariMalum',0,'يُعْطِي'],['muzariMalum',2,'يُعْطُونَ'],['muzariMechul',0,'يُعْطَى'],['emir',0,'أَعْطِ'],['emir',2,'أَعْطُوا'],['nehy',0,'لَا تُعْطِ'],['masdar',null,'إِعْطَاءٌ'],['ismiFail',null,'مُعْطٍ'],['ismiMeful',null,'مُعْطًى']].forEach(([f,i,e]) => mz('عطو','ifal',f,i,e));
[['maziMalum',0,'سَمَّى'],['muzariMalum',0,'يُسَمِّي'],['emir',0,'سَمِّ'],['masdar',null,'تَسْمِيَةٌ'],['ismiMeful',null,'مُسَمًّى']].forEach(([f,i,e]) => mz('سمي','tefil',f,i,e));
[['maziMalum',0,'نَادَى'],['muzariMalum',0,'يُنَادِي'],['masdar',null,'مُنَادَاةٌ'],['ismiFail',null,'مُنَادٍ']].forEach(([f,i,e]) => mz('ندو','mufaale',f,i,e));
[['maziMalum',0,'اِشْتَرَى'],['muzariMalum',0,'يَشْتَرِي'],['emir',0,'اِشْتَرِ'],['masdar',null,'اِشْتِرَاءٌ'],['ismiFail',null,'مُشْتَرٍ']].forEach(([f,i,e]) => mz('شري','iftial',f,i,e));
[['maziMalum',0,'تَلَقَّى'],['muzariMalum',0,'يَتَلَقَّى'],['emir',0,'تَلَقَّ'],['masdar',null,'تَلَقٍّ']].forEach(([f,i,e]) => mz('لقي','tefaul_',f,i,e));
[['maziMalum',0,'تَعَالَى'],['muzariMalum',0,'يَتَعَالَى'],['emir',0,'تَعَالَ']].forEach(([f,i,e]) => mz('علو','tefaul',f,i,e));
[['maziMalum',0,'اِتَّقَى'],['muzariMalum',0,'يَتَّقِي'],['emir',0,'اِتَّقِ'],['masdar',null,'اِتِّقَاءٌ'],['ismiFail',null,'مُتَّقٍ']].forEach(([f,i,e]) => mz('وقي','iftial',f,i,e));
[['maziMalum',0,'أَحْيَا'],['muzariMalum',0,'يُحْيِي']].forEach(([f,i,e]) => mz('حيي','ifal',f,i,e));
[['maziMalum',0,'أَوْصَى'],['muzariMalum',0,'يُوصِي'],['emir',0,'أَوْصِ'],['masdar',null,'إِيصَاءٌ']].forEach(([f,i,e]) => mz('وصي','ifal',f,i,e));
console.log('pass', pass, 'fail', fail); process.exit(fail ? 1 : 0);
