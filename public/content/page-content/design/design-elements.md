# Design Elements
When whiteboarding the flows, we created screens with multiple elements such as navigation bars, input elements and buttons. An astute reader would ask how did we know what elements to use for what purpose and where to place them, for example, 'Why is the navigation menu available only when clicking the hamburger icon? Why not place the menu elements in an always available list on the top of the screen?' There are no hard and fast rules when designing flows and placing elements on the screen, in fact, different companies may welcome this fluidity in design - if implemented well, unique designs can be a real hallmark and selling point for their brand. But that being said there are boundaries within which designers try to work. The reasons for this are:

**Familiarity:** Earlier, when computer applications were still new, they used to ship with manuals that users had to read to understand how to work with the software. Nowadays, users expect intuitive applications that they are able to use and understand on the fly. This means however much application designers would want to use designs that make them standout, if a user is expected to be able to open a new applicaiton and 'just use it,' there will have to be a lot of elements that are common between applications.

**Productivity:** Some applications, such as those that help you book a cab or those that help you book a flight tickets either need to be fast, the user needs to get to a place fast, or they need to be able to analyse a large amount data like flight prices in a short amount of time. To book a cab, the user will need to provide some information such as destination and type of ride they want, as we have seen earlier, these applications will be optimised to lower the time between the user starting to using the application, and the cab arriving. Over years of experimentation, certain patterns have been achieved by different companies that have now become optimal. Designers will no doubt be experimenting with even faster flows, but these optimizations have plateued out such that the probability of finding new patterns have reduced.

**Development Speed:** Having your brand stand out, while important, may not be the most important factor for your business, may be as a developer you may have a higher premium on just getting the application out there in the hands of the customers and have faster shorter feedback loops for the both the business and the actual application. The fact that many of the patterns and elements are repeatable helps this because, in many cases developers can choose not to reinvent the wheel and start working at a more abstract level putting together screens with these smaller elements with less thought than required.

The tradeoff between familiarity and uniqueness translates to knowing the rules of design and knowing when to break them. That means a designer would first know the general rules that go into a design, the designer would then try to be creative by creating new components or adapting exisiting elements, then the designer will have to have some objective way of measuring the effectiveness of their new designs. There are ways of testing their designs, these range from qualitative methods that involve asking a chosen set of users to use their implemented designs and asking them for their feedback to qualitative, which are more statistical, where the implemented design is deployed to a larger set of users, and their usage metrics are measured and analysed. We discuss these methods in the next [page](/design-validation).

## Design inspiration and guidelines
Design, being a creative process is driven only partially by craft, unlike programming. The other part of designing is an artfrom. And like for most other artforms, their practisioners are informed by other existing implementations, studying techniques, and learning about tradeoffs. The following enumerate some types of resources that designers use:

