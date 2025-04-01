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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body.popup-body-affPop {
              font-family: "Arial", sans-serif;
              padding: 40px;
              text-align: center;
              background-color: #fafafa;
              margin: 0;
            }

            .popup-title-affPop {
              font-size: 28px;
              margin-bottom: 5px;
            }

            .popup-subtitle-affPop {
              font-size: 16px;
              color: #666;
              font-style: italic;
              margin-bottom: 20px;
            }

            .popup-description-affPop {
              font-size: 16px;
              color: #333;
              line-height: 1.6;
              margin-top: 24px;
            }

            .slider-container-affPop {
              position: relative;
              width: 90%;
              max-width: 1600px;
              margin: 0 auto;
              overflow: hidden;
            }

            .slider-track-affPop {
              display: flex;
              transition: transform 0.4s ease-in-out;
            }

            .slide-affPop {
              flex: 0 0 50%;
              box-sizing: border-box;
              text-align: center;
              padding: 10px;
            }

            .gallery-image-affPop {
              width: 100%;
              height: 550px;
              object-fit: cover;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              display: block;
              margin: 0 auto;
              cursor: pointer;
            }

            .image-title-affPop {
              margin: 10px 0 4px;
              font-weight: bold;
              font-size: 16px;
            }

            .image-desc-affPop {
              font-size: 14px;
              color: #666;
              line-height: 1.4;
              padding: 0 10px;
            }

            .nav-buttons-wrapper-affPop {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10px;
              gap: 16px;
            }

          .nav-button-affPop {
              background-color: rgba(0, 0, 0, 0.4);
              color: white;
              border: none;
              font-size: 25px;
              cursor: pointer;
            
              /* 👇 원형 모양 핵심 설정 */
              width: 48px !important;
              height: 48px !important;
              border-radius: 50%;
            
              /* 👇 가운데 정렬 */
              display: flex;
              align-items: center;
              justify-content: center;
            
              /* 기타 유지 */
              z-index: 2;
              transition: background-color 0.3s ease;
            }
  

            .image-modal-affPop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.7);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
            }

            .modal-content-affPop {
              max-width: 80%;
              max-height: 80%;
              border-radius: 12px;
              box-shadow: 0 0 20px rgba(0,0,0,0.4);
            }

            @media (max-width: 1024px) {
              .slide-affPop {
                flex: 0 0 50%;
              }
            }

            @media (max-width: 600px) {
              .slide-affPop {
                flex: 0 0 100%;
              }
            }
          </style>
        </head>
        <body class="popup-body-affPop">
          <h2 class="popup-title-affPop">${title}</h2>
          <h4 class="popup-subtitle-affPop">${englishtitle}</h4>

          <div class="slider-container-affPop">
            <div class="slider-track-affPop" id="sliderTrack">
              ${processes.map(p => `
                <div class="slide-affPop">
                  <img src="${p.src}" alt="${p.title}" class="gallery-image-affPop" onclick="openModal('${p.src}')" />
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

          <div class="image-modal-affPop" id="imageModal" style="display:none" onclick="closeModal(event)">
            <img id="modalImage" class="modal-content-affPop" />
          </div>


          <script>
            let index = 0;
            const visibleCount = 2;
            const slides = document.querySelectorAll('.slide-affPop');
            const maxIndex = slides.length - visibleCount;

            let autoplayActive = true;
            let autoplay = setInterval(autoAdvance, 3000);

            const track = document.getElementById('sliderTrack');
              if (slides.length <= visibleCount) {
                track.style.justifyContent = 'center'; // ✅ 4개 이하일 경우 가운데 정렬
              } else {
                track.style.justifyContent = 'flex-start'; // 기본값
              }

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

            function openModal(src) {
              const modal = document.getElementById('imageModal');
              const img = document.getElementById('modalImage');
              img.src = src;
              modal.style.display = 'flex';
            }

            function closeModal(e) {
              if (e.target.id === 'imageModal') {
                document.getElementById('imageModal').style.display = 'none';
              }
            }

            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                const modal = document.getElementById('imageModal');
                if (modal.style.display === 'flex') {
                  modal.style.display = 'none';
                } else {
                  window.close();
                }
              }
            });

            updateSlider();
          </script>
        </body>
      </html>
    `);
  }
};

export default CommonPopupViewer;
