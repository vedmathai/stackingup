# Architecture
Any complex system is build by putting many smaller more specialized pieces together that perform a particular task and interact with other pieces that also perform their own tasks. For example, cars are put together with parts such as an engine that converts fuel to motion and wheels that tranfer that motion to the ground, and while they individually cannot do what a car does, they do their own tasks and interact with each other to get useful work done.

Similary a software application is a system of many smaller programs or parts that are tasked with certain speicific work. The interaction between the parts allow the whole to do tasks that any of the individual tasks couldn't have done on their own.

The parts of a fully working app can be split into two parts, what are commonly called **the front-end** and **the back-end.**

To simply explain what the difference is: When we interact with a mobile application or an application that runs on a browser, the interface that we see and the processes that support the display and interaction with the you is called the front-end. The portion that runs in the cloud, say the database or any processing such as converting the format of an image that takes place as part of your application is called the back-end.

## Front-End
Depending on the types of physical devices a user is using to interact with the application, the user may be touching, dragging, typing or using a mouse to intract with a screen and move a cursor on it and click on buttons. Though many, the types of interactions have streamlined over years and are now fairly common. But to understand these complex interfaces, it makes sense to first discuss the simplest form of interaction between a computer and a human - typing.

Assume a computer with a screen that just displays text and a cursor. There is an application running on the computer that does just two things, excepts text and prints text. Say the interaction you want to have with the computer is to search for a file with the name 'accounts' on it. You can probably type, 'search accounts,' and if the file exists the screen will display all the files with names that contain the word 'accounts.' There would also be other commands that help you read the file or even delete the file. But the general pattern is such, the interaction triggers some process that does some work and returns a result. Now keeping this pattern the same, we just change the styles of interaction, say moving the cursor over a displayed button with the label 'delete file' and clicking it,' here there would be some logic written somewhere that says when this button is clicked, delete the file from memory.

That is the functionality of the front end, there are many interactble elements that in many cases resemble elements we would see in our physical world. For example, radio buttons allow you to choose only one of AM or FM radio. A checkbox is a common element in physical forms and toggle button allows you to switch between one of two states, just like a light switch. Using these elements makes interacting with the processes faster and more intuitive to use than systems that require one to memorize commands to get the work done.

### How do front-ends work?
Front ends have a very different style of execution for their code than a script. A script has a start-point and an end-point and running the script entails going from the start-point to the end-point while going from one instruction to another in order. Interactive front-ends also have a start-point. They don't necessarily have an end-point, once they start they may perform some setup steps in order but after that they end up in a state where they are waiting for a user's interaction. The specific term used to describe this is 'listening.' Essentially, there is nothing more to 'listening' than the program being on a perpetual loop, checking to see if any interaction was performed and then branching off to process that interaction before returning to a perpetual loop. Why does the system need to be in a perpetual loop? This is because of the way the CPU works. The heartbeat of a CPU is about moving from one intruction to the next. In a script, the flow of instructions are clear, but in a interactive system the next instruction to execute is known only based on the user interaction, and until that interaction comes in the application has to perform some activity or will have to stop executing. That activity naturally is to keep executing the same command again and again till an interaction from a user is detected.

### Instantaneous reaction times
There are other types of functions that a UI performs apart from listening and waiting for an interaction from the user. For example, it may be waiting for a reply from a the server after having launched a request. It may be performing manipulations upon some data, or it may be deliberating how to change the screen as a reaction to an input or server response. When a user interacts with a UI they usually have a sense of what is instantaneous. This means that when a user provides an input to the system they expect a response under some given fixed time. What that quantum of that time should be depends on the action. If it is a button that is clicking a checkbox they would expect the input to be registered under a second or faster. If it is a button to move to another page, they may expect the new page to load in a few seconds in cases of pure text pages to under half minute for pages known to have a lot of media on it.
### Model-view-controller
Imagine a scenario where a user provides many inputs in close succession to the application, and the first input triggers some process that takes time to complete, for example, fetching more data from the server. The actions that the UI code will perform will be the following:
 1. accept the action from the user,
 1. acknowledge the action to the UI by updating the UI,
 1. perform an action such as requesting to the server and/or updating the local datastructures,
 1. update the UI based on the new UI.

These involve 5 disparate activities: listen for an interaction, perform some logic, talk to a server, update the local datastructure and update the displayed content.

The way these are written in code are also very different, where performing logic and updating local datastructures are more of step-by-step instructive code, while changing the display involves manipulating declarative style HTML and CSS. Most UI action involve most or many of these action, and writing each of these together in the code can be very confusing to a reader.

A model-view-controller is a paradigm that helps split up these concerns. The premise is that the elements displayed on the interface are always informed by an underlying datastructure, and any manipulation done is done to the datasctructure. This datastructure is the 'model' in the name 'model-view-controller.' The 'view' is the declarative HTML and CSS (or alternatives) that define the elements to be shown on the screen. The 'controller' is the processing code that performs the logic that talks to the server and manipulates the datastructure.

The browser or operating system is perpetually in a loop that looks to see if any interaction from the user has been registered, see if any response has been received from the server or elsewhere for a request sent earlier and performs and actions on any data. The perception of near instantaneous response time of the UI is acheived by a meta-loop that executes a line of code or instruction for each of these activities before moving to another line from another of these activities.

## Servers
The front-end code is something that runs local to the device that you are using to interact with the application. What does this mean? The device that you would use to interact with an application is a full-blown computer, regardless of whether it is a mobile phone, a desktop or an integrated system such as screen that you use to control your car media. It has a CPU, memory and motherboard. The application is running on these resources, or in other words the processing, the storage of data and the manipulation of the screen are done on the physical device in front of you.

In some cases all of the processing needed for your entire application or even some flows of it to be useful can be performed on the local device CPU. Examples of this are the calculator application or phonebook application that stores phone numbers on the local memory of your device. But in many if not most other applications there is a need for the application have some portion of its processing on some other more central machine through the internet.

There can be few reasons for this:
 1. Data: 
 2. Heavy processing: Nowadays the phones or other handheld devices have enough processing power to do all but a few tasks. In some cases, systems may be designed where heavy actions are performed locally, but this can introduce a high amount of variability for the developer. Some systems may not be powerful enough to perform the task, they may be too slow or just not perform the task. Users prefer 
 3. Propreitory algorithms:
### Why run anything on the cloud?

## Application Architecture

As you can see in the diagram, an application consists of a frontend and a backend.

List the parts of the architecture.
Front End
Connecting Layer
Server

Serverless

Microservices

Model View Controller