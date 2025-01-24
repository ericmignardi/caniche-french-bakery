const heroSection = document.querySelector('.hero');

// Function to handle the intersection logic
const handleTransition = (entries) => {
    entries.forEach(entry => {
        // Check if the entry is intersecting (part of the hero is in view)
        if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;  // Intersection ratio (0 to 1)
            // Set the opacity based on the intersection ratio
            heroSection.style.opacity = ratio;
        } else {
            // Set opacity to 0 when out of view
            heroSection.style.opacity = 0;
        }
    });
}

// Options for the IntersectionObserver
const options = {
    rootMargin: '0px', // No offset margin around the root (viewport)
    threshold: Array.from({length: 101}, (_, i) => i / 100) // 101 thresholds from 0 to 1 (e.g., 0.01, 0.02, ..., 1)
}

// Create the IntersectionObserver instance
const observer = new IntersectionObserver(handleTransition, options);

// Start observing the hero section
observer.observe(heroSection);
