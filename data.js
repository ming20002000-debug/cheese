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
// 엠넷(M Countdown / MPD직캠·입덕직캠), 팬사인회 직캠, 그리고 방송사 공식 음악방송
// 채널(SBS 인기가요/안방1열, KBS 뮤직뱅크/K-Fancam, MBC 가요대제전·예능연구소,
// JTBC K-909 등) 소스는 전부 빼고, 대학교 축제·콘서트·팬미팅·뮤직페스티벌·개인 채널
// 직캠 등 "비공식" 소스로만 채웠습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) ----
  { id: "f01", name: "장원영", group: "IVE", gender: "female", youtubeId: "l9srwSYo3pk", start: 0 },
  { id: "f02", name: "안유진", group: "IVE", gender: "female", youtubeId: "u0aLZOX-NL0", start: 0 },
  { id: "f03", name: "리즈", group: "IVE", gender: "female", youtubeId: "u_ItP9pwQ4k", start: 0 },
  { id: "f04", name: "가을", group: "IVE", gender: "female", youtubeId: "UiYUVhsBraM", start: 0 },
  { id: "f05", name: "레이", group: "IVE", gender: "female", youtubeId: "enHuTjeJF8w", start: 0 },
  { id: "f06", name: "이서", group: "IVE", gender: "female", youtubeId: "EnWBNXAqc8o", start: 0 },
  { id: "f07", name: "민지", group: "NewJeans", gender: "female", youtubeId: "_Fhb8GXOn0o", start: 0 },
  { id: "f08", name: "하니", group: "NewJeans", gender: "female", youtubeId: "MVdLV3PUk00", start: 0 },
  { id: "f09", name: "다니엘", group: "NewJeans", gender: "female", youtubeId: "BdjMMTvrGEU", start: 0 },
  { id: "f10", name: "해린", group: "NewJeans", gender: "female", youtubeId: "4vFY26vTpxw", start: 0 },
  { id: "f11", name: "혜인", group: "NewJeans", gender: "female", youtubeId: "BZr1Zjbs8j0", start: 0 },
  { id: "f12", name: "카리나", group: "aespa", gender: "female", youtubeId: "3NSjQWShlPs", start: 0 },
  { id: "f13", name: "지젤", group: "aespa", gender: "female", youtubeId: "RrB145feSs4", start: 0 },
  { id: "f14", name: "윈터", group: "aespa", gender: "female", youtubeId: "Ot0mCaycFBw", start: 0 },
  { id: "f15", name: "닝닝", group: "aespa", gender: "female", youtubeId: "M6xAM5zIaog", start: 0 },
  { id: "f16", name: "사쿠라", group: "LE SSERAFIM", gender: "female", youtubeId: "jbJlQY0qg4A", start: 0 },
  { id: "f17", name: "김채원", group: "LE SSERAFIM", gender: "female", youtubeId: "Ey1V4zngUxg", start: 0 },
  { id: "f18", name: "허윤진", group: "LE SSERAFIM", gender: "female", youtubeId: "rWHHrMrTpYA", start: 0 },
  { id: "f19", name: "카즈하", group: "LE SSERAFIM", gender: "female", youtubeId: "RrQBipDdWWs", start: 0 },
  { id: "f20", name: "홍은채", group: "LE SSERAFIM", gender: "female", youtubeId: "Qa8JHTseLnk", start: 0 },
  { id: "f21", name: "미연", group: "(여자)아이들", gender: "female", youtubeId: "0GCVGUMrAnc", start: 0 },
  { id: "f22", name: "소연", group: "(여자)아이들", gender: "female", youtubeId: "fjyAU6qcQtk", start: 0 },
  { id: "f23", name: "우기", group: "(여자)아이들", gender: "female", youtubeId: "eRC8PGMbAUc", start: 0 },
  { id: "f24", name: "슈화", group: "(여자)아이들", gender: "female", youtubeId: "e2S81ldExQE", start: 0 },
  { id: "f25", name: "민니", group: "(여자)아이들", gender: "female", youtubeId: "GjLc2z8z3nA", start: 0 },
  { id: "f26", name: "수민", group: "STAYC", gender: "female", youtubeId: "c8nOUWhpD8w", start: 0 },
  { id: "f27", name: "시은", group: "STAYC", gender: "female", youtubeId: "SsAPQ2UHX2I", start: 0 },
  { id: "f28", name: "아이사", group: "STAYC", gender: "female", youtubeId: "VWcnF2RrAuY", start: 0 },
  { id: "f29", name: "세은", group: "STAYC", gender: "female", youtubeId: "rGZnEIrPpaM", start: 0 },
  { id: "f30", name: "윤", group: "STAYC", gender: "female", youtubeId: "GuoI2KaKtN0", start: 0 },
  { id: "f31", name: "설윤", group: "NMIXX", gender: "female", youtubeId: "6_tZq4WcyAg", start: 0 },
  { id: "f32", name: "배이", group: "NMIXX", gender: "female", youtubeId: "d1nXrRnHaBo", start: 0 },
  { id: "f33", name: "사나", group: "TWICE", gender: "female", youtubeId: "jNGuk59UWeI", start: 0 },
  { id: "f34", name: "로제", group: "BLACKPINK", gender: "female", youtubeId: "rd-nlloznQQ", start: 0 },

  // ---- 남돌 (male) ----
  { id: "m01", name: "호시", group: "SEVENTEEN", gender: "male", youtubeId: "qab4sFdq4h8", start: 0 },
  { id: "m02", name: "민규", group: "SEVENTEEN", gender: "male", youtubeId: "PYw2GSEDVIw", start: 0 },
  { id: "m03", name: "도겸", group: "SEVENTEEN", gender: "male", youtubeId: "Aw56hP4j33U", start: 0 },
  { id: "m04", name: "버논", group: "SEVENTEEN", gender: "male", youtubeId: "D7KLAMfL0Gw", start: 0 },
  { id: "m05", name: "승관", group: "SEVENTEEN", gender: "male", youtubeId: "HG7g1jKDU4E", start: 0 },
  { id: "m06", name: "우지", group: "SEVENTEEN", gender: "male", youtubeId: "272AUUwqV6E", start: 0 },
  { id: "m07", name: "현진", group: "Stray Kids", gender: "male", youtubeId: "LnwOgkjAetM", start: 0 },
  { id: "m08", name: "필릭스", group: "Stray Kids", gender: "male", youtubeId: "WLDwJ14a9Dw", start: 0 },
  { id: "m09", name: "방찬", group: "Stray Kids", gender: "male", youtubeId: "yKkk0u-Ys9w", start: 0 },
  { id: "m10", name: "리노", group: "Stray Kids", gender: "male", youtubeId: "t5ruBWG2JMI", start: 0 },
  { id: "m11", name: "승민", group: "Stray Kids", gender: "male", youtubeId: "sih66_A2UIA", start: 0 },
  { id: "m12", name: "아이엔", group: "Stray Kids", gender: "male", youtubeId: "vvJgT5rYOY4", start: 0 },
  { id: "m13", name: "산", group: "ATEEZ", gender: "male", youtubeId: "Wnn9lPBXchs", start: 0 },
  { id: "m14", name: "우영", group: "ATEEZ", gender: "male", youtubeId: "rm3OPqF3P5E", start: 0 },
  { id: "m15", name: "여상", group: "ATEEZ", gender: "male", youtubeId: "1CImABG3uTs", start: 0 },
  { id: "m16", name: "윤호", group: "ATEEZ", gender: "male", youtubeId: "x9alOTNO8RE", start: 0 },
  { id: "m17", name: "홍중", group: "ATEEZ", gender: "male", youtubeId: "PECq0nPCc2I", start: 0 },
  { id: "m18", name: "민기", group: "ATEEZ", gender: "male", youtubeId: "xQUWCVck9LM", start: 0 },
  { id: "m19", name: "수빈", group: "TXT", gender: "male", youtubeId: "WkOt-jCMs8g", start: 0 },
  { id: "m20", name: "연준", group: "TXT", gender: "male", youtubeId: "KmfZYKINzgc", start: 0 },
  { id: "m21", name: "범규", group: "TXT", gender: "male", youtubeId: "ucybbFYUy9Q", start: 0 },
  { id: "m22", name: "태현", group: "TXT", gender: "male", youtubeId: "m8NNFwXRXv4", start: 0 },
  { id: "m23", name: "휴닝카이", group: "TXT", gender: "male", youtubeId: "QhkcXCeCwcg", start: 0 },
  { id: "m24", name: "니키", group: "ENHYPEN", gender: "male", youtubeId: "z8Y56_uzr8Q", start: 0 },
  { id: "m25", name: "제이", group: "ENHYPEN", gender: "male", youtubeId: "t1oq0GtfycY", start: 0 },
  { id: "m26", name: "성훈", group: "ENHYPEN", gender: "male", youtubeId: "WnqoRMoj8Tk", start: 0 },
  { id: "m27", name: "정원", group: "ENHYPEN", gender: "male", youtubeId: "0ks-KJ06c2o", start: 0 },
  { id: "m28", name: "희승", group: "ENHYPEN", gender: "male", youtubeId: "Y61jyfDyZEU", start: 0 },
  { id: "m29", name: "선우", group: "ENHYPEN", gender: "male", youtubeId: "IGn9a2F2j_4", start: 0 },
  { id: "m30", name: "승한", group: "RIIZE", gender: "male", youtubeId: "UQ_xkbJB7Dw", start: 0 },
  { id: "m31", name: "원빈", group: "RIIZE", gender: "male", youtubeId: "3rK8VbJMd9Y", start: 0 },
  { id: "m32", name: "소희", group: "RIIZE", gender: "male", youtubeId: "Oob3ukvKigA", start: 0 },
  { id: "m33", name: "정국", group: "BTS", gender: "male", youtubeId: "syfbGRZMxTY", start: 0 },
  { id: "m34", name: "정국", group: "BTS", gender: "male", youtubeId: "kEEp2qszfl0", start: 0 },
];
