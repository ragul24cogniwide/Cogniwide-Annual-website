/* ===================================================
   COGNIWIDE 2026 – JavaScript
   =================================================== */

// ===== TEAM MEMBERS DATA =====
const teamData = {
    gladiators: {
        name: 'Gladiators',
        motto: '"Bold Arena Triumph"',
        logo: '/images/GladiatorsPlain.png',
        color: '#FFFF00',
        members: [
            'Afzal Alam',
            'Anitha Subramani',
            'Bharath Kumar',
            'Deepak Selvam',
            'Kanchi Kumar (C)',
            'Mohammed Asik A',
            'Sriman Mayandi',
            'Swetha Manthiramoorthy',
            'Venkatesan Rajasekaran (VC)',
            'Vidhya Elango',
            'Vinoth Shanmugam',
            'Vivek Senthilkumar'
        ]
    },
    spartans: {
        name: 'Spartans',
        motto: '"Born to Win"',
        logo: '/images/Spartans 1.png',
        color: '#FF0000',
        members: [
            'Barath Erulappan',
            'Divya Jeyashree',
            'Esakkiappan Nambi',
            'Hariharan Ilango (C)',
            'K Mohammed Azaarudeen',
            'Krishna Rajkumar P',
            'Mukundan Duraikannan',
            'Priyanga R',
            'Rajesh Chidambara',
            'Saravanakumar Vetrivel',
            'Vigneshwaran Ilangovan (VC)',
            'Vijayashree JJ'
        ]
    },
    samurais: {
        name: 'Samurais',
        motto: '"Refuse to Lose"',
        logo: '/images/SamuraisPlain.png',
        color: '#008000',
        members: [
            'Abubukker Siddiq R',
            'Anandu Sanu (C)',
            'Athul Anand (VC)',
            'Kannadhasan Kasi',
            'Karnassagar S',
            'Omkar Kamat',
            'Preethaa Karthikeyan',
            'Ranjitha Rajendran',
            'Sakthibalan Giritharan',
            'Seetharaman V',
            'Silambarasan Venkatesan'
        ]
    },
    knights: {
        name: 'Knights',
        motto: '"Together We Rise"',
        logo: '/images/KnightsPlain.png',
        color: '#0000FF',
        members: [
            'Jai Kumar RR',
            'Mathanprasath K',
            'Naveen Karthick R',
            'Pradeep Kumar E (VC)',
            'Praveen Alagesan',
            'Ragulvasanth Muthukumar',
            'Shambu Kameshwar B (C)',
            'Shamili Sivassankaran',
            'Sridhar Srinivasan',
            'Srisha S',
            'Vidhya Selvaraj',
            'Salman Farzee'
        ]
    }
};

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const navLinkEls = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNav();
    revealOnScroll();
});

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinksEl.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinksEl.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

// ===== HERO SPARKS =====
function createSparks() {
    const container = document.getElementById('heroSparks');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.left = Math.random() * 100 + '%';
        spark.style.width = (Math.random() * 3 + 1) + 'px';
        spark.style.height = (Math.random() * 3 + 1) + 'px';
        spark.style.animationDuration = (Math.random() * 8 + 4) + 's';
        spark.style.animationDelay = (Math.random() * 8) + 's';
        spark.style.opacity = Math.random() * 0.8 + 0.2;
        container.appendChild(spark);
    }
}
createSparks();

// ===== COUNTDOWN TIMER =====
// Target: 28 Feb 2026 18:30 (CPL Finals at 6:30 PM)
const finalDate = new Date('2026-02-28T18:30:00+05:30');

function updateCountdown() {
    const now = new Date();
    const diff = finalDate - now;

    if (diff <= 0) {
        document.getElementById('cd-days').textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent = '00';
        document.getElementById('cd-secs').textContent = '00';
        const label = document.querySelector('.countdown-label');
        if (label) label.textContent = '🏆 The Final Has Begun!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== TEAM FILTER TOGGLE =====
const filterBtns = document.querySelectorAll('.filter-btn');
const teamCards = document.querySelectorAll('.team-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        teamCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-team') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
                // If hidden team was active, close panel
                if (card.classList.contains('active-team')) {
                    card.classList.remove('active-team');
                    closePlayerPanel();
                }
            }
        });
    });
});

// ===== PLAYER PANEL =====
const playerPanel = document.getElementById('playerPanel');
const playerList = document.getElementById('playerList');
const panelEmpty = document.getElementById('playerPanelEmpty');
const panelName = document.getElementById('panelTeamName');
const panelMotto = document.getElementById('panelTeamMotto');
const panelLogo = document.getElementById('panelTeamLogo');
const panelClose = document.getElementById('panelClose');

