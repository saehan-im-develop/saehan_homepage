const CommonPopupViewer = {
  open: ({ title, englishtitle, description, processes }) => {
    const width = window.screen.availWidth;
    const height = Math.floor(window.screen.availHeight * 0.8);
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open("", "_blank", `width=${width},height=${height},top=${top},left=0,resizable=yes,scrollbars=yes`);
    if (!popup) return;

    popup.document.write(`
      <html>
        <head>
          <title>${englishtitle}</title>
          <link rel="stylesheet" href="/CommonPopupViewer.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body class="popup-body-affPop">
          <h2 class="popup-title-affPop">${title}</h2>
          <h4 class="popup-subtitle-affPop">${englishtitle}</h4>

          <div class="slider-container-affPop">
            <div class="slider-track-affPop" id="sliderTrack">
              ${processes.map(p => `
                <div class="slide-affPop">
                  <img src="${p.src}" alt="${p.title}" class="gallery-image-affPop" />
                  <h4 class="image-title-affPop">${p.title}</h4>
                  <p class="image-desc-affPop">${p.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="nav-buttons-wrapper-affPop">
            <button class="nav-button-affPop" onclick="goToStart()">&#171;</button>
            <button class="nav-button-affPop" onclick="moveSlide(-1)">&#10094;</button>
            <button class="nav-button-affPop" onclick="toggleAutoplay()" id="toggleAutoplayBtn">⏸</button>
            <button class="nav-button-affPop" onclick="moveSlide(1)">&#10095;</button>
          </div>

          <p class="popup-description-affPop">${description}</p>

          <script>
            let index = 0;
            const visibleCount = 4;
            const slides = document.querySelectorAll('.slide-affPop');
            const maxIndex = slides.length - visibleCount;

            let autoplayActive = true;
            let autoplay = setInterval(autoAdvance, 3000);

            function updateSlider() {
              const offset = -(index * (100 / visibleCount));
              document.getElementById('sliderTrack').style.transform = 'translateX(' + offset + '%)';
            }

            function moveSlide(direction) {
              index = Math.max(0, Math.min(index + direction, maxIndex));
              updateSlider();
            }

            function goToStart() {
              index = 0;
              updateSlider();
            }

            function autoAdvance() {
              if (index < maxIndex) {
                index++;
                updateSlider();
              } else {
                clearInterval(autoplay);
                autoplayActive = false;
                document.getElementById('toggleAutoplayBtn').innerText = '▶';
              }
            }

            function toggleAutoplay() {
              const btn = document.getElementById('toggleAutoplayBtn');
              if (autoplayActive) {
                clearInterval(autoplay);
                btn.innerText = '▶';
              } else {
                autoplay = setInterval(autoAdvance, 3000);
                btn.innerText = '⏸';
              }
              autoplayActive = !autoplayActive;
            }

            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') window.close();
            });

            updateSlider();
          </script>
        </body>
      </html>
    `);
  }
};

export default CommonPopupViewer;
