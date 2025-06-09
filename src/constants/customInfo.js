import {
  kakaoMap,
  naverMap,
  snap1,
  snap2,
  snap3,
  snap4,
  studio1,
  studio10,
  studio11,
  studio12,
  studio13,
  studio14,
  studio15,
  studio16,
  studio2,
  studio3,
  studio4,
  studio5,
  studio6,
  studio7,
  studio8,
  studio9,
  tMap,
} from "../assets/images";

//wedding calendar
export const WEDDING_DATE = new Date("2025-07-19");

//invitation
// 7년 전 여름날 부터,
// 긴 시간 한결같은 마음으로 이어온 저희 사랑도
// 이제 부부로서 새로운 여름을 맞이하려 합니다.

// 저희 두 사람의 뜻깊은 날,
// 귀한 분들을 모시고 첫걸음을 내딛고자 합니다.
// 기쁨의 순간에 함께해 주신다면,
// 그 따뜻한 축복을 오래도록 간직하겠습니다.
export const INVITATION_MESSAGE = `
오랜 시간 함께해 온 저희가
이제 부부로서 새로운 출발을 하려합니다.
저희 두 사람이 첫걸음을 내딛는 
기쁨의 순간에 함께해 주신다면,
그 따뜻한 축복을 오래도록 간직하겠습니다.
`;

//location
export const LOCATION_ADDRESS = "경기 성남시 수정구 설개로 39";
export const LOCATION_NAME = "메종디탈리";

export const NAVIGATION_LINKS = [
  {
    name: "네이버지도",
    url: "https://naver.me/GEXhvXKp",
    icon: naverMap,
  },
  {
    name: "카카오맵",
    url: "https://kko.kakao.com/7EvCCbUvic",
    icon: kakaoMap,
  },
  {
    name: "티맵",
    url: "https://tmap.life/06929250",
    icon: tMap,
  },
];
export const TRANSPORT_INFO = [
  {
    type: "셔틀",
    contents: [
      {
        tag: "3호선",
        className: "orangeColor tag",
      },
      {
        tag: "수인분당",
        className: "yellowColor tag",
      },
      {
        subscribe: "수서역 6번 출구 앞 셔틀운영",
      },
      {
        text: "• 예식 시간 2시간전 부터 운행됩니다",
        smaller: true,
      },
    ],
  },
  {
    type: "버스",
    contents: [
      {
        tag: "광역,직행",
        className: "redColor tag",
      },
      {
        subscribe: "[9800] [9400] [9408]",
      },
      {
        text: "시흥동 농협창고 정류장 하차, 도보 5분소요",
      },
      {
        text: "• [9800] [9400] : 강남역, 양재역, 모란역 승하차 가능",
        smaller: true,
      },
      {
        text: "• [9408] : 고속터미널, 반포역, 논현역, 강남역, 양재역 승하차 가능",
        smaller: true,
      },
    ],
  },
];

//information
export const TAB_INFO_MENUS = [
  { label: "예식장 안내", key: "예식장안내" },
  { label: "식사 안내", key: "식사안내" },
  { label: "주차 안내", key: "주차안내" },
];

export const TAB_INFO_CONTENTS = {
  예식장안내: [
    {
      emoji: "💍",
      text: "예식은 1부와 2부로 나누어 진행됩니다. 대관 시간은 오후 3시까지이오니 오셔서 편안한 시간 보내시기 바랍니다.",
    },
    {
      emoji: "👰🏻‍♀️",
      text: "신부 대기실은 예식 10분 전 마감됩니다. 본 예식장과는 별도의 건물에 위치해 있으니 참고 부탁드립니다.",
    },
    {
      emoji: "🍹",
      text: "일찍 도착하신 하객분들께 웰컴 드링크를 제공해 드립니다.",
    },
    {
      emoji: "👼🏻",
      text: "영유아를 위한 아기의자는 테라스 좌석에 준비되어 있습니다. 아이와 함께 오셔서 축하해 주세요.",
    },
    // {
    //   emoji: "🌸",
    //   text: "화환은 정중히 사양합니다. 축하해 주시는 마음만으로도 큰 감사의 인사를 드립니다.",
    // },
    {
      emoji: "🏧",
      text: "ATM기는 메인홀 건물 1층(주차장) 엘리베이터 맞은편에 비치되어 있습니다.",
    },
    {
      emoji: "💐",
      text: "예식 후 사용된 꽃 일부를 꽃다발로 나누어 드릴 예정입니다. 수량이 한정되어 있는 점 양해 부탁드립니다.",
    },
  ],
  식사안내: [
    { emoji: "🍽", text: "식사는 1부가 끝나고 양식 코스 요리로 제공됩니다." },
    {
      emoji: "♾️",
      text: "코스 외에도 핀치 푸드가 함께 제공될 예정이며, 핀치 푸드는 원하시는 만큼 리필하여 즐기실 수 있습니다.",
    },
  ],
  주차안내: [
    {
      emoji: "🚗",
      text: "예식장 내외에 주차 공간이 마련되어 있습니다. 당일 현장 스태프의 안내에 따라 주차해 주시기 바랍니다.",
    },
    {
      emoji: "⏳",
      text: "주차는 오후 3시까지 사용가능합니다.",
    },
  ],

  // 식순안내: [
  //   {
  //     emoji: "11:50",
  //     text: "식전안내",
  //   },
  //   {
  //     emoji: "12:00",
  //     text: "개식선언 → 화촉점화 → 신랑입장 → 신부입장 \n→ 혼인서약서 낭독 → 사회자 성혼선언문 낭독 \n→ 축주 - 김봄소리, 대니구 → 축가 - 대니구 → 감사인사 \n→ 신랑신부 행진 → 폐식 및 원판촬영",
  //   },
  //   {
  //     emoji: "12:45",
  //     text: "식사 시작",
  //   },
  //   {
  //     emoji: "13:00",
  //     text: "2부 입장",
  //   },
  // ],
};

//gallery
export const LEFT_IMAGES = [
  studio1,
  studio3,
  studio5,
  studio7,
  studio9,
  studio11,
  studio14,
  studio16,
  snap2,
  snap4,
];
export const RIGHT_IMAGES = [
  studio2,
  studio4,
  studio6,
  studio8,
  studio10,
  studio12,
  studio13,
  studio15,
  snap1,
  snap3,
];

//account
export const GROOM_ACCOUNTS = [
  { name: "김시현", bank: "국민", account: "937702-00-139066" },
  { name: "김태한", bank: "신한", account: "110-167-634628" },
  { name: "장재연", bank: "국민", account: "818501-04-103103" },
];

export const BRIDE_ACCOUNTS = [
  { name: "김온누리", bank: "신한", account: "110-337-008187" },
  { name: "김진호", bank: "우리", account: "1002-060-013283" },
  { name: "이가인", bank: "농협", account: "352-1119-1638-93" },
];
