# Infrastructure
Before we move on to specific pieces of engineering the puzzle, some readers, especially those new to technology may not be comfortable with the different parts that make the whole. This chapter aims to address that by talking about the technology needed for making applications at a level of a thousand feet above.

## How a computer works
All of us may have used a computer and many of us - those engineers at heart - may already know all the parts of a computer. But to go beyond this point in the book, it makes sense to let everyone come upto speed. Though there is a lot more to talk about the internals of a computer we have decided to go deep only on parts that we feel you need to concentrate on when you need to understand cloud computing, which we will discuss later.

### CPU
The **central processing unit** is functional part of the computer. In the physical form it half the size of a credit card and the thickness of about five credit cards stacked on each other. If you think of the functions of your own brain and if you imagine that each type of function is performed by different parts of your brain. The part of your brain that performs calculation would be the CPU. If you had a decision to make this is what would make that decision.

All CPUs run in a similar way. This is why most software can run on most CPUs given just a few tweaks. This is similar to saying that most cars are based on the same principle - there are wheels, an engine, a body and a driver is required to control the car's movement using a steering wheel and pedals. Even then, there are many practical differences that allow for so many types of cars and designs.

The difference in CPUs come from many small factors like the material used, the design of the chip, how good the heat profiles of the chips are etc. But as just a user of CPUs, these attributes get abstracted away by the brand and make and version of the chip. Some of the computing power comes from other attributes such as number of cores - the number of independent computing elements and the clock speed of the CPU, the number of computations taken per second. The same maker may offer multiple variants of the same CPU, while varying these attributes. It is very similar to how a car maker may vary certain features of the car and ask the buyer to choose the feature set that works for them and the price point they hand in mind.

Higher the number of cores effectively means higher the number of parallel tasks the CPU can perform at the same time, similarly, higher the clock speed means higher the amount of work done in the same time.

We shall look into how this plays into your decision making when choosing a virtual computer allocation later.

### Memory
Human memory is complicated, some of us remember vivid details of what happened years ago, but on average will have to work out what we had for dinner last night. There is long term memory and short term memory. Long term memory can we more persistent, but short term memory can be more transient - something that we remember for a while and then forget. How the human brain physically functions hasn't fully being figured out yet, so take these as more as functional analogies for how a computer would function.

A computer also has different types of memory for different reasons. There is the persistent memory and short term memory. The short term memory is written and read from phyical chips called RAM - random access memory. The long-term memory physically can be of the form of rotating disk hard drives, solid state memory hard drives. These are slower but cheaper per Gigabyte of storage. A byte is a unit of memory and a Gigabyte is a 10^9 mutliple of a byte. Accessing memory on a RAM is much faster since every piece of data can be addressed in one step, that is what the name random access memory depicts. It is equally fast to read or write a byte from the RAM regardless of which byte you are reading. This is not true of hard disk drives that built with disks that spin. In such hard disk drives the location of the data on the disk is first 'seeked.' This means that the cursor or reading needle as it were has move to that location and then perform a read. Though this happens with a second, it is still slower than a RAM and when you have to do multiple of these seeks, the time can add up to a point where the different is perceivable.

A new form of long term storage called solid-state drives use circuitry to store bits like a RAM but is a little slower and cheaper per read. These are a little costlier and faster than hard-disk drives. The memory on RAMs will only be available while it is still powered and are connected.

When building your personal system or even designing your virtual systems on the cloud, choosing the right amount of RAM and persistent memory required is important. Less RAM means processes that require lot of temporary memory may run slowly or not and be able to run at all. But allocating too much memory when you don't need it may not make it financially prudent for you.

Hard disk drives store long term memory such as your music, files or data. Earlier this decision was very important because once you buy a hard drive you needed more space you'd have to buy a new hard drive if your computer had extra slots that allowed extra hard drives or you'd need to replace your existing hard drive with a larger size. 

