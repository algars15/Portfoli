// Base de dades de projectes
const projectsDetails = {
  odossea: {
    title: "Odossea",
    role: "Level Designer & Game Designer",
    trailerEmbedUrl: "https://www.youtube.com/embed/eQ3rLHv5RtA",
    // Dades per a la barra inferior
    teamSize: "5",
    devTime: "1 week", 
    techStack: "Unity (C#)",
    contributions: [
      "Conceptualized and balanced the primary puzzle and movement mechanics.",
      "Designed and laid out the level progression across the campaign.",
      "Programmed core player logic and implemented scene workflows directly in Unity."
    ],
    team: [
      { name: "Martí Mira", role: "Level Designer & Game Designer" },
      { name: "Marc Blànquez", role: "Lead Programmer" },
      { name: "Arnau Balasch", role: "2D Artist" },
      { name: "Oscar Alonso", role: "Programmer & Level Designer" },
      { name: "Toni Llovera", role: "UI/UX Designer & Programmer" }
    ],
    itchioLink: "https://torratsgames.itch.io/odossea"
  },

  paraulesMagiques: {
    title: "Paraules Màgiques",
    role: "UI/UX Designer",
    trailerEmbedUrl: "https://www.youtube.com/embed/4wju0iSo_dE",
    coverImg: "img/PM/Titol.png",
    // Dades per a la barra inferior
    teamSize: "3",
    devTime: "1 month",
    techStack: "Unity (C#)", // o HTML5 / Web segons com ho tinguis
    contributions: [
      "Conceptualized the core educational game flow and dynamic word puzzle progression.",
      "Designed and structured clean, accessible UI layouts for browser gameplay.",
      "Implemented responsive HTML5 canvas systems, gameplay feedback, and audio cues."
    ],
    team: [
      { name: "Martí Mira", role: "UI/UX Designer" },
      { name: "Marc Blànquez", role: "Lead Programmer" },
      { name: "Arnau Balasch", role: "2D Artist" }
    ],
    itchioLink: "https://mmiraa15.itch.io/paraules-magiques"
  },

  sonOfIthaca: {
    title: "Son of Ithaca",
    role: "3D Artist & Level Designer",
    trailerEmbedUrl: "https://www.youtube.com/embed/PYzuc0fsHpM",
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

    itchioLink: "https://nobody-games-studio.itch.io/son-of-ithaca"
  }
};


function openProjectModal(projectId) {
  const project = projectsDetails[projectId];
  if (!project) return;

  // 1. Multimèdia (Tràiler o imatge)
  let mediaHtml = "";
  if (project.trailerEmbedUrl) {
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

  // 2. Barra ràpida: Integrants, Temps i Tecnologia (amb icones SVG vectorials)
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

  // 3. Llista de membres
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

  // 4. Inserció al cos del modal (TÍTOL A DALT DE TOT)
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

    ${teamHtml}

    <div class="modal-footer">
      <a href="${project.itchioLink}" target="_blank" rel="noopener noreferrer" class="btn-project btn-itch">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 6px;">
          <path d="M3.193 2c-.655 0-1.193.538-1.193 1.193v2.859c0 .655.538 1.193 1.193 1.193h.084c.655 0 1.193-.538 1.193-1.193V3.193C4.47 2.538 3.932 2 3.277 2zm17.614 0c-.655 0-1.193.538-1.193 1.193v2.859c0 .655.538 1.193 1.193 1.193h.084c.655 0 1.193-.538 1.193-1.193V3.193c0-.655-.538-1.193-1.193-1.193zM5.568 5.625c-.714 0-1.293.58-1.293 1.294v4.453c0 .714.579 1.294 1.293 1.294h1.791c.714 0 1.293-.58 1.293-1.294V6.919c0-.714-.579-1.294-1.293-1.294zm12.864 0c-.714 0-1.293.58-1.293 1.294v4.453c0 .714.579 1.294 1.293 1.294h1.791c.714 0 1.293-.58 1.293-1.294V6.919c0-.714-.579-1.294-1.293-1.294zm-9.336 2.375c-.714 0-1.293.58-1.293 1.294v2.078c0 .714.579 1.294 1.293 1.294h3.408c.714 0 1.293-.58 1.293-1.294V9.294c0-.714-.579-1.294-1.293-1.294zM2 13.917v5.333C2 20.767 3.233 22 4.75 22h14.5c1.517 0 2.75-1.233 2.75-2.75v-5.333H2zm6.2 2.75h1.6v1.6H8.2zm4.8 0h1.6v1.6H13z"/>
        </svg>
        Play on Itch.io
      </a>
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