// Base de dades de projectes
const projectsDetails = {
  odossea: {
    title: "Odossea",
    role: "Level Designer & Game Designer", // O si vols: "Level Designer & UI/UX Designer"
    award: " Best Technology Award – 9th Gran CITM Game Jam",
    videoSrc: "vid/Odossea.mp4",
    teamSize: "5",
    devTime: "1 week",
    techStack: "Unity (C#)",
    contributions: [
      "Conceptualized, prototyped, and fine-tuned the primary puzzle and movement mechanics to establish a smooth, intuitive gameplay loop.",
      "Designed the overall level progression and campaign pacing from initial whiteboxing to final polish. Focused on clear player guidance through visual hierarchy, lighting, and environmental signposting, while structuring dynamic pacing and gradually escalating puzzle complexity.",
      "Programmed core player logic and implemented scene workflows directly in Unity."
    ],
    team: [
      { name: "Martí Mira", role: "Level Designer & UI/UX Designer" },
      { name: "Marc Blánquez", role: "Programmer" },
      { name: "Arnau Balasch", role: "2D Artist" },
      { name: "Oscar Alonso", role: "Programmer & Level Designer" },
      { name: "Toni Llovera", role: "UI/UX Programmer & Programmer" }
    ],
    itchioLink: "https://torratsgames.itch.io/odossea",
    
    
   uiCaseStudy: [
    {
      
      title: "Vector UI Kit & Scalable Assets",
      desc: "Interactive button states, and audio control components designed with soft pastel gradients for resolution independence.",
      img: "img/Odossea/ui-kit.png"
    },
    {
     
      title: "Menu Hierarchy & Settings Layouts",
      desc: "Structured option panels for Graphics and Audio adjustments, prioritizing intuitive spatial navigation and clear input feedback.",
      img: "img/Odossea/ui-panels.png"
    },
    {
     
      title: "In-Game Pause Overlay",
      desc: "Pause menu staged directly against background gameplay environments to maintain high visual contrast and continuous player immersion.",
      img: "img/Odossea/ui-paused-ingame.png"
    },
    {
      
      title: "In-Game Options Overlay",
      desc: "Options panel for immediate readability over active gameplay scenes.",
      img: "img/Odossea/ui-options-ingame.png"
    }
  ]
  },
  
  paraulesMagiques: {
    title: "Paraules Màgiques",
    role: "UI/UX Designer",
    videoSrc: "vid/ParaulesMagiques.mp4",
    coverImg: "img/PM/Titol.png",
    teamSize: "3",
    devTime: "1 month",
    techStack: "Unity (C#)",
    contributions: [
      "Conceptualized the core educational game flow and dynamic word puzzle progression.",
      "Designed and structured clean, accessible UI layouts for browser gameplay.",
      "Implemented responsive HTML5 canvas systems, gameplay feedback, and audio cues."
    ],
    team: [
      { name: "Martí Mira", role: "UI/UX Designer" },
      { name: "Marc Blánquez", role: "Programmer" },
      { name: "Arnau Balasch", role: "2D Artist" }
    ],
    itchioLink: "https://mmiraa15.itch.io/paraules-magiques",

    
    uiCaseStudy: [
      {
        title: "UX Flow & Low-Fidelity Wireframes",
        desc: "Initial paper and digital sketches mapping screen transitions, menu navigation, and core gameplay interaction loops.",
        img: "img/PM/wireframes.png"
      },
      {
        title: "Mid-Fidelity Layouts & Structure",
        desc: "Greybox iteration phase validating layout scaling, spatial padding, button placement, and typography hierarchy before styling.",
        img: "img/PM/midfi.png"
      },
      {
        title: "Color Palette & Theme Exploration",
        desc: "Color theory breakdown tailored for children, pairing high-contrast accessibility with vibrant environment-specific palettes.",
        img: "img/PM/palette.png"
      },
      {
        title: "High-Fidelity Final Interfaces",
        desc: "Polished end-user UI featuring soft pastel gradients, rounded interactive components, and clear gameplay state feedback.",
        img: "img/PM/hifi.png"
      }
    ]
  },

  sonOfIthaca: {
    title: "Son of Ithaca",
    role: "3D Artist & Level Designer",
    award: " Nominee: Best Academic Game – IndieDevDay / SAGA Game Fest 2026",
    videoSrc: "vid/SonOfIthaca.mp4",
    teamSize: "31",
    devTime: "4 months",
    techStack: "Wave Engine (Own Engine)",
    contributions: [
      "Designed and blocked out the initial level layouts and progression flow for both Level 1 and Level 2.",
      "Transitioned to the Art Department to model, texture, and optimize environment props and modular assets.",
      "Modeled and animated the three interactive puzzle statues central to the core gameplay loop.",
      "Executed set dressing and environmental staging across Levels 1 and 2 to significantly enhance visual fidelity.",
      "Designed UI gameplay elements, including the health bar interface for the final boss encounter."
    ],
    team: [
      { name: "Nobody Games Studio", role: "Development & Production" }
    ],
    itchioLink: "https://nobody-games-studio.itch.io/son-of-ithaca"
  },

  medievalTavern: {
    title: "Medieval Tavern Environment",
    role: "Project Lead & Environment Artist",
    trailerEmbedUrl: "https://www.youtube.com/embed/N50aYECaGnc", 
    teamSize: "4",
    devTime: "3 weeks",
    techStack: "Maya, ZBrush, Substance Painter, Unity",
    contributions: [
      "Led the project direction and coordinated team milestones and production workflow.",
      "Modeled and textured modular architectural elements (interior door, stairs, beams, columns, railings) and hero props (axe, mug).",
      "Created initial blockout and assembled the full level scene, set dressing, and prefab/material setup in Unity.",
      "Configured environmental lighting, baked lightmaps, and set up the post-processing stack.",
      "Curated external assets and integrated decorative artwork into the environment."
    ],
    gallery: [
      { src: "img/tavern/cap1.png", caption: "Main Hall from above" },
      { src: "img/tavern/cap2.png", caption: "Bar Counter" },
      { src: "img/tavern/cap4.png", caption: "Tavern wine cellar" },
      { src: "img/tavern/cap3.png", caption: "Main Hall" }

    ],
   team: [
      { name: "Martí Mira", role: "Lead 3D Artist" },
      { name: "Marc Blánquez", role: "3D Artist & Programmer" },
      { name: "Arnau Balasch", role: "3D Artist" },
      { name: "Manel Montes", role: "3D Artist" }
    ],
    artstationLink: "https://www.artstation.com/artwork/1NGo48"
  },

  kimsUnderworld: {
    title: "Kim's Underworld",
    role: "Level Designer",
    videoSrc: "vid/KimsUnderworld.mp4",
    teamSize: "19",
    devTime: "4 months",
    techStack: "C++ (SDL 2, Raylib), XML",
    contributions: [
      "Designed and blocked out 2D level layouts focusing on pacing, enemy encounters, and player navigation.",
      "Structured and balanced level progression and entity placement using XML data pipelines.",
      "Collaborated closely with gameplay programmers to tune combat spaces, camera bounds, and collision zones in custom C++ engines.",
      "Iterated on puzzle and platforming mechanics based on playtesting feedback."
    ],
    team: [
      { name: "EVER REST GAMES", role: "Production, Art & Programming" }
    ],
    itchioLink: "https://mmiraa15.itch.io/kims-underworld" 
  },

  racingGame: {
    title: "Racing Game",
    role: "UI/UX Designer & Programmer",
    videoSrc: "vid/Racing-Game.mp4",
    coverImg: "img/racing.png", 
    teamSize: "5",
    devTime: "3 months",
    techStack: "C++ (Raylib, Box2D)",
    contributions: [
      "Designed and implemented clean, responsive in-game UI layouts and real-time HUD elements (speedometer, lap timer, and race indicators) optimized for fast readability.",
      "Programmed a sequential checkpoint tracking system using Box2D sensors to manage lap completion, split times, and race progression accurately.",
      "Engineered vehicle-environment collision responses and tuned physical properties (friction, restitution, and track boundaries) in Box2D for responsive arcade handling."
    ],
    team: [
      { name: "Martí Mira", role: "UI/UX Designer & Programmer" },
      { name: "Arnau Balasch", role: "UI/UX Designer & Programmer" },
      { name: "Marc Blánquez", role: "Lead Programmer" },
      { name: "Manel Montes", role:  "UI/UX Designer & Programmer" },
      { name: "Saüc Pellejero",role: "UI/UX Designer & Programmer" },
    ],
    itchioLink: "https://mmiraa15.itch.io/racing-game" 
  },

  godOfWarBlockout: {
    title: "God of War (2018) – Level Blockout",
    role: "Level Designer & Blueprint Scripter",
    trailerEmbedUrl: "https://www.youtube.com/embed/Ck3RebU0pN8", // Sustituye con el ID de tu vídeo de YouTube
    coverImg: "img/gow-cover.png",
    teamSize: "2",
    devTime: "1 month",
    techStack: "Unreal Engine, Blueprints",
    contributions: [
      "Designed and structured the 2D layout establishing the primary Golden Path and rewarding alternate exploration routes paired with a progressive intensity pacing graph.",
      "Calibrated spatial metrics and environmental scale optimized for over-the-shoulder camera constraints, using vista compositions and landmarks for intuitive player signposting.",
      "Implemented a strict color-coded greyboxing framework to clearly communicate traversable paths, structural spaces, vertical nodes, and breakable environmental barricades.",
      "Programmed core mechanics via Blueprints: Leviathan Axe aim, throw, and recall projectile behaviors alongside ladder climb volumes and state transitions."
    ],
    gallery: [
      { src: "img/GOW/Captura 1.png", caption: "Bridge zone"},
      { src: "img/GOW/Captura 2.png", caption: "Forest Zone" },
      { src: "img/GOW/Captura 3.png", caption: "Hall Zone" },
      { src: "img/GOW/layout.png",    caption: "Layout 2D" }

     

    ],
    team: [
      { name: "Martí Mira", role: "Level Designer & Blueprint Scripter" },
      { name: "Marc Blánquez", role: "Level Designer & Blueprint Scripter" }
    ],
    pdfLink: "doc/Level Design Document_MartiMira .pdf",
    buildLink: "https://drive.google.com/file/d/1JwXPFnCHvom1adk0abyI54cSpUwzAbNp/view?usp=sharing"
  },
};

