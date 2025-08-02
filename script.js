gsap.registerPlugin(ScrollTrigger);

// Global elements that need to be accessed immediately
const logo = document.querySelector(".logo-img");
if (logo) {
    logo.style.position = "fixed";
    logo.style.left = "0";
    logo.style.width = "100vw";
    logo.style.margin = "0";
}

console.log("Script loaded: himra");
console.log("GSAP object:", gsap);
console.log("ScrollTrigger object:", ScrollTrigger);

// Background image change on button click
const changeButton = document.getElementById('change');
if (changeButton) {
    changeButton.onclick = function() {
        const img = document.querySelector(".background");
        const backgrounds = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg.png'];

        if (typeof changeButton.bgIndex === "undefined") {
            changeButton.bgIndex = 0;
        }
        let index = changeButton.bgIndex;

        img.classList.add("fade-out");
        setTimeout(() => {
            index = (index + 1) % backgrounds.length;
            img.src = backgrounds[index];
            img.classList.remove("fade-out");
            img.classList.add("fade-in");
            changeButton.bgIndex = index;
            console.log("Background changed to:", img.src);
        }, 300);
    };
}


// GSAP ScrollTrigger Animations (These are outside DOMContentLoaded because they act on the whole page scroll)
gsap.to(".button-group", {
    y: -40,
    scale: 0.9555,
    scrollTrigger: {
        trigger: ".onscroll",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".img1", {
    y: -40,
    scale: 0.5555,
    scrollTrigger: {
        trigger: ".onscroll",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".button-small", {
    y: 30,
    scale: 0.9555,
    scrollTrigger: {
        trigger: ".onscroll",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    onStart: () => {
        document.querySelectorAll('.button-small').forEach(btn => {
            btn.style.boxShadow = "4px 4px 12px rgba(58, 57, 56, 0.33), -4px -4px 12px #535252ff";
            btn.style.borderRadius = "20px";
            btn.style.border = "1px solid rgba(16, 16, 16, 0.38)";
        });
    }
});

gsap.to(".button-large", {
    y: 30,
    scale: 0.9555,
    scrollTrigger: {
        trigger: ".onscroll",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    onStart: () => {
        document.querySelectorAll('.button-large').forEach(btn => {
            btn.style.boxShadow = "2px 1px 2px rgba(15, 15, 15, 0.47), -2px -1px 2px rgba(94, 91, 91, 0.25)";
            btn.style.borderRadius = "20px";
            btn.style.border = "1px solid rgba(26, 26, 25, 0.6)";
        });
    }
});

// This targets an element with class 'video1'. If you want to affect the iframes in .video-container, adjust the selector.
// Based on your HTML, it seems there is no .video1 element.
gsap.to(".video1", {
    y: -40,
    scale: 0.9555,
    scrollTrigger: {
        trigger: ".bg-img",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Logo background color change based on scroll
gsap.fromTo(
    ".logo-img",
    { backgroundColor: "rgba(217,164,65,0)" },
    {
        backgroundColor: "#d9a441",
        scrollTrigger: {
            trigger: ".onscroll",
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: self => {
                const progress = self.progress;
                if (progress > 0.95 || progress < 0.05) {
                    gsap.to(".logo-img", { backgroundColor: "rgba(217,164,65,0)", duration: 0.2, overwrite: "auto" });
                } else {
                    gsap.to(".logo-img", { backgroundColor: "#d9a441", duration: 0.2, overwrite: "auto" });
                }
            }
        }
    }
);

gsap.to(".comm", {
    backgroundColor: "#F8F4ED",
    scrollTrigger: {
        trigger: ".onscroll",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Footer fades in as you scroll to the bottom
// IMPORTANT: Changed ".footer" to ".foot" to match your HTML
gsap.fromTo(
    ".foot", // Corrected from ".footer" to ".foot"
    { opacity: 0, visibility: "hidden" },
    {
        opacity: 1,
        visibility: "visible",
        backgroundColor: "#F8F4ED",
        scrollTrigger: {
            trigger: ".foot", // Corrected from ".footer" to ".foot"
            start: "top bottom-=50", // When footer is 50px from bottom of viewport
            end: "top center+=50", // Until footer is 50px past center of viewport
            scrub: true
        }
    }
);


// --- All other JavaScript should be inside DOMContentLoaded to ensure elements are loaded ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Order Now Follower Logic ---
    const orderNowFollower = document.getElementById('orderNowFollower');
    const orderDiv = document.querySelector('.order');
    const generateIdeaBtn = document.getElementById('generateIdeaBtn');
    const geminiOutput = document.getElementById('geminiOutput');

    if (orderDiv && orderNowFollower && generateIdeaBtn && geminiOutput) { // Check if all related elements exist
        let currentRelativeX = 0;
        let currentRelativeY = 0;

        orderDiv.addEventListener('mouseenter', handleOrderDivEnter);
        orderDiv.addEventListener('touchstart', handleOrderDivEnter, { passive: false });

        function handleOrderDivEnter(e) {
            const orderDivRect = orderDiv.getBoundingClientRect();
            if (e.type === 'mouseenter') {
                currentRelativeX = e.clientX - orderDivRect.left;
                currentRelativeY = e.clientY - orderDivRect.top;
            } else if (e.touches && e.touches.length > 0) {
                currentRelativeX = e.touches[0].clientX - orderDivRect.left;
                currentRelativeY = e.touches[0].clientY - orderDivRect.top;
                e.preventDefault();
            }

            gsap.set(orderNowFollower, { x: currentRelativeX, y: currentRelativeY, display: 'block' });
            gsap.to(orderNowFollower, { opacity: 1, duration: 0.3, overwrite: "auto" });
        }

        orderDiv.addEventListener('mouseleave', handleOrderDivLeave);
        orderDiv.addEventListener('touchend', handleOrderDivLeave);

        function handleOrderDivLeave(e) {
            if (e.type === 'touchend' && e.touches.length > 0) {
                return;
            }
            gsap.to(orderNowFollower, {
                opacity: 0,
                duration: 0.3,
                overwrite: "auto",
                onComplete: () => {
                    gsap.set(orderNowFollower, { display: 'none' });
                }
            });
        }

        orderDiv.addEventListener('mousemove', (e) => {
            if (gsap.getProperty(orderNowFollower, "display") === 'block') {
                const orderDivRect = orderDiv.getBoundingClientRect();
                currentRelativeX = e.clientX - orderDivRect.left;
                currentRelativeY = e.clientY - orderDivRect.top;

                gsap.to(orderNowFollower, {
                    x: currentRelativeX,
                    y: currentRelativeY,
                    duration: 0.15,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        });

        orderDiv.addEventListener('touchmove', (e) => {
            if (gsap.getProperty(orderNowFollower, "display") === 'block' && e.touches.length > 0) {
                e.preventDefault();
                const orderDivRect = orderDiv.getBoundingClientRect();
                currentRelativeX = e.touches[0].clientX - orderDivRect.left;
                currentRelativeY = e.touches[0].clientY - orderDivRect.top;

                gsap.to(orderNowFollower, {
                    x: currentRelativeX,
                    y: currentRelativeY,
                    duration: 0.15,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        }, { passive: false });
    }

    // --- Gemini API Integration ---
    if (generateIdeaBtn && geminiOutput) {
        generateIdeaBtn.addEventListener('click', async (event) => {
            event.stopPropagation();

            geminiOutput.textContent = 'Generating idea...';
            geminiOutput.classList.add('visible');

            const prompt = "Generate a short, catchy slogan or a unique, creative product idea for a modern bakery. Keep it concise, under 20 words.";
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "AIzaSyDz4cxD1gaM7aN_kXKWqLpr4ASdsccomTo";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    geminiOutput.textContent = text;
                } else {
                    geminiOutput.textContent = "Could not generate an idea. Please try again.";
                    console.error("Gemini API response structure unexpected:", result);
                }
            } catch (error) {
                geminiOutput.textContent = "Error connecting to AI.";
                console.error("Error fetching from Gemini API:", error);
            }
        });

        // Hide output initially
        geminiOutput.classList.remove('visible');
    }

    // --- Video Scrollbar Scale Effect ---
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.addEventListener('scroll', () => {
            document.querySelectorAll('.video-container iframe').forEach(video => {
                const rect = video.getBoundingClientRect();
                const containerRect = videoContainer.getBoundingClientRect(); // Get container rect for relative positioning
                const center = containerRect.width / 2; // Center relative to container
                const videoCenter = (rect.left - containerRect.left) + rect.width / 2; // Video center relative to container's left edge
                const distance = Math.abs(center - videoCenter);
                const scale = Math.max(0.7, 1 - distance / 1000);
                video.style.transform = `scale(${scale})`;
                video.style.transition = 'transform 0.1s ease-out';
            });
        });
        videoContainer.dispatchEvent(new Event('scroll')); // Trigger initial scale
    }


    // --- Customer Comments Carousel ---
    const comments = document.querySelectorAll('.comment');
    let currentCommentIndex = 0; // Renamed 'current' to 'currentCommentIndex' for clarity

    if (comments.length > 0) {
        comments[0].classList.add('active');
        setInterval(() => {
            if (comments.length === 0) return;

            comments[currentCommentIndex].classList.remove('active');
            currentCommentIndex = (currentCommentIndex + 1) % comments.length;
            comments[currentCommentIndex].classList.add('active');
        }, 4000);
    }


    // --- Splash Screen Fade Out ---
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content'); // Ensure your main content is wrapped in <div id="main-content">
    if (splashScreen) {
        setTimeout(function() {
            splashScreen.classList.add('fade-out');
            setTimeout(() => {
                splashScreen.style.display = 'none';
                if (mainContent) { // Check if mainContent exists
                    mainContent.style.display = 'block';
                }
            }, 1000);
        }, 1000);
    }


    // --- Meet the Team Carousel and Spotlight (Enhanced for Center Spotlight) ---
    const teamCarousel = document.querySelector(".meet-carousel");
    const teamMembers = document.querySelectorAll('.team-member');
    const spotlightNameElement = document.getElementById('spotlight-name');
    const spotlightRoleElement = document.getElementById('spotlight-role');
    const spotlightBioElement = document.querySelector('.spotlight-info .bio');

    // Function to update the spotlight text with fade effect
    function updateTeamSpotlight(memberElement, initialLoad = false) {
        if (!spotlightNameElement || !spotlightRoleElement || !spotlightBioElement || !memberElement) return;

        const name = memberElement.dataset.name;
        const role = memberElement.dataset.role;
        const bio = memberElement.dataset.bio;

        if (initialLoad) {
            // For initial load, just set content and fade in
            spotlightNameElement.textContent = name;
            spotlightRoleElement.textContent = role;
            spotlightBioElement.textContent = bio;
            gsap.to([spotlightNameElement, spotlightRoleElement, spotlightBioElement], { opacity: 1, duration: 0.5 });
            console.log("Initial Spotlight Updated:", name);
        } else {
            // For subsequent changes, fade out, update, then fade in
            gsap.to([spotlightNameElement, spotlightRoleElement, spotlightBioElement], {
                opacity: 0,
                duration: 0.15,
                onComplete: () => {
                    spotlightNameElement.textContent = name;
                    spotlightRoleElement.textContent = role;
                    spotlightBioElement.textContent = bio;
                    gsap.to([spotlightNameElement, spotlightRoleElement, spotlightBioElement], { opacity: 1, duration: 0.25 });
                    console.log("Spotlight Updated:", name);
                }
            });
        }
    }

    // Function to find the center-most team member and update spotlight
    let lastCenteredMember = null;
    if (teamCarousel && teamMembers.length > 0) {
        function updateCenterSpotlight() {
            const carouselRect = teamCarousel.getBoundingClientRect();
            // Get the center point of the visible carousel area relative to the viewport
            const carouselViewportCenter = carouselRect.left + carouselRect.width / 2;

            let closestMember = null;
            let minDistance = Infinity;

            teamMembers.forEach(member => {
                const memberRect = member.getBoundingClientRect();
                // Get the center point of the member relative to the viewport
                const memberViewportCenter = memberRect.left + memberRect.width / 2;
                const distance = Math.abs(carouselViewportCenter - memberViewportCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestMember = member;
                }
            });

            if (closestMember && closestMember !== lastCenteredMember) {
                teamMembers.forEach(m => m.classList.remove('active'));
                closestMember.classList.add('active');
                updateTeamSpotlight(closestMember);
                lastCenteredMember = closestMember;
            }
        }

        // Initial setup for the spotlight
        // It's crucial that one member starts with 'active' class in HTML
        const initialActiveMember = document.querySelector('.team-member.active');
        if (initialActiveMember) {
            updateTeamSpotlight(initialActiveMember, true);
        } else if (teamMembers.length > 0) {
            // If no active class is set, default to the first member
            teamMembers[0].classList.add('active');
            updateTeamSpotlight(teamMembers[0], true);
        }

        // Listen for scroll events on the carousel to update the spotlight
        let scrollTimeout;
        teamCarousel.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateCenterSpotlight, 50); // Debounce
        });

        // Add click listeners to team member photos to center them and update spotlight
        teamMembers.forEach(member => {
            member.addEventListener('click', () => {
                // Calculate scroll position to bring clicked member to center
                const scrollOffset = member.offsetLeft + (member.offsetWidth / 2) - (teamCarousel.clientWidth / 2);
                teamCarousel.scrollTo({ left: scrollOffset, behavior: "smooth" });

                // Update spotlight immediately after click, but also allow scroll event to finalize
                // Add a small delay for the scroll animation to complete before updating
                setTimeout(updateCenterSpotlight, 300); // Give scroll some time
            });
        });
    }


    // --- Circle Feedback (Newsletter/Comments) Logic ---
    window.bringToFront = function(type) {
        const newsletter = document.querySelector(".circle.newsletter");
        const comments = document.querySelector(".circle.comments");

        if (newsletter) newsletter.classList.remove("active");
        if (comments) comments.classList.remove("active");

        if (type === "newsletter" && newsletter) {
            newsletter.classList.add("active");
        } else if (type === "comments" && comments) {
            comments.classList.add("active");
        }
    }

}); // End of DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
            const dynamicBackground = document.getElementById('dynamicBackground');

            // Array of image links to cycle through
            const imageLinks = [
                "https://images.pexels.com/photos/3468822/pexels-photo-3468822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Warm Sourdough Loaves
                "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Assortment of Pastries
                "https://images.pexels.com/photos/1327118/pexels-photo-1327118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Rustic Baked Goods
                "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Coffee and Croissant
                "https://images.pexels.com/photos/1327124/pexels-photo-1327124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Decorated Cake
                "https://images.pexels.com/photos/1770381/pexels-photo-1770381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Flaky Butter Croissant
                "https://images.pexels.com/photos/265386/pexels-photo-265386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Custom Celebration Cake
                "https://images.pexels.com/photos/4052320/pexels-photo-4052320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Hands Working with Dough
                "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Cozy Bakery Interior
                "https://images.pexels.com/photos/1640523/pexels-photo-1640523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Rustic Artisan Bread Loaves
                "https://images.pexels.com/photos/134057/pexels-photo-134057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Freshly Baked Pastries
                "https://images.pexels.com/photos/4052321/pexels-photo-4052321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Sourdough Crumb Close-up
                "https://images.pexels.com/photos/4052324/pexels-photo-4052324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Baker's Hands Dusting Flour
                "https://images.pexels.com/photos/134058/pexels-photo-134058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Variety of Baked Goods
            ];

            let currentIndex = 0;
            const fadeDuration = 400; // Matches your CSS transition for opacity
            const displayDuration = 9600; // 10 seconds total cycle (10000ms - 400ms fade)

            // Set the initial image
            dynamicBackground.src = imageLinks[currentIndex];

            function changeImage() {
                // 1. Start fade-out
                dynamicBackground.classList.add('fade-out');

                // 2. After fade-out completes, change the image source
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % imageLinks.length; // Cycle to the next image
                    dynamicBackground.src = imageLinks[currentIndex];

                    // 3. Remove fade-out and allow fade-in
                    dynamicBackground.classList.remove('fade-out');
                    // The CSS transition on .bg-img will handle the fade-in automatically
                }, fadeDuration); // Wait for the fade-out duration
            }

            // Start the carousel
            setInterval(changeImage, displayDuration + fadeDuration); // Total cycle time (display + fade)
        });

        
   
        document.addEventListener('DOMContentLoaded', () => {
            const dynamicBackground = document.getElementById('dynamicBackground');

            // Array of image links to cycle through
            const imageLinks = [
                "https://images.pexels.com/photos/3468822/pexels-photo-3468822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Warm Sourdough Loaves
                "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Assortment of Pastries
                "https://images.pexels.com/photos/1327118/pexels-photo-1327118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Rustic Baked Goods
                "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Coffee and Croissant
                "https://images.pexels.com/photos/1327124/pexels-photo-1327124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Decorated Cake
                "https://images.pexels.com/photos/1770381/pexels-photo-1770381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Flaky Butter Croissant
                "https://images.pexels.com/photos/265386/pexels-photo-265386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Custom Celebration Cake
                "https://images.pexels.com/photos/4052320/pexels-photo-4052320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Hands Working with Dough
                "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Cozy Bakery Interior
                "https://images.pexels.com/photos/1640523/pexels-photo-1640523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Rustic Artisan Bread Loaves
                "https://images.pexels.com/photos/134057/pexels-photo-134057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Freshly Baked Pastries
                "https://images.pexels.com/photos/4052321/pexels-photo-4052321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Sourdough Crumb Close-up
                "https://images.pexels.com/photos/4052324/pexels-photo-4052324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Baker's Hands Dusting Flour
                "https://images.pexels.com/photos/134058/pexels-photo-134058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Variety of Baked Goods
            ];

            let currentIndex = 0;
            const fadeDuration = 400; // Matches your CSS transition for opacity (0.4s)
            const displayDuration = 9600; // 10 seconds total cycle (10000ms - 400ms fade)

            // Set the initial image
            dynamicBackground.src = imageLinks[currentIndex];

            function changeImage() {
                // 1. Start fade-out
                dynamicBackground.classList.add('fade-out');

                // 2. After fade-out completes, change the image source
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % imageLinks.length; // Cycle to the next image
                    dynamicBackground.src = imageLinks[currentIndex];

                    // 3. Remove fade-out and allow fade-in
                    dynamicBackground.classList.remove('fade-out');
                    // The CSS transition on .bg-img will handle the fade-in automatically
                }, fadeDuration); // Wait for the fade-out duration
            }

            // Start the carousel
            setInterval(changeImage, displayDuration + fadeDuration); // Total cycle time (display + fade)
        });
