// Links Data
const links = [
    { id: 1, title: 'Portfolio', url: 'https://chksoumya.in' },
    { id: 2, title: 'GitHub', url: 'https://github.com/soumyachk101' },
    { id: 3, title: 'LinkedIn', url: 'https://www.linkedin.com/in/soumya-chakraborty-102b24399' },
    { id: 4, title: 'LeetCode', url: 'https://leetcode.com/u/soumya-chk101/' },
    { id: 5, title: 'HackerRank', url: 'https://www.hackerrank.com/profile/soumyachk7' },
];

const container = document.getElementById('links-container');

// Render Links
links.forEach((link, index) => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link-card';
    a.target = '_blank';

    // Add staggered animation delay
    a.style.opacity = '0';
    a.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.3}s`;

    a.innerHTML = `
        <span class="link-text">${link.title}</span>
    `;

    container.appendChild(a);
});

// Add keyframes for fadeIn if not in CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
