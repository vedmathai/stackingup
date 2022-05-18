# Types of Startups
Startup companies can be classified in many ways. There is no hard and fast categorization and how can there be? One of the points of advice in the previous page was that to find the gap in the market, startups can try and combine different existing concepts to create a new offering. In that way, it is only natural that the offerings from startups are going to lie on multiple spectrum.

To wrap one's head around any spectrum it makes sense to talk about the poles at the end of the spectrum. Below is a one versus another style of analysis of these poles.

## Product v. Service
### Product-building company
In the extreme a product is something that is so self-sustaining that a consumer can pick it up off the shelf and just use. Until some years ago this was literally true when software was written into CDs and sold in cereal-box size containers at IT and book stores. Pribably the most famous of these are Microsoft's Office and Adobe's Photoshop.

But more telling than the way users consume the software is the way the developers think about how they build the software. Some of the tenets of product-building companies are:

**Universal users and self-defined requirements**: Products are built for a variety of users. Take Adobe Photoshop as an example, its users span from professional designers creating pixel perfect images for companies to students who need it only for their class projects. Developers of products rarely have direct access to all the individuals who are going to consume the product. This means they need to build for different personas: the software has to be general enough to make it pertinent to all of these personas while guarding against being too vague in its purpose that it unclear what exactly people are supposed to do with it.

Because of the number of different types of users, product companies try to understand the needs of all of their potential user types and try to create a feature list of their product. We discuss later how exactly they or you would do this, considering that we are trying to build a product in this book.

**Releases**: Since product companies are not serving any particular customer and either a community or groups of customers, they need to have some form of interface where the developers declare that this is what they have built and the consumers are able to understand what the developers have built. 
  
A product company releases a *version* of their product at a predefined point with all of the new features published. These can have different time horizons. Some open-source companies release *nightly-builds* of their products, which are cutting-edge versions of their products released every night with all of the features that have been added during that day. These can be very unstable. Other forms of releases involve a larger time-frame, that could be monthy, half-yearly or yearly. Ubuntu releases a version every 6 months with one every 2 years demarcated as a Long-Term Support version.

When trying to understand what constitutes one of the larger time-frame releases, product teams spend a lot of time creating a feature list before working towards them. Before releasing the product, the teams would freeze the feature list, perform large number of tests to assure stability.

**Subscriptions or licences-based revenue model**: The aim for product companies is to find a one-size-fits-all model for all its customers. But that is not always possible as different people would have different requirements and different usage patterns and those who use the product a few times a month would find it unfair if they had to pay the same amount as those who use it all the time. To keep it fair product companies have different methods of revenue generation. They may choose to split their offering into **slabs** which have different levels of their offering at different price points. This could mean smaller slabs will have lesser amounts of processing capability, fewer features etc. These can be pay-per-use for every month of usage. If a customer doesn't need to use the product, they may cancel the subscription. If a smaller slab satifies a customer's requirements they are free to use that. Another method is to offer a **pay-per-use** where the usage is metered by the product and at the end of the month the customer has to pay for how much of particular resource they have used. Examples of usage that are metered could be, 'the number of emails sent,' or, 'the amount of computational time spent.'  

Another method of revenue collection is the licenses-based model, where the company offers the product at an upfront cost, and the user is not licensed to use the product forever on a fixed set of computers. The upside of this is that the user can forcast their expenditure better, but the downside is that if they need to use the product only for a little while, they will have to pay the same as a power user. This can be a problem is the amounts are very large. However, if the company is able to offer the product for very reasonable costs that doesn't break the user's bank, then this may be an option.
### Services-providing company
In contrast, a services company creates bespoke software for client. To mirror the points mentioned above for product companies, the tenets of services companies are as follows:

**Customer-provided requirements**: The customers of software services companies are usually don't have the inhouse bandwidth or capability to build a certain piece of their product themselves. There may be multiple reasons for this, the service they require may not be their core competency, they may required the service only for a short amount of time, or they are trying out a new direction for their product and are vary of investing too much before they are sure about the particular direction. 

To make more sense of this, we look to another field - logisitics. Companies that sell products can choose to set up their own pipeline to deliver goods to customers. This will involve creating a logisitics management software, hiring delivery personnel and managers who can manage them. But if that is not their core competency they will outsource the whole vertical to a company that deals in logisitics as their primary business for a fee. We will be talking about this and similar arguments in [build-vs-buy](/build-vs-buy) section later.

Similarly, services companies know how to build software and provide companies with bespoke software because building software may not be the core competency of these companies at that given moment.

