[
  {
    "title": "Typerendering",
    "desc": "For the Typerendering project I implemented an animation in the header of the page and made the whole page responsive for mobile devices. A link to the Typerendering website can be found here.",
    "longdesc": [
      {
        "p": "Typerending mix let you apply CSS based on the text rasterizer and antialiasing your browser is using. I was asked by one of the the creators to create an animation in the header with as less Javascript as possible (and also no jQuery). I used Javascript to create and initialize a grid and used CSS animation to animate each block in the header."
      },
      {
        "p": "The page was only optimized for desktop users and didn't suit mobile users. I used some CSS media queries to create a responsive version of this site."
      },
      {
      	"a" : "http://www.typerendering.com"
      }
    ],
    "path": "portfolio/typerendering.jpg",
    "tasks": "Animation and responsiveness"
  },
  {
    "title": "Red Urban and Etcetera Dashboard",
    "desc": "This project was my main task as intern interactive developer at Red Urban Amsterdam. Creating an analytics dashboard based on a lot of sources. A project that will be used to replace the old Red Urban dashboard.",
    "longdesc": [
    	{ 
    		"p" : "Besides serveral minor tasks as intern interactive developer at Red Urban Amsterdam I had one main task, the Red Urban and Etcetera Dashboard. Red Urban is a digital advertising agency based in Amsterdam. Red Urban is well known by it's clients through it's so-called 'Dashboard'. With this dashboard campaigns can be tracked and monitored in real-time. The information on the dashboard can be important for Red Urban and it's clients. This project took place from February 2014 to June 2014."
    	},
    	{
    		"p" : "At the start of my internship at Red Urban the current dashboard had serveral problems. There was no Model View Control principle, campaigns and clients had to be manually entered and it was overall very basic. My task was to build a complete new dashboard based on the design an UX-designer made."
    	},
    	{
    		"img" : "portfolio/dashboardMenu.jpg"
    	},
    	{
    		"p" : "The front-end is based on the AngularJS framework. Users can login using a code and password and will be redirected to the dashboards they have permission to. At this section you see a clear overview of every part of a campaign and also if it's going well or not (made clear with colors and numbers)."
    	},
    	{
    		"p" : "The front-end gets it data using HTTP request to the dashboard API we made. This backend API is build with the PHP Slim framework and uses RedBeanPHP to interact with the database. A cron job will run on a configured interval to get the newest data from sources as DoubleClick, Omniture, Facebook Insights (app and page), Youtube and Google Analytics. All this data comes in various ways with different data formats and will be saved in one format in the database through all kind of queries. It was a tough challenge to find out each way of connecting with the sources, specifying rules for specific data and to find a way that fits all data that comes from every source based on this rules. The backend is build in a maner that it can be easily expanded with new sources."
    	},
    	{
    		"img" : "portfolio/dashboardOverlay.jpg"
    	},
    	{
    		"p" : "The dashboard has a lot of ways to represent the data and is able to show data at different levels. There's also a time filter, so users can select a specific period of (campaign) time. Admins are also allowed to enter new campaigns, clients, resource (for example, a client can have multiple facebook pages) and new 'rules' for each source."
    	}
    ],
    "path": "portfolio/dashboard.jpg",
    "tasks": "PHP, HTML, CSS, Javascript, AngularJS and MySQL"
  },
  {
    "title": "Coolbest QR-code site",
    "desc": "As intern interactive developer at Red Urban I created mobile pages for Coolbest. You will find this pages by scanning a QR-code which can be found on every Coolbest juice package in almost every supermarket.",
    "longdesc": [
      {
        "p": "Coolbest is a dutch brand for fruit juice. In 2014 every Coolbest package has a QR-code on it's side. If costumers scan this packages, they will be redirected to a page I build during my internship at Red Urban Amsterdam. I made a page for every group of juice and they are all linked to each other. On every page there's also a link to the Coolbest Facebook and Coolbest site and advice how people can get more out of there juice (for example, creating a smoothie with it)."
      },
      {
        "p": "I used HTML and CSS to create the desktop and mobile pages based on the given design (PSD). I also implemented Google Analytics. Because of the QR scan, the mobile version of the pages will be used most."
      },
      {
      	"img" : "portfolio/coolbestPicture.png"
      },
      {
      	"a" : "http://coolbest.nl/mobile/fruit/"
      }
    ],
    "path": "portfolio/coolbest.jpg",
    "tasks": "Creating a mobile and desktop site"
  },
  {
    "title": "ABN Amro wonen",
    "desc": "During my time as intern interactive developer at Red Urban Amsterdam I got the small task to program a page for a dutch bank, ABN Amro. I build this page with HTML and CSS, based on a given design.",
    "longdesc": [
      {
        "p": "During my time as intern interactive developer at Red Urban Amsterdam I got the small task to program a page for a dutch bank, ABN Amro. I build this page with HTML and CSS, based on a given design. Nothing really special, but it was a nice project and a big client for my portfolio."
      }
    ],
    "path": "portfolio/abnamro.jpg",
    "tasks": "Creating a mobile and desktop page"
  },
   {
    "title": "Traffic light simulator",
    "desc": "At the end of 2013 we got a fun assigment for one of our school subjects. We were asked to build a traffic simulator with a XML generator, server and client. You can read all the rules attached to this assignment here.",
    "longdesc": [
      {
        "p": "At the end of 2013 we got a fun assigment for one of our school subjects. We were asked to build a traffic simulator with a XML generator, server and client. We, as a group of 20, were seperated in groups of 2 persons. Each group of 2 had the task to build a XML generator, server and client. The server and client had to be in different languages and the the whole group had to use the same connecting protocol. At the end of the project all the servers and clients had to be able to talk to other servers and clients. There were also serveral rules for buses, bicycles, cars and several priority rules."
      },
      {
		"img" : "portfolio/trafficsimulator2.jpg"
      },
      {
        "p" : "I built the client using C# XNA and also designed the traffic square, cars, busses and bicycles. The client got it's information from the server (the server was made in Google Go). The hardest and most important part of this task (and the essence of it) was to make good rules about the update interval, vehicle changes, traffic lights en other important parts of the project with the whole group of 20 people. When we finished this project we had a very good working server and client, which was also able to work with servers and clients from other groups."
      }
    ],
    "path": "portfolio/trafficsimulator.jpg",
    "tasks": "XNA client and design"
  },
     {
    "title": "Website 'Advocatenkantoor Paanakker",
    "desc": "In the summer of 2013 I was asked to build a website for Advocatenkantoor Paanakker, a law office based in Arnhem (NL). I build an own wordpress theme so the owner had a CMS to control her website. She's now able to adjust almost everything.",
    "longdesc": [
      {
        "p": "In the summer of 2013 I was asked by the owner of law office 'Advocatenkantoor Paanakker' to build a website for her. Because she wanted to be able to simply control here own website I built an own wordpress theme for her. She's now able to simply adjust the header, the menu, the contact details, all her pages and she is able to add pages. I also installed the Google Analytics Wordpress plugin so she is able to view all traffic to and on her website."
      },
      {
        "a": "http://www.advocaten-paanakker.nl"
      }
    ],
    "path": "portfolio/advocaat.jpg",
    "tasks": "Creating an own wordpress theme"
  },
  {
    "title": "Amphibious vehicle",
    "desc": "At the end of school 2012/2013 I worked on a project with 5 different courses. Togheter with a group of 10 people we built an Amphibious vehicle which won a school race out of 4 other vehicles.",
    "longdesc": [
      {
        "p": "At the end of school 2012/2013 I worked on a project with 5 different courses: Mechanical Engineering, Electrical Engineering, shipbuilding and (technical) Computer Science. Togheter we built a Amphibious vehicle which won a school race."
      },
      {
        "img" : "portfolio/amfibi2.jpg"
      },
      {
        "p" : "The vehicle had the task to clean up popcorn from water and land with a scoop. The vehicle was controlled by a self built Android tablet application and used a router to connect to the Raspberry on the vehicle."
      },
      {
        "p" : "Because of the size of the group and all the different skills it was hard to manage building a vehicle out of 'nothing'. My task was mainly the (secured) connection between the app and vehicle, I used Java to build a server and client. The server and client had a test setup with simple dots (as a steering wheel and the vehicle itself) and was fully tested before it was built in to the project. Besides programming I was the main contact point for the Computer Science members of our group."
      },
      {
        "p" : "Besides the connection I also took care of parts of the Android application like saving data on the device. We were asked to save all data that came from the vehicle like motorpower, batterypower and slope angle. With this data we should be able to simulate the race again. The data was secured and checked for errors before it was safed on the tablet."
      },
      {
        "p" : "I was also responsible for the our project website, which was a sort of blog where everyone can read about the progress. I build this website using Wordpress."
      }
    ],
    "path": "portfolio/amfibi.jpg",
    "tasks": "Client server connection and Android app"
  },
  {
    "title": "3D Simulation",
    "desc": "In 2012 we got a task for school to build a 3D container storage with 5 people. The server had to process a XML file and had to send simulation data to the client. The whole project was build with Java and jMonkey.",
    "longdesc": [
      {
        "p": "In 2012 we got a task for school to build a 3D container storage with 5 people. The server had to process a XML file and had to send simulation data to the client. The client was only meant for drawing and was not allowed to calculate unprocessed XML. The client had to show boats, storage terrain, trucks, small boats and trains (sometimes with multiple containers on it)."
      },
      {
        "p": "The containers were transported between vehicles using so called 'AGVs'. The AGV's had to find the shortest path between multiple points. I took care of this shortest path system by implementing the Algorithm of Dijkstra in Java. I also worked on the 3D simulation, which can bee seen (at a low quality) below. The 3D simulation was made with the game engine jMonkey."
      },
      {
        "video" : "//www.youtube.com/embed/Yon8LR40-ZE"
      },
      {
        "p" : "For testing and debugging the algorithm of Dijkstra I built a simple user interface that shows containers and can be controlled using the mouse. This user interface is shown in the video below. The red squares respresent the AGV's, when they get loaded they will get blue. If you click for a start and end point, the nearest unloaded AGV will go to the start point to get loaded. The AGV will return to the parking area when it is unloaded at point 2. By using this UI, the implementation of the algorithm can be fully tested. When testing was finished, the code was built in to the server. The server will send the coordinates of each AGV to the client (as well as the coordinates of all other items)."
      },
      {
        "video" : "//www.youtube.com/embed/2k13W40zafs"
      }
    ],
    "path": "portfolio/containerSimulation.jpg",
    "tasks": "Dijkstra Algorithm and 3D simulation"
  },
  {
    "title" : "XNA Game",
    "desc" : "For the school subject Graphics we got an assignment to create a platform game with C# XNA. We had to come up with a storyline and based on that stroyline we had to build a game.",
    "longdesc": [
      {
        "p": "For the school subject Graphics we got an assignment to create a platform game with C# XNA. We had to come up with a storyline and based on that stroyline we had to build a game. A classmate and I came up with a story about a ball that needed to go along various obstacles to reach the. The main target was to reach the beach with as much points as possible. The ball was controlled by using the keyboard arrows and the spacebar. I did a big part of the programming work, the graphics, the music and all soundeffects (in Fruity Loops Studio). A low quality video of the game can be found below."
      },
      {
        "video" : "//www.youtube.com/embed/ME2tZhBe7tM"
      }
    ],
    "path": "portfolio/bartbal.jpg",
    "tasks": "Building a XNA platform game"
  },
  {
    "title" : "Vaarwater app",
    "desc" : "At the beginning of 2012 we (me and 3 other students) built an application for the watersport in Friesland (NL). It was my first app for Android and iOS. We used Appcelerator's Titanium Studio for this project.",
    "longdesc": [
      {
        "p": "At the beginning of 2012 we (me and 3 other students) built an application for the watersport in Friesland (NL). It was my first app for Android and iOS. We used Appcelerator's Titanium Studio for this project (mainly Javascript). The apps were very similar but all had their own functionalities. The apps were named 'Bruggen- en aanlegplaatsen app', 'Leeuwarden binnenstad routes app' and 'Trailerhellingen app'."
      },
      {
        "p": "We made one base app with all the basic functionalities and then we exported this basic application to 3 different apps. We used the Google Maps API to show points on the maps of each app. All points and colors of the points were related to the specific app functionalities, for example the bridge openings hours and the height of a bridge. If for example a bridge is lower than your boat it will be displayed in red, otherwise it will be green.  When you click on a point it will open a detail view of the clicked point with more information about this point."
      },
      {
        "img" : "portfolio/vaarwater2.png"
      }
    ],
    "path": "portfolio/vaarwater.jpg",
    "tasks": "Building an Android and iOS app"
  },
    {
    "title" : "Logo Design",
    "desc" : "During my time at Communication and Multimedia Design and my first year Computer Science I made several logo's. Three of them can be found back on this section.",
    "longdesc": [
      {
        "p": "During my time at Communication and Multimedia Design and my first year Computer Science I made several logo's. The first one is for the 'P3P Stackoverflow' project. A site like 'stackoverflow.com', but only for students of our school. It was meant as 'made by students and made for students'. The round arrow with the question marks in it stands for asked question by students, which also get answered by students (a continious circle)."
      },
      {
        "img" : "portfolio/P3P.png"
      },
      {
        "p": "A small (startup) company in Amsterdam asked me to create a simple logo for them, I was quite happy with the result and the simplicity of the result. It's displayed below."
      },
      {
        "img" : "portfolio/makes3.png"
      },
      {
        "p": "For a school project which had the payoff 'Wees een echte vriend, zeg er wat van' I made a logo. The project was about people misbehaving in traffic, and we had the task to trigger people to say something about it. The payoff needed to be displayed in the logo and we came up with a traffic light which stands for the decisions friends can make, 'do you say something or not' (green or red). At the end of the project we had to hand in a dvd with the project on it. The dvd cover was made by me and is displayed below, the logo is displayed on the cover."
      },
      {
        "img" : "portfolio/dvd.png"
      }
    ],
    "path": "portfolio/logos.jpg",
    "tasks": "Designing several logo's"
  }
]