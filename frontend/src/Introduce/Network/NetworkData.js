const networkData = [
    {
      name: "새한그룹",
      type: "본사",
      address: "A 광주광역시 광산구 ○○길 ○○",
      phone: ["062-580-1400"], // 전화번호 배열
    },
    {
      name: "새한하이테크",
      type: "제조센터",
      address: "A 광주 광산구 사암로 827-47",
      phone: ["062-580-1400", "062-580-1500"],
    },
    {
      name: "새한플러스",
      type: "제조센터",
      address: "A 광주 광산구 우산천변길 63",
      phone: ["062-580-1400"],
    },
    {
      name: "새한글로벌",
      type: "제조센터",
      address: "A 전남 장성군 동화면 가정길 8",
      phone: [], // 빈 배열로 유지
    },
    {
      name: "새한아이엠",
      locations: [
        { type: "제조센터", address: "A 광주 광산구 하남산단4번로 126", phone: ["062-580-1400"] },
        { type: "개발팀", address: "A 광주 동구 금남로 193-12", phone: ["062-580-1400"] }
      ]
    }
  ];
  
  export default networkData;
  