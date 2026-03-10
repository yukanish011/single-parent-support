let supports = []
let answers = {}

fetch("data/support.json")
.then(res => res.json())
.then(data => {
supports = data.supports
})

function showResult(){

let resultHTML = "<h2>受けられる可能性のある支援</h2>"

supports.forEach(s => {

let match = true

for (const key in s.conditions){

if(answers[key] !== s.conditions[key]){

match = false

}

}

if(match){

resultHTML += `
<h3>${s.name}</h3>
<p>${s.description}</p>
<p>申請：${s.application}</p>
`

}

})

document.getElementById("result").innerHTML = resultHTML

}
