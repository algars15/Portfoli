const projectsDetails = {
  odossea: {
    title: "Odossea",
    role: "Level Designer & Game Designer",
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
      { title: "Vector UI Kit & Scalable Assets", desc: "Interactive button states, and audio control components designed with soft pastel gradients for resolution independence.", img: "img/Odossea/ui-kit.png" },
      { title: "Menu Hierarchy & Settings Layouts", desc: "Structured option panels for Graphics and Audio adjustments, prioritizing intuitive spatial navigation and clear input feedback.", img: "img/Odossea/ui-panels.png" },
      { title: "Game Menu", img: "img/Odossea/gameMenu.png" },
      { title: "In-Game Pause Overlay", img: "img/Odossea/ui-paused-ingame.png" },
      { title: "In-Game Options Overlay", img: "img/Odossea/ui-options-ingame.png" }
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
      "Game flow and dynamic word puzzle progression.",
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
      { title: "UX Flow & Low-Fidelity Wireframes", desc: "Initial paper and digital sketches mapping screen transitions, menu navigation, and core gameplay interaction loops.", img: "img/PM/wireframes.png" },
      { title: "Mid-Fidelity Layouts & Structure", desc: "Greybox iteration phase validating layout scaling, spatial padding, button placement, and typography hierarchy before styling.", img: "img/PM/midfi.png" },
      { title: "Color Palette & Theme Exploration", desc: "Color theory breakdown tailored for children, pairing high-contrast accessibility with vibrant environment-specific palettes.", img: "img/PM/palette.png" },
      { title: "High-Fidelity Final Interfaces", desc: "Polished end-user UI featuring soft pastel gradients, rounded interactive components, and clear gameplay state feedback.", img: "img/PM/hifi.png" }
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
    uiCaseStudy: [
      { title: "Catalyst statue", img: "img/SonOfithaca/cap1.png" },
      { title: "Activating Statue", img: "img/SonOfithaca/cap2.png" },
      { title: "Enviroment Decoration", img: "img/SonOfithaca/cap3.png" },
      { title: "Modular bridge", img: "img/SonOfithaca/cap6.png" },
      { title: "Boss bar", img: "img/SonOfithaca/cap10.png" },
      { title: "Pression plate", img: "img/SonOfithaca/cap5.png" },
      { title: "Statue Concepts", img: "img/SonOfithaca/cap8.png" }
    ],
    team: [{ name: "Nobody Games Studio", role: "Development & Production" }],
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
    uiCaseStudy: [
      { title: "Main Hall Blockout", img: "img/tavern/cap7.png" },
      { title: "Tavern wine cellar Blockout", img: "img/tavern/cap6.png" },
      { title: "Main Hall", img: "img/tavern/cap3.png" },
      { title: "Bar Counter", img: "img/tavern/cap2.png" },
      { title: "Main Hall from above", img: "img/tavern/cap1.png" },
      { title: "Tavern wine cellar", img: "img/tavern/cap4.png" },
      { title: "My 3D Assets", img: "img/tavern/cap8.png" }
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
    uiCaseStudy: [
      { title: "Level 1 sketch", img: "img/km/cap5.png" },
      { title: "Level 1 Blockout", img: "img/km/cap4.png" },
      { title: "Level 1 Critical Path", img: "img/km/cap3.png" },
      { title: "Level 2 Critical Path", img: "img/km/cap2.png" }
    ],
    team: [{ name: "EVER REST GAMES", role: "Production, Art & Programming" }],
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
      "Designed and implemented clean, responsive in-game UI layouts and real-time HUD elements optimized for fast readability.",
      "Programmed a sequential checkpoint tracking system using Box2D sensors to manage lap completion, split times, and race progression accurately.",
      "Engineered vehicle-environment collision responses and tuned physical properties (friction, restitution, and track boundaries) in Box2D for responsive arcade handling."
    ],
    team: [
      { name: "Martí Mira", role: "UI/UX Designer & Programmer" },
      { name: "Arnau Balasch", role: "UI/UX Designer & Programmer" },
      { name: "Marc Blánquez", role: "Lead Programmer" },
      { name: "Manel Montes", role: "UI/UX Designer & Programmer" },
      { name: "Saüc Pellejero", role: "UI/UX Designer & Programmer" }
    ],
    itchioLink: "https://mmiraa15.itch.io/racing-game"
  },
  godOfWarBlockout: {
    title: "God of War (2018) – Level Blockout",
    role: "Level Designer & Blueprint Scripter",
    trailerEmbedUrl: "https://www.youtube.com/embed/Ck3RebU0pN8",
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
    uiCaseStudy: [
      { title: "Bridge & Traversability Zone", img: "img/GOW/Captura 1.png" },
      { title: "Forest Zone & Pacing", img: "img/GOW/Captura 2.png" },
      { title: "Hall Zone & Verticality", img: "img/GOW/Captura 3.png" },
      { title: "2D Spatial Layout & Flow Graph", img: "img/GOW/layout.png" },
      { title: "Verticality nodes", img: "img/GOW/Captura4.png" },
      { title: "Destructible walls", img: "img/GOW/Captura5.png" },
      { title: "Door of Kratos house", img: "img/GOW/Captura6.png" },
      { title: "Axe throwing Blueprint", img: "img/GOW/Captura7.png" },
      { title: "Kratos Movement Blueprint", img: "img/GOW/Captura8.png" }
    ],
    team: [
      { name: "Martí Mira", role: "Level Designer & Blueprint Scripter" },
      { name: "Marc Blánquez", role: "Level Designer & Blueprint Scripter" }
    ],
    pdfLink: "doc/Level Design Document_MartiMira .pdf",
    buildLink: "https://drive.google.com/file/d/1JwXPFnCHvom1adk0abyI54cSpUwzAbNp/view?usp=sharing"
  }
};