**Guides, Templates and Frameworks**
For the reasons mentioned above, familiarity, productivity and improved development speed, designers have put together guides that describe common best practises that they have collected from years of experimenting. One such guide is that of [Material Design from Google](https://material.io/design). Much of what we have written below is an abstraction of what is written in this guide. Coming from the same stable as the Android operating system, material as a design language is what drives Google's own application as well as is the basic out of the box design for applications built for the Android operating system. A design language is a set of specifications for elements of the particular design used. The elements could be the style of buttons, layout, colours or text.

Material is detailed design specifications that is both abstract and specific, allowing brands to customise the designs such that they stand out but at the same time maintaining the basic layer of usability. Their documentation is a very good resource to read to understand how all the different elements can come together to create a harmonious UI.

Other companies such as, but not limited to, [Apple](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview) and [Samsung](https://design.samsung.com/global/contents/one-ui/download/oneui_design_guide_eng.pdf) publish their own design guides. While many elements may be common in these design guides, their particular implementations may differ slightly.

To ease designing time designers may choose to use templates or systems that provide the UI of basic elements off-the-shelf and ready-to-use. Usually, designers use mocking up tools to help them build UIs that resemble the end product closely even they aren't fully functional. These mockups are easier to create and thus all the designer to iterate through designs faster. The mockup tools can incorporate libraries of these templates that allow the user pick and place these elements in their designs. Without these elements the designer would have to create them from scratch and because basic UI elements are now common and repeated often in most designs, most libraries cover all elements that are required to design a workable UI for most applications. An example is the [Material Design Kit for Figma](https://www.figma.com/community/file/1035203688168086460). [Figma](https://www.figma.com) is a software that designers can use to mock up UIs.

If templates provide the UI for use in mocking tools. Systems such as [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) provide elements that can be used by developers when coding. Developers can import a package that provide designed elements, such as buttons and layouts, that can be used in a production system. This means the elements come with the underlying HTML and CSS - concepts we will get to later.

**Similar applications** A part of an architect's studies involves visiting prominent buildings to observe them in flesh. Especially if the designer has to work on an application that is very similar to existing applications, it helps for the designer to use the application themselves, both as a user and in a critical manner. While a well-functioning existing application may not be the best possible implementation, the developer can use is as springboard by examining what the application designers and builders got right and what could be improved upon. The analyses doesn't have to constrained only to applications that solve the same problem, for example if the designer is designing a ride-hailing application they can even look at logisitics or courier applications since many elements may be similar between them.
Some interesting analysis can be:
- How many pages does that application need to complete the entire flow?
- Are there too many elements on the page?
- Are all the flows easily discoverable?
- How does the application convey information effectively?

**Portfolio sites**
Sites such as [Behance](https://www.behance.net/) and [Dribble](https://dribbble.com/tags/ui_ux_design) are social networks for artists and designers to display their portfolio. As a catalogue designers do not feel restricted and often the designs are those that push the envelope and elaborate, can be interesting to those designers of products which have a mandate to standout.

**Blogs and Peer reviewed papers**
Just like portfolio sites are a good source of visual inspiration for designs, blogs written by designers are good sources for the understanding behind the whys and the why nots of their designs. These can differ from general guides as they may discuss what worked for them and what didn't, how they broke certain rules to attain a certain effect and whether that effect worked out better for them on user testing.

Peer review or academic papers may take a more scientific view towards these designs. While writing a blog is easier since it doesn't have to go through extra steps of peer review, editing and publishing, but at the same time the peer-reviewed articles can be more complete, detailed in their proposed ideas, analyses and testing.

## Principles of Design Languages
### Predictability 
If the aim of the design is to be productive, then users would expect the familiar elements to work in familiar ways. A button will always click unless if disabled, a navigation button will cause a navigation unless there is an error, in which case the user expects to be informed. In the first case a user will not appreciate a design where the button looks clickable, but when clicked performs no visible action. In the second case if a navigation button is clicked, but an error occurred which prevented the navigation from taking place and the user was not informed of the error can lead the user to feel the navigation button doesn't work or is not linked up to the rest of the system.

Predictability also extends to the layout. In most cases users expect a navigation or tool bar to be a bar and available easily to the side or to the top of the work area. The elements of the bar should be easily accessible. A probable bad design here would be for the user to move to another page everytime they have to choose a new tool or navigate.

For well known applications or user flows, users also expect a predicable business action upon some particular interaction with the user interface. For example, clicking an 'add to cart' menu is a specific action of ecommerce websites, but it is well-known enough that users will expect that upon clicking the button, the item will be added to the cart unless there is an error condition.

### Consistency
Like predictability, consistency as a principle can be extended across the various facets of the UI. In given application users will expect the same style of buttons, similar meanings for colours and similar meanings for font-styles throughout the application. Of course there is room to navigate this, such that different areas of the applications can have different styles, but there has to be a reason or clear division between these areas. If there is no reason that a user can pick up on easily, it can feel disorienting and distracting and may actually impair their ability to perform the tasks at hand.

The principle of consitency can also be applied temporaly, this means that a particular work flow should work in a similar manner with similar outcomes given the same set of inputs. For example if clicking the back button takes a user back once in history, then the user will expect that clicking the button will not navigate back 2 or more pages in their navigation history.

### Discoverability
A user familiar with the application may know what they want and how to get it from the application. But users new to the application may have to discover how to use the application or even what it can do. Application developers can publish guides for potential users training them on how to use the application. But nowadays, applications compete for users' ever fleeting attention. Unless the user is in a very specific situation in the application, they expect the application to be intuitive enough for them to just start using it.

If the application has only a few possible actions then the task of designers are fairly simpler. If the application, however, has many flows that the user may want to go down, then a primary question for the designer is how should the application display these potential paths as options to the users. An option is to add navigation links to a navigation menu, but in many cases users may not necessarily understand the navigation links, for example some users may not understand terms on banking applications such as 'manage funds' versus 'send funds.' The degree to which the application is able to educate the user such that they are able to link their purpose or intent for using the application with actual physical steps on the application that will deliver them the end result they seek will determine how discoverable the flows are on the application.

Real estate on application screens is at a premium. Designers will have to find a balance between having screens that are too crowded and potentially overloading the user with too much information with having screens that are so sparse that they are not able to display all the information that they need to.

One element in the designer's toolbelt for improving disoverability is the use of search. Implementing good search systems will provide a way for users to just state what they want by mentioning keywords. Depending on how the search is implemented and the quality of the matches between keywords and actual flows search can be a very efficient way of discovering user flows.

Another method for improving the degree of discoverability is to improve the scannability of information in the application. Users will be able to go over dense information as long as they are available in an ordered fashion. This can be through the use of tables, lists and even sorted lists to allow users to scan and find what they are looking for.

### Order
Parsing lots of information can be easier for users if they are easily grouped or ordered. Heirarchical ordering groups information in a tree fashion where at the top of the tree the information is split into more macro division which become smaller and specific as the user goes to the lower levels of the tree. There are many ways this heirarchy can be conveyed to users. For example, there may be different font styles from larger and bolder for macro information to smaller font sizes for the specific information. Users can gloss over larger text to find the broad area they are interested in before diving deeper in to that specific section. An example of heirarchical design is in print newspapers where the sizes of headings, subheadings and text allow users to gloss over the main information quickly before looking at the smaller text for details.

Heirarchy doesn't have to only apply to the way text is displayed on single page, it can also apply to the way the navigation to different pages of the application are ordered. Some applications may require user to flow serially, while others may have a tree-like or graph-like flow between the pages like how we showed for ['In my pantry.'](/whiteboarding)

### Legible
When designing applications, in the quest to use colours patterns and fonts that help the brand standout designers may inadvertantly create designs which users may find hard to read. These involve using fonts created purely for aesthetics and not necessarily for legible reading, or using a colour for a font and its immediate background that do no not contrast very well. In an extreme case, densly placed elements of text can make the user strain too much to keep tab of where they are looking, but elements spaced too sparsely or that are sized bigger than they should be can require the user scroll too much and lose site of the bigger picture, even if individual elements are legible.

For some users, more would have to be done to improve legibility and make the text on the screen accessible. For some, much larger fonts can do the trick, while for others the text will have to readible by a screen reader. Care should be taken to make sure that these needs are accommodated.

### Real-time
How fast a response should be to be deemed real-time is subjective. It depends on the expectations of the user for the given request and expected response. When typing a user may expect text to reflect on the screen withing micro-seconds if not in nano-seconds, but when sending an instant message, a user may be okay waiting for a second or two before they are informed that the message has been sent successfully. Due to the subjectivity it can be hard for a designer to know off-hand what the expected speeds can be. Of course a designer will push for the fastest possible reaction times from the application, but these speeds are constrained by the physics of the problem - network or compute speed. On the other side of the spectrum, there is a speed at which users will find the application unusable, or less extremely, may find a competitor's application faster to use and hence shy away from using the slower application.

Sometimes, the current speed of implementation may be fast enough. While the application could possibly go faster, it may not have any visible impact on the way users interact with the application. These can be tested using A/B testing, which we cover [later](/design-validation), to understand the impact of speed on users.

### Adaptive
The amount of information that can be shown at one go changes according to the screen size or orientation through which the user is interacting with the application. Larger screens will have the space to display full menus along side the main content, while smaller screens will not be able to. Displaying screens designed for smaller screens on larger screens will feel like the application is not using all the space available to it wisely. Designers now design applications in such a way that they adapt to the size of the screen available. Using a combination of fixed sizes and spacing along with those that change proportional to the screen size the design can place items in the most optimal locations given the width and height of the screen. But this does not always work that cleanly. As the screen size reduces there is only so much adjusting proportional sizes can attain. At a some point, it makes sense to just change the design of the screen. This is where breakpoints and orientation come in. A designer will effectively provide different size and placement attributes to elements for different sizes and orientations of the screen. One can think of this as a lookup. If the screen size and orientation looks like a mobile phone held in potrait mode then use this design, and if it looks like large screen in landscape mode then use this other design.

### Branding
In many cases websites are the first interaction a user would have with a company. Memorable websites that have values such as comforting and calm (or even the opposite, artful and rule-breaking) could be difference between your target audience becoming your cliental or not. Of the larger elements typography, color and even layout can be used to create that touch that defines the brand. Care should be taken though that the other principles are not broken unintentionally.

### Intentional
The way applications are coded determine how the designs are implemented. Much of the code is declarative, which means the developer only has to express how they want the design to look in code, the computer is responsible for actually manipulating the display. This means that often there may be implementations of the design that are not intentional. Text, images or other artifacts may appear in wrong positions or outside there bounding boxes, often making the information hard to parse for the user. Allowing such breaks in expected behaviour can signal to a user a message that care was not put into the implementation of the design. To avoid these errors, it makes the sense that the designer thinks about and tests every change in the application and make sure every state, location, colour or attributes of elements are such out of intention and not serendipity.

### Imitating real world
Many elements in user interfaces imitate real-world elements. For example, buttons, lables, radio buttons to name a few directly translate from physical interfaces or boards that were used to control systems - think of a cockpit of an old-school aircraft. The real-world elements have tactile, visual and auditory sensory elements. Buttons look raised and pressable, have an audible click sound when pressing and have inherent resistance to pressing. While it may be hard for digital UIs to reproduce the tactile sense for users, they reproduce the visual and auditory sense. Part of the visual aspect is adherence of the movements to real-world physics. When moving objects in real life from rest, they rarely move at a fixed velocity, they tend to have a period of acceleration and deccelaration, or to say it differently, when starting from stationary, the speed of the element starts increasing till it reaches its top speed, until the speed decreases gradually before coming to rest at the end of its motion. Recreating these aspects makes the UI look and feel more natural and can have soothing effect due to similarity with that they are already familiar with.

### Breaking the rules
These principles are in no way hard and fast. They are good to follow for designers who are new to the field, or to those who want designs that are sure to 'just work.' As with any other field, there is a good deal of innovation that goes on in design, this alongside the need for brands to stand out will warrant breaking of these rules just to see if they still apply. For example, it was the norm for icons to be as photo-realistic as possible, with complex shadows and tints, but over the years these were phased out in favour of flatter single-tone or dual-tone icons - they turned out to be legible.

Breaking the rules above is perfectly fine as long as the designer understands why and how they are breaking them and whether they serve a purpose. But breaking the rules does not have to be as frightening as it may first seem. If a designer tests designs out with potential users using both qualitative and quantitative methods they will be able to quickly weed out bad innovations and see if the innovation performs better with the users than the existing designs.

## Layout
**Breakpoints**

**Columns**
**Elevations**
**Different designs**

## Typography
## Components
**App bars: bottom:** A bottom app bar displays navigation and key actions at the bottom of mobile screens

**App bars: top:** The top app bar displays information and actions relating to the current screen

**Backdrop:** A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content

**Banners:** A banner displays a prominent message and related optional actions

**Bottom navigation:** Bottom navigation bars allow movement between primary destinations in an app

**Buttons:** Buttons allow users to take actions, and make choices, with a single tap

**Buttons:** floating action button: A floating action button (FAB) represents the primary action of a screen

**Cards:** Cards contain content and actions about a single subject

**Checkboxes:** Checkboxes allow the user to select one or more items from a set or turn an option on or off

**Chips:** Chips are compact elements that represent an input, attribute, or action

**Data tables:** Data tables display sets of data

**Date pickers:** Date pickers let users select a date, or a range of dates

**Dialogs:** Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks

**Dividers:** A divider is a thin line that groups content in lists and layouts

**Image lists:** Image lists display a collection of images in an organized grid

**Lists:** Lists are continuous, vertical indexes of text or images

**Menus:** Menus display a list of choices on temporary surfaces

**Navigation drawer:** Navigation drawers provide access to destinations in your app

**Navigation rail:** The navigation rail provides ergonomic movement between primary destinations in an app

**Progress indicators:** Progress indicators express an unspecified wait time or display the length of a process

**Radio buttons:** Radio buttons allow the user to select one option from a set

**Sheets:** bottom: Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen

**Sheets:** side Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen

**Sliders:** Sliders allow users to make selections from a range of values

**Snackbars:** Snackbars provide brief messages about app processes at the bottom of the screen

**Switches:** Switches toggle the state of a single setting on or off

**Tabs:** Tabs organize content across different screens, data sets, and other interactions

**Text fields:** Text fields let users enter and edit text

**Time pickers:** Time pickers help users select and set a specific time.

**Tooltips:** Tooltips display informative text when users hover over, focus on, or tap an element 

## Iconography
Why use iconography
## Interaction
**Disabled:**

**Hover:**

**Focus:**

**Selected:**

**Activated:**

**Pressed:**

**Dragged**

## Animation
Sibling animation

Going down heirarchy animation