function openProjectModal(projectId) {
  currentUiSlide = 0; 
  const project = projectsDetails[projectId];
  if (!project) return;

  // 1. Multimèdia 
  let mediaHtml = "";
  if (project.videoSrc) {
    mediaHtml = `
      <div class="modal-video-container">
        <video controls playsinline preload="metadata" class="modal-video-player" style="width: 100%; border-radius: 8px; display: block;">
          <source src="${project.videoSrc}" type="video/mp4">
          El teu navegador no suporta la reproducció de vídeo.
        </video>
      </div>
    `;
  } else if (project.trailerEmbedUrl) {
    mediaHtml = `
      <div class="modal-video-container">
        <iframe 
          src="${project.trailerEmbedUrl}?autoplay=0" 
          title="${project.title} Trailer" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;
  } else if (project.coverImg) {
    mediaHtml = `
      <img src="${project.coverImg}" alt="${project.title}" class="modal-header-img">
    `;
  }

  // 2. Barra ràpida de metadades
  let metaBarHtml = "";
  if (project.teamSize || project.devTime || project.techStack) {
    metaBarHtml = `
      <div class="project-meta-bar">
        ${project.teamSize ? `
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>${project.teamSize}</span>
          </div>` : ""}

        ${project.devTime ? `
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${project.devTime}</span>
          </div>` : ""}

        ${project.techStack ? `
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <span>${project.techStack}</span>
          </div>` : ""}
      </div>
    `;
  }

  // 3. Equip de desenvolupament
  let teamHtml = "";
  if (project.team && project.team.length > 0) {
    teamHtml = `
      <h3 class="modal-section-title">Team & Credits</h3>
      <div class="modal-team-grid">
        ${project.team.map(member => `
          <div class="team-member">
            <span class="member-name">${member.name}</span>
            <span class="member-role">${member.role}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  // 4. Galeria d'imatges 
  let galleryHtml = "";
  if (project.gallery && project.gallery.length > 0) {
    galleryHtml = `
      <h3 class="modal-section-title">Environment Gallery </h3>
      <div class="modal-gallery-grid">
        ${project.gallery.map(img => `
          <figure class="modal-gallery-item">
            <img src="${img.src}" alt="${img.caption}" loading="lazy" onclick="window.open('${img.src}', '_blank')">
            <figcaption>${img.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    `;
  }

  // 5. Botons d'enllaços externs 
  let actionButtonsHtml = "";
  if (project.itchioLink) {
    actionButtonsHtml += `
      <a href="${project.itchioLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-itch">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 6px;">
          <path d="M3.193 2c-.655 0-1.193.538-1.193 1.193v2.859c0 .655.538 1.193 1.193 1.193h.084c.655 0 1.193-.538 1.193-1.193V3.193C4.47 2.538 3.932 2 3.277 2zm17.614 0c-.655 0-1.193.538-1.193 1.193v2.859c0 .655.538 1.193 1.193 1.193h.084c.655 0 1.193-.538 1.193-1.193V3.193c0-.655-.538-1.193-1.193-1.193zM5.568 5.625c-.714 0-1.293.58-1.293 1.294v4.453c0 .714.579 1.294 1.293 1.294h1.791c.714 0 1.293-.58 1.293-1.294V6.919c0-.714-.579-1.294-1.293-1.294zm12.864 0c-.714 0-1.293.58-1.293 1.294v4.453c0 .714.579 1.294 1.293 1.294h1.791c.714 0 1.293-.58 1.293-1.294V6.919c0-.714-.579-1.294-1.293-1.294zm-9.336 2.375c-.714 0-1.293.58-1.293 1.294v2.078c0 .714.579 1.294 1.293 1.294h3.408c.714 0 1.293-.58 1.293-1.294V9.294c0-.714-.579-1.294-1.293-1.294zM2 13.917v5.333C2 20.767 3.233 22 4.75 22h14.5c1.517 0 2.75-1.233 2.75-2.75v-5.333H2zm6.2 2.75h1.6v1.6H8.2zm4.8 0h1.6v1.6H13z"/>
        </svg>
        Play on Itch.io
      </a>
    `;
  }
  if (project.artstationLink) {
    actionButtonsHtml += `
      <a href="${project.artstationLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-view" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.585-4.477H0v-.36zm15.66-2.908l-4.707-8.152L6.246 14.815h9.414zm7.986 4.312L16.294 3.018A2.43 2.43 0 0 0 14.184 1.7h-.077a2.428 2.428 0 0 0-2.106 1.258L9.957 6.45l7.653 13.256h4.526a1.21 1.21 0 0 0 1.054-.627 1.22 1.22 0 0 0 .456-1.079z"/>
        </svg>
        View on ArtStation
      </a>
    `;
  }
  if (project.pdfLink) {
    actionButtonsHtml += `
      <a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-view" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        <span>View LDD (PDF)</span>
      </a>
    `;
  }
  if (project.buildLink) {
    actionButtonsHtml += `
      <a href="${project.buildLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-itch" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background-color: var(--color-secondary); color: var(--color-dark);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Build
      </a>
    `;
  }
let uiCaseStudyHtml = "";
  if (project.uiCaseStudy && project.uiCaseStudy.length > 0) {
    uiCaseStudyHtml = `
      <h3 class="modal-section-title">UI/UX Interactive Showcase</h3>
      <div class="ui-slider-container">
        
        <button class="ui-slider-btn prev" onclick="changeUiSlide(-1, '${projectId}')">&larr;</button>
        <button class="ui-slider-btn next" onclick="changeUiSlide(1, '${projectId}')">&rarr;</button>

        <div class="ui-slider-viewport">
          <img id="ui-slide-img" src="${project.uiCaseStudy[0].img}" alt="UI Slide" onclick="window.open(this.src, '_blank')">
        </div>

        <div class="ui-slider-info">
          <div class="ui-slider-meta">
            <h4 id="ui-slide-title" style="margin: 0;">${project.uiCaseStudy[0].title}</h4>
            <span id="ui-slide-counter" class="ui-slide-counter">1 / ${project.uiCaseStudy.length}</span>
          </div>
          <p id="ui-slide-desc">${project.uiCaseStudy[0].desc}</p>
        </div>

      </div>
    `;
  }

  // Inserció al cos del modal
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h2 class="modal-title">${project.title}</h2>
    ${project.award ? `<div class="project-award-badge">${project.award}</div>` : ""}
    <p class="modal-subtitle"><strong>Role:</strong> ${project.role}</p>

    ${mediaHtml}
    ${metaBarHtml}
        
    ${uiCaseStudyHtml}


    <h3 class="modal-section-title">My Key Contributions</h3>
    <ul class="modal-list">
      ${project.contributions.map(item => `<li>${item}</li>`).join("")}
    </ul>


    ${galleryHtml}

    ${teamHtml}

    <div class="modal-footer" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
      ${actionButtonsHtml}
    </div>
  `;

  document.getElementById("project-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProjectModal(event) {
  if (!event || event.target.id === "project-modal" || event.target.classList.contains("modal-close")) {
    document.getElementById("project-modal").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("modal-body").innerHTML = "";
  }
}

function toggleMoreProjects() {
  const moreProjects = document.getElementById("more-projects");
  const toggleBtn = document.getElementById("toggle-projects-btn");

  if (moreProjects.style.display === "none" || moreProjects.style.display === "") {
    moreProjects.style.display = "grid";
    toggleBtn.textContent = "Show Less";
  } else {
    moreProjects.style.display = "none";
    toggleBtn.textContent = "View All Projects";
  }
}
// ==========================================================================
// PREVISUALITZACIÓ DE VÍDEO AL PASSAR EL RATOLÍ (HOVER)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    const video = card.querySelector(".project-card-video");
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    card.addEventListener("mouseenter", () => {
      video.muted = true;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Reproducció cancel·lada o bloquejada:", error);
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; 
    });
  });
});
let currentUiSlide = 0;

function changeUiSlide(direction, projectId) {
  const project = projectsDetails[projectId];
  if (!project || !project.uiCaseStudy) return;

  const slides = project.uiCaseStudy;

  currentUiSlide += direction;
  if (currentUiSlide < 0) currentUiSlide = slides.length - 1;
  if (currentUiSlide >= slides.length) currentUiSlide = 0;

  const current = slides[currentUiSlide];

  document.getElementById("ui-slide-img").src = current.img;
  document.getElementById("ui-slide-title").textContent = current.title;
  document.getElementById("ui-slide-desc").textContent = current.desc;
  document.getElementById("ui-slide-counter").textContent = `${currentUiSlide + 1} / ${slides.length}`;
}