let activeTeam = null;

function openPlayerPanel(teamKey) {
    const data = teamData[teamKey];
    if (!data) return;

    // Update header
    panelName.textContent = data.name;
    panelMotto.textContent = data.motto;
    panelLogo.src = data.logo;
    panelLogo.alt = data.name;
    panelLogo.style.display = 'block';
    panelClose.classList.add('visible');

    // Color accent on panel header
    document.querySelector('.player-panel-header').style.borderBottomColor = data.color + '66';

    // Hide empty state, show list
    panelEmpty.style.display = 'none';
    playerList.innerHTML = '';

    data.members.forEach((member, i) => {
        const li = document.createElement('li');
        li.classList.add('player-item');
        li.style.animationDelay = (i * 40) + 'ms';

        const initials = member.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

        li.innerHTML = `
      <span class="player-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="player-avatar" style="border-color:${data.color}55; color:${data.color};">${initials}</div>
      <span class="player-name">${member}</span>
    `;
        playerList.appendChild(li);
    });

    // Scroll panel into view on mobile
    if (window.innerWidth <= 1100) {
        playerPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function closePlayerPanel() {
    panelName.textContent = 'Select a Team';
    panelMotto.textContent = '';
    panelLogo.style.display = 'none';
    panelClose.classList.remove('visible');
    panelEmpty.style.display = 'flex';
    playerList.innerHTML = '';
    document.querySelector('.player-panel-header').style.borderBottomColor = '';
    activeTeam = null;
}

// Team card click
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const teamKey = card.getAttribute('data-team');

        // Toggle: click same card again = close
        if (activeTeam === teamKey) {
            card.classList.remove('active-team');
            closePlayerPanel();
            return;
        }

        // Remove active from all cards
        teamCards.forEach(c => c.classList.remove('active-team'));
        card.classList.add('active-team');
        activeTeam = teamKey;
        openPlayerPanel(teamKey);
    });
});

// Close button
panelClose.addEventListener('click', () => {
    teamCards.forEach(c => c.classList.remove('active-team'));
    closePlayerPanel();
});

// ===== INTERACTIVE FIXTURE HIGHLIGHT =====
const fixtureMatches = document.querySelectorAll('.fixture-match:not(.final-match)');
fixtureMatches.forEach(match => {
    match.addEventListener('click', () => {
        if (match.classList.contains('highlighted')) {
            match.classList.remove('highlighted');
        } else {
            fixtureMatches.forEach(m => m.classList.remove('highlighted'));
            match.classList.add('highlighted');
        }
    });
});

// ===== SCROLL REVEAL =====
function revealOnScroll() {
    document.querySelectorAll('.timeline-item').forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            setTimeout(() => item.classList.add('visible'), i * 80);
        }
    });

    document.querySelectorAll('.team-card').forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = card.classList.contains('active-team')
                    ? 'translateY(0)'
                    : 'translateY(0)';
            }, i * 100);
        }
    });

    document.querySelectorAll('.guideline-card').forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 80);
        }
    });
}

// Initial opacity setup for animated elements
document.querySelectorAll('.team-card, .guideline-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.35s, box-shadow 0.35s';
});

setTimeout(revealOnScroll, 200);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== SPORTS CAROUSEL =====
(function () {
    const slides = document.querySelectorAll('.sports-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const INTERVAL = 3000; // 3 seconds per slide

    function goTo(idx) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (idx + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startAuto() { timer = setInterval(() => goTo(current + 1), INTERVAL); }
    function stopAuto() { clearInterval(timer); }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAuto();
            goTo(parseInt(dot.getAttribute('data-idx')));
            startAuto();
        });
    });

    const carousel = document.getElementById('sportsCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAuto);
        carousel.addEventListener('mouseleave', startAuto);
        // Touch swipe
        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        carousel.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) { stopAuto(); goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
        });
    }

    startAuto();
})();

// ===== VIDEO CUSTOM CONTROLS =====
(function () {
    const video = document.getElementById('anthemVideo');
    const muteBtn = document.getElementById('videoMuteBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    if (!video || !muteBtn) return;

    muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.muted) {
            video.muted = false;
            volumeIcon.textContent = '🔊';
            muteBtn.title = 'Mute';
        } else {
            video.muted = true;
            volumeIcon.textContent = '🔇';
            muteBtn.title = 'Unmute';
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(() => { });
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(video);
})();

