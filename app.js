// array for quotes

const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    }, 
    {'author': 'Albert Einstein', 
     'quote': 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    }, 
    {'author': 'Theodore Roosevelt', 
     'quote': 'Believe you can and you\'re halfway there.'
    }, 
    {'author': 'Helen Keller', 
     'quote': 'Never bend your head. Always hold it high. Look the world straight in the eye.'
    }, 
    {'author': 'Winston Churchill', 
     'quote': 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    }, 
    {'author': 'Dr. Seuss', 
     'quote': 'Sometimes you will never know the value of a moment, until it becomes a memory.'
    }, 
    {'author': 'Lao Tzu', 
     'quote': 'The journey of a thousand miles begins with one step.'
    }, 
    {'author': 'Steve Jobs', 
     'quote': 'Your time is limited, so don’t waste it living someone else’s life.'
    }, 
    {'author': 'Vince Lombardi', 
     'quote': 'Winning isn’t everything, but wanting to win is.'
    }, 
    {'author': 'Stephen Covey', 
     'quote': ' I am not a product of my circumstances. I am a product of my decisions.'
    }, 
    {'author': 'Mark Twain', 
     'quote': 'The two most important days in your life are the day you are born and the day you find out why.'
    }, 
    {'author': 'John Wooden', 
     'quote': 'Do not let what you cannot do interfere with what you can do.'
    }, 
    {'author': 'Japanese Proverb', 
     'quote': ' Fall seven times and stand up eight.'
    }, 
    {'author': 'Confucius', 
     'quote': 'It does not matter how slowly you go as long as you do not stop..'
    }, 
    {'author': 'Tom Brady', 
     'quote': 'You wanna know which ring is my favorite? The next one.'
    }, 
    {'author': 'Tom Brady', 
     'quote': 'I didn’t come this far to only come this far, so we’ve still got further to go.'
    }, 
]

//button event listener to choose
let quoteButton = document.querySelector('#quoteBtn');
quoteButton.addEventListener('click', clickQuote);
function clickQuote(){
generateQuote();
}


//function to pick a quote from array
function generateQuote(){
const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
document.querySelector('#quoteOutput').textContent = `\'${arrayOfQuotes[random].quote}'`;
document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
}