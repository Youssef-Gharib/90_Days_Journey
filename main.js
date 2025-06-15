
function showDateTime(){
    const time = new Date(); 
    const formatted = time.toUTCString(); 
    document.getElementById("datetime").textContent=formatted; 
}




const tableBody = document.getElementsByTagName('tbody')[0];
let savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
let startDate;
const storedStartDate = localStorage.getItem("startDate");

if (storedStartDate) {
  startDate = new Date(storedStartDate);
  startDate.setHours(0, 0, 0, 0); // تصفير الساعة
} else {
  // هنا نحط التاريخ اللي انت عايزه يبدأ منه
  startDate = new Date(2025, 5, 14); // يونيو = 5 (لأن الشهور تبدأ من 0)
  startDate.setHours(0, 0, 0, 0); // تصفير الساعة
  localStorage.setItem("startDate", startDate.toISOString());
}



function resetApp() {
  if (confirm("هل أنت متأكد أنك تريد إعادة التعيين؟")) {
    localStorage.removeItem("startDate");
    localStorage.removeItem("checkboxStates");
    location.reload(); // نعيد تحميل الصفحة
  }
}




for (let i = 0; i < 90; i++) {
    const date = new Date(startDate.getTime()); // 🟢 كده نضمن النسخ صح
    date.setDate(date.getDate() + i);           // 🟢 نزود الأيام بشكل صحيح

    const formattedDate = date.toDateString();  // 🟢 ده هيطبع التاريخ بشكل سليم

    const statesForRow = savedStates[i] || [false, false, false, false];

    tableBody.innerHTML += `
      <tr data-row="${i}">
        <td>${i + 1}</td>
        <td><input type="checkbox" value="yes" ${statesForRow[0] ? 'checked' : ''}></td>
        <td><input type="checkbox" value="yes" ${statesForRow[1] ? 'checked' : ''}></td>
        <td><input type="checkbox" value="yes" ${statesForRow[2] ? 'checked' : ''}></td>
        <td><input type="checkbox" value="yes" ${statesForRow[3] ? 'checked' : ''}></td>
        <td>${formattedDate}</td>
      </tr>
    `;
}



