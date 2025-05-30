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
    url: "https://kko.kakao.com/mCgaCcxgFy",
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
      text: "예식은 1부와 2부 나눠서 진행됩니다. \n대관시간은 오후 3시까지로 오셔서 여유롭게 시간 보내셨으면 좋겠습니다.",
    },
    {
      emoji: "👰🏻‍♀️",
      text: "신부대기실은 예식 10분 전 마감됩니다. 메인홀과 다른 건물이므로 참고 부탁드립니다.",
    },
    {
      emoji: "🍹",
      text: "일찍 도착하신 분들께 웰컴 바에서 웰컴 드링크가 제공됩니다.",
    },
    {
      emoji: "🌸",
      text: "화환은 정중히 사양합니다. 감사한 마음만 받겠습니다.",
    },
    {
      emoji: "🏧",
      text: "ATM기는 메인홀 건물 1층(주차장) 엘리베이터 맞은편에 비치되어 있습니다.",
    },
    {
      emoji: "💐",
      text: "예식이 끝난 후 사용된 꽃 중 일부를 포장하여 꽃다발로 나눠드립니다. 소량으로 선착순 제공되니 양해 부탁드립니다.",
    },
  ],
  식사안내: [
    { emoji: "🍽", text: "식사는 1부가 끝나고 양식 코스 요리로 제공됩니다." },
    {
      emoji: "♾️",
      text: "코스요리 외에 핀치 푸드가 서빙될 예정입니다. 마음껏 리필하여 즐겨주세요.",
    },
    {
      emoji: "👼🏻",
      text: "아기 의자가 테라스 좌석에서 제공됩니다. 아기와 함께 축하해주세요.",
    },
  ],
  주차안내: [
    {
      emoji: "🚗",
      text: "예식장 내외에 주차공간이 있습니다. 당일 현장 스태프들이 안내할 예정이오니 안내를 따라주세요.",
    },
    { emoji: "⏳", text: "주차시간에 제한이 없으니 마음 편히 참석해 주세요." },
  ],
};

//gallery
export const LEFT_IMAGES = [
  studio1,
  studio3,
  studio5,
  studio7,
  studio9,
  snap2,
  snap4,
  studio11,
  studio14,
  studio16,
];
export const RIGHT_IMAGES = [
  studio2,
  studio4,
  studio6,
  studio8,
  studio10,
  snap1,
  snap3,
  studio12,
  studio13,
  studio15,
];

//account
export const GROOM_ACCOUNTS = [
  { name: "김시현", bank: "국민", account: "937702-00-139066" },
  { name: "김태한", bank: "농협", account: "456-7890-1234-56" },
  { name: "장재연", bank: "국민", account: "789-0123-4567-89" },
];

export const BRIDE_ACCOUNTS = [
  { name: "김온누리", bank: "신한", account: "110-337-008187" },
  { name: "김진호", bank: "우리", account: "1002-060-013283" },
  { name: "이가인", bank: "국민", account: "067502-04-131215" },
];
