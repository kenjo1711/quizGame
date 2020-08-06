// let questions = [
// 	{
// 		id: 1, 
// 		question: ,
// 		choice1: ,
// 		choice2: ,
// 		answer: 

// 	}
// ]

// let score = 0


//	HTML Question Codes
// if button 1 / 2 is clicked, show output. 

// let btn1 = document.getElementById('btn-1')

// btn1.addEventListener('click', () => alert('iwasclicked'))

// let questions = [
// 	{
// 		id: 1,
// 		question1:
// 	}
	
// ]

var totalScore = 0

//Question 1
let btn1 = document.getElementById('btn-1')

btn1.onclick = function() {
	let q1 = document.getElementById('q1')
	q1.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn1.setAttribute('disabled', true)
	btn2.setAttribute('disabled', true)

}

let btn2 = document.getElementById('btn-2')

btn2.onclick = function() {
	let q1 = document.getElementById('q1')
	q1.style.backgroundColor = "pink";
	btn1.setAttribute('disabled', true)
	btn2.setAttribute('disabled', true)
}

//Question 2

let btn3 = document.getElementById('btn-3')

btn3.onclick = function() {
	let q2 = document.getElementById('q2')
	q2.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn3.setAttribute('disabled', true)
	btn4.setAttribute('disabled', true)
}

let btn4 = document.getElementById('btn-4')

btn4.onclick = function() {
	let q2 = document.getElementById('q2')
	q2.style.backgroundColor = "pink";
	btn3.setAttribute('disabled', true)
	btn4.setAttribute('disabled', true)
}

//Question 3

let btn5 = document.getElementById('btn-5')

btn5.onclick = function() {
	let q3 = document.getElementById('q3')
	q3.style.backgroundColor = "pink";
	btn5.setAttribute('disabled', true)
	btn6.setAttribute('disabled', true)
}

let btn6 = document.getElementById('btn-6')

btn6.onclick = function() {
	let q3 = document.getElementById('q3')
	q3.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn5.setAttribute('disabled', true)
	btn6.setAttribute('disabled', true)
}

//Question 4

let btn7 = document.getElementById('btn-7')

btn7.onclick = function() {
	let q4 = document.getElementById('q4')
	q4.style.backgroundColor = "pink";
	btn7.setAttribute('disabled', true)
	btn8.setAttribute('disabled', true)
}

let btn8 = document.getElementById('btn-8')

btn8.onclick = function() {
	let q4 = document.getElementById('q4')
	q4.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn7.setAttribute('disabled', true)
	btn8.setAttribute('disabled', true)
}

//Question 5

let btn9 = document.getElementById('btn-9')

btn9.onclick = function() {
	let q5 = document.getElementById('q5')
	q5.style.backgroundColor = "pink";
	btn9.setAttribute('disabled', true)
	btn10.setAttribute('disabled', true)
}

let btn10 = document.getElementById('btn-10')

btn10.onclick = function() {
	let q5 = document.getElementById('q5')
	q5.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn9.setAttribute('disabled', true)
	btn10.setAttribute('disabled', true)
}






//	JavaScript Question Codes




//Question 1
let btn11 = document.getElementById('btn-11')

btn11.onclick = function() {
	let q6 = document.getElementById('q6')
	q6.style.backgroundColor = "pink";
	btn11.setAttribute('disabled', true)
	btn12.setAttribute('disabled', true)

}

let btn12 = document.getElementById('btn-12')

btn12.onclick = function() {
	let q6 = document.getElementById('q6')
	q6.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn11.setAttribute('disabled', true)
	btn12.setAttribute('disabled', true)
}

//Question 2

let btn13 = document.getElementById('btn-13')

btn13.onclick = function() {
	let q7 = document.getElementById('q7')
	q7.style.backgroundColor = "pink";
	btn13.setAttribute('disabled', true)
	btn14.setAttribute('disabled', true)
}

let btn14 = document.getElementById('btn-14')

btn14.onclick = function() {
	let q7 = document.getElementById('q7')
	q7.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn13.setAttribute('disabled', true)
	btn14.setAttribute('disabled', true)
}

//Question 3

let btn15 = document.getElementById('btn-15')

btn15.onclick = function() {
	let q8 = document.getElementById('q8')
	q8.style.backgroundColor = "pink";
	btn15.setAttribute('disabled', true)
	btn16.setAttribute('disabled', true)
}

let btn16 = document.getElementById('btn-16')

btn16.onclick = function() {
	let q8 = document.getElementById('q8')
	q8.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn15.setAttribute('disabled', true)
	btn16.setAttribute('disabled', true)
}

//Question 4

let btn17 = document.getElementById('btn-17')

btn17.onclick = function() {
	let q9 = document.getElementById('q9')
	q9.style.backgroundColor = "pink";
	btn17.setAttribute('disabled', true)
	btn18.setAttribute('disabled', true)
}

let btn18 = document.getElementById('btn-18')

btn18.onclick = function() {
	let q9 = document.getElementById('q9')
	q9.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn17.setAttribute('disabled', true)
	btn18.setAttribute('disabled', true)
}

//Question 5

let btn19 = document.getElementById('btn-19')

btn19.onclick = function() {
	let q10 = document.getElementById('q10')
	q10.style.backgroundColor = "pink";
	btn19.setAttribute('disabled', true)
	btn20.setAttribute('disabled', true)
}

let btn20 = document.getElementById('btn-20')

btn20.onclick = function() {
	let q10 = document.getElementById('q10')
	q10.style.backgroundColor = "lightgreen";
	totalScore += 1
	btn19.setAttribute('disabled', true)
	btn20.setAttribute('disabled', true)
}

document.getElementById('results').onclick = function() {
	let msg = `You have a final score of ${totalScore}`
	document.getElementById('results-msg').innerHTML = msg
}