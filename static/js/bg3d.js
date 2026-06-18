/**
 * bg3d.js — Three.js 3D Animated Background
 * Hacker theme: floating wireframe cubes + particle grid + neon lines
 */

(function () {
    'use strict';

    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x020209, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 80);

    // ── Color Palette ──────────────────────────────────────────
    const C_NEON   = 0x00f7ff;
    const C_PURPLE = 0xa259ff;
    const C_PINK   = 0xff0099;

    // ── Floating Wireframe Cubes ────────────────────────────────
    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(6, 6, 6);

    for (let i = 0; i < 18; i++) {
        const color = [C_NEON, C_PURPLE, C_PINK][i % 3];
        const mat = new THREE.MeshBasicMaterial({
            color,
            wireframe: true,
            transparent: true,
            opacity: 0.18 + Math.random() * 0.15
        });
        const cube = new THREE.Mesh(cubeGeo, mat);
        cube.position.set(
            (Math.random() - 0.5) * 180,
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 60 - 20
        );
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        cube.userData = {
            rx: (Math.random() - 0.5) * 0.008,
            ry: (Math.random() - 0.5) * 0.012,
            vy: (Math.random() - 0.5) * 0.04
        };
        scene.add(cube);
        cubes.push(cube);
    }

    // ── Particle Field ──────────────────────────────────────────
    const PARTICLE_COUNT = 600;
    const pPositions = new Float32Array(PARTICLE_COUNT * 3);
    const pVelocities = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        pPositions[i * 3]     = (Math.random() - 0.5) * 220;
        pPositions[i * 3 + 1] = (Math.random() - 0.5) * 150;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 30;
        pVelocities.push({
            x: (Math.random() - 0.5) * 0.03,
            y: (Math.random() - 0.5) * 0.03,
            z: 0
        });
    }
    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMaterial = new THREE.PointsMaterial({
        color: C_NEON, size: 0.6,
        transparent: true, opacity: 0.55,
        sizeAttenuation: true
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);

    // ── Grid Floor ──────────────────────────────────────────────
    const gridHelper = new THREE.GridHelper(300, 30, C_NEON, C_NEON);
    gridHelper.material.opacity = 0.06;
    gridHelper.material.transparent = true;
    gridHelper.position.y = -50;
    gridHelper.rotation.x = Math.PI * 0.05;
    scene.add(gridHelper);

    // ── Neon Connection Lines ───────────────────────────────────
    const lineMat = new THREE.LineBasicMaterial({
        color: C_NEON, transparent: true, opacity: 0.08
    });
    const lineGroup = new THREE.Group();
    for (let i = 0; i < 30; i++) {
        const pts = [
            new THREE.Vector3((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 130, (Math.random() - 0.5) * 80),
            new THREE.Vector3((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 130, (Math.random() - 0.5) * 80)
        ];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        lineGroup.add(new THREE.Line(lineGeo, lineMat));
    }
    scene.add(lineGroup);

    // ── Mouse parallax ─────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ── Resize ──────────────────────────────────────────────────
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── Animation Loop ──────────────────────────────────────────
    let t = 0;
    function animate() {
        requestAnimationFrame(animate);
        t += 0.005;

        // Rotate cubes
        cubes.forEach(cube => {
            cube.rotation.x += cube.userData.rx;
            cube.rotation.y += cube.userData.ry;
            cube.position.y += cube.userData.vy;
            if (cube.position.y >  65) cube.userData.vy *= -1;
            if (cube.position.y < -65) cube.userData.vy *= -1;
        });

        // Drift particles
        const pos = pGeometry.attributes.position.array;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            pos[i * 3]     += pVelocities[i].x;
            pos[i * 3 + 1] += pVelocities[i].y;
            if (Math.abs(pos[i * 3])     > 110) pVelocities[i].x *= -1;
            if (Math.abs(pos[i * 3 + 1]) > 75)  pVelocities[i].y *= -1;
        }
        pGeometry.attributes.position.needsUpdate = true;

        // Oscillate grid
        gridHelper.position.y = -50 + Math.sin(t * 0.4) * 3;

        // Parallax camera
        camera.position.x += (mouseX * 8 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 5 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }
    animate();
})();
