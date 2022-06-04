const firebaseConfig = {
    apiKey: "AIzaSyDc1rNtuYGSpgIDIh1ldZnAPFD4oHvH0hM",
    authDomain: "quizapp-0.firebaseapp.com",
    projectId: "quizapp-0",
    storageBucket: "quizapp-0.appspot.com",
    messagingSenderId: "480402055629",
    appId: "1:480402055629:web:d68f6f8c8961e4a4182484",
    measurementId: "G-LZPG08WEC5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
















let Quiz = [
    {
        'que' : 'Who is making the Web standards?',
        a : 'Google',
        b : 'Mozilla',
        c : 'The world wide web',
        d : 'MicroSoft',
        ans : 'option2'
    },
    {
        'que' : 'What is the correct HTML element for inserting a line break?',
        a : '<break>',
        b : '<br>',
        c : '<ib>',
        d : '<line space>',
        ans : 'option2'
    },
    {
        'que' : 'Choose the correct HTML element for the largest heading:',
        a : '<h1>',
        b : '<head>',
        c : '<heading>',
        d : '<h6>',
        ans : 'option1'
    },
    {
        'que' : 'Choose the correct HTML element to define important text',
        a : '<strong>',
        b : '<b>',
        c : '<i>',
        d : '!important',
        ans : 'option4'
    },
    
]

var question = document.getElementById('question')
var option1 = document.getElementById('ans1')
var option2 = document.getElementById('ans2')
var option3 = document.getElementById('ans3')
var option4 = document.getElementById('ans4')
let opt = document.querySelectorAll('.opt')

let start = 0;
let score = 0;

function first(){
    var a = Quiz[start]
    question.innerText = a.que
    option1.innerText = a.a
    option2.innerText = a. b
    option3.innerText = a.c
    option4.innerText = a.d  
}
first()


function next(){
  let answer 
  Array.from(opt).forEach(ele => {
      if(ele.checked){
       answer = ele.id 
      }
  })
  return answer
}


function che(){ 
    Array.from(opt).forEach(ele => {
        if(ele.checked){
         ele.checked = false
        }
    })
}

function nextone(){
    
    let a = next()
    if(a === Quiz[start].ans){
        score++
    }
    start++
    if(start < Quiz.length){
        first()
        che()
    }else{
        document.querySelector('.p1').innerHTML = `your score is ${score}/${Quiz.length}`
        let a = document.querySelector('.p2')
        if(score == 0){
            a.innerHTML = 'Fail'
        }else if (score == 1){
          a.innerHTML = 'Fail'
        }else if(score == 2 ){
            a.innerHTML = 'your grade is B'
        }else{
            a.innerHTML = 'your grade is Aone'
        }
        let scoe = score
        let num = Quiz.length
        let total = scoe*100/num 
        document.querySelector('.p3').innerHTML = `your persentage is ${total}%`
        document.querySelector('.list').style.display = 'none'
        document.querySelector('#div').style.display = 'block'
        Quiz[0].ans = 'The world wide web'
        Quiz[1].ans = '<br>'
        Quiz[2].ans = '<h1>'
        Quiz[3].ans = '<strong>'
        
        firebase.database().ref('list').push(Quiz)
     
        firebase.database().ref('list').on('child_added', function(data){

            let tab0 = document.getElementById('table')
            var a = Quiz[0]
            Object.values(a).forEach(text => {
                let li = document.createElement('li')
                let liText = document.createTextNode(text)
                li.appendChild(liText)
                tab0.appendChild(li)
            })
            

            let tab1 = document.getElementById('table1')
            var a = Quiz[1]
            Object.values(a).forEach(text => {
                let li = document.createElement('li')
                let liText = document.createTextNode(text)
                li.appendChild(liText)
                tab1.appendChild(li)
            })
            
            let tab2 = document.getElementById('table2')
            var a = Quiz[2]
            Object.values(a).forEach(text => {
                let li = document.createElement('li')
                let liText = document.createTextNode(text)
                li.appendChild(liText)
                tab2.appendChild(li)
            })
            
            let tab3 = document.getElementById('table3')
            var a = Quiz[3]
            Object.values(a).forEach(text => {
                let li = document.createElement('li')
                let liText = document.createTextNode(text)
                li.appendChild(liText)
                tab3.appendChild(li)
            })
            
        })
        document.getElementById('tab').style.display = 'block'
        let tab = document.getElementById('tab')
    }
}


function sami(){
    firebase.database().ref('list').remove()
}

window.onload = function() {
    firebase.database().ref('list').remove()
} 