Nowadays with service providers allowing you to store files over the internet and with internet costs coming down peopel are choosing to store their information on the computers of service providers. This has both pros and cons, the pros are that you can extend the amount of space you need without complicated physical effort on your part. The other benefit is that you don't have to worry about losing your hard drive or it becoming corrupted. This can happen more often than not. Storing your data online protects it from such issues. However, storing data online makes it vulnerable to hacking. While these service provides take the best steps towards stopping your data from leaking, there is always a possibility that it can leak. Therefore, there is a tradeoff between storing information online and on your system. Nowadays, except for top state and trade secrets, the tradeoff leans towards using the storage provided by service providers.

### Motherboard
The motherboard is the glue that holds these disparate pieces together. It connects to the power supply, the CPU, the memory, the GPU and has power and data buses. This is an important piece to worry about if you are physically building your own system, but our focus is on the parts that one needs to understand when configuring virtual systems. When configuring virtual computers we don't have control over the motherboard used.

### GPU
The **graphics processing unit** is a specialized compute unit. A CPU functions by having anything from 2-24 cores, where most laptops would have 2-4 cores, a desktop can have anything from 2-6 cores and only the most specialized CPUs having more. A GPU alternatively has many more cores, some in the 500-1000 range. The trade off here is that the types of computation capable by GPU cores are limited. GPUs have been designed to perform multiple small computations in parallel instead of the same number of actions one after the other on a CPU core or set of CPU cores. 

This is very condusive to processing graphics - that is why the name - and recently as been appropriated for deep learning. In both of these applications there there are many small computations that need to be done, and they can be done in parallel. The important demarcater for that being that many of these computations don't necessarily depend on the output of any other computation. To display an object on the screen, be it from a game or just another application, some logic moves the objects, say a mouse or an arrow key, then the actual pixels to displayed are computed from the objects orientation and position. Each pixel has to be computed separately, but with almost the same input. That is how GPUs speed up the process, the input is the same, so the GPU with its multiple cores are able to compute more of the pixels faster.

A class of algorithms called neural networks are built on the same principle, due to some mathematical tricks, any function - that is when an input is given a particular desired output is delivered - can be approximately learned by looking at existing inputs and outputs. That is machine learning in one line. These same mathematical tricks are actually made up of multiple smaller easier equations, or computations, that repeat themselves. This is the exact footprint of a problem that seems to suit the use of GPUs, so recently GPUs have increasingly been used in machine learning and deep learning oriented problems.

It should be noted that the same problem can be solved on a CPU, but may just take longer, while a computer cannot run without a CPU and only GPU.

### Operating System
Those of us who have used software on a computer have probably interacted with a screen using a mouse and keyboard. If you try to connect the dots from the software to the hardware CPU that we spoke of earlier, there is a layer of software that knows how to work with applications above it and be the go-between between the application software and the hardware. Layering is a repeating concept in computer science. If there was no specific in-between layer, one would have individual software that would have to talk to the hardware themselves; for every type of hardware, every software had to have extra code possibly repeated across software that made sure it ran on that hardware., it made more sense for the entire community of developers and companies that there be a single packaged software that knew how to talk to the hardware, while the application would talk directly to that software.

This software is called the operating system. In the 80's there were operating systems created by every major manufacturer of computers, but over time they have distilled down to:
 - Windows: Created and sold by Microsoft Inc. Though earlier rife with bugs, bulky, and more vulnerable to malicious attacks than its counter parts, in recent years it has become a very clean and powerful. It is one of the most widespread operating systems, because of their licensing policy that allowed any manufacturer of personal computers to license the operating system and distribute it. Many important desktop softwares also work on windows. In recent years it has also become an important player in operating systems used to power the computers over the cloud - which we'll speak of later in this page.

 - Mactintosh: Created and maintained Apple Inc. This was created as a child of an older operating system called Unix. Macintosh OS (MacOS) is licensed to work only with Apple hardware. This means that one is not allowed to run MacOS on other types of computers, though technically speaking people have gotten it to work. Recently Apple released their own propreity CPU - Apple Silicon - that integrates the CPU, RAM, GPU and the operating system in such a way that gives a much bigger bang for size in terms of computing power. MacOS runs many of the famous desktop software and is important among visual artists, musicians and video artists because of the software access and the computing power.

 - Linux: The kernel of this operating system is open-source. That means it is developed and maintained by the community. Precisly because of this, people are allowed to make a copy of the operating system source and add their own features which they think is important. And there have been many flavours of Linux that have been created and released. Of them all one of the most used is one called Ubuntu, there are others called Red Hat that are used for enterprise grade software. But Ubuntu is powerful enough and will be the one we are using later. There are many comparitive websites that list the pros and cons of choosing one flavour of linux over the other. Ubuntu also has a powerful desktop that supports it, however, it is not as well supported for famous desktop applications, like MacOS and Windows are. However, because Linux and its flavours are free and powerful it is the most used operating system for cloud computing. This also means that many of the important software, such as databases or programming languages have first-class support for these operating systems. Since linux is based on Unix just like MacOS, they are cousins in many ways and the developer software that works on linux also works well on MacOS. But is not a given. However, since MacOS is closer to Linux than Windows is, more software and the commands work on MacOS than Windows.

