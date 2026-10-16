/* ================= DATA (edit this section) ================= */
const DATA = {
  name: "Md Saif Rahman",
  roles: "Software Engineer · AI Engineer",
  bio: "Passionate about Software Engineering, NLP, Machine Learning and Research.",
  description: "I love building impactful projects and conducting research.",
  location: "Dhaka, Bangladesh",
  email: "rahmansaif.413@gmail.com",
  github: "https://github.com/Rahman-Saif",
  linkedin: "https://www.linkedin.com/in/saif-rahman7/",
  cv: "files/Saif-Rahman-CV.pdf", // put your CV here, or set to null to hide
  interests: ["Artificial Intelligence","Natural Language Processing","Machine Learning","Deep Learning","Computational Social Science","Data Science"],
  skills: ["Python","Machine Learning","Deep Learning","TensorFlow","PyTorch","NLP","HTML","CSS","JavaScript","React","Next.js","SQL"],
  publications: [
    {year:2026,status:"Published",title:"HAN-DistilBERT for Depression Detection from Twitter Data: Integrating Hierarchical Attention with Transformer-Based Model",venue:"International Conference on Computer and Information Technology (ICCIT) 2024",authors:["Saif Rahman","Tarannum Binte Tariq","Nusrot Jahan","Naimul Hasan Naime","Nazneen Akhter"]},
    {year:2025,status:"Published",title:"Enhanced Twitter-Based Depression Severity Classification Using Multi-Head Attention with RoBERTa and DistilBERT Fusion",venue:"IEEE 7th International Conference on Sustainable Technologies for Industry 5.0 (STI 2025)",authors:["Tarannum Binte Tariq","Nusrot Jahan","Saif Rahman","Naimul Hasan Naime"]},
    {year:2025,status:"Under Review",title:"Linguistic Feature Based Depression Detection in Social Media Across Bangla, Banglish, and English",venue:"Expert Systems With Applications",authors:["Saif Rahman","Tarannum Binte Tariq","Naimul Hasan Naime","Nazneen Akhter","Dr Md Sazzadur Rahman"]},
    {year:2026,status:"Ongoing",title:"Assessing AI Literacy Through Reddit Discourse in Bangladeshi Online Communities",venue:"In Progress",authors:["Saif Rahman"]},
    {year:2026,status:"Ongoing",title:"Uncovering the Root Causes of Test Brittleness: Timing, Concurrency, and Environment Dependencies in Software Testing",venue:"In Progress",authors:["Saif Rahman"]}
  ],
  experience: [
    {title:"Junior Software Engineer",org:"Void Studio",when:"Aug 2024 – 2025",type:"Full-time",points:["Developed a full-featured e-commerce website for a renowned bookshop company, focusing on front-end development and UI design.","Improved website performance and loading speed through front-end optimization.","Designed and developed the company's portfolio website to enhance online presence and branding.","Collaborated on multiple web projects, gaining experience in responsive design and modern technologies."]},
    {title:"IT Intern",org:"Trust Bank PLC",when:"Dec 2024 – Jan 2025",type:"Internship",points:["Led a frontend team to develop a fully responsive banking CMS.","Researched national and international banking platforms to tailor the design to user needs.","Created pixel-perfect Figma prototypes and built them with HTML, CSS, Bootstrap, JavaScript and PHP.","Improved mobile and desktop experiences through performance optimization and intuitive navigation."]}
  ],
  education: [
    {title:"BSc in ICT",org:"Bangladesh University of Professionals",when:"2021 – 2025"},
    {title:"Higher Secondary Certificate",org:"Dr. Mahbubur Rahman Molla College",when:"2018 – 2020"},
    {title:"Secondary School Certificate",org:"Adarsha School, Narayangonj",when:"2008 – 2018"}
  ],
  projects: {
    "Software Development":[
      {t:"Trust Bank Website",d:"A modern responsive portfolio website built using HTML, CSS and JavaScript.",s:["HTML","CSS","JavaScript"],g:"https://github.com/Rahman-Saif/Trust-main-website"},
      {t:"Nilkhet Boighor",d:"Full stack library management system with authentication and database support.",s:["Python","Flask","SQL"]},
      {t:"E-commerce Website",d:"Full stack e-commerce website with authentication and database support.",s:["Python","Flask","SQL"]},
      {t:"Library Management System",d:"Full stack library management system with authentication and database support.",s:["Python","Flask","SQL"]}
    ],
    "Data Science":[
      {t:"Diabetes Prediction",d:"Predicts whether a person is likely to have diabetes using machine learning.",s:["Pandas","Matplotlib","Seaborn"],g:"https://github.com/Rahman-Saif/Diabetes-Prediction-with-Machine-Learning"},
      {t:"Sexual Violence in Bangladesh",d:"Data analysis identifying patterns and trends across time, location and victim-related factors.",s:["Python","Scikit-learn","ML"],g:"https://github.com/Rahman-Saif/A-Data-Analysis-of-Sexual-Violence-in-Bangladesh"},
      {t:"Laptop Price Prediction",d:"Estimates laptop prices from brand, RAM, processor, storage, GPU and display features.",s:["Python","Scikit-learn","ML"],g:"https://github.com/Rahman-Saif/Laptop-Price-Calculator-with-Machine-Learning"},
      {t:"House Price Prediction",d:"Estimates property prices from location, area, rooms and other housing attributes.",s:["Python","Scikit-learn","ML"],g:"https://github.com/Rahman-Saif/House-Price-Prediction-with-Machine-Learning"},
      {t:"Crime Statistics EDA",d:"Exploratory data analysis uncovering patterns and insights from crime data.",s:["Python","Scikit-learn","ML"],g:"https://github.com/Rahman-Saif/Crime-Statistics-EDA"}
    ],
    "AI Engineering":[
      {t:"Movie Recommendation System",d:"Recommends movies by similarity of genres, keywords, cast, crew and overview.",s:["ML","Flask","Python"],g:"https://github.com/Rahman-Saif/Movie-Recommendation-System"},
      {t:"Heart Failure Detection",d:"Predicts the likelihood of heart failure from patient data using deep learning.",s:["ML","Flask","Python"],g:"https://github.com/Rahman-Saif/Heart-Failure-Prediction-with-Deep-Learning"},
      {t:"Potato Disease Classification",d:"Identifies potato plant diseases from leaf images using a CNN.",s:["ML","Flask","Python"],g:"https://github.com/Rahman-Saif/Potato-Disease-Classification-with-CNN"},
      {t:"WhatsApp Chat Analysis",d:"Extracts insights and patterns from chat messages with NLP techniques.",s:["ML","Flask","Python"],g:"https://github.com/Rahman-Saif/Whatsapp-Chat-Analysis"},
      {t:"Depression Detection NLP",d:"NLP research project for detecting depression from social media texts.",s:["NLP","TensorFlow","Python"]}
    ]
  },
  activities: [
    {t:"Programming Contests",d:"Participated in university and national level programming contests and solved algorithmic problems."},
    {t:"Club Leadership",d:"Executive member in university clubs; organized multiple technical events."},
    {t:"Public Speaking",d:"Seminars, presentations and public speaking at university events."},
    {t:"Volunteering",d:"Community service, educational volunteering and awareness campaigns."},
    {t:"Hackathons",d:"AI, machine learning and software development hackathons and innovation challenges."},
    {t:"Workshops & Training",d:"Technical workshops on AI, data science and research methodologies."}
  ]
};