The level of detail business the services companies get into lie on a spectrum. Some may want to understand your domain completely and offer solutions based on just the requirements of your business. For example, they may suggest how to design your system, how to define your user personas (the process of which is described in more detail later). Others would let you decide and design these aspects and create some form of an interface between your designers or team members and theirs. This interface normally will take the form of a specifications sheet. The services company's purview will be to understand the specifications and build accordingly. A light-hearted analogy is if you go to a tailor and say you a need bespoke suit for your wedding, the tailor may ask you the color, the type of suit you are looking at - two piece, three-piece etc. But they wouldn't question your reasons for getting married in the first place! However, if your tailor also happened to be your father, it changes the dynamic a little. 

**Service-level agreements**:
The interface that is involved between the customer and the services company involves all of the specifications. What the features of the software should be, what the expected inputs and outputs are, where the data is going to be stored etc. Since these deals involve large sums of money and amounts of work, the requirements are enshrined in service-level agreement (SLA). These legalize and the promise of the services company to deliver the software at an agreed upon functioning level. Don't take all of this as pure legal advice, but just a pointer towards where you'd have to look. Against these SLA's the customers will provide additional documentation promising the amount that will be paid for this work.

Product companies also have SLAs. But more often than not they structure their business to be a hybrid model. Product companies may offer levels of their product as fixed slabs against a given amount of money. The users then choose the slab they are comfortable with and pay for that. In cases where the requirements don't fit into any slab, usually for high levels of predicted consumption, the product company will offer bespoke level of service derived from their primary product.

**Hours-based or work-based revenue model**:
We spoke of additional documentation above that companies provide promising the amount they will pay given some level of work. But how do the decide how much? Services companies work on multiple models. They may choose to be paid by the number of developers they assign to the project. This means a developer or team of developers will have to work on the requirements full-time. To standardize the unit for the sake of discussion, this is usually a unit called man-hours or person-hours. This counts the amount of work a in terms of work hours. Of course the amount of work depends that a developer can output in the same amount of time varies, but while negotiating the terms of the deal, both the customer and the services company will have an underlying notion of what that rate is.

Similarly, another way to frame this is to define the amount of work and a due date. It is then upto the services company to decide how may developers they want to assign to a given project. This is a work-based revenue model.

But as said before, these are only the extremes of what is possible, companies are often creative in structuring their deals and may include one more these model of pay, inclusive of what happens if the requirements change etc.

## B2C versus B2B

Who are the potential customers of your product? These can range from all member of the general public to a specific set of users that belong to a company or group. The nomenclature used to demarcate the two types of products are 'business-to-consumer (b2c),' or 'business-to-business (b2b).'

B2C apps provide some service to anyone in the general public. Think of a general clothing store at the mall such as **Levi's**, if anyone in the general public needs a pair of jeans they are free to go the store, pay for one and leave. The opposite would be B2B apps that provide their services only to selected people. Think of uniform for firemen or law-enforcement, though they may be generally available, most of the uniform would be bought by the department for their employees and therefore the sale would be from the garment-making business to the considered business, which in this case is a public-service department.

What a b2b app may be less intuitive to some readers than what a b2c app is. To make it more clear take your favourite bank, say Citibank. They would have two sides to their applications. They would have a b2b side and a b2c side. The b2c side is what would be called retail banking or consumer banking. This would be the web or mobile application you as a usual user of the bank can open to see your balance, make payments etc. But there will be another application tha will allow bank employees to access more functionality of the bank. They can use that portal to see your account if you give them permission. They can authorize payments on your behalf, accept and remit cash: things that you wouldn't be able to do on your portal.

Whether the users of a product are the general public or specific users from an company will have an effect on how the product is designed and what the priorities of a developer working on that product would be. We describe in detail some of the attributes of both b2b and b2c products.

### Attributes of b2b and b2c applications
**Functionality or form**: As mentioned above, b2b applications are usually used by only a select group of people, who are employees of a business. To do their job, the employees have to use the application. Most employees will value functionality over form. Which means as long as the application is usable, accurate and efficient, they don't give too much value to it being pleasing to the eye for their own employees.

B2c applications, however, have to apeal to the general public. They need to be fast, efficient and also not create too much cognitive overload for the user. This means they also have to be pleasing to the eye. For example, if given two food-delivery companies, which have all else equal, same delivery radius, delivery time, restaurants listed and discounts, would you rather choose the one which has lightening fast UI with some animations that make it intuitive as to how to do the complicated process of ordering food, entering your address and paying for it, or would you rather go for one which looks industrial, is not very intuitive and requires you to read manuals to understand how to use it? You, as a consumer, will always go for the second because it has less cognitive overload.

