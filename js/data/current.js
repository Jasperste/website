[
  {
    "title": "Blendle",
    "desc": "Blendle aggregates articles into a single, ad-free platform where readers can pick and choose which stories to read. I'm working on the backend as well as the frontend working with Ruby, Golang and ReactJS.",
    "longdesc": [
      {
        "p": "Blendle aggregates articles into a single, ad-free platform where readers can pick and choose which stories to read. I'm mainly working on the backend API and internal tools doing Ruby and Golang. And, if needed, I'm also doing frontend work (JS/ReactJS), which includes blendle.com and our internal tools."
      },
      {
        "p" : "Discover the best journalism below."
      },
      {
        "a" : "https://www.blendle.com"
      }
    ],
    "path": "current/blendle-logo.jpg",
    "tasks": "Discover the best journalism"
  },
  {
    "title": "Custom Links",
    "desc": "Since July 2015 I am the co-owner of Custom Links. I am responsible for all the programming work, design work and building solid programs to run on multiple Amazon AWS servers and keeping them running.",
    "longdesc": [
      {
        "p" : "After my study I started my own company together with my brother who attained a master's degree in marketing. We offer a service for companies to create branded short links and provide detailed insights into their link performances. I am responsible for all the programming work, design work and building a solid program on multiple Amazon AWS servers and keeping them running. My daily tasks involved programming in Javascript, PHP, MySQL, Golang (our linkserver), HTML, CSS and working with AWS dockers, ELB, EBS, DynamoDB, Photoshop, Illustrator and many, many more.  I am also responsible for all design work, like user experience, our corporate identity (like our logo) and the design of our website and our pages."
      },
      {
        "p" : "Our customers configure their DNS of a domain or subdomain to our Golang server and we redirect everything to their desired pages. I build this server using Golang to get high performances and as little delay as possible while still fetching data from cache or from our database. On every request all possible information the server can get is saved into AWS dynamoDB and is later used in our statistics screen. This Golang server also has libraries to figure out device and browser information using the User Agent and is able to determine countries based on every request."
      },
      {
        "p" : "This website contains secured user profiles, a payment system, a shorten option, copy option, settings, profile change options, password and username forgot functions and statistics a link. The website is responsive and therefore available on mobile. I also build a Chrome extension which makes shortening links a lot faster. It takes the current URL and shortens it. You only have to press 'Save & Copy' and the shortened URL is automatically saved and copied to your clipboard to share everywhere. Below is a screenshot of this extension. This extension can be downloaded at our website, at our 'download' page."
      },
      {
        "img" : "current/chrome-plugin.png"
      },
      {
        "p" : "Both website run on Amazon AWS servers to prevent any downtime and to keep our server fast and reliable. I put a load balancer in front of our servers to make sure we have as little downtime as possible. Both server are build using Dockers which makes the Amazon able to automatically start new servers with preconfigured settings. Both servers should, theoretically, run, restart and scale out by itself."
      },
      {
        "img" : "current/library.png"
      },
      {
        "p" : "For every created custom link you can view your statistics by browsing through your link library. When you click on one of your shortened links, you get a statistics view with all available information. Information like clicks a day or a month, click per country, browsers, operating systems, devices and referrers. You also get a total count and we remove common ‘bots’ and crawlers out of the results. Users are also able to select a date period to zoom in on certain periods since they made a particular link. The statistic data is saved when a link is clicked to our DynamoDB NoSQL database. When one of our customers click on a link, our server will fetch all rows and give the frontend some useful data to display. This statistics screen gives a detailed insight into link performance, which is very useful for our customers. Below a screenshot of our statistics screen."
      },
      {
        "img" : "current/statistics.png"
      },
      {
        "p" : "Go to our website and try it out for free by clicking on the link below."
      },
      {
        "a" : "https://www.customizelinks.com"
      }
    ],
    "path": "current/customizelinks.jpg",
    "tasks": "PHP, Golang, Design, MySQL, DynamoDB, AWS services, concept to product"
  },
  {
    "title": "Other",
    "desc": "Besides the mentioned projects, which you can read about on this page, I'm also training hard to get better at running and I also have several other side projects.",
    "longdesc": [
    	{
        "p" : "Beside the mentioned other projects I am always working on several small projects. Besides that, I like to read about new and existing technologies."
      },
      {
    		"p" : "Besides programming, running is one of my favorite things to do. I train a lot to get better at distances from 5 km to 42.2 km. You can find my most important personal records at the home page."
    	}
    ],
    "path": "current/other.jpg",
    "tasks": "Running and several smaller projects"
  }
]
