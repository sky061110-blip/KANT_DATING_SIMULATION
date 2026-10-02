
const chapters = [
  { title:"세계는 그대로 보이는가?", concept:"코페르니쿠스적 전회", location:"쾨니히스베르크 · 카페", hint:"첫 만남", bg:"scene-cafe" },
  { title:"우리는 어디까지 알 수 있을까?", concept:"현상과 물자체", location:"프레겔 강 · 산책로", hint:"두 번째 산책", bg:"scene-river" },
  { title:"경험 이전에 이미 있는 것", concept:"선험적 인식", location:"알베르티나 대학 · 강의실", hint:"유나가 끼어든 날", bg:"scene-classroom" },
  { title:"착한 행동의 기준은?", concept:"정언명령", location:"대학 도서관", hint:"과제 마감 전날", bg:"scene-library" },
  { title:"사람은 수단일까, 목적일까?", concept:"인간성 정식", location:"비 오는 캠퍼스", hint:"우산 하나", bg:"scene-rain" },
  { title:"자유는 마음대로 하는 것일까?", concept:"자율", location:"성벽 위 · 저녁", hint:"둘만 남은 시간", bg:"scene-evening" },
  { title:"나는 무엇을 희망해도 되는가?", concept:"실천이성과 희망", location:"쾨니히스베르크 · 밤", hint:"마지막 질문", bg:"scene-night" }
];

const concepts = {
  "코페르니쿠스적 전회":"인식이 대상에 일방적으로 맞춰진다고 보기보다, 인간의 인식 구조가 경험 가능한 세계의 형식에 적극적으로 관여한다고 보는 관점의 전환이다.",
  "현상과 물자체":"현상은 인간의 감성과 오성의 조건을 거쳐 경험되는 세계다. 물자체는 그러한 인간의 인식 조건과 무관하게 존재하는 '그 자체'이며, 칸트는 우리가 그것을 경험적으로 알 수 없다고 본다.",
  "선험적 인식":"특정 경험에서 얻어낸 것이 아니라 경험이 가능하기 위해 미리 전제되는 인식의 조건을 말한다. 칸트에게 공간·시간 및 오성의 범주가 대표적인 논의 대상이다.",
  "정언명령":"어떤 목적을 얻기 위한 조건부 명령이 아니라 그 자체로 따라야 하는 도덕 법칙이다. 자신의 행위 원칙이 모두에게 적용되는 보편적 법칙이 되어도 괜찮은지 묻는 방식이 대표적이다.",
  "인간성 정식":"사람을 단순히 어떤 목적을 위한 수단으로만 대하지 말고, 동시에 그 자체로 목적이 되는 존재로 존중하라는 정언명령의 한 표현이다.",
  "자율":"칸트에게 도덕적 자유는 단순히 충동대로 행동하는 것이 아니다. 이성적 존재가 스스로 보편적 도덕 법칙을 세우고 그 법칙에 자신을 따르게 하는 것이 자율이다.",
  "실천이성과 희망":"칸트 철학의 유명한 질문들 가운데 하나는 '나는 무엇을 희망해도 좋은가?'이다. 이론적 인식의 한계를 인정하면서도 도덕적 실천이 어떤 희망과 연결되는지를 묻는다."
};

