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
// emsile
const e = S.emsile(S.analyze('نصر'), S.BABS[0]); console.log(e.map(x => x.ar).join(' | '));
console.log(S.emsile(S.analyze('جلس'), S.BABS[1]).find(x=>x.k==='zarf').ar);
console.log(S.analyze('وقي').error?.slice(0,30), '|', S.analyze('قال').error?.slice(0,20));
console.log('pass', pass, 'fail', fail); process.exit(fail ? 1 : 0);
