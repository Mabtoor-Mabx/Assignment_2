let quotes = [


    '"The greatest glory in living lies not in never falling, but in rising every time we fall."Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"Your time is limited, so dont waste it living someone else life. Dont be trapped by dogma – which is living with the results of other peoples thinking."-Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt ',
    '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough." -Oprah Winfrey',
    '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success." -James Cameron',
    '"Life is what happens when you are busy making other plans." -John Lennon ',
    '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
    '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin'
]



function generate()
{
    let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    let quotataion = document.getElementById('quotataion');
    quotataion.innerHTML = randomQuotes;

}