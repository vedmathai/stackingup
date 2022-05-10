# What is this book about?
All software projects start somewhere. They start with an idea; an idea that can potentially make money (or not); an idea that can disrupt set ways, or an idea that fills a gap. There is a point at which the only way forward is to cease talking about the idea and to actually show it action. What then? This is where this book comes in. Got an idea? How do you take to a full blown working system that can actually scale?

# Who should read this book and what are your takeaways?
This book is not about prototyping a simple working representation but actually building the real thing. Many people wonder what it really takes to build a working system, and you may fall under one of the following:
Potential Startup Founders:
Specialists who have worked only one part of the system and want to have a more complete view:
Students or recent graduates:
Other professionals who are from other walks of life:
You just a knowledge junkie and want to know more:

# Doesn’t such a book already exist out there?
Yes, probably, but it definitely is not an in-your-face first-page-of-Google publication. 
Things are not wholesome
Talk about all aspects
Give you the reasoning why
Teach you how to make decisions and rework your path.

# How do you read this book?
Like all technical books there probably are different ways one can approach it. The amount of time an expert may spend on a chapter may be inversely proportional to the level of their expertise. If you fall under any of the categories mentioned above that read ‘I have no clue about how to engineer a product,’ then you may want to read the chapters in the order defined in the front page, skipping chapters as you get more comfortable.
But if you are new to the space, I suggest reading the book cover to cover, skipping over some of the details to which you can return later. When I read about a new subtopic or even a new subject, I like searching for a one-size-fits-all book that can provide the lay of the land, after I have gotten that I then choose specific topics to spend more time on, hopefully this book is written well enough to warrant that type of reading.

# Is there a print book?
No but do contact me if you are a publisher and interested.

# Why is this free?
I am who I am because of a lot of great free content out there on the internet. I always wanted to give back to the community and this is it. I also always believed in the Bernoulli effect. Giving this away free may get me some paying gigs later. Also, it may give me the opportunity to plug some merch and make some money on that. I don’t plan to put any advertisements here, they cramp my style.
Do I plan to make this a course? I may, but not right now.
Do support me on patreon though. Help me out by funding some of my coffee and hosting the site. Take what you want, give what you want.

# Errata.
If you find any mistakes, do let me know, I’ll add your name to the errata page.
I don’t plan on making this a wiki or have a forum for community discussion here.
If you have a good argument for any one of the points made here, let me know, if it enhances the discussion, I’ll include it in the main content itself, and acknowledge you as so, ‘According to @xyz….’

# Licensing.
You can use the ideas and code freely in your software products, that is the whole point. If you are making educational content and want to use this content, you may do so but I would prefer if you acknowledged this site in some way, and drove some readers here. Try not to copy and reproduce entire pages though.
So yeah, you should consider the exact text copyrighted to me, but in case you want to reproduce it, shoot me an email and I would mostly accept it.

# What are we building?
A good book has the right mix of abstract theory and concrete practical cases that apply the theory. The abstract explanations help readers create mental frameworks that allow them to solve a wider range of problems than just the concrete ones explained. But the concrete forms of those explanations help the reader anchor the explanations somewhere and makes it just that bit easier to remember.
In that light, we are going to attempt to build a recipes app.
Designing the requirements is going to be one the next thing we do but the main ideas are the following, it’s got:
* A search function that is able to look up recipes by the title or the explanations.
* A reverse-search function that is able to look up a recipe given the ingredients.
* A content-management system that allows users to add new recipes.
* A user-management system.
* A swanky front-end.
* A recipe generating tool that is able to take in the starting words and start suggesting the rest of the recipe for users while writing the recipe out.

We are going to be building this using:
* Python for the server side code.
* The Flask for the API endpoints implementation.
* React for the front end.
* MySQL for the database.
* And a smattering of different libraries for Machine Learning.

That being said, and to again reiterate what has been mentioned above, while we promise that we’ll go through all the lines of cod into enough details in the code so that a reader can implement a fully-functioning app. We’ll be concentrating more on the whys and why nots. This will help move to other versions easily.