let questions = []
let supports = []

let current = 0
let answers = {}

async function loadData(){

const q = await fetch("data/questions.json")
const s = await fetch("data/support.json")

questions = (await q.json()).questions
supports = (await s.json()).supports

showQuestion()

}

function showQuestion(){

const q = questions[current]

document.getElementById("question").innerHTML = q.text

let html = ""

if(q.type === "yesno"){

html += `<button onclick="answer('yes')">YES</button>`
html += `<button onclick="answer('no')">NO</button>`

}

if(q.type === "select"){

q.options.forEach(o => {

html += `<button onclick="answer('${o}')">${o}</button>`

})

}

document.getElementById("answers").innerHTML = html

}

function answer(value){

answers[questions[current].id] = value

current++

if(current < questions.length){

showQuestion()

}else{

showResult()

}

}

function showResult(){

let html = "<h2>受けられる可能性のある支援</h2>"

supports.forEach(s => {

let match = true

for(const key in s.conditions){

if(answers[key] !== s.conditions[key]){

match = false

}

}

if(match){

html += `
<h3>${s.name}</h3>
<p>${s.description}</p>
<p>申請場所: ${s.apply}</p>
<p>必要書類:</p>
<ul>
${s.documents.map(d => `<li>${d}</li>`).join("")}
</ul>
`
}

})

document.getElementById("result").innerHTML = html

}

loadData()
