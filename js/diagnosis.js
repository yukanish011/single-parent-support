const questions = [
{
id:"child",
text:"18歳未満の子どもがいますか？"
},

{
id:"income",
text:"世帯所得は一定以下ですか？"
}
]

let current = 0
let answers = {}

function showQuestion(){

const q = questions[current]

document.getElementById("question").innerHTML = q.text

document.getElementById("answers").innerHTML = `

<button onclick="answer('yes')">YES</button>

<button onclick="answer('no')">NO</button>

`
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

if(answers.child === "yes" && answers.income === "yes"){

document.getElementById("result").innerHTML =

`<h2>受けられる可能性のある支援</h2>

<ul>

<li>児童扶養手当</li>

<li>医療費助成</li>

<li>保育料減免</li>

</ul>

<p>必要書類：</p>

<ul>

<li>戸籍謄本</li>

<li>所得証明書</li>

<li>住民票</li>

</ul>
`

}

else{

document.getElementById("result").innerHTML =

`<h2>対象外の可能性があります</h2>
<p>自治体によっては別制度があります。</p>`

}

}

showQuestion()
