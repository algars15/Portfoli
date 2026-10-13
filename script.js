// Base de dades de projectes
const projectsDetails = {
  odossea: {
    title: "Odossea",
    role: "Level Designer & Game Designer",
    
    trailerEmbedUrl: "https://www.youtube.com/embed/eQ3rLHv5RtA",

    contributions: [
      "Conceptualized and balanced the primary puzzle and movement mechanics.",
      "Designed and laid out the level progression across the campaign.",
      "Programmed core player logic and implemented scene workflows directly in Unity."
    ],
    team: [
      { name: "Martí Mira", role: "Level Designer & Game Designer" },
      { name: "Marc Blánquez", role: "Lead Programmer" },
      { name: "Arnau Balasch", role: "2D Artist" },
      { name: "Oscar Alonso", role: "Programmer & Level Designer" },
      { name: "Toni Llovera", role: "UI/UX Designer & Programmer" }
      // Afegeix o canvia els que facin falta!
    ],
    itchioLink: "https://torratsgames.itch.io/odossea"
  }
};

function openProjectModal(projectId) {
  const project = projectsDetails[projectId];
  if (!project) return;

  // Decidim com mostrar el tràiler (YouTube o arxiu MP4)
  let mediaHtml = "";
  if (project.trailerEmbedUrl) {
    // Si és de YouTube
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
  } else if (project.trailerVideoFile) {
    // Si és un fitxer .mp4 local
    mediaHtml = `
      <div class="modal-video-container">
        <video controls>
          <source src="${project.trailerVideoFile}" type="video/mp4">
          El teu navegador no suporta el reproductor de vídeo.
        </video>
      </div>
    `;
  }
  // Generem la llista dels integrants
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

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    ${mediaHtml}
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-subtitle"><strong>Role:</strong> ${project.role}</p>



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
    // Netejar el contingut per aturar el so del vídeo en tancar
    document.getElementById("modal-body").innerHTML = "";
  }
}