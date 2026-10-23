
    let tickets = [
      {
        id: 2,
        title: "Installation d’un logiciel",
        description: "Installer un logiciel sur le poste.",
        category: "Logiciel",
        priority: "Normale"
      },
      {
        id: 3,
        title: "Clavier défectueux",
        description: "Certaines touches ne fonctionnent plus.",
        category: "Matériel",
        priority: "Basse"
      },
      {
        id: 1,
        title: "Connexion Wi-Fi instable",
        description: "Le réseau se déconnecte régulièrement.",
        category: "Réseau",
        priority: "Haute"
      }
    ];

    let nextId = 4;

    const FORM = document.getElementById("ticketForm");
    const LIST = document.getElementById("ticketList");
    const CONT = document.getElementById("ticketCount");
    function AFF() {
      CONT.textContent = tickets.length + " demandes";
      LIST.replaceChildren();

      tickets.forEach(function (TICKET) {
        const CARD = document.createElement("div");
        CARD.className =
          "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 w-full flex flex-col justify-between";

        const ICON = document.createElement("div");
        ICON.className = " bg-slate-100 icon ";
        ICON.innerHTML = '<i class="fa-solid fa-wifi text-lg"></i>';
        const TITLE = document.createElement("h3");
        TITLE.className = "text-xl font-bold mb-2";
        TITLE.textContent = TICKET.title;

        const DESCRIPTION = document.createElement("p");
        DESCRIPTION.className = "text-slate-500 mb-4";
        DESCRIPTION.textContent = TICKET.description;

        const CATEGORY = document.createElement("span");
        CATEGORY.className = "bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-semibold";
        CATEGORY.textContent = TICKET.category;

        if (TICKET.category === "réseau") {
          ICON.className = " bg-slate-100  m-15px icon";
          ICON.innerHTML = '<i class="fa-solid fa-wifi text-lg m-[15px]"></i>';
        } else if (TICKET.category === "Logiciel") {
          ICON.className = " bg-slate-100   m-15px icon"; 
          ICON.innerHTML = '<i class="fa-solid fa-laptop-code m-[15px]"></i>';
        } else if (TICKET.category === "Matériel") {
          ICON.className = " bg-slate-100  m-15px icon";
          ICON.innerHTML = '<i class="fa-solid fa-hard-drive m-[15px]"></i>';
        }





        const PRIORITY = document.createElement("span");
        PRIORITY.className = "px-3 py-1 rounded-full text-xs font-semibold";

        if (TICKET.priority == "Haute") {
          PRIORITY.className += " bg-red-100 text-red-700";
        } else if (TICKET.priority == "Normale") {
          PRIORITY.className += " bg-amber-100 text-amber-700";
        } else if (TICKET.priority == "Basse") {
          PRIORITY.className += " bg-green-100 text-green-700";
        }

        PRIORITY.textContent = TICKET.priority;

        const BADGES = document.createElement("div");
        BADGES.className = "flex gap-2 mt-2 mb-5 p-4 border-b border-slate-200";
        BADGES.append(CATEGORY, PRIORITY);

        const BTN = document.createElement("button");
        BTN.textContent = "♜ Supprimer";
        BTN.className = "bg-red-100 hover:bg-red-200 text-[#CC626A] font-bold py-2 px-4 rounded transition-colors";
        const BTNm = document.createElement("button");
        BTNm.textContent = "✎  Modifier";
        BTNm.className = "bg-red-100 hover:bg-red-200 text-[#CC626A] font-bold py-2 px-4 rounded transition-colors";

        BTN.addEventListener("click", function supprimerTicket() {
          const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette demande ?");
          if (confirmation){
          supprimer(TICKET.id);
        }});


        CARD.append(ICON, TITLE, DESCRIPTION, BADGES, BTN);
        LIST.appendChild(CARD);
      });
    }

    function supprimer(id) {
      tickets = tickets.filter(ticket => ticket.id !== id);
      AFF();
    }

    AFF();

    FORM.addEventListener("submit", function (event) {
      event.preventDefault();

      const NEW_TICKET = {
        id: nextId++,
        title: document.getElementById("TITLE").value.trim(),
        description: document.getElementById("description").value.trim(),
        category: document.getElementById("category").value,
        priority: document.getElementById("priority").value
      };

      tickets.push(NEW_TICKET);

      AFF();

      FORM.reset();
    });