let currentUiSlide = 0;

function openProjectModal(projectId) {
  currentUiSlide = 0;
  const modalOverlay = document.getElementById("project-modal");
  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  
  const modalContainer = modalOverlay.querySelector(".modal-container");
  if (modalContainer) modalContainer.scrollTop = 0;

  const project = projectsDetails[projectId];
  if (!project) return;

  let mediaHtml = "";
  if (project.videoSrc) {
    mediaHtml = `
      <div class="modal-video-container">
        <video controls playsinline preload="metadata" class="modal-video-player" style="width: 100%; border-radius: 8px; display: block;">
          <source src="${project.videoSrc}" type="video/mp4">
        </video>
      </div>`;
  } else if (project.trailerEmbedUrl) {
    mediaHtml = `
      <div class="modal-video-container">
        <iframe src="${project.trailerEmbedUrl}?autoplay=0" title="${project.title} Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`;
  } else if (project.coverImg) {
    mediaHtml = `<img src="${project.coverImg}" alt="${project.title}" class="modal-header-img">`;
  }

  let metaBarHtml = "";
  if (project.teamSize || project.devTime || project.techStack) {
    metaBarHtml = `
      <div class="project-meta-bar">
        ${project.teamSize ? `<div class="meta-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span>${project.teamSize}</span></div>` : ""}
        ${project.devTime ? `<div class="meta-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>${project.devTime}</span></div>` : ""}
        ${project.techStack ? `<div class="meta-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><span>${project.techStack}</span></div>` : ""}
      </div>`;
  }

  let teamHtml = "";
  if (project.team && project.team.length > 0) {
    teamHtml = `
      <h3 class="modal-section-title">Team & Credits</h3>
      <div class="modal-team-grid">
        ${project.team.map(member => `<div class="team-member"><span class="member-name">${member.name}</span><span class="member-role">${member.role}</span></div>`).join("")}
      </div>`;
  }

  let actionButtonsHtml = "";
  if (project.itchioLink) {
    actionButtonsHtml += `<a href="${project.itchioLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-itch">Play on Itch.io</a>`;
  }
  if (project.artstationLink) {
    actionButtonsHtml += `<a href="${project.artstationLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-view">View on ArtStation</a>`;
  }
  if (project.pdfLink) {
    actionButtonsHtml += `<a href="${project.pdfLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-view">View LDD (PDF)</a>`;
  }
  if (project.buildLink) {
    actionButtonsHtml += `<a href="${project.buildLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-itch">Download Build</a>`;
  }

  let uiCaseStudyHtml = "";
  if (project.uiCaseStudy && project.uiCaseStudy.length > 0) {
    const firstSlide = project.uiCaseStudy[0];
    uiCaseStudyHtml = `
      <h3 class="modal-section-title">Showcase</h3>
      <div class="ui-slider-container">
        <div class="ui-slider-viewport">
          <img id="ui-slide-img" src="${firstSlide.img}" alt="Slide" onclick="window.open(this.src, '_blank')">
        </div>
        <div class="ui-slider-info">
          <div class="ui-slider-header">
            <h4 id="ui-slide-title">${firstSlide.title}</h4>
            <span id="ui-slide-counter" class="ui-slide-counter">1 / ${project.uiCaseStudy.length}</span>
          </div>
          ${firstSlide.desc ? `<p id="ui-slide-desc">${firstSlide.desc}</p>` : `<p id="ui-slide-desc" style="display: none;"></p>`}
          <div class="ui-slider-controls">
            <button class="ui-slider-btn prev" onclick="changeUiSlide(-1, '${projectId}')">&larr;</button>
            <button class="ui-slider-btn next" onclick="changeUiSlide(1, '${projectId}')">&rarr;</button>
          </div>
        </div>
      </div>`;
  }

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h2 class="modal-title">${project.title}</h2>
    ${project.award ? `<div class="project-award-badge">${project.award}</div>` : ""}
    <p class="modal-subtitle"><strong>Role:</strong> ${project.role}</p>
    ${mediaHtml}
    ${metaBarHtml}
    <h3 class="modal-section-title">My Key Contributions</h3>
    <ul class="modal-list">
      ${project.contributions.map(item => `<li>${item}</li>`).join("")}
    </ul>
    ${uiCaseStudyHtml}
    ${teamHtml}
    <div class="modal-footer" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
      ${actionButtonsHtml}
    </div>`;
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

function changeUiSlide(direction, projectId) {
  const project = projectsDetails[projectId];
  if (!project || !project.uiCaseStudy) return;

  const slides = project.uiCaseStudy;
  const imgElem = document.getElementById("ui-slide-img");
  const titleElem = document.getElementById("ui-slide-title");
  const descElem = document.getElementById("ui-slide-desc");

  const exitClass = direction === 1 ? "slide-exit-right" : "slide-exit-left";
  const enterClass = direction === 1 ? "slide-enter-left" : "slide-enter-right";

  if (imgElem) imgElem.classList.add(exitClass);

  setTimeout(() => {
    currentUiSlide += direction;
    if (currentUiSlide < 0) currentUiSlide = slides.length - 1;
    if (currentUiSlide >= slides.length) currentUiSlide = 0;

    const current = slides[currentUiSlide];

    if (imgElem) {
      imgElem.classList.remove(exitClass);
      imgElem.classList.add(enterClass);
      imgElem.src = current.img;
    }

    if (titleElem) titleElem.textContent = current.title;

    const counterElem = document.getElementById("ui-slide-counter");
    if (counterElem) counterElem.textContent = `${currentUiSlide + 1} / ${slides.length}`;

    if (descElem) {
      if (current.desc) {
        descElem.textContent = current.desc;
        descElem.style.display = "block";
      } else {
        descElem.textContent = "";
        descElem.style.display = "none";
      }
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (imgElem) imgElem.classList.remove(enterClass);
      }, 20);
    });
  }, 180);
}

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
        playPromise.catch(error => console.warn("Reproducció cancel·lada:", error));
      }
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  const bgSlides = document.querySelectorAll(".hero-bg-slide");
  if (bgSlides.length > 0) {
    let currentIndex = 0;
    setInterval(() => {
      const previousIndex = currentIndex;
      currentIndex = (currentIndex + 1) % bgSlides.length;

      bgSlides[previousIndex].classList.remove("active");
      bgSlides[previousIndex].classList.add("exit-left");

      bgSlides[currentIndex].classList.remove("exit-left");
      bgSlides[currentIndex].classList.add("active");

      setTimeout(() => {
        bgSlides[previousIndex].classList.remove("exit-left");
      }, 1200);
    }, 5000);
  }

  const elementsToAnimate = document.querySelectorAll(
    "section:not(.about-hero), .project-card, .skill-card, .about-hero-card, .contact-card"
  );

  elementsToAnimate.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach((el) => observer.observe(el));

  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  const cursorDot = document.querySelector(".star-cursor-dot");
  const canvas = document.getElementById("cursor-canvas");

  // Detectem si el dispositiu és tàctil o no utilitza ratolí
  const isTouchDevice = matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window;

  if (cursorDot && canvas && !isTouchDevice) {
    const ctx = canvas.getContext("2d");
    let points = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;

      points.push({ x, y, life: 1.0 });
    });

    function renderShootingStar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length > 1) {
        for (let i = 0; i < points.length - 1; i++) {
          const pt1 = points[i];
          const pt2 = points[i + 1];

          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);

          ctx.lineWidth = (i / points.length) * 4;
          ctx.strokeStyle = `rgba(237, 174, 73, ${pt1.life})`;
          ctx.lineCap = "round";
          ctx.stroke();

          pt1.life -= 0.04;
        }

        points = points.filter((p) => p.life > 0);
      }

      requestAnimationFrame(renderShootingStar);
    }

    renderShootingStar();

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .btn-secondary, input, textarea, .skill-card"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  const allSections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 200;

    allSections.forEach((sec) => {
      if (scrollPosition >= sec.offsetTop) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
  
});