const quizzes = {
  "코페르니쿠스적 전회": { q:"칸트의 코페르니쿠스적 전회에 가장 가까운 설명은?", options:["인간의 인식 구조가 경험의 형성에 관여한다.","현실은 개인의 상상일 뿐이다.","과학보다 종교가 항상 우선한다."], answer:0 },
  "현상과 물자체": { q:"칸트에 따르면 우리가 직접 경험하고 인식할 수 있는 것은?", options:["물자체 그 자체","현상","초월적 존재 전체"], answer:1 },
  "선험적 인식": { q:"'선험적'이라는 말에 가장 가까운 뜻은?", options:["경험이 가능하려면 미리 전제되는 조건","아주 오래된 경험","개인이 선호하는 취향"], answer:0 },
  "정언명령": { q:"정언명령의 보편화 질문에 가장 가까운 것은?", options:["나에게 이득이 되는가?","이 행동을 모두가 해도 괜찮은가?","들키지 않을 수 있는가?"], answer:1 },
  "인간성 정식": { q:"칸트의 인간성 정식에 가장 가까운 태도는?", options:["타인을 내 목적의 도구로만 사용한다.","타인을 목적 그 자체로 존중한다.","결과가 좋으면 어떤 수단도 허용한다."], answer:1 },
  "자율": { q:"칸트의 자율에 가장 가까운 것은?", options:["충동이 생기는 대로 행동한다.","다른 사람의 지시만 따른다.","스스로 이성적 원칙을 세우고 그에 책임을 진다."], answer:2 },
  "실천이성과 희망": { q:"칸트가 말하는 희망의 질문과 가장 잘 연결되는 태도는?", options:["인식의 한계를 인정하면서도 도덕적 실천의 의미를 묻는다.","알 수 없는 것은 전부 무의미하다.","희망은 단순한 감정이므로 철학과 무관하다."], answer:0 }
};

const specialEvents = {
  coffee: { title:"이벤트 · 정확히 3시 30분", emoji:"☕", text:"칸트는 늘 걷던 시간보다 2분 늦게 카페를 나선다. 이유를 묻자 잠시 침묵하더니, '대화가 아직 끝나지 않았으니까요.'라고 말한다." },
  umbrella: { title:"이벤트 · 우산 아래의 정언명령", emoji:"☂️", text:"비가 거세진다. 칸트는 자신의 어깨가 젖는 쪽으로 우산을 기울인다. 원칙을 말하는 사람의 행동은 생각보다 조용하다." },
  library: { title:"이벤트 · 책갈피", emoji:"📖", text:"도서관 책 사이에서 짧은 메모를 발견한다. '질문을 포기하지 않는 사람은 이미 철학을 시작한 셈입니다.' 실제 인용이 아닌, 이 이야기 속 칸트의 메모다." },
  trueRoute: { title:"이벤트 · 별이 빛나는 하늘", emoji:"✨", text:"성벽 위에서 둘은 잠시 말없이 밤하늘을 본다. 칸트는 도덕법칙 이야기를 꺼내려다 멈추고, 오늘만큼은 그냥 함께 걷자고 한다." }
};

