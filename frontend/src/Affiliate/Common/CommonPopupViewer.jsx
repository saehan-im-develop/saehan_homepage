const CommonPopupViewer = {
    open: ({ title, englishtitle, src, description }) => {
        // ✅ 모니터 가로/세로 해상도 기준으로 창 크기 설정
        const width = window.screen.availWidth;
        const height = Math.floor(window.screen.availHeight * 0.7); // 너무 높으면 작업표시줄 가릴 수 있음

        const left = 0; // 좌측 끝에서 시작
        const top = window.screenY + (window.outerHeight - height) / 2;

        const popupFeatures = `
            width=${width},
            height=${height},
            top=${top},
            left=${left},
            resizable=yes,
            scrollbars=yes,
            status=no,
            menubar=no,
            toolbar=no
        `.replace(/\s+/g, '');

        const popup = window.open("", "_blank", popupFeatures);
        if (!popup) return;

        popup.document.write(`
            <html>
            <head>
              <title>${englishtitle}</title>
              <link rel="stylesheet" type="text/css" href="/CommonPopupViewer.css">
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body class="popup-body-affPop">
              <h2 class="popup-title-affPop">${title}</h2>
              <h4 class="popup-subtitle-affPop">${englishtitle}</h4>
          
                <div class="image-gallery-affPop">
                <div class="image-box-affPop">
                    <img src="${src}" alt="image1" class="gallery-image-affPop" />
                    <h4 class="image-title-affPop">공정과정 1</h4>
                    <p class="image-desc-affPop">원재료를 투입하는 초기 단계입니다.</p>
                </div>
                <div class="image-box-affPop">
                    <img src="${src}" alt="image1" class="gallery-image-affPop" />
                    <h4 class="image-title-affPop">공정과정 2</h4>
                    <p class="image-desc-affPop">제품 형상을 잡는 금형 성형 공정입니다.</p>
                </div>
                <div class="image-box-affPop">
                    <img src="${src}" alt="image1" class="gallery-image-affPop" />
                    <h4 class="image-title-affPop">공정과정 3</h4>
                    <p class="image-desc-affPop">표면 가공 및 검사 단계입니다.</p>
                </div>
                <div class="image-box-affPop">
                    <img src="${src}" alt="image1" class="gallery-image-affPop" />
                    <h4 class="image-title-affPop">공정과정 4</h4>
                    <p class="image-desc-affPop">완제품 포장 및 출하 준비 완료.</p>
                </div>
                </div>

          
              <p class="popup-description-affPop">${description}</p>
            </body>
            </html>
          `);

    },
};

export default CommonPopupViewer;
