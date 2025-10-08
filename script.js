// Update last updated timestamp
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const now = new Date();
        lastUpdated.textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add deployment status indicator
    addDeploymentInfo();
});

function addDeploymentInfo() {
    // This function can be extended to show deployment status
    console.log('GitHub Pages site loaded successfully!');
    console.log('Deployed via GitHub Actions CI/CD pipeline');
    
    // Add a subtle indicator that the site was deployed automatically
    const deploymentBadge = document.createElement('div');
    deploymentBadge.innerHTML = '🚀 Auto-deployed';
    deploymentBadge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 12px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: fadeInUp 0.5s ease-out;
    `;
    
    // Add fade in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .nav-links a.active {
            color: #3498db !important;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(deploymentBadge);
    
    // Auto-hide the badge after 5 seconds
    setTimeout(() => {
        deploymentBadge.style.animation = 'fadeInUp 0.5s ease-out reverse';
        setTimeout(() => {
            if (deploymentBadge.parentNode) {
                deploymentBadge.parentNode.removeChild(deploymentBadge);
            }
        }, 500);
    }, 5000);
}