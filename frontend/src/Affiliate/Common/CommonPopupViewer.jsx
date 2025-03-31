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
              ${processes.map((p, i) => `
                <div class="slide-affPop">
                  <img src="${p.src}" alt="${p.title}" class="gallery-image-affPop" onclick="openImageModal('${p.src}')" />
                  <h4 class="image-title-affPop">${p.title}</h4>
                  <p class="image-desc-affPop">${p.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="nav-buttons-wrapper-affPop">
            <button class="nav-button-affPop" onclick="moveSlide(-1)">&#10094;</button>
            <button class="nav-button-affPop" onclick="moveSlide(1)">&#10095;</button>
          </div>

          <p class="popup-description-affPop">${description}</p>

          <!-- 🖼 모달 이미지 뷰어 -->
          <div id="imageModal" class="image-modal-affPop" style="display:none" onclick="this.style.display='none'">
            <img id="modalImage" class="modal-content-affPop" />
          </div>

          <script>
            let index = 0;
            const visibleCount = 4;
            const track = document.getElementById('sliderTrack');
            const slides = document.querySelectorAll('.slide-affPop');

            function updateSlider() {
              const offset = -(index * (100 / visibleCount));
              track.style.transform = 'translateX(' + offset + '%)';
            }

            function moveSlide(direction) {
              const maxIndex = slides.length - visibleCount;
              index = Math.max(0, Math.min(index + direction, maxIndex));
              updateSlider();
            }

            function openImageModal(src) {
              const modal = document.getElementById('imageModal');
              const modalImg = document.getElementById('modalImage');
              modalImg.src = src;
              modal.style.display = 'block';
            }

            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                const modal = document.getElementById('imageModal');
                if (modal.style.display === 'block') {
                  modal.style.display = 'none';
                } else {
                  window.close();
                }
              }
            });

            // 🟢 Swipe 기능 추가
            let startX = 0;
            let endX = 0;

            track.addEventListener('mousedown', (e) => {
              startX = e.clientX;
            });
            track.addEventListener('mouseup', (e) => {
              endX = e.clientX;
              if (startX - endX > 50) moveSlide(1);
              else if (endX - startX > 50) moveSlide(-1);
            });

            track.addEventListener('touchstart', (e) => {
              startX = e.touches[0].clientX;
            });
            track.addEventListener('touchend', (e) => {
              endX = e.changedTouches[0].clientX;
              if (startX - endX > 50) moveSlide(1);
              else if (endX - startX > 50) moveSlide(-1);
            });

            updateSlider();
          </script>
        </body>
      </html>
    `);
  }
};

export default CommonPopupViewer;