const story = [
  {
    speaker:"칸트", expression:"neutral", yuna:false,
    text:name=>`${name} 씨, 우리는 눈앞의 세계를 그저 '있는 그대로' 받아들이고 있다고 생각하기 쉽습니다. 하지만 정말 그럴까요?`,
    choices:[
      {title:"“세상이 먼저 있고 우리는 그냥 받아들이는 거 아닌가요?”",desc:"상식적인 입장에서 질문한다.",affection:1,understanding:1,bond:0,expression:"thinking",feedback:"좋은 출발입니다. 칸트는 바로 그 상식을 뒤집어 보자고 제안합니다. 우리가 경험하는 세계에는 인간의 인식 방식이 이미 관여하고 있다는 것이지요."},
      {title:"“인간의 인식 방식이 경험의 형태를 정한다는 뜻인가요?”",desc:"칸트의 문제의식을 먼저 짚는다.",affection:2,understanding:3,bond:1,expression:"smile",feedback:"정확합니다. 대상만 보는 것이 아니라 '대상을 인식하는 우리'의 조건을 함께 보자는 것이 핵심입니다.",special:"coffee"},
      {title:"“그럼 세상은 전부 내 머릿속 상상이라는 뜻?”",desc:"조금 과감하게 밀어붙인다.",affection:0,understanding:1,bond:0,expression:"surprised",feedback:"그 정도까지 가면 칸트의 의도와 달라집니다. 외부 세계를 단순한 상상이라고 부정하지는 않습니다."}
    ]
  },
  {
    speaker:"칸트", expression:"neutral", yuna:false,
    text:name=>`저 강물은 분명 흐르고 있군요. 하지만 ${name} 씨가 경험하는 강이 '사물 그 자체'와 완전히 같다고 확신할 수 있을까요?`,
    choices:[
      {title:"“우리가 경험하는 모습과 그 자체는 구분해야겠네요.”",desc:"현상과 물자체를 구분한다.",affection:2,understanding:3,bond:1,expression:"smile",feedback:"바로 그 구분입니다. 인간에게 주어진 인식 조건을 거쳐 나타난 것이 현상입니다."},
      {title:"“과학이 충분히 발전하면 물자체도 결국 알 수 있지 않을까요?”",desc:"과학의 발전 가능성에 기대를 건다.",affection:1,understanding:1,bond:0,expression:"thinking",feedback:"흥미로운 질문입니다. 하지만 물자체는 단순히 기술이 부족해서 아직 모르는 대상과는 다릅니다."},
      {title:"“모르면 그냥 없는 걸로 치면 되는 거 아닌가요?”",desc:"깔끔한 해결을 시도한다.",affection:-1,understanding:0,bond:-1,expression:"annoyed",feedback:"칸트는 '알 수 없다'와 '존재하지 않는다'를 같은 말로 취급하지 않습니다."}
    ]
  },
  {
    speaker:"유나", expression:"neutral", yuna:true, kantExpression:"thinking",
    text:name=>`야 ${name}, 또 칸트랑 있네? 나 시험 범위 하나도 모르겠는데, '선험적'이라는 말부터 너무 어려워. 이거 미래 예측하는 거야?`,
    choices:[
      {title:"“아니, 경험하기 전에 이미 필요한 인식의 조건에 가까워.”",desc:"유나에게 직접 설명해본다.",affection:2,understanding:3,bond:2,expression:"smile",feedback:"누군가에게 설명할 수 있다면 개념은 더 단단해집니다. 선험적이라는 말은 미래 예측이 아니라 경험 가능성의 조건을 묻는 쪽에 가깝습니다."},
      {title:"“나도 몰라. 칸트 선생님이 설명해 주세요.”",desc:"칸트에게 넘긴다.",affection:1,understanding:1,bond:0,expression:"thinking",feedback:"칸트의 설명을 듣는 것도 좋지만, 직접 설명해보는 과정이 훨씬 강력한 학습이 됩니다."},
      {title:"“그냥 시험엔 '경험 이전'이라고 외우면 돼.”",desc:"암기로 돌파한다.",affection:0,understanding:1,bond:-1,expression:"annoyed",feedback:"시험용 요약으로는 쓸 수 있지만, 칸트가 묻는 핵심은 '경험 이전'이라는 단어보다 경험이 가능하기 위한 조건입니다."}
    ]
  },
  {
    speaker:"칸트", expression:"neutral", yuna:false,
    text:name=>`${name} 씨의 친구가 과제 제출을 놓쳤습니다. 교수에게 거짓말을 하면 친구를 구할 수 있다면, 그 거짓말은 도덕적일까요?`,
    choices:[
      {title:"“친구를 위한 선의의 거짓말이면 괜찮지 않을까요?”",desc:"결과와 관계를 중시한다.",affection:1,understanding:1,bond:0,expression:"thinking",feedback:"우리에게는 자연스러운 판단입니다. 다만 칸트는 좋은 결과만으로 행위의 도덕성을 판단하지 않습니다."},
      {title:"“모두가 필요할 때 거짓말해도 된다는 법칙은 곤란하겠네요.”",desc:"행위 원칙의 보편화를 검토한다.",affection:3,understanding:3,bond:2,expression:"smile",feedback:"정언명령의 대표적인 사고방식입니다. 자신에게만 예외를 허용하지 말고 준칙의 보편화 가능성을 묻습니다.",special:"library"},
      {title:"“교수님한테 안 들키면 문제없는 거 아닌가요?”",desc:"처벌 가능성을 기준으로 판단한다.",affection:-2,understanding:0,bond:-1,expression:"annoyed",feedback:"칸트에게 도덕은 처벌을 피하는 기술이 아닙니다. 행위의 준칙과 의무가 핵심입니다."}
    ]
  },
  {
    speaker:"칸트", expression:"neutral", yuna:false,
    text:name=>`비가 갑자기 많이 오는군요. ${name} 씨, 사람을 돕는 것도 결국 내가 좋은 기분을 얻기 위해서라면 그 사람을 수단으로만 대하는 걸까요?`,
    choices:[
      {title:"“도움을 주더라도 그 사람 자체를 존중해야 한다는 뜻 같아요.”",desc:"인간성 정식으로 연결한다.",affection:3,understanding:3,bond:2,expression:"smile",feedback:"좋습니다. 핵심은 타인을 결코 '단지 수단으로만' 다루지 않는 것입니다.",special:"umbrella"},
      {title:"“좋은 결과가 나오면 동기는 크게 상관없지 않나요?”",desc:"결과 중심으로 본다.",affection:1,understanding:1,bond:0,expression:"thinking",feedback:"결과는 중요하지만 칸트 윤리학은 행위의 원칙과 타인을 대하는 방식 자체를 중요하게 봅니다."},
      {title:"“사람은 어차피 서로 이용하며 사는 거 아닌가요?”",desc:"냉소적으로 말한다.",affection:-2,understanding:0,bond:-2,expression:"annoyed",feedback:"칸트는 타인을 어떤 목적을 위한 수단으로 사용하는 모든 경우를 금지하는 것이 아니라, '단지 수단으로만' 대하는 것을 문제 삼습니다."}
    ]
  },
  {
    speaker:"칸트", expression:"thinking", yuna:false,
    text:name=>`마지막에 가까운 질문입니다, ${name} 씨. 자유란 원하는 걸 마음대로 하는 것일까요? 아니면 다른 종류의 자유도 있을까요?`,
    choices:[
      {title:"“하고 싶은 대로 하는 게 가장 자유로운 거 아닌가요?”",desc:"일상적인 자유 개념.",affection:0,understanding:1,bond:0,expression:"thinking",feedback:"일상에서 흔히 쓰는 의미의 자유입니다. 하지만 칸트는 충동에 끌려가는 상태와 이성적으로 스스로 법칙을 세우는 자유를 구분합니다."},
      {title:"“스스로 납득한 원칙을 세우고 그 결과에 책임지는 것.”",desc:"칸트의 자율 개념에 가깝다.",affection:3,understanding:3,bond:2,expression:"smile",feedback:"바로 그 지점입니다. 자율은 외부 명령이 아니라 이성적 존재가 스스로 법칙을 세우고 따르는 데 있습니다.",special:"trueRoute"},
      {title:"“남에게 피해만 안 주면 무엇을 해도 자유 아닌가요?”",desc:"현대적 자유 감각.",affection:1,understanding:1,bond:0,expression:"neutral",feedback:"중요한 현대적 기준입니다. 다만 칸트의 핵심은 피해 여부만이 아니라 행위 준칙의 보편성과 자기입법입니다."}
    ]
  },
  {
    speaker:"칸트", expression:"neutral", yuna:false,
    text:name=>`이제 정말 마지막입니다. ${name} 씨는 무엇을 희망해도 좋다고 생각합니까? 우리가 모든 것을 알 수 없다면, 희망은 철학에서 쓸모없는 말일까요?`,
    choices:[
      {title:"“다 알 수 없더라도 어떻게 살아갈지는 선택할 수 있잖아요.”",desc:"인식의 한계와 실천을 연결한다.",affection:3,understanding:3,bond:3,expression:"smile",feedback:"좋습니다. 칸트 철학에서 인간은 인식의 한계를 인정하면서도 도덕적 실천을 포기하지 않습니다."},
      {title:"“모르는 건 그냥 생각하지 않는 게 편하지 않을까요?”",desc:"한계를 회피한다.",affection:0,understanding:1,bond:-1,expression:"thinking",feedback:"칸트는 한계를 인정하는 것과 질문을 포기하는 것을 같게 보지 않습니다."},
      {title:"“희망은 증명할 수 없으니 철학하고 상관없죠.”",desc:"증명 가능한 것만 인정한다.",affection:-1,understanding:0,bond:-1,expression:"annoyed",feedback:"칸트는 이론적으로 증명할 수 있는 것과 실천적으로 요청되는 문제를 구분합니다. 희망의 질문도 그 경계에서 등장합니다."}
    ]
  }
];

