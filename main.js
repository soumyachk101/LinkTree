import * as THREE from 'three';

// Links data with icons
const links = [
    { id: 1, title: 'Portfolio', url: 'https://chksoumya.in', color: '#00f2ff', icon: 'fas fa-globe' },
    { id: 2, title: 'GitHub', url: 'https://github.com/soumyachk101', color: '#ffffff', icon: 'fab fa-github' },
    { id: 3, title: 'LinkedIn', url: 'https://www.linkedin.com/in/soumya-chakraborty-102b24399', color: '#0077B5', icon: 'fab fa-linkedin' },
    { id: 4, title: 'LeetCode', url: 'https://leetcode.com/u/soumya-chk101/', color: '#FFA116', icon: 'fas fa-code' },
    { id: 5, title: 'HackerRank', url: 'https://www.hackerrank.com/profile/soumyachk7', color: '#2EC866', icon: 'fab fa-hackerrank' },
    { id: 6, title: 'Instagram', url: 'https://www.instagram.com/soumya_chk', color: '#E1306C', icon: 'fab fa-instagram' },
    { id: 7, title: 'X / Twitter', url: 'https://x.com/soumyachk1', color: '#1DA1F2', icon: 'fab fa-x-twitter' },
    { id: 8, title: 'Telegram', url: 'https://t.me/Soumya_767', color: '#0088cc', icon: 'fab fa-telegram' },
    { id: 9, title: 'WhatsApp', url: 'https://wa.me/qr/PAVVG4QPZUJXF1', color: '#25D366', icon: 'fab fa-whatsapp' }
];

// Scene setup
const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0fdfa);
scene.fog = new THREE.Fog(0xf0fdfa, 10, 50);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0x14b8a6, 1.5);
pointLight1.position.set(10, 5, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x2dd4bf, 1.5);
pointLight2.position.set(-10, 5, -10);
scene.add(pointLight2);

const spotLight = new THREE.SpotLight(0x0f766e, 2);
spotLight.position.set(0, 15, 5);
spotLight.angle = 0.5;
spotLight.penumbra = 1;
scene.add(spotLight);

// Particles (stars)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    sizeAttenuation: true,
    color: 0x5eead4,
    transparent: true,
    opacity: 0.6
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Logo sphere
const logoGeometry = new THREE.IcosahedronGeometry(0.65, 1);
const logoMaterial = new THREE.MeshStandardMaterial({
    color: 0x14b8a6,
    emissive: 0x14b8a6,
    emissiveIntensity: 1.2,
    metalness: 0.8,
    roughness: 0.2
});
const logo = new THREE.Mesh(logoGeometry, logoMaterial);
logo.position.y = 5;
scene.add(logo);

// Rotating ring
const ringGeometry = new THREE.TorusGeometry(0.9, 0.02, 16, 100);
const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x2dd4bf,
    transparent: true,
    opacity: 0.6
});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.position.y = 5;
scene.add(ring);

// Secondary ring
const ring2Geometry = new THREE.TorusGeometry(1.05, 0.015, 16, 100);
const ring2Material = new THREE.MeshBasicMaterial({
    color: 0x0f766e,
    transparent: true,
    opacity: 0.4
});
const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
ring2.position.y = 5;
ring2.rotation.x = Math.PI / 2;
scene.add(ring2);

// Mouse tracking
const mouse = { x: 0, y: 0 };
document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Create HTML links
const linksContainer = document.getElementById('links-container');

// Header
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
    <div class="logo-badge">
        <i class="fas fa-star"></i>
    </div>
    <h1>Soumya Chakraborty</h1>
    <p>Connect & Collaborate</p>
    <div class="divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
    </div>
`;
linksContainer.appendChild(header);

// Create link cards with icons
links.forEach((link, index) => {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = link.url;
    card.target = '_blank';
    card.style.setProperty('--card-color', link.color);
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="link-icon-wrapper">
            <i class="${link.icon}"></i>
        </div>
        <div class="link-content">
            <div class="link-text">${link.title}</div>
            <div class="link-subtitle">Click to open</div>
        </div>
        <div class="link-arrow">
            <i class="fas fa-arrow-right"></i>
        </div>
    `;

    linksContainer.appendChild(card);
});

// Footer
const footer = document.createElement('div');
footer.className = 'footer';
footer.innerHTML = `
    <div class="divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
    </div>
    <p>Made with <i class="fas fa-heart"></i> by Soumya</p>
`;
linksContainer.appendChild(footer);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Rotate logo
    logo.rotation.y = time * 0.3;
    logo.rotation.x = Math.sin(time * 0.5) * 0.1;

    // Rotate rings
    ring.rotation.z = -time * 0.5;

    // Rotate particles
    particles.rotation.y = time * 0.05;

    // Parallax effect
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Hide loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 500);
});

// Konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Matrix mode
        scene.background = new THREE.Color(0x001a00);
        scene.fog.color = new THREE.Color(0x001a00);
        logoMaterial.color.setHex(0x00ff00);
        logoMaterial.emissive.setHex(0x00ff00);
        ringMaterial.color.setHex(0x00ff00);
        ring2Material.color.setHex(0x00ff00);
        particlesMaterial.color.setHex(0x00ff00);
        pointLight1.color.setHex(0x00ff00);
        pointLight2.color.setHex(0x00ff00);
        spotLight.color.setHex(0x00ff00);

        document.querySelector('.header p').textContent = '[ MATRIX ACTIVATED ]';
        document.querySelectorAll('.link-card').forEach(card => {
            card.style.setProperty('--card-color', '#00ff00');
        });

        console.log('🟢 MATRIX MODE ACTIVATED');
    }
});

// Start animation
animate();
