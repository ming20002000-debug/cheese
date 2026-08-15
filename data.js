// ============================================================
// 이상형 월드컵 후보 데이터
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값 (자유롭게 작성 가능)
//   name      : 화면에 표시될 이름
//   group     : 소속 그룹 (표시용, 없으면 "" 로 비워두면 됨)
//   gender    : "female" 또는 "male" 만 사용 — 이 값으로 여돌/남돌을 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//               예) https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  dQw4w9WgXcQ
//   start     : 영상이 몇 초부터 재생될지 (직캠 하이라이트 구간부터 보여주고 싶을 때 사용, 기본 0)
//
// 여돌 32명 + 남돌 33명 (64강까지 선택 가능 — 더 적은 쪽인 여돌 32명 기준).
// 요청하신 대로 엠넷(M Countdown / MPD직캠·입덕직캠) 소스는 전부 빼고,
// SBS 인기가요(안방1열), KBS 뮤직뱅크(K-Fancam), MBC(가요대제전/예능연구소),
// JTBC(K-909), 팬미팅·콘서트·개인 채널 직캠 등 다른 소스로만 채웠습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) ----
  { id: "f01", name: "장원영", group: "IVE", gender: "female", youtubeId: "l9srwSYo3pk", start: 0 },
  { id: "f02", name: "안유진", group: "IVE", gender: "female", youtubeId: "u0aLZOX-NL0", start: 0 },
  { id: "f03", name: "리즈", group: "IVE", gender: "female", youtubeId: "_raXYiNzFc8", start: 0 },
  { id: "f04", name: "가을", group: "IVE", gender: "female", youtubeId: "UiYUVhsBraM", start: 0 },
  { id: "f05", name: "레이", group: "IVE", gender: "female", youtubeId: "UYCWB9S0K-Y", start: 0 },
  { id: "f06", name: "이서", group: "IVE", gender: "female", youtubeId: "oIBqzSLxDSA", start: 0 },
  { id: "f07", name: "민지", group: "NewJeans", gender: "female", youtubeId: "_Fhb8GXOn0o", start: 0 },
  { id: "f08", name: "하니", group: "NewJeans", gender: "female", youtubeId: "cTyoI2uZ8A8", start: 0 },
  { id: "f09", name: "다니엘", group: "NewJeans", gender: "female", youtubeId: "BdjMMTvrGEU", start: 0 },
  { id: "f10", name: "해린", group: "NewJeans", gender: "female", youtubeId: "2KttBOutpJc", start: 0 },
  { id: "f11", name: "혜인", group: "NewJeans", gender: "female", youtubeId: "lOCD_bajK9I", start: 0 },
  { id: "f12", name: "카리나", group: "aespa", gender: "female", youtubeId: "3NSjQWShlPs", start: 0 },
  { id: "f13", name: "지젤", group: "aespa", gender: "female", youtubeId: "RrB145feSs4", start: 0 },
  { id: "f14", name: "윈터", group: "aespa", gender: "female", youtubeId: "Ot0mCaycFBw", start: 0 },
  { id: "f15", name: "닝닝", group: "aespa", gender: "female", youtubeId: "M6xAM5zIaog", start: 0 },
  { id: "f16", name: "사쿠라", group: "LE SSERAFIM", gender: "female", youtubeId: "jbJlQY0qg4A", start: 0 },
  { id: "f17", name: "김채원", group: "LE SSERAFIM", gender: "female", youtubeId: "Ey1V4zngUxg", start: 0 },
  { id: "f18", name: "허윤진", group: "LE SSERAFIM", gender: "female", youtubeId: "_XzXwNpmzQ8", start: 0 },
  { id: "f19", name: "카즈하", group: "LE SSERAFIM", gender: "female", youtubeId: "RrQBipDdWWs", start: 0 },
  { id: "f20", name: "홍은채", group: "LE SSERAFIM", gender: "female", youtubeId: "Qa8JHTseLnk", start: 0 },
  { id: "f21", name: "미연", group: "(여자)아이들", gender: "female", youtubeId: "0GCVGUMrAnc", start: 0 },
  { id: "f22", name: "소연", group: "(여자)아이들", gender: "female", youtubeId: "fjyAU6qcQtk", start: 0 },
  { id: "f23", name: "우기", group: "(여자)아이들", gender: "female", youtubeId: "ZbZDaP5zDXg", start: 0 },
  { id: "f24", name: "슈화", group: "(여자)아이들", gender: "female", youtubeId: "PFsUf9wXqXY", start: 0 },
  { id: "f25", name: "민니", group: "(여자)아이들", gender: "female", youtubeId: "OUr4zLOT2vE", start: 0 },
  { id: "f26", name: "수민", group: "STAYC", gender: "female", youtubeId: "c8nOUWhpD8w", start: 0 },
  { id: "f27", name: "시은", group: "STAYC", gender: "female", youtubeId: "SsAPQ2UHX2I", start: 0 },
  { id: "f28", name: "아이사", group: "STAYC", gender: "female", youtubeId: "U9Q6sAmRs44", start: 0 },
  { id: "f29", name: "세은", group: "STAYC", gender: "female", youtubeId: "R7vW6rH_VAs", start: 0 },
  { id: "f30", name: "윤", group: "STAYC", gender: "female", youtubeId: "pabFd9RlpP8", start: 0 },
  { id: "f31", name: "설윤", group: "NMIXX", gender: "female", youtubeId: "6_tZq4WcyAg", start: 0 },
  { id: "f32", name: "배이", group: "NMIXX", gender: "female", youtubeId: "TbU3_uhlNZo", start: 0 },

  // ---- 남돌 (male) ----
  { id: "m01", name: "호시", group: "SEVENTEEN", gender: "male", youtubeId: "Yx7nAhrHILs", start: 0 },
  { id: "m02", name: "민규", group: "SEVENTEEN", gender: "male", youtubeId: "PYw2GSEDVIw", start: 0 },
  { id: "m03", name: "도겸", group: "SEVENTEEN", gender: "male", youtubeId: "KwH9YRo0TR0", start: 0 },
  { id: "m04", name: "버논", group: "SEVENTEEN", gender: "male", youtubeId: "Po1-VsWKcFo", start: 0 },
  { id: "m05", name: "승관", group: "SEVENTEEN", gender: "male", youtubeId: "OewePyZWFs8", start: 0 },
  { id: "m06", name: "우지", group: "SEVENTEEN", gender: "male", youtubeId: "k8VPu7hZWYU", start: 0 },
  { id: "m07", name: "현진", group: "Stray Kids", gender: "male", youtubeId: "kH2V4m0sKDA", start: 0 },
  { id: "m08", name: "필릭스", group: "Stray Kids", gender: "male", youtubeId: "wkgmH5fEbbE", start: 0 },
  { id: "m09", name: "방찬", group: "Stray Kids", gender: "male", youtubeId: "A_C9TLcnonc", start: 0 },
  { id: "m10", name: "리노", group: "Stray Kids", gender: "male", youtubeId: "4_Red9V4jBY", start: 0 },
  { id: "m11", name: "승민", group: "Stray Kids", gender: "male", youtubeId: "s9HHzbHraeQ", start: 0 },
  { id: "m12", name: "아이엔", group: "Stray Kids", gender: "male", youtubeId: "yPV902T7ZFA", start: 0 },
  { id: "m13", name: "산", group: "ATEEZ", gender: "male", youtubeId: "fQT77DeSqtc", start: 0 },
  { id: "m14", name: "우영", group: "ATEEZ", gender: "male", youtubeId: "WAKDlGVI27o", start: 0 },
  { id: "m15", name: "여상", group: "ATEEZ", gender: "male", youtubeId: "AMdYXhpI2FU", start: 0 },
  { id: "m16", name: "윤호", group: "ATEEZ", gender: "male", youtubeId: "N_md7kvaFQg", start: 0 },
  { id: "m17", name: "홍중", group: "ATEEZ", gender: "male", youtubeId: "-GEOfw2fcFY", start: 0 },
  { id: "m18", name: "민기", group: "ATEEZ", gender: "male", youtubeId: "YD8gEfYgPIY", start: 0 },
  { id: "m19", name: "수빈", group: "TXT", gender: "male", youtubeId: "DyhKm90dXiY", start: 0 },
  { id: "m20", name: "연준", group: "TXT", gender: "male", youtubeId: "pLH_Na37rj8", start: 0 },
  { id: "m21", name: "범규", group: "TXT", gender: "male", youtubeId: "NJwPDWgkPlk", start: 0 },
  { id: "m22", name: "태현", group: "TXT", gender: "male", youtubeId: "ZMGpZ9L6Gf0", start: 0 },
  { id: "m23", name: "휴닝카이", group: "TXT", gender: "male", youtubeId: "zW5BX78NGQk", start: 0 },
  { id: "m24", name: "니키", group: "ENHYPEN", gender: "male", youtubeId: "0NFAnpr5VEM", start: 0 },
  { id: "m25", name: "제이", group: "ENHYPEN", gender: "male", youtubeId: "6BMkulC2oSA", start: 0 },
  { id: "m26", name: "성훈", group: "ENHYPEN", gender: "male", youtubeId: "CNLez_646VA", start: 0 },
  { id: "m27", name: "정원", group: "ENHYPEN", gender: "male", youtubeId: "HeNNnWpI6Zk", start: 0 },
  { id: "m28", name: "희승", group: "ENHYPEN", gender: "male", youtubeId: "Kqv8IqUFmus", start: 0 },
  { id: "m29", name: "선우", group: "ENHYPEN", gender: "male", youtubeId: "g6vGDvFdR20", start: 0 },
  { id: "m30", name: "승한", group: "RIIZE", gender: "male", youtubeId: "frDaZ14G1kg", start: 0 },
  { id: "m31", name: "원빈", group: "RIIZE", gender: "male", youtubeId: "bqlXsBGHML0", start: 0 },
  { id: "m32", name: "소희", group: "RIIZE", gender: "male", youtubeId: "T8IKN9jSnEc", start: 0 },
  { id: "m33", name: "정국", group: "BTS", gender: "male", youtubeId: "D87u-gkemxc", start: 17 },
];
