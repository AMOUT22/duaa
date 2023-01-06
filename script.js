const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let feelings = [
  "Angry",
  "Anticipation",
  "Anxious",
  "Aroused",
  "Confident",
  "Confused",
  "Content",
  "Curious",
  "Defeated",
  "Depressed",
  "Desire",
  "Desperate",
  "Determined",
  "Disbelief",
  "Doubtful",
  "Envious",
  "Grateful",
  "Guilty",
  "Happy",
  "Hatred",
  "Humiliated",
  "Hurt",
  ,
  "Impatient",
  "Indecisive",
  "Insecure",
  "Irritated",
  "Jealous",
  "Lazy",
  "Lonley",
  "Love",
  "Nervous",
  "Nostalgic",
  "Offended",
  "Overwhelmed",
  "Peaceful",
  "Rage",
  "Regretful",
  "Sad",
  "Satisfied",
  "Uncertain",
  "Uneasy",
  "Weak",
];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  feelings.forEach((country) => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">....</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
function duaa() {
  var span_Text = document.getElementById("span_Id").innerText;
  switch (span_Text) {
    case "Angry":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, remove anger from my heart. <br> اللَّهُمَّ أَذْهِبْ غَيْظَ قَلْبِي";
      break;
    case "Anticipation":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it. <br> اللهم إن كان هذا الأمر خيرا لي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ";
      break;
    case "Anxious":
      document.getElementById("duaa").innerHTML =
        "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men. <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ";
      break;
    case "Aroused":
      document.getElementById("duaa").innerHTML =
        "Oh Allah shield me from harmful desires! Shield me from looking at the prohibited! Shield me from my rebellions! And shield me from trials oh Lord of the Universes! <br> اللهم جنبني الهوى، و جنبني النظر الحرام، و جنبني المعاصي، و جنبني الفتن يا رب العالمين ";
      break;
    case "Confident":
      document.getElementById("duaa").innerHTML =
        "Oh Lord! When you give me wealth, do not take away my happiness. When you give me strength, do not take away my intelligence. When you give me victory, do not take away my humility. When you give me humility, do not take away my dignity. <br> يا رَبْ إذا أعطيتني مَالاً فلا تأخذ سَعادتي، وإذا أعَطيتني قوّة فلا تأخذ عقليْ، وإذا أعَطيتني نجَاحاً فلا تأخذ تَواضعْي وإذا أعطيتني تواضعاً فلا تأخذ اعتزازي بِكرامتي";
      break;
    case "Confused":
      document.getElementById("duaa").innerHTML =
        "Oh Allah! Place in my heart, Light. Place in my tongue, Light. Place in my hearing, Light. Place in my sight, Light. Place behind me, Light. Place before me, Light. Place above me, Light. Place under me, Light. Oh Allah grant me Light! <br> اللهمّ اجعل في قلبي نوراً، وفي لساني نوراً، واجعل في سمعي نوراً، واجعل في بصري نوراً، واجعل من خلفي ‏نوراً، ومن أمامي نوراً، واجعل من فوقي نوراً، ومن تحتي نوراً، اللهمّ أعطني نوراً";
      break;
    case "Content":
      document.getElementById("duaa").innerHTML =
        "<br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَO Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you. ";
      break;
    case "Curious":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, I seek protection in you from the evil of my hearing, from the evil of my sight, from the evil of my tongue, from the evil of my heart, and from the evil of myself <br> اللهم إني أعوذ بك من شر سمعي، ومن شر بصري، ومن شر لساني، ومن شر قلبي، ومن شر منيي";
      break;
    case "Defeated":
      document.getElementById("duaa").innerHTML =
        "O Allah, I have been very unjust to myself and no one grants pardon against sin but You, therefore forgive me with Your forgiveness and have mercy on me. Surely, You are the forgiver, the Merciful. <br> اللهمّ إنّي ظلمت نفسي ظلماً كثيراً، ولا يغفر الذّنوب إلا أنت فاغفر لي مغفرة من عندك، وارحمني إنّك أنت الغفور الرّحيم";
      break;
    case "Depressed":
      document.getElementById("duaa").innerHTML =
        "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men. <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ";
      break;
    case "Desire":
      document.getElementById("duaa").innerHTML =
        "Oh Allah! Extinguish the fire of desires in my heart and redirect my heart to all that which pleases you. <br> اللهم اطفئ نار الشهوات من قلبى ، واصرف عنه كل شئ لا يرضيك عنى";
      break;
    case "Desperate":
      document.getElementById("duaa").innerHTML =
        "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord.<br> اللهم إليك أشكو ضعف قوتي وقلة حيلتي وهواني على الناس يا أرحم الراحمين أنت ربُّ المستضعفين وانت ربّي";
      break;
    case "Determined":
      document.getElementById("duaa").innerHTML =
        "Oh Allah! Grant me the strength to oppose myself, the courage to face my weakness, the conviction to accept my faith, the satisfaction of to relax my mind, and the understanding to reassure my heart. <br> اللهم امنحني القوة لأقاوم نفسي، والشجاعة لأواجه ضعفي، واليقين لأتقبل قدري، والرضا ليرتاح عقلي، والفهم ليطمئن قلبي";
      break;
    case "Disbelief":
      document.getElementById("duaa").innerHTML =
        "Oh Allah fill my heart with your love.<br> اللهم املأ قلبى بحبك";
      break;
    case "Doubtful":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it. <br> اللهم إن كان هذا الأمر خيرا لي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ";
      break;
    case "Envious":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy. <br> اللهم طهر قلبي من كل سوء ، اللهم طهر قلبي من كل ما يبغضك، اللهم طهر قلبي من كل غلٍ وحقدٍ وحسد وكبر";
      break;
    case "Grateful":
      document.getElementById("duaa").innerHTML =
        "Oh Allah thanking you is a blessing, you deserve all thankfulness. All praise is due to Allah the way He should his magnificence deserves to be praised.<br> اللهم إن شكرك نعمة، تستحق الشكر، فعلّمني كيف أشكرك ، الحمد لله كما ينبغى لجلال وجهك وعظيم سلطانك";
      break;
    case "Guilty":
      document.getElementById("duaa").innerHTML =
        "Oh Lord, wipe my chest clean with your mercy.<br> يارب أمسح على صدري برحمتك";
      break;
    case "Happy":
      document.getElementById("duaa").innerHTML =
        "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you.<br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ";
      break;
      case "Hatred":
        document.getElementById("duaa").innerHTML=
        "Oh Allah, don't let the hate of anyone reside in my heart. <br> اللهم لا تجعل في قلبي كراهية لأحد"
    case "Humiliated":
      document.getElementById("duaa").innerHTML =
        "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord. <br> اللهم إليك أشكو ضعف قوتي وقلة حيلتي وهواني على الناس يا أرحم الراحمين أنت ربُّ المستضعفين وانت ربّي";
      break;
    case "Hurt":
      document.getElementById("duaa").innerHTML = "Oh Mender, Mend me. <br> اللهم لا تعلق قلبي الضعيف بما ليس بي";
      break;
    case "Impatient":
      document.getElementById("duaa").innerHTML =
        "Oh The Most Patient, enable me to be patient upon whatever you afflict and test me with. <br> اللهم امنحني القوة لأقاوم نفسي، والشجاعة لأواجه ضعفي، واليقين لأتقبل قدري، والرضا ليرتاح عقلي، والفهم ليطمئن قلبي";
      break;
    case "Indecisive":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, if my intended action is best for me, make it destined and easy for me, and grant me Your Blessings in it. <br> اللهم إن كان هذا الأمر خيرا لي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ";
      break;
    case "Insecure":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, make me see the talents and strengths you have put inside of me. <br> اللهم اجعلني أرى المواهب و نقاط قوت الذين وضعته في نفسي";
      break;

    case "Irritated":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy. <br> اللهم طهر قلبي من كل سوء ، اللهم طهر قلبي من كل ما يبغضك، اللهم طهر قلبي من كل غلٍ وحقدٍ وحسد وكبر";
      break;
    case "Jealous":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, clean away all forms of evil from my heart. Oh Allah, clean my heart and remove everything that displeases you. Oh Allah, clean my heart of all every form of bitterness, hard feelings, and jealousy. <br> اللهم طهر قلبي من كل سوء ، اللهم طهر قلبي من كل ما يبغضك، اللهم طهر قلبي من كل غلٍ وحقدٍ وحسد وكبر";
      break;
    case "Lazy":
      document.getElementById("duaa").innerHTML =
        "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men. <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ";
      break;
    case "Lonely":
      document.getElementById("duaa").innerHTML =
        "O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye, and rectify for me all of my affairs. None has the right to be worshiped except You.<br> اللهُمَّ رَحْمَتَكَ أرجُو، فَلا تَكِلْنِي إلى نَفْسي طَرْفَةَ عَيْنٍ، وأصْلِحْ لي شَأني كُلَّهُ، لا إله إلا أنْتَ.";
      break;
    case "Love":
      document.getElementById("duaa").innerHTML =
        "Oh Allah make me from amongst the pure women and grant me from the pure men. <br> اللهم اجعلني من الطيبات وارزقني الطيبين";
      break;
    case "Nervous":
      document.getElementById("duaa").innerHTML =
        "Oh lord, expand my chest, ease my affair, and untie the knot in my tongue and perfect my expression.<br> رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي";
      break;
    case "Nostalgic":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, don't let my weak heart get attached with what's not mine. <br> اللهم لَا تُعَلِّقْ قَلْبِي الضِّعِيفِ بِمَا لَيسَ لِي";
      break;
    case "Offended":
      document.getElementById("duaa").innerHTML =
        "Oh Allah! I seek your shelter from worries that sadden me, thoughts that make me restless, information that bothers me, and people that intend bad for me. <br>  ْاللهم إنِّي أَعُوْذُ بِكَ مِنْ هَمِّ يَحْزُنُنِي وَمِنْ فِكْرِ يُقْلِقُنِيْ وَعِلْمَا يُتْعِبُنِيْ وَشَخْصَا يَحْمِلُ خُبْثَا لِي";
      break;
    case "Overwhelmed":
      document.getElementById("duaa").innerHTML =
        "To You, my Lord, I complain of my weakness, lack of support and the humiliation I am made to receive. Most Compassionate and Merciful! You are the Lord of the weak, and you are my Lord. <br> اللهم إليك أشكو ضعف قوتي وقلة حيلتي وهواني على الناس يا أرحم الراحمين أنت ربُّ المستضعفين وانت ربّي";
      break;
    case "Peaceful":
      document.getElementById("duaa").innerHTML =
        "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you. <br> نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ";
      break;
    case "Rage":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, remove anger from my heart. <br> اللَّهُمَّ أَذْهِبْ غَيْظَ قَلْبِي";
      break;
    case "Regretful":
      document.getElementById("duaa").innerHTML =
        "O Allah, I have been very unjust to myself and no one grants pardon against sin but You, therefore forgive me with Your forgiveness and have mercy on me. Surely, You are the forgiver, the Merciful. <br> اللهمّ إنّي ظلمت نفسي ظلماً كثيراً، ولا يغفر الذّنوب إلا أنت فاغفر لي مغفرة من عندك، وارحمني إنّك أنت الغفور الرّحيم";
      break;
    case "Sad":
      document.getElementById("duaa").innerHTML =
        "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men. <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ";
      break;
    case "Satisfied":
      document.getElementById("duaa").innerHTML =
        "O Allah! I seek refuge in You from the decline of Your blessings, the passing of safety, the sudden onset of Your punishment and from all that displeases you. <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ";
      break;
    case "Uncertain":
      document.getElementById("duaa").innerHTML =
        "Oh Allah wash away my negativity. <br> اللهم اغسلني من السلبية";
      break;
    case "Uneasy":
      document.getElementById("duaa").innerHTML =
        "Oh Allah, descend upon me satisfaction that comes from you and open my chest and protect my heart with it. <br> اللهم أنزِل عليّ سكينة من عندك تشرح بها صدري و تحفظُ بها قلبي";
      break;
    case "Weak":
      document.getElementById("duaa").innerHTML =
        "O Allah, I take refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being over powered by men <br> اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ";
      break;
  }
}
