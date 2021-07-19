     
const QUOTEBANK = 
[
{
quote: "To suffer terribly and to know yourself as the cause: that is Hell.",
author: "Jordan B. Peterson"
},
{
quote: "The purpose of life is finding the largest burden that you can bear and bearing it.",
author: "Jordan B. Peterson"
},
{
quote: "There's no such thing as perfect. Chasing ''Perfect'' is the shortest road to not achieving it.",
author: "Gary Vaynerchuck"
},
{
quote: "Gratitude is the cure.",
author: "Gary Vaynerchuck"
},
{
quote: "The biggest asset in the world is your mindset.",
author: "Gary Vaynerchuck"
},
{
quote: "It’s not about what you did, it’s what you do.",
author: "NF"
},
{
quote:"If money is where you find happiness you’ll always be poor.",
author: "NF"
},
{quote:"Don't compare yourself with other people; compare yourself with who you were yesterday.",
author:"Jordan B. Peterson"},
{
quote:"Music has an intrinsic meaning, which has always been mysterious to me.",
author:"Jordan B. Peterson"
},
{
quote:"Failure is an option here. If things are not failing, you are not innovating enough",
author:"Elon Musk"
},
{
quote:"The first step is to establish that something is possible; then probability will occur.",
author:"Elon Musk"
},
{
quote:"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
author:"Elon Musk"
},
{quote:"When something is important enough, you do it even if the odds are not in your favor.",
author:"Elon Musk"
},
{quote:"I think it is possible for ordinary people to choose to be extraordinary.",
author:"Elon Musk"
},
{quote:"I could either watch it happen or be a part of it.",
author:"Elon Musk"
},
{quote:"Persistence is very important. You should not give up unless you are forced to give up.",
author:"Elon Musk"
},
{quote:"I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
author:"Elon Musk"
},
{quote:"My biggest mistake is probably weighing too much on someone’s talent and not someone’s personality. I think it matters whether someone has a good heart.",
author:"Elon Musk"
},
{quote:"The successful among us delay gratification. The successful among us bargain with the future.",
author:"Jordan B. Peterson"},
{quote:"The whole future lies in uncertainty: live immediately.",
author:"Seneca"},
{quote:"He has the most who is content with the least.",
author:"Diogenes"},
{quote:"Learn to be indifferent to what makes no difference.",
author:"Marcus Aurelius"},
{quote:"Between stimulus and response, there is a space. In that space is our power to choose our response.",
author:"Viktor Frankl"},
{quote:"As long as you live, keep learning how to live.",
author:"Seneca"},
{quote:"We only get to play this game one time. We have one life.",
author:"Gary Vaynerchuck"},
{quote:"When you play, never mind who listens to you.",
author:"Robert Schumann"},
{quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
author:"Lao Tzu"},
{quote:"One is loved because one is loved. No reason is needed for loving.",
author:"Paulo Coelho"},
{quote:"Never love anyone who treats you like you're ordinary.",
author:"Oscar Wilde"},
{quote:"Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses.",
author:"Lao Tzu"},
{quote:"There are two means of refuge from the misery of life — music and cats.",
author:"Albert Schweizer"},
{quote:"The fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.",
author:"Bertrand Russell"},
{quote:"Let us all be the leaders we wish we had.",
author:"Simon Sinek"},
{quote:"There are only two ways to influence human behavior: you can manipulate it or you can inspire it.",
author:"Simon Sinek"},
{quote:"Who you are is defined by what you’re willing to struggle for.",
author: "Mark Manson"},
{quote:"Challenge yourself to find the good and beautiful thing inside of everyone. It’s there. It’s your job to find it. Not their job to show you.",
author:"Mark Manson"},
{quote:"Being wrong opens us up to the possibility of change. Being wrong brings the opportunity for growth.",
author:"Mark Manson"},
{quote:"Happiness is like being cool, the harder you try the less it’s going to happen. So stop trying. Start living.",
author:"Mark Manson"},
{quote:"What most people don’t understand is that passion is the result of action, not the cause of it.",
author:"Mark Manson"},
{quote:"When I wished to sing of love, it turned to sorrow. And when I wished to sing of sorrow, it was transformed for me into love.",
author:"Franz Schubert"},
{quote:"Happiness consists more in conveniences of pleasure that occur everyday than in great pieces of good fortune that happen but seldom.",
author:"Benjamin Franklin"},
{quote:"Happiness is not an ideal of reason, but of imagination.",
author:"Immanuel Kant"},
{quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
author:"Albert Einstein"},
{quote:"Strive not to be a success, but rather to be of value.",
author:"Albert Einstein"},
{quote:"If you cannot do great things, do small things in a great way",
author:"Napoleon Hill"},
{quote:"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
author:"Mark Twain"},
{quote:"Works of art make rules; rules do not make works of art.",
author:"Claude Debussy"},
{quote:"Every great inspiration is but an experiment.",
author:"Charles Ives"},
{quote:"I love you as one loves certain dark things",
author:"Pablo Neruda"}
];
        window.onload = init;
        function init() {
            generateQuote();
        }

        function generateQuote() {
            let quoteSize = QUOTEBANK.length;
            let randomIndex = Math.floor(Math.random() * quoteSize);
            let randomQuoteData = QUOTEBANK[randomIndex];

            let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

            let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
            twitterLink += quoteInApiFormat;
            let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
            twitterLink +=  authorInApiFormat;
            document.getElementById("tweet-quote").href = twitterLink;
            document.getElementById("text").innerText = randomQuoteData.quote;
            document.getElementById("author").innerText = " - " + randomQuoteData.author;
            animateText();
        }

        function animateText() {
            let text = document.getElementById("text");
            text.classList.remove("text-animation");
            text.classList.add("text-animation");
        }