**Measurements and Knobs of Success**: Those who'd potentially be the users of b2b applications may not necessarily be the ones who are picking them. Higher management would have cost, delivery time, efficiency as factors. The success of an application will be measured in terms of increased number of processes performed, time saved and bottom-line increased. And since a business has access to all of this data, including knowledge of what it was like before using the application, or when using a competing application, they can be more confident with the data they have regarding the success of the application. Since they also know who all are the users, they can gather grievances better and solve them faster. But the upside is once a business selects and starts using a vendor, the cost of shifting to another vendor increases significantly, therefore once locked-in a b2b company is not incentivised on a daily basis to one-up their competition.

In b2c, it is more complicated to measure success, this is because the developers of the application rarely have insight into who their users are, and what their mindsets are any beyond what is already on the app. This breaks Goodhart's law, 'when a measure becomes a target it seizes to be a good measure.' This is means it is hard to use the app itself to understand user behavior. If the app is hard to use, then no one is going to use it, and since no one used it, you wouldn't know if they are not using it because they don't find value in the end product or because the app UI was hard to navigate. Businesses may still sample some of their users and ask them so. But generally is hard to solve completely, but they resort to tricks such as A/B testing to understand how to make the application more useful. 

The alternate but related problem for b2c applications are that since consumers are free to try and use multiple of competitors of the application as they so feel like, they are spoiled for choice and that means each of the b2c applications are forced to try and one-up its competitor. This means the releases are faster and the feedback loop tighter.
## APIs based versus UI based
Most of the readers here would have used Google maps to find the directions to a restaurant to eat at, and also used Uber to drop you to that restaurant another time. If you would have noticed, the map that Uber uses is awefully similar to the one that is on Google. And that is becaues Uber does use Google's maps to pinpoint the pickup and drop-off locations on a map.

When you were using Google's maps in their Maps application, you were using their UI and were performing searches on their UI, which internally has access to all of the maps data at Google. In the second case you were using the Uber UI, which had to talk to Google in realtime somehow in order to get the map data.

In the second case Uber was using Google's maps API. APIs are Application Programming Interfaces. These are piece of code that when run from your code can access the data at some interface point decided or published by a vendor. Google has proided an interface point that if Uber pings from their code, Google will provide Uber with some decided upon data for a fee.

This is another question for you as a product startup. How are you planning to let your customers have access to resources, data or information that your are selling. What is the mechanism for them to access that value? 

If you are a startup providing a UI, you are choosing to be customer facing as in you expect a real human to use consume your product, as opposed to code or bots. The customers will login (or not) on some UI portal, perform certain actions that can lead to some real world activity, such as having a cab come to pick you up or food delivered.

If you are a startup providing APIs, you are choosing to provide your data or open up your processes to code that is running elsewhere. This may ultimately end up on a UI that is human-facing, but it doesn't have to. For, example you can be a logistics startup who provides APIs, that ecommerce stores would talk to through their code. Everytime someone buys an item and schedules a delivery on that ecommerce site, the site will automatically talk to the APIs and schedule a pickup and drop of that product. No humans have to be involved.

Of course, one does not have to be either API based. One can be both, where the UI provided ultimately is using the same APIs provided. However, based on value provided and resources available, this is a choice that startup founders have to make. Are they primarily providing APIs or are their products UI-based only.

To see the correlation with the previous point on b2b or b2c. It is rare that a layman consumer would want to use APIs. Probably few coding friendly consumers may choose to use APIs to make their everyday life better, but that is the exception not the norm. However, businesses may want and prefer both an API-based solution and a UI-based solution. Often, the UI can be used for debugging specific cases, or for different user flows.

## Technology first versus Operations versus Content first
Deep Tech is a term used nowadays to talk about specific algorithms that do specific tasks. These algorithms are complex to build and the value they provide are like diamond-mines. Entire companies can be built around just providing access to a particular set of algorithms. 

For example, Google provides access to it's speech-text-engine or optical character recognition engine for fee through APIs or even a UI as mentioned above. The algorithm is the product. As a user you provide some data, the algorithm is run on that data and you are provided with the output.

Often barring some extra scaffolding, that running the algorithm is the only operation they perform. These are technology first startups where their value comes in the technology their own. In the case of Google above, consider the AI arm of Google as a separate company for the sake of discussion here. In such companies, customer service, sales, marketing and other arms of a business run around selling, marketing and supporting the use of the algorithm itself.

The **complex operations** that are the crux of certain startups include logistics, data-curation, food-delivery among others. Sometimes the tech is important, for example, Uber's driving matching algorithm can be valuable, but the more important aspect of these startups is the network of drivers they have setup and the ability to handle that many of them and monitor trips and payments. All of the other arms of the company - marketing and customer service - will be setup to run the main operations of matching the driver and monitoring the trip.

Content - netflix and linkedin

Build to support the operations of the business
The Tech is the powerful IP and the operations work around that.