let state = {
  name:"",
  chapter:0,
  affection:0,
  understanding:0,
  bond:0,
  unlocked:[],
  quizBonusReceived:[],
  events:[],
  flags:{}
};

const $ = id => document.getElementById(id);

function startGame(){
  state.name = $("playerName").value.trim() || "학생";
  $("startScreen").classList.add("hidden");
  $("endingScreen").classList.add("hidden");
  $("gameScreen").classList.remove("hidden");
  render();
}

function render(){
  if(state.chapter >= story.length){ showEnding(); return; }

  const chapter = chapters[state.chapter];
  const sceneData = story[state.chapter];

  $("dayTop").textContent = state.chapter + 1;
  $("chapterBadge").textContent = `CHAPTER ${state.chapter + 1}`;
  $("locationBadge").textContent = chapter.location;
  $("sceneHint").textContent = chapter.hint;
  $("speakerName").textContent = sceneData.speaker;
  $("dialogueText").textContent = sceneData.text(state.name);

  setBackground(chapter.bg);
  setCharacters(sceneData);

  const choices = $("choices");
  choices.innerHTML = "";
  sceneData.choices.forEach((choice,index)=>{
    const button = document.createElement("button");
    button.className = "choice-btn";
    if(choice.special) button.classList.add("special");
    button.innerHTML = `<b>${choice.title}</b><small>${choice.desc}</small>`;
    button.addEventListener("click",()=>selectChoice(index));
    choices.appendChild(button);
  });

  updateSidebar();
}

