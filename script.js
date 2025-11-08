function accessDashboard(departmentName, link = "/#") {
  // Show toast notification
  const toast = document.getElementById("toast");
  toast.textContent = `Accessing ${departmentName} Dashboard...`;
  toast.classList.add("show");

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  alert(`Accessing ${link} Dashboard`);
  // In a real application, this would navigate to the dashboard
  window.location.href = `${link}`;
  console.log(`${departmentName} Dashboard accessed`);
}

// Optional: Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const departments = [
  // HR Department
  {
    name: "Assets Management System",
    title: "HR Dashboard",
    tag: "HR",
    description:
      "Maintain and track company assets. Manage assignments, asset lifecycle, and return processes for employees.",
    url: "http://asset.mysteryrooms.co.in/",
  },
  {
    name: "Employee Review System",
    title: "HR Dashboard",
    tag: "HR",
    description:
      "Evaluate employee performance, collect feedback, and track improvement over time with structured reviews.",
    url: "https://feedback.mysteryrooms.work/",
  },
  {
    name: "Jibble",
    title: "HR Dashboard",
    tag: "HR",
    description:
      "Track employee attendance, shift timing, and productivity using modern time-tracking tools.",
    url: "https://web.jibble.io/people/members",
  },
  {
    name: "Salary Box",
    title: "HR Dashboard",
    tag: "HR",
    description:
      "Manage payroll processing, salary slips, and employee compensation records securely.",
    url: "#",
  },
  {
    name: "Employee Celebration Platform",
    title: "HR Dashboard",
    tag: "HR",
    description:
      "Celebrate employee milestones and track engagement events across the organization.",
    url: "#",
  },

  // Sales Department
  {
    name: "Mystery Rooms Booking Management System",
    title: "Sales Dashboard",
    tag: "Sales",
    description:
      "Manage and track bookings for Mystery Rooms. Monitor sales performance, conversion rates, and revenue insights.",
    url: "https://bookings.mysteryrooms.in/admin/home",
  },
  {
    name: "Mystery Rooms Team Entry System",
    title: "Sales Dashboard",
    tag: "Sales",
    description:
      "Track and manage team entries for Mystery Rooms. View performance metrics and team participation data.",
    url: "https://mrims.mysteryrooms.in/home/login",
  },
  {
    name: "CRM",
    title: "Sales Dashboard",
    tag: "Sales",
    description:
      "Centralized platform to track leads, manage clients, and analyze conversion metrics for sales growth.",
    url: "https://sales.mysteryrooms.work/",
  },
  {
    name: "Challenge Rooms Booking Management System",
    title: "Sales Dashboard",
    tag: "Sales",
    description:
      "Handle Challenge Rooms bookings and manage payment and customer details to track business performance.",
    url: "#",
  },
  {
    name: "Challenge Rooms Team Entry System",
    title: "Sales Dashboard",
    tag: "Sales",
    description:
      "Manage team entries, timings, and overall participation metrics for Challenge Rooms events.",
    url: "https://crims.mysteryrooms.work/",
  },

  // Operations Department
  {
    name: "Support Ticket System",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Manage and resolve customer or internal tickets efficiently. Monitor response time, priorities, and resolutions.",
    url: "https://support.mysteryrooms.work/",
  },
  {
    name: "Inventory Management System",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Track stock levels, monitor item usage, and optimize procurement with real-time inventory data.",
    url: "#",
  },
  {
    name: "POS System",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Process sales transactions, monitor daily sales, and manage receipts and billing records.",
    url: "https://pos.mysteryrooms.work/",
  },
  {
    name: "Vendor Payment Form",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Handle vendor payments, approvals, and tracking of transaction histories with transparency.",
    url: "https://mybill.onl/upload",
  },
  {
    name: "District App Dashboard",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Monitor activity, performance, and data analytics across district-level operational systems.",
    url: "#",
  },
  {
    name: "Nearby Dashboard",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Oversee local performance metrics and nearby service management across multiple locations.",
    url: "#",
  },
  {
    name: "Jio Business Dashboard",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Monitor communication plans, data usage, and connectivity analytics for business operations.",
    url: "#",
  },
  {
    name: "Amazon Business Dashboard",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Track business orders, purchases, and inventory through Amazon’s business account tools.",
    url: "#",
  },
  {
    name: "Uber Business Dashboard",
    title: "Operations Dashboard",
    tag: "Operations",
    description:
      "Manage company rides, expenses, and usage analytics for corporate travel through Uber.",
    url: "https://www.uber.com/in/en/business/",
  },

  // Customer Support Department
  {
    name: "Doubletick WhatsApp API",
    title: "Customer Support Dashboard",
    tag: "Customer Support",
    description:
      "Automate and manage WhatsApp conversations with customers. Improve response rate and support automation.",
    url: "https://web.doubletick.io/",
  },
  {
    name: "SmartWhap WhatsApp API",
    title: "Customer Support Dashboard",
    tag: "Customer Support",
    description:
      "Streamline customer engagement through WhatsApp automation. Manage templates, responses, and lead tracking.",
    url: "https://app.smartwhap.com/",
  },
  {
    name: "Teleforce VOIP System",
    title: "Customer Support Dashboard",
    tag: "Customer Support",
    description:
      "Handle calls and manage communication logs using VOIP technology for seamless customer interactions.",
    url: "https://platform.teleforce.cx/",
  },

  // Finance Department
  {
    name: "RazorPay System",
    title: "Finance Dashboard",
    tag: "Finance",
    description:
      "Monitor transactions, settlements, and payment analytics using RazorPay integration.",
    url: "#",
  },
  {
    name: "Paytm Business Dashboard",
    title: "Finance Dashboard",
    tag: "Finance",
    description:
      "View Paytm business transactions, settlements, and payment history for financial insights.",
    url: "#",
  },
  {
    name: "Stripe Dashboard",
    title: "Finance Dashboard",
    tag: "Finance",
    description:
      "Track Stripe payments, customer subscriptions, and revenue analytics for online transactions.",
    url: "#",
  },

  // Business Development Department
  {
    name: "Allots SMS System",
    title: "Business Development Dashboard",
    tag: "Business Development",
    description:
      "Send bulk SMS campaigns, manage templates, and analyze open and delivery metrics for outreach.",
    url: "https://www.alots.in/sms-panel/login.php",
  },

  // Backend Department
  {
    name: "Automate Task App",
    title: "Backend Dashboard",
    tag: "Backend",
    description:
      "Automate repetitive backend processes and track workflow executions to enhance productivity.",
    url: "#",
  },

  // Automation / IT / Miscellaneous
  {
    name: "N8N",
    title: "Automation Dashboard",
    tag: "Automation",
    description:
      "Manage and visualize automated workflows integrating multiple business tools and APIs.",
    url: "#",
  },
  {
    name: "Keeper Security",
    title: "IT Dashboard",
    tag: "IT",
    description:
      "Store and manage organization passwords securely with enterprise-grade encryption.",
    url: "#",
  },
  {
    name: "SmartPing",
    title: "Monitoring Dashboard",
    tag: "Monitoring",
    description:
      "Track server uptime, response time, and system availability through live ping metrics.",
    url: "#",
  },
  {
    name: "Fireflies",
    title: "Productivity Dashboard",
    tag: "Productivity",
    description:
      "Record, transcribe, and analyze meeting conversations for actionable insights.",
    url: "#",
  },
  {
    name: "Zoom Meeting",
    title: "Communication Dashboard",
    tag: "Communication",
    description:
      "Manage virtual meetings, track participation, and review recordings for productivity analysis.",
    url: "#",
  },
];

