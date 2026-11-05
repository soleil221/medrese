// 114 sure ve 604 sayfalık Medine mushafında başladıkları sayfa.
window.SURELER = [
  ["Fâtiha", 1], ["Bakara", 2], ["Âl-i İmrân", 50], ["Nisâ", 77], ["Mâide", 106], ["En'âm", 128], ["A'râf", 151],
  ["Enfâl", 177], ["Tevbe", 187], ["Yûnus", 208], ["Hûd", 221], ["Yûsuf", 235], ["Ra'd", 249], ["İbrâhîm", 255],
  ["Hicr", 262], ["Nahl", 267], ["İsrâ", 282], ["Kehf", 293], ["Meryem", 305], ["Tâhâ", 312], ["Enbiyâ", 322],
  ["Hac", 332], ["Mü'minûn", 342], ["Nûr", 350], ["Furkān", 359], ["Şuarâ", 367], ["Neml", 377], ["Kasas", 385],
  ["Ankebût", 396], ["Rûm", 404], ["Lokmân", 411], ["Secde", 415], ["Ahzâb", 418], ["Sebe'", 428], ["Fâtır", 434],
  ["Yâsîn", 440], ["Sâffât", 446], ["Sâd", 453], ["Zümer", 458], ["Mü'min", 467], ["Fussilet", 477], ["Şûrâ", 483],
  ["Zuhruf", 489], ["Duhân", 496], ["Câsiye", 499], ["Ahkāf", 502], ["Muhammed", 507], ["Fetih", 511], ["Hucurât", 515],
  ["Kāf", 518], ["Zâriyât", 520], ["Tûr", 523], ["Necm", 526], ["Kamer", 528], ["Rahmân", 531], ["Vâkıa", 534],
  ["Hadîd", 537], ["Mücâdele", 542], ["Haşr", 545], ["Mümtehine", 549], ["Saf", 551], ["Cuma", 553], ["Münâfikūn", 554],
  ["Teğâbün", 556], ["Talâk", 558], ["Tahrîm", 560], ["Mülk", 562], ["Kalem", 564], ["Hâkka", 566], ["Meâric", 568],
  ["Nûh", 570], ["Cin", 572], ["Müzzemmil", 574], ["Müddessir", 575], ["Kıyâme", 577], ["İnsân", 578], ["Mürselât", 580],
  ["Nebe'", 582], ["Nâziât", 583], ["Abese", 585], ["Tekvîr", 586], ["İnfitâr", 587], ["Mutaffifîn", 587], ["İnşikāk", 589],
  ["Bürûc", 590], ["Târık", 591], ["A'lâ", 591], ["Ğâşiye", 592], ["Fecr", 593], ["Beled", 594], ["Şems", 595],
  ["Leyl", 595], ["Duhâ", 596], ["İnşirâh", 596], ["Tîn", 597], ["Alak", 597], ["Kadir", 598], ["Beyyine", 598],
  ["Zilzâl", 599], ["Âdiyât", 599], ["Kāria", 600], ["Tekâsür", 600], ["Asr", 601], ["Hümeze", 601], ["Fîl", 601],
  ["Kureyş", 602], ["Mâûn", 602], ["Kevser", 602], ["Kâfirûn", 603], ["Nasr", 603], ["Tebbet", 603], ["İhlâs", 604],
  ["Felak", 604], ["Nâs", 604]
].map(([ad, sayfa], i) => ({ no: i + 1, ad, sayfa }));

// Sayfada başlayan sureler (kesin bilgi)
window.surelerStartingOn = (p) => window.SURELER.filter((s) => s.sayfa === p);
// Sayfanın ait olduğu sure: başlangıcı bu sayfaya kadar olan son sure
window.sureOfPage = (p) => { let r = window.SURELER[0]; for (const s of window.SURELER) if (s.sayfa <= p) r = s; return r; };
// Bir surenin kapladığı sayfalar (sonraki surenin başladığı sayfa da dahil; o sayfayı iki sure paylaşabilir)
window.surePages = function (no) {
  const S = window.SURELER, s = S[no - 1], next = S[no];
  const end = next ? Math.max(next.sayfa, s.sayfa) : 604;
  const out = [];
  for (let p = s.sayfa; p <= end; p++) out.push(p);
  return out;
};