tableBody.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    // نجيب رقم الصف من العنصر الأب <tr>
    const rowIndex = this.closest('tr').getAttribute('data-row');

    // نجيب كل الـcheckboxes في هذا الصف
    const checkboxes = this.closest('tr').querySelectorAll('input[type="checkbox"]');

    // نحفظ حالة كل checkbox في مصفوفة
    savedStates[rowIndex] = Array.from(checkboxes).map(cb => cb.checked);

    // نحفظها في localStorage
    localStorage.setItem('checkboxStates', JSON.stringify(savedStates));
  });
});

 const ad3eya = [
  { duaa: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة.", tasbeeh: "سبحان الله وبحمده" },
  { duaa: "اللهم اجعلني من التوابين، واجعلني من المتطهرين.", tasbeeh: "أستغفر الله العظيم" },
  { duaa: "اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل.", tasbeeh: "لا حول ولا قوة إلا بالله" },
  { duaa: "اللهم اجعل القرآن ربيع قلبي، ونور صدري، وجلاء حزني.", tasbeeh: "سبحان الله" },
  { duaa: "اللهم ثبتني على الحق، وارزقني حسن الخاتمة.", tasbeeh: "اللهم صل على محمد" },
  { duaa: "اللهم ارزقني رزقًا حلالًا طيبًا مباركًا فيه.", tasbeeh: "الحمد لله" },
  { duaa: "اللهم اجعل لي نورًا في قلبي، ونورًا في سمعي، ونورًا في بصري.", tasbeeh: "نورٌ على نور" },
  { duaa: "اللهم إني أسألك علماً نافعاً، ورزقًا طيبًا، وعملاً متقبلاً.", tasbeeh: "يا رب لك الحمد" },
  { duaa: "اللهم اجعلني من عبادك الصالحين المخلصين.", tasbeeh: "لا إله إلا الله" },
  { duaa: "اللهم لا تجعل الدنيا أكبر همنا، ولا مبلغ علمنا.", tasbeeh: "حسبنا الله ونعم الوكيل" },
  { duaa: "اللهم ارحم موتانا واشف مرضانا، وفرّج همّنا.", tasbeeh: "اللهم ارحمنا برحمتك" },
  { duaa: "اللهم إني أسألك رضاك والجنة، وأعوذ بك من سخطك والنار.", tasbeeh: "اللهم إني أسألك الجنة" },
  { duaa: "اللهم يا مقلب القلوب ثبت قلبي على دينك.", tasbeeh: "يا حي يا قيوم برحمتك أستغيث" },
  { duaa: "اللهم اجعل عملي خالصًا لوجهك الكريم.", tasbeeh: "اللهم تقبل منا" },
  { duaa: "اللهم إني أعوذ بك من زوال نعمتك، وتحول عافيتك.", tasbeeh: "نعوذ بالله من زوال النعم" },
  { duaa: "اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب.", tasbeeh: "سبحانك اللهم وبحمدك" },
  { duaa: "اللهم إني أسألك حسن الخلق، وطيب النفس.", tasbeeh: "اللهم زينّا بأخلاق الإسلام" },
  { duaa: "اللهم اجعلنا من الذاكرين الشاكرين الطائعين.", tasbeeh: "اللهم اجعلنا من عبادك الصالحين" },
  { duaa: "اللهم ارزقنا الإخلاص في القول والعمل.", tasbeeh: "اللهم اجعل عملي في رضاك" },
  { duaa: "اللهم اجعلنا من الذين يستمعون القول فيتبعون أحسنه.", tasbeeh: "اللهم اهدنا واهد بنا" },
  { duaa: "اللهم اجعل لنا من كل همٍّ فرجًا، ومن كل ضيق مخرجًا.", tasbeeh: "يا فارج الهم فرّج همي" },
  { duaa: "اللهم اجعلنا من ورثة جنة النعيم.", tasbeeh: "اللهم اجعلنا من أهل الفردوس الأعلى" },
  { duaa: "اللهم آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.", tasbeeh: "ربنا آتنا من لدنك رحمة" },
  { duaa: "اللهم أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين.", tasbeeh: "لا حول ولا قوة إلا بالله" },
  { duaa: "اللهم إني أعوذ بك من قلب لا يخشع، ودعاء لا يُسمع.", tasbeeh: "يا مقلب القلوب ثبت قلبي على دينك" },
  { duaa: "اللهم بارك لي في وقتي، وعمري، وجهدي.", tasbeeh: "اللهم بارك لنا في أعمارنا وأعمالنا" },
  { duaa: "اللهم احفظنا بحفظك، واكلأنا بعينك التي لا تنام.", tasbeeh: "اللهم إنا في ذمتك" },
  { duaa: "اللهم اجعلني مباركًا أينما كنت.", tasbeeh: "رب اجعلني مقيم الصلاة" },
  { duaa: "اللهم ارزقنا توبة نصوحًا لا نرجع بعدها إلى معصيتك.", tasbeeh: "اللهم تب علينا إنك أنت التواب الرحيم" },
  { duaa: "اللهم اجعل صباحنا هذا صباحَ خيرٍ، ويومَنا يومَ بركة.", tasbeeh: "اللهم اجعل هذا اليوم خيرًا لنا" }
];

function showRandomDuaa(){
    const random = ad3eya[Math.floor(Math.random() * ad3eya.length)];
    document.getElementById("duaa").textContent = random.duaa;
    document.getElementById("tasbeeh").textContent = random.tasbeeh;
}


showRandomDuaa()
showDateTime();
setInterval(showDateTime, 1000);
setInterval(showRandomDuaa, 100000);
 