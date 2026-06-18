/**
 * main.js — Portfolio interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

    // ── Live Clock in HUD ──────────────────────────────────────
    const hudClock = document.getElementById('hud-time');
    function updateClock() {
        if (!hudClock) return;
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        hudClock.textContent = `${h}:${m}:${s}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // ── Smooth internal link scrolls ───────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Page entrance fade-in for inner pages ──────────────────
    const wrapper = document.querySelector('.content-wrapper');
    if (wrapper) {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
            wrapper.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'translateY(0)';
        });
    }

    // ── Cursor trail (subtle neon dots) ────────────────────────
    const trailDots = [];
    const MAX_TRAIL = 8;
    for (let i = 0; i < MAX_TRAIL; i++) {
        const d = document.createElement('div');
        d.style.cssText = `
            position:fixed;pointer-events:none;z-index:9999;
            width:${4 + i * 0.5}px;height:${4 + i * 0.5}px;
            border-radius:50%;
            background:rgba(0,247,255,${0.6 - i * 0.07});
            box-shadow:0 0 ${4 + i}px rgba(0,247,255,0.5);
            transform:translate(-50%,-50%);
            transition:left ${0.05 + i * 0.03}s ease,top ${0.05 + i * 0.03}s ease;
            opacity:0;
        `;
        document.body.appendChild(d);
        trailDots.push(d);
    }
    document.addEventListener('mousemove', e => {
        trailDots.forEach((d, i) => {
            setTimeout(() => {
                d.style.left = e.clientX + 'px';
                d.style.top  = e.clientY + 'px';
                d.style.opacity = '1';
            }, i * 18);
        });
    });
    document.addEventListener('mouseleave', () => {
        trailDots.forEach(d => { d.style.opacity = '0'; });
    });

    // ── Intersection observer: stagger card reveal ─────────────
    const revealItems = document.querySelectorAll(
        '.repo-card-3d, .skill-panel, .stat-hex, .channel-item'
    );
    if (revealItems.length) {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = (Array.from(revealItems).indexOf(el) % 6) * 80;
                    el.style.transition = `opacity 0.5s ${delay}ms ease, transform 0.5s ${delay}ms ease`;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    revealObs.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        revealItems.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            revealObs.observe(el);
        });
    }

    // ── Click ripple on buttons ────────────────────────────────
    document.querySelectorAll('.btn, .submit-btn-3d, .gh-profile-btn, .filter-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                position:absolute; border-radius:50%;
                width:${size}px; height:${size}px;
                left:${e.clientX - rect.left - size/2}px;
                top:${e.clientY - rect.top - size/2}px;
                background:rgba(0,247,255,0.25);
                transform:scale(0); animation:rippleAnim 0.5s ease forwards;
                pointer-events:none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
        });
    });

    // Inject ripple keyframes once
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleAnim {
                to { transform: scale(3); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // ── Glitch on hover for page titles ───────────────────────
    document.querySelectorAll('.page-title').forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.animationPlayState = 'running';
        });
    });

});