function search(e, searchTitle = true) {
  const query = e.target.value.toLowerCase();
  const filteredDepartments = departments.filter(
    (department) =>
      department.tag.toLowerCase().includes(query) ||
      (searchTitle && department.name.toLowerCase().includes(query))
  );
  document.querySelector(".dashboards-grid").innerHTML = "";
  renderDashboards(filteredDepartments);
}
// Function to render dashboards
// function renderDashboards(departments) {
//   const departmentContainer = document.querySelector(".dashboards-grid");
//   const selectFilter = document.querySelector(".filterSelect");

//   departments.forEach((department) => {
//     const cardHTML = `
//       <div class="card">
//       <span class="card-tag">${department.tag}</span>
//       <div class="card-header">
//       <h1 class='card-title'>${department.name}</h1>
//         </div>
//         <p class="card-description">${department.description}</p>
//         <button class="btn btn-primary" onclick="${department.onclick}">Access Dashboard</button>
//       </div>
//     `;
//     const optionHTML = `<option value="${department.tag}">${department.tag}</option>`;
//     if (
//       !Array.from(selectFilter.options).some(
//         (opt) => opt.value === department.tag
//       )
//     ) {
//       selectFilter.insertAdjacentHTML("beforeend", optionHTML);
//     }

//     departmentContainer.insertAdjacentHTML("beforeend", cardHTML);
//   });
// }

// simple icon per tag (fallback to 🧩)
const tagIcon = {
  HR: "👥",
  Sales: "📈",
  Operations: "🛠️",
  "Customer Support": "💬",
  Finance: "💳",
  "Business Development": "🚀",
  Backend: "🧱",
  Automation: "⚙️",
  IT: "🔐",
  Monitoring: "📡",
  Productivity: "⏱️",
  Communication: "🎥",
};

function renderDashboards(items) {
  const departmentContainer = document.querySelector(".dashboards-grid");
  const selectFilter = document.querySelector(".filterSelect");

  departmentContainer.innerHTML = "";

  items.forEach((department) => {
    // ensure tag option exists
    const optionHTML = `<option value="${department.tag}">${department.tag}</option>`;
    if (
      ![...selectFilter.options].some((opt) => opt.value === department.tag)
    ) {
      selectFilter.insertAdjacentHTML("beforeend", optionHTML);
    }

    // card HTML
    const cardHTML = `
      <div class="card">
        <span class="card-tag">${department.tag}</span>
        <div class="card-header">
          <div class="card-icon">${tagIcon[department.tag] ?? "🧩"}</div>
          <h1 class="card-title">${department.name}</h1>
        </div>
        <p class="card-description">${department.description}</p>
        <button class="btn btn-primary" onclick="window.open('${
          department.url
        }', '_blank')">Access Dashboard</button>
      </div>
    `;
    departmentContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // attach events (single delegate for performance)
}
renderDashboards(departments);