/* ================= LOGIC ================= */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tags = a => a.map(x => `<span class="tag">${esc(x)}</span>`).join("");
const link = (href, label, cls="line") => `<a class="btn ${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label} ↗</a>`;

$("role").textContent = `${DATA.roles} · ${DATA.location}`;
$("bio").textContent = DATA.bio;
$("description").textContent = DATA.description;
$("interests").innerHTML = tags(DATA.interests);
$("skillList").innerHTML = tags(DATA.skills);

const social = link(DATA.github,"GitHub") + link(DATA.linkedin,"LinkedIn");
$("heroLinks").innerHTML = (DATA.cv ? `<a class="btn fill" href="${DATA.cv}" download>Download CV ↓</a>` : "")
  + `<a class="btn fill" href="mailto:${DATA.email}">Get in touch</a>` + social;
$("contactLinks").innerHTML = `<a class="btn fill" href="mailto:${DATA.email}">${DATA.email}</a>` + social;

$("pubs").innerHTML = DATA.publications.map(p => `
  <article class="item"><div class="when"><span class="badge ${p.status==="Published"?"":"alt"}">${p.status}</span><br>${p.year}</div>
  <div><h3>${esc(p.title)}</h3><p class="authors">${p.authors.map(a => a.includes("Saif")?`<strong>${esc(a)}</strong>`:esc(a)).join(", ")}</p>
  <p class="who">${esc(p.venue)}</p></div></article>`).join("");

$("exp").innerHTML = DATA.experience.map(e => `
  <article class="item"><div class="when">${e.when}<br>${e.type}</div>
  <div><h3>${esc(e.title)}</h3><p class="who">${esc(e.org)}</p><ul>${e.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></article>`).join("");

$("edu").innerHTML = DATA.education.map(e => `
  <article class="item"><div class="when">${e.when}</div><div><h3>${esc(e.title)}</h3><p class="who">${esc(e.org)}</p></div></article>`).join("");

$("acts").innerHTML = DATA.activities.map(a => `<div class="card"><h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div>`).join("");

/* Project tabs */
const cats = Object.keys(DATA.projects);
function showProjects(cat){
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.cat === cat));
  $("projGrid").innerHTML = DATA.projects[cat].map(p => `
    <div class="card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="tags" style="margin:0">${tags(p.s)}</div>
    ${p.g ? `<div class="links">${link(p.g,"Code")}</div>` : ""}</div>`).join("");
}
$("tabs").innerHTML = cats.map(c => `<button class="tab" role="tab" data-cat="${c}">${c}</button>`).join("");
$("tabs").addEventListener("click", e => { if (e.target.dataset.cat) showProjects(e.target.dataset.cat); });
showProjects(cats[0]);

/* Mobile menu */
const btn = $("menuBtn"), nav = $("navLinks");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded","false"); });

$("copy").textContent = `© ${new Date().getFullYear()} ${DATA.name} · ${DATA.location}`;