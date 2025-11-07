function accessDashboard(departmentName) {
  // Show toast notification
  const toast = document.getElementById('toast');
  toast.textContent = `Accessing ${departmentName} Dashboard...`;
  toast.classList.add('show');

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);

  // In a real application, this would navigate to the dashboard
  console.log(`${departmentName} Dashboard accessed`);
}

// Optional: Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