## How applications work
### Programming
compiling
## How the Internet works
### Protocols
The internet is a net of computers, hence the net in the name. These computers talk to each other over the network. To talk to each other they need some common rules that they follow that dictate how they send information to each other. There are many different pis a very powerful OS that works in a very integrated manner with the hardware protocols available, but the protocols that the internet are built on are TCP - transmission control protocol - and IP - Internet Protocol. In reality there are many layers of protocols that wrap and rewraps and unraps data between a source and destination. Unless your business is specifically in setting up these protocols and networks, you may not have to worry too much about these. If you are building a computer you had to worry about attaching a network card to your mother board. But nowadays, mother boards come integrated with the network card.

### IP Addresses
The Internet Protocol dictates that each computer that needs access to the internet needs an Internet Protocol addres - or IP address. This is how information knows how to locate its source and destination. IPv4 addresses are made of 4 numbers that range from 0-256 each. But the number of addresses that can be allocated have been running out. And to mend the issue of limited IPv4 addresses, the bodies that maintain the internet proposed a new addressing system - IPv6 - that uses many more numbers so can handle orders of magnitude more addresses for allocation.

### Domain Name Service
When you want to call someone on the telephone, you first look up the number in some form of a directory either the contacts on your phone, or you try to google it. Similarly there is a directory that maps an address that is made up of words - a domain - to an IP address. These are services called the domain name service. Everytime someone creates a website, they first have to register their desired website address with a domain registrars, which are companies that provide services for exactly that - registering domains.

When someone tries to access the domain, the request first goes to a DNS which provides the IP address that the request should be routed to.

### Ports
If IP addresses identify individual computers on the network, ports identify processes or system running within that computer. A port is a logical address that a process can be setup to continuously listen on. When data is sent and the port is specified then the data is rerouted to that process that is listening on that port. Some ports are well known. That is they have been defined for particular functions. These are usually port numbers below 1024. Examples are servers that serve websites can listen on port number 80. While those that serve a more secure version of website use the port number 443.

### Firewall
There is nothing fundamental about how the data is transfered over networks that automatically protect it. In a sense, as you have seen the internet is a bunch of protocols and understood and accepted rules of engagement between different computers and equipment that run it. Firewalls are another set of rules that one sets up on their computer or network to give one more round of protect against external malicious actors. 

## Cloud
### Compute
Lets put all of these components together to talk about the cloud. Many of you may have already heard about the cloud in popular writings such as the newspapers. Essentially, the cloud is a set of computers that are always on and always connected on the internet. Earlier to host websites, data or other information developers had to assemble a physical computer, run the website code on their computer and connect the computer to the internet through a static IP address. Most IP addresses given by the Internet Service Providers (ISPs), companies that provide access to the interent to your office or home, are dynamic. That is they are periodically changed for computers that are connected to the ISPs. Static IP addresses means that the IP address assigned to your computer on the public interent is constant. This is the IP address that would be distributed or will be attached to a domain name, with the mapping saved on a DNS.