function setBackground(bg){
  const scene = $("scene");
  [...scene.classList].filter(c=>c.startsWith("scene-")).forEach(c=>scene.classList.remove(c));
  scene.classList.add("scene",bg);
}

function setCharacters(sceneData){
  const kant = $("kantCharacter");
  const yuna = $("yunaCharacter");

  kant.className = "character kant";
  yuna.className = "character yuna";

  if(sceneData.yuna){
    yuna.classList.remove("hidden");
    yuna.classList.add("expression-neutral");
    kant.classList.add("focus-left",`expression-${sceneData.kantExpression || "neutral"}`);
  }else{
    yuna.classList.add("hidden");
    kant.classList.add(`expression-${sceneData.expression || "neutral"}`);
  }
}

function setKantExpression(expression){
  const kant = $("kantCharacter");
  [...kant.classList].filter(c=>c.startsWith("expression-")).forEach(c=>kant.classList.remove(c));
  kant.classList.add(`expression-${expression || "neutral"}`);
}

function selectChoice(index){
  const choice = story[state.chapter].choices[index];
  const concept = chapters[state.chapter].concept;

  state.affection = Math.max(0,state.affection + choice.affection);
  state.understanding = Math.max(0,state.understanding + choice.understanding);
  state.bond = Math.max(0,state.bond + (choice.bond || 0));

  if(!state.unlocked.includes(concept)) state.unlocked.push(concept);

  setKantExpression(choice.expression || "neutral");
  updateSidebar();

  if(choice.special && !state.events.includes(choice.special)){
    state.events.push(choice.special);
    setTimeout(()=>openSpecialEvent(choice.special,()=>openConceptModal(concept,choice.feedback)),180);
  }else{
    openConceptModal(concept,choice.feedback);
  }
}

function openSpecialEvent(key,after){
  const ev = specialEvents[key];
  if(!ev){ after(); return; }
  $("eventEmoji").textContent = ev.emoji;
  $("eventTitle").textContent = ev.title;
  $("eventText").textContent = ev.text;
  $("eventBadge").classList.remove("hidden");
  $("eventModal").classList.remove("hidden");
  $("eventCloseBtn").onclick = ()=>{
    $("eventModal").classList.add("hidden");
    $("eventBadge").classList.add("hidden");
    updateSidebar();
    after();
  };
}

