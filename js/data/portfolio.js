[
  {
    "title": "Browse",
    "desc": "Browse is a startup for Android, iOS and web I worked on as developer and designer.",
    "longdesc": [
      {
        "p": "Browse is a startup project which I started as a project for school in 2013 and worked on to January 2014. I also worked on this project between September 2014 and January 2015. Since December 2015, I'm back on it and it will be ready do a test launch in February 2016. I'm doing all the programming work myself, including building an Android (Java, including design) application, a server (PHP, MySQL) and a web application (Javascript, AngularJS and HTML/CSS, including design)."
      },
      {
        "p": "With this application you will get the most out of your location using your mobile phone. I would love to tell more about this application, but untill the BETA launch in 2016 I can't tell much. Keep an eye on my twitter!"
      },
      {
        "p" : "If you are very curious, a good UX-designer, iOS developer or have a question, just send me an email or contact me via social media."
      }
    ],
    "path": "current/browse.jpg",
    "tasks": "Android, Web and iOS application"
  },
  {
    "title": "MediaMonks bugfinder",
    "desc": "This project was my main task as intern developer at MediaMonks Amsterdam. My task was to build a NodeJS prototype bugfinder for data capturing.",
    "longdesc": [
      {
        "p" : "This project was my main task as intern developer at MediaMonks Amsterdam (Hilversum). My task was to build a NodeJS prototype bugfinder for data capturing. This prototype had read only access to a preconfigured database and analyzes all database rows, based on all kind of settings. With this prototype MediaMonks would be notified as soon as possible when it discovers potential errors in data capturing. A bug can be repaired by one of MediaMonks it's programmers to keep application consistent and reliable."
      },
      {
        "p" : "When the database find indications of errors based on data, for example when data input suddenly stopped, or suddenly stopped for a specific browser, there’s a chance a program contains an (new) error that needs to be repaired. I build this NodeJS prototype with all kinds of checks like stopping of data input, invalid fields and deflected fields. I also build a simple, secured, frontend tool to connect with this prototype and to configure the server. This frontend tool is build using MediaMonks it’s own framework. A lot of Javascript (especially NodeJS), Typescript, KnockoutJS, a lot of other JS libraries, SASS (CSS preprocessor) and HTML was involved."
      },
      {
        "p" : "This project also contained some machine learning aspects (it learns from all analyzed data), a lot of mathematics and smart use of Javascript dynamic variables. This project was my final school project which helped me to get my bachelor degree of Engineering (B.E.) with distinction."
      }
    ],
    "path": "portfolio/bugfinder.jpg",
    "tasks": "Javascript (NodeJS), HTML, CSS, SASS, Typescript, KnockoutJS and MySQL"
  },
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
    "desc": "This project was my main task as intern full-stack developer at Red Urban Amsterdam. Creating an analytics dashboard based on a lot of sources. A project that will replace the old Red Urban dashboard.",
    "longdesc": [
    	{ 
    		"p" : "Besides serveral minor tasks as intern full-stack developer at Red Urban Amsterdam I had one main task, the Red Urban and Etcetera Dashboard. Red Urban is a digital advertising agency based in Amsterdam. Red Urban is well known by it's clients through it's so-called 'Dashboard'. With this dashboard campaigns can be tracked and monitored in real-time. The information on the dashboard can be important for Red Urban and it's clients. This project took place from February 2014 to June 2014."
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
    "desc": "As intern full-stack developer at Red Urban I created mobile pages for Coolbest. You will find this pages by scanning a QR-code which can be found on every Coolbest juice package in almost every supermarket.",
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
  }
]