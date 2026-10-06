/*
 * Site content. Edit this file to change text, links, and portfolio items.
 *
 * Add a project: copy an object in `projects`, give it a new id, and put its
 * image in img/. category must match a filter id below.
 * Edit a project: change its fields.
 * Remove a project: delete its object.
 * Order in `projects` is the order on the page.
 *
 * orientation: "portrait" is for vertical videos (YouTube Shorts).
 * Leave it off for normal widescreen videos.
 */
window.SITE = {
  title: "Professional Videographer & Video Editor | Cinematic Video Production",
  description: "Professional videographer and video editor creating cinematic videos for brands, real estate, and social media. High-quality production and storytelling.",
  author: "Martin Purkart",
  nameFirst: "Martin",
  nameLast: "Purkart",
  tagline: "Videography / Editing / Photography /\nSocial Media Management",
  phone: "0482 053 511",
  email: "martinworks@zohomail.com.au",
  intro: "Professional content creator experienced in fast-paced production environments, delivering consistent, high-quality photo and video content for digital marketing campaigns.",
  quote: "From concept to polished final cut",
  quoteImage: "img/final-cut.jpg",
  year: 2026,
  backLabel: "GO BACK",
  portfolioTitle: "Portfolio",
  nav: [
    { href: "#about", label: "Home" },
    { href: "#portfolio", label: "Portfolio" }
  ],
  links: [
    { href: "https://www.youtube.com/@mworksvisuals", label: "YouTube", icon: "fa-youtube" },
    { href: "https://atanetan.pixieset.com/ane/", label: "pixieset", icon: "fa-camera" }
  ],
  filters: [
    { id: "*", label: "show all" },
    { id: "reel", label: "Reel" },
    { id: "realestate", label: "Real Estate" },
    { id: "construction", label: "Construction / Trades" },
    { id: "socials", label: "Socials" },
    { id: "training", label: "Training" },
    { id: "events", label: "Events" }
  ],
  projects: [
    {
      id: "reel",
      category: "reel",
      title: "Reel",
      excerpt: "Filming and interviewing workshop participants captures authentic ...",
      image: "img/Reel.jpg",
      youtube: "IoCQF-9yQGQ",
      paragraphs: [
        "Professional videography combined with animation brings a client’s message to life, blending real footage with dynamic visuals for maximum impact.",
        "Thoughtful animation emphasizes key points, highlights branding, and makes content visually memorable. This combination ensures imagery stands out from the crowd, engages audiences effectively, and delivers polished, creative videos that communicate ideas clearly while enhancing the client’s professional presence."
      ]
    },
    {
      id: "shoteth",
      category: "reel",
      title: "Shoteth",
      excerpt: "Filming and editing using professional video equipment to produce high-quality ...",
      image: "img/Shoteth.jpg",
      youtube: "crL_62CUan4",
      paragraphs: [
        "Filming and editing using professional video equipment to produce high-quality, cinematic footage with precise control over composition, lighting, and sound. Each project involves taking initiative during production, directing scenes to ensure every shot supports the intended story and visual style.",
        "Careful post-production enhances colour, clarity, and overall visual impact, resulting in refined and engaging final videos. This approach delivers polished content that reflects technical expertise, strong attention to detail, and a commitment to professional storytelling."
      ]
    },
    {
      id: "real-estate",
      category: "realestate",
      title: "Real Estate",
      excerpt: "Filming and editing high-quality real estate video content, including cinematic ...",
      image: "img/RealEstate.jpg",
      youtube: "TP0C2H15GdE",
      paragraphs: [
        "Filming and editing high-quality real estate video content, including cinematic property walkthroughs and aerial drone footage that captures both the property and its surroundings. With experience producing more than 200 real estate videos, each project focuses on highlighting key features, natural light, spatial flow, and the lifestyle a home offers.",
        "Fast turnaround ensures agents receive polished videos quickly, ready for listings, websites, and social media marketing. By presenting properties from both ground and aerial perspectives, this professional video production helps attract buyers, strengthen marketing efforts, and support agents in selling homes more effectively."
      ]
    },
    {
      id: "socials",
      category: "socials",
      title: "Socials",
      excerpt: "Professional videography for social media focuses on capturing the essence of ...",
      image: "img/Socials.jpg",
      youtube: "Ld28cxxout8",
      orientation: "portrait",
      paragraphs: [
        "Professional videography for social media focuses on capturing the essence of a subject quickly and visually. Filming is tailored for dynamic storytelling, while fast-paced editing keeps viewers engaged from the first seconds.",
        "By incorporating modern visual trends, sharp pacing, and clean visuals, the final videos feel current, eye-catching, and optimized to perform effectively across social media platforms."
      ]
    },
    {
      id: "renovation",
      category: "construction",
      title: "Property Renovation Transformation",
      excerpt: "Documenting the transformation of a renovated investment ...",
      image: "img/Renovation.jpg",
      youtube: "b8--EGLyDfc",
      paragraphs: [
        "Documenting the transformation of a renovated investment property through cinematic before-and-after footage. This project highlights the craftsmanship, planning, and problem-solving involved in turning a property into a profitable asset.",
        "An interview with the renovator provides insight into the renovation process, key challenges, and the strategic decisions behind the project. Showcasing the full journey—from original condition to final result—demonstrates tangible value creation while producing compelling content that helps attract future renovation clients and property investors."
      ]
    },
    {
      id: "construction-social",
      category: "construction",
      title: "Construction Social Media Update",
      excerpt: "Construction companies are increasingly using Instagram videos ...",
      image: "img/Construction.jpg",
      youtube: "PWQcoZ7KR4k",
      paragraphs: [
        "Construction companies are increasingly posting Instagram videos featuring live building progress, site transformations, machinery, and completed milestones. This content increases project visibility, strengthens brand awareness, and creates direct advertising opportunities.",
        "It also supports community outreach by keeping clients, local residents, and stakeholders updated on construction activity and developments."
      ]
    },
    {
      id: "demolition",
      category: "construction",
      title: "Demolition Social Media Update",
      excerpt: "Professional social media updates give demolition companies the chance ...",
      image: "img/Demolition.jpg",
      youtube: "JD50OqevMlI",
      paragraphs: [
        "Professional social media updates give demolition companies the chance to showcase their big machinery in action. Powerful excavators, crushers, and attachments look impressive when operated by skilled crews.",
        "High-quality photos and videos capture the scale, precision, and excitement of demolition work while showing just how impressive these machines look when the job is done right."
      ]
    },
    {
      id: "workshop",
      category: "training",
      title: "Traditional Timber Frame Workshops",
      excerpt: "Filming and interviewing workshop participants captures authentic ...",
      image: "img/Workshop.jpg",
      youtube: "cLf6fIexLTc",
      paragraphs: [
        "Filming and interviewing workshop participants captures authentic feedback about their experience and learning outcomes. These short video testimonials show real results and genuine enthusiasm, making them powerful promotional material.",
        "For the teacher, they build credibility and trust while demonstrating teaching effectiveness. Shared on a website or social media, these testimonials help attract new clients and strengthen the teacher’s reputation."
      ]
    },
    {
      id: "event",
      category: "events",
      title: "Fire Dance Event",
      excerpt: "Capturing and editing event footage highlights the energy, key moments, and atmosphere of any occasion ...",
      image: "img/Event.jpg",
      youtube: "R30bOegEL_Y",
      paragraphs: [
        "Capturing and editing event footage highlights the energy, key moments, and atmosphere of any occasion. Carefully crafted highlight reels bring together the most memorable scenes in a polished and engaging way.",
        "Optimized for social media, these videos help extend the event’s reach, engage audiences, and keep the excitement alive beyond the day itself. Professional editing ensures a fast turnaround, making it easy to share impactful highlights while the event is still fresh."
      ]
    }
  ]
};
