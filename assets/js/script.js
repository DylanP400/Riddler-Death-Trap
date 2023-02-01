const playButton = document.getElementById('play-btn')
playButton.addEventListener('click', runGame)

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question')

const gameAnswersElement = document.getElementById('game-answers') 
const questionElement = document.getElementById('question')

const scoreAreaElement = document.querySelectorAll('.scores')
for (let i = 0; i < scoreAreaElement.length; i++) {
    scoreAreaElement[i].classList.add('hidden')
}

function runGame() {
    console.log('run')
    playButton.classList.add('hidden')
    nextButton.classList.remove('hidden')
    questionContainerElement.classList.remove('hidden')
    gameAnswersElement.classList.remove('hidden')
     for (let i = 0; i < scoreAreaElement.length; i++) {
        scoreAreaElement[i].classList.remove('hidden') // for loop to remove hidden class from the score
     }
    }

function setNextQuestion() {

}

function selectAnswer() {
    
}



// Questions for the game 
const questions = [
    {
        question: 'What year did batman first appear?',
        answers: [
            { text: '1939', correct: true },
            { text: '1962', correct: false },
            { text: '1800', correct: false },
            { text: '1980', correct: false}
        ]
    },
    {
        question: 'Who played Batman in Batman Begins(2005)?',
        answers: [{
                text: 'Hugh Jackman',
                correct: false
            },
            {
                text: 'George Clooney',
                correct: false
            },
            {
                text: 'Christian Bale',
                correct: true
            },
            {
                text: 'Brad Pitt',
                correct: false
            }
        ]
    },
    {
        question: 'Who is the Best Batman?',
        answers: [{
                text: 'Christian Bale',
                correct: false
            },
            {
                text: 'Ben Affleck',
                correct: true
            },
            {
                text: 'Michael Keaton',
                correct: false
            },
            {
                text: 'Robert Pattison',
                correct: false
            }
        ]
    },
    {
        question: 'What year did the Joker first appear?',
        answers: [{
                text: '1990',
                correct: false
            },
            {
                text: '1940',
                correct: true
            },
            {
                text: '1937',
                correct: false
            },
            {
                text: '1984',
                correct: false
            }
        ]
    },
    {
        question: 'Who is not a Batman Villian?',
        answers: [{
                text: 'Killer Croc',
                correct: false
            },
            {
                text: 'Scorpion',
                correct: true
            },
            {
                text: 'Calender Man',
                correct: false
            },
            {
                text: 'Man Bat',
                correct: false
            }
        ]
    },
    {
        question: 'Who played Riddler in The Batman(2022)',
        answers: [{
                text: 'Cillian Murphy',
                correct: false
            },
            {
                text: 'Brendan Gleeson',
                correct: false
            },
            {
                text: 'Jim Carey',
                correct: false
            },
            {
                text: 'Paul Dano',
                correct: true
            }
        ]
    },
    {
        question: 'Who played Joker in Batman(1989)',
        answers: [{
                text: 'Kevin Costner',
                correct: false
            },
            {
                text: 'Heath Ledger',
                correct: false
            },
            {
                text: 'Jack Nicholson',
                correct: true
            },
            {
                text: 'Vin Diesel',
                correct: false
            }
        ]
    },
    {
        question: 'Who played Catwoman in The Dark Knight Rises(2012) ',
        answers: [{
                text: 'Anne Hathaway',
                correct: true
            },
            {
                text: 'Margot Robbie',
                correct: false
            },
            {
                text: 'Zoë Kravitz',
                correct: false
            },
            {
                text: 'Michelle Pfeiffer',
                correct: false
            }
        ]
    },
    {
        question: 'Who played Mr Freeze in Batman & Robin?',
        answers: [{
                text: 'Liam Neeson',
                correct: false
            },
            {
                text: 'Arnold Schwarzenegger',
                correct: true
            },
            {
                text: 'Brendan Fraser',
                correct: false
            },
            {
                text: 'Tom Hanks',
                correct: false
            }
        ]
    },
    {
        question: 'Who is the best Robin?',
        answers: [{
                text: 'Jason Todd',
                correct: false
            },
            {
                text: 'Dick',
                correct: false
            },
            {
                text: 'Tim',
                correct: true
            },
            {
                text: 'Damian',
                correct: false
            }
        ]
    },
    {
        question: 'Which villan isnt in The Dark Knight?',
        answers: [{
                text: 'Joker',
                correct: false
            },
            {
                text: 'Two-Face',
                correct: false
            },
            {
                text: 'Scarecrow',
                correct: false
            },
            {
                text: 'The Penguin',
                correct: true
            }
        ]
    },
    {
        question: 'What rapper had a cameo role in Batman & Robin (1997)?',
        answers: [{
                text: 'Snoop Dogg',
                correct: false
            },
            {
                text: '50 Cent',
                correct: false
            },
            {
                text: 'Coolio',
                correct: true
            },
            {
                text: 'Common',
                correct: false
            }
        ]
    },
    {
        question: 'In what movie did Ben Affleck first play the role of Batman?',
        answers: [{
                text: 'Batman Begins',
                correct: false
            },
            {
                text: 'Batman vs Superman',
                correct: true
            },
            {
                text: 'The Batman',
                correct: false
            },
            {
                text: 'Batman Returns',
                correct: false
            }
        ]
    },
    {
        question: 'Who played the Penguin in Batman Returns?',
        answers: [{
                text: 'Dany Devito',
                correct: true
            },
            {
                text: 'Colin Farrell',
                correct: false
            },
            {
                text: 'Robin Lord Taylor',
                correct: false
            },
            {
                text: 'Tom Hardy',
                correct: false
            }
        ]
    },
    {
        question: 'Terry McGinnis is the lead character in which 2000 animated Batman movie?',
        answers: [{
                text: 'Batman: Hush',
                correct: false
            },
            {
                text: 'Batman: Under the Red Hood',
                correct: false
            },
            {
                text: 'Batman Beyond: Return of the Joker',
                correct: true
            },
            {
                text: 'Batman: The killing joke',
                correct: false
            }
        ]
    },
    {
        question: 'Which Batman movie was set at Christmas?',
        answers: [{
                text: 'Batman Forever',
                correct: false
            },
            {
                text: 'Batman Begins',
                correct: false
            },
            {
                text: 'Batman Returns ',
                correct: true
            },
            {
                text: 'The Batman',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of the light which Commissioner Gordon uses to call Batman for help?',
        answers: [{
                text: 'The Batsignal',
                correct: true
            },
            {
                text: 'The Batlamp',
                correct: false
            },
            {
                text: 'The Batlight',
                correct: false
            },
            {
                text: 'The Batsign',
                correct: false
            }
        ]
    },
    {
        question: 'In which movie did the Batwing first appear?',
        answers: [{
                text: 'The Batman',
                correct: false
            },
            {
                text: 'Batman: Death in the Family',
                correct: false
            },
            {
                text: 'Batman Forever',
                correct: false
            },
            {
                text: 'Batman',
                correct: true
            }
        ]
    },
    {
        question: 'What doesn t kill you just make you?',
        answers: [{
                text: 'Stronger',
                correct: false
            },
            {
                text: 'Stranger',
                correct: true
            },
            {
                text: 'Better',
                correct: false
            },
            {
                text: 'Braver',
                correct: false
            }
        ]
    },
    {
        question: 'What is Commissioner Gordons first name?',
        answers: [{
                text: 'John',
                correct: false
            },
            {
                text: 'Mike',
                correct: false
            },
            {
                text: 'James',
                correct: true
            },
            {
                text: 'Rick',
                correct: false
            }
        ]
    }
];