This is a large amount of set up for users and involves maintaining the computer and the network. That is not to mention taking care of the power supply and cooling requirements. Over time service providers started organizing multiple computers together in a large specialized space. And providing access to the computing resources. By creating logically partitions, using something called hypervisors, on the computer they were able to create what looked like a separate computers to users but were actually on the same physical computer. This brought down costs due to the sharing of resources, but at the same time provides safety of data to the different users due to clear logical demarcations.

The real game changer were the solutions from Amazon - Amazon Web Services (AWS) and many years after that from Google. They provided access to compute resources, databases - we'll talk about what databases are below - and later GPUs at a click of a button on a console or even through code, so it was possible to run code that would ask for more resources from these services.

We spoke about how a physical resource could be shared among multiple users or companies requesting resources. But these tools it went a step further it allowed the amount of resources used by an application or company to change dynamically according to the demand. This meant that companies ended up paying exactly proportional to the number of users using their application. If a company used more resources than needed then it ended up paying extra, but if it used less than required then the users may experience a slower response from the application or not be served at all.

For the rest of this book we'll be using the offering from DigitalOcean, they are smaller than Google and Amazon, yet they pack quite a punch. Much of the technology concepts are the same between these providers, only the individual branding between them would change. For example the offering that provides a computer on the cloud is called Droplets at DigitalOcean, while it is called elastic cloud compute - EC2 - at AWS.

Most service providers have different tiers of machines available. For example, DigitalOcean provides a minimum of 1 GB RAM, 1 core of a CPU and 25GB of storage on the machine, to 16GB RAM, 8 CPU cores, and 320 GB storage on the shared machines. They can go higher when you opt for a dedicated machine. 

### Databases
Handling data on a computer have can we as simple as storing the data in a file on the hard drive and having it read. Fundamentally data is stored as binary files, that is a sequence of 1's and 0's. This data is hard to read by humans directly, in fact human memory works in different ways which are not fully know yet, but just take a moment to imagine, how is it that you remember information. Think about your name, your address or your phone number. You remember the words or the string of numbers and know the relationship of that word to other words or entities. So if you yourself is an entity, your name is another entity that has the property of a word or set of words people can use if they want to call you or refer to you.

Any organized data is a called a database. If you had the information of all the people at your work place, you may have their name, their employee ID, their designation, the group they are in, and maybe their managers name. You can easily organize this information as rows and columns, where the rows are the different people, and the columns are the different attributes of the people.

Some readers may see the familiarity with this and Microsoft Excel or Google Sheets spreadsheets. This familiarity is not unfounded. Many databases can be represented as what you see in the spreadsheets.

There are many forms of representing data in databases. Two of the most used forms are Relational Databases and NoSQL databases. The first represents data in the form of tables that are essentially the row-column depiction we were talking about. While NoSQL databases store the data in the form of documents, where every document is allowed to have their own attributes. Relational Databases are stricter about what data can be added to the tables and that sometimes is a needed benefit for applications, where validation of the data being entered is enforced. SQL databases are also what many legacy applications are built on. Though there is almost little to separate the two, it has become a matter of preference of flavour, and sometimes the costs involved.

Database Management Systems (DBMS) are software that help manage these databases. There are some typical actions that one would want to perform on data within the database. The actions are captured in this acronym of their first letters, CRUD:
 - Create: Adding a new row to the database. Taking the same example, as the database of your co-workers, this action would be adding a new co-worker to the list.
 - Read: This the ability to retrieve the data already added to the database.
 - Update: This the ability to edit or change certain attributes of a row in the database. For example, changing the designation of a co-worker.
 - Delete: This is the ability to remove a row, in the same example, it would removing an entry for a co-worker in the table.

To perform these actions DBMS users use a form of code that is declarative. This means the code declares what data is required from the database or to be added to the database rather than informing the database of the procedure to follow. These are called 'query languages' and there are different form of query languages for different forms of databases, but Structured Query Language - SQL - pronounced as 'sequel,' has become one of the standard querying languages for relational databases. An example of 

DBMS systems are software that can be run locally, and indeed many  


## Running code on your local system

## Tutorial to access an actual droplet

## Languages, frameworks and other technology
### Python
### Flask
### Javascript
### React
### MySQL
### JSON

## Docker
## Services
### APIs


## Build versus buy