function openConceptModal(concept,feedback){
  $("modalTitle").textContent = `개념 체크 · ${concept}`;
  $("modalFeedback").textContent = feedback;
  $("modalConceptName").textContent = concept;
  $("modalConceptText").textContent = concepts[concept];
  setupQuiz(concept);
  $("conceptModal").classList.remove("hidden");
  $("modalNextBtn").textContent = state.chapter === story.length - 1 ? "엔딩 보기" : "다음 날로";
  $("modalNextBtn").onclick = ()=>{
    $("conceptModal").classList.add("hidden");
    state.chapter += 1;
    saveGame(false);
    render();
  };
}

function setupQuiz(concept){
  const quiz = quizzes[concept];
  $("miniQuiz").classList.remove("hidden");
  $("quizQuestion").textContent = quiz.q;
  $("quizResult").textContent = "";
  $("quizChoices").innerHTML = "";

  quiz.options.forEach((option,index)=>{
    const btn = document.createElement("button");
    btn.className = "quiz-choice";
    btn.textContent = option;
    btn.onclick = ()=>{
      const buttons = [...$("quizChoices").children];
      buttons.forEach(b=>b.disabled=true);
      if(index === quiz.answer){
        btn.classList.add("correct");
        $("quizResult").textContent = "정답! 개념 이해도 +1";
        if(!state.quizBonusReceived.includes(concept)){
          state.quizBonusReceived.push(concept);
          state.understanding += 1;
          updateSidebar();
        }
      }else{
        btn.classList.add("wrong");
        buttons[quiz.answer].classList.add("correct");
        $("quizResult").textContent = "괜찮아. 정답을 확인하고 다음 장면에서 다시 떠올려보자.";
      }
    };
    $("quizChoices").appendChild(btn);
  });
}

function updateSidebar(){
  ["affectionTop","affectionValue"].forEach(id=>$(id).textContent=state.affection);
  ["understandingTop","understandingValue"].forEach(id=>$(id).textContent=state.understanding);
  ["bondTop","bondValue"].forEach(id=>$(id).textContent=state.bond);

  $("affectionBar").style.width = `${Math.min(100,state.affection*7)}%`;
  $("understandingBar").style.width = `${Math.min(100,state.understanding*6)}%`;
  $("bondBar").style.width = `${Math.min(100,state.bond*10)}%`;

  $("chapterList").innerHTML = "";
  chapters.forEach((chapter,index)=>{
    const item = document.createElement("div");
    let classes = "chapter-item";
    if(index === state.chapter) classes += " active";
    if(index > state.chapter) classes += " locked";
    item.className = classes;
    item.innerHTML = `<b>${index+1}. ${chapter.title}</b><span>${index < state.chapter ? "✓ 학습 완료" : index === state.chapter ? "진행 중" : "잠김"}</span>`;
    $("chapterList").appendChild(item);
  });

  $("noteCount").textContent = `${state.unlocked.length}/${chapters.length}`;
  $("glossary").innerHTML = state.unlocked.length
    ? state.unlocked.map(term=>`<div class="note-card"><b>${term}</b>${concepts[term]}</div>`).join("")
    : `<p class="empty-note">대화를 진행하면 개념 카드가 열립니다.</p>`;

  $("eventList").innerHTML = state.events.length
    ? state.events.map(key=>`<div class="event-card"><b>${specialEvents[key].emoji} ${specialEvents[key].title.replace("이벤트 · ","")}</b>${specialEvents[key].text}</div>`).join("")
    : `<p class="empty-note">특별한 선택을 하면 이벤트가 기록됩니다.</p>`;
}

function showEnding(){
  $("gameScreen").classList.add("hidden");
  $("endingScreen").classList.remove("hidden");

  let title,text,icon;

  const trueEnding = state.understanding >= 20 && state.affection >= 12 && state.bond >= 8 && state.events.includes("trueRoute");
  const badEnding = state.understanding <= 7 || state.affection <= 3;

  if(trueEnding){
    icon="✨";
    title="TRUE ENDING · 별이 빛나는 하늘과 당신";
    text="마지막 산책이 끝났는데도 둘은 헤어지지 않는다. 칸트는 오늘만큼은 시간을 정확히 재지 않는다. 당신은 칸트의 철학을 '정답'으로 외운 것이 아니라, 질문을 주고받는 방식으로 이해했다. 그리고 그 질문은 어느새 두 사람 사이의 언어가 되었다.";
  }else if(badEnding){
    icon="📚";
    title="BAD ENDING · 순수이성 재수강";
    text="칸트는 당신에게 두꺼운 책 한 권을 건넨다. '다음 만남 전까지 30쪽만 읽어보시죠.' 로맨스는 잠시 보류되었지만, 적어도 이번엔 어디서부터 다시 시작해야 할지는 안다.";
  }else if(state.understanding >= 17){
    icon="🎓";
    title="NORMAL ENDING · 철학개론 A+";
    text="관계의 진도보다 개념의 진도가 더 빨랐다. 그래도 칸트는 만족한 듯 고개를 끄덕인다. 다음 학기 수업에서 당신은 더 이상 '정언명령'이라는 말에 겁먹지 않을 것이다.";
  }else if(state.affection >= 10){
    icon="♥";
    title="NORMAL ENDING · 호감은 선험적인가";
    text="철학은 아직 조금 어렵지만 칸트와의 산책은 꽤 자연스러워졌다. 칸트는 다음 만남을 먼저 제안한다. 개념보다 관계가 먼저 이해된 루트다.";
  }else{
    icon="🌙";
    title="NORMAL ENDING · 재산책";
    text="완전히 이해하지 못해도 괜찮다. 칸트 철학은 오히려 무엇을 모르는지 정확히 아는 데서 출발한다. 당신은 다음 산책을 위해 개념 노트를 다시 펼친다.";
  }

  $("endingIcon").textContent=icon;
  $("endingTitle").textContent=title;
  $("endingText").textContent=text;
  $("endingAffection").textContent=state.affection;
  $("endingUnderstanding").textContent=state.understanding;
  $("endingBond").textContent=state.bond;
  $("endingConcepts").innerHTML=state.unlocked.map(x=>`<span>${x}</span>`).join("");
  $("endingEvents").innerHTML=state.events.length
    ? state.events.map(x=>`<span>${specialEvents[x].emoji} ${specialEvents[x].title.replace("이벤트 · ","")}</span>`).join("")
    : "<span>해금된 특별 이벤트 없음</span>";
}

function saveGame(showToast=true){
  localStorage.setItem("kantAfterClassExpandedSave",JSON.stringify(state));
  if(showToast){
    $("toast").classList.remove("hidden");
    setTimeout(()=>$("toast").classList.add("hidden"),1400);
  }
}
function resetGame(){
  if(!confirm("처음부터 다시 시작할까요? 저장된 진행 상황도 삭제됩니다.")) return;
  localStorage.removeItem("kantAfterClassExpandedSave");
  location.reload();
}
function tryLoadSave(){
  const raw=localStorage.getItem("kantAfterClassExpandedSave");
  if(!raw) return;
  try{
    const saved=JSON.parse(raw);
    if(!saved || typeof saved.chapter!=="number") return;
    if(confirm("이전에 저장한 진행 상황이 있습니다. 이어서 할까요?")){
      state=saved;
      $("startScreen").classList.add("hidden");
      $("gameScreen").classList.remove("hidden");
      render();
    }
  }catch(e){console.warn(e)}
}

$("startBtn").addEventListener("click",startGame);
$("playerName").addEventListener("keydown",e=>{if(e.key==="Enter") startGame()});
$("saveBtn").addEventListener("click",()=>saveGame(true));
$("resetBtn").addEventListener("click",resetGame);
$("restartBtn").addEventListener("click",()=>{localStorage.removeItem("kantAfterClassExpandedSave");location.reload()});
tryLoadSave();
