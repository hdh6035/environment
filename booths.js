const booths = [
    {
        id: '1',
        img: 'https://i.postimg.cc/0273vtjK/ESD.png',
        width: 300,
        height: 200,
        title: '오호~ 친환경 물병이다!<br>(오호 만들기)',
        description: '해조류 성분으로 만든 신기한 친환경 물병,<br>오호(Ooho)! 직접 만들고 지구를 지키는 한 모금의 가치를 만들어보세요.'
    },
    {
        id: '2',
        img: 'https://i.postimg.cc/k52vJ4sY/image.png',
        width: 300,
        height: 200,
        title: 'NO화학! 세제를 부탁해<br>(친환경 DIY 세제 만들기)',
        description: '화학 성분 걱정 NO! 자연 유래 재료로 나만의 친환경 세제를 직접 만들어보세요.<br>우리 가족 건강과 환경을 지키는 첫걸음!'
    },    
    {
        id: '3',
        img: 'https://i.postimg.cc/V6M9tV3j/image.png',
        width: 300,
        height: 200,
        title: '업사이클 매직! 나만의 에코 키링<br>(업사이클링 병뚜껑 키링 만들기)',
        description: '버려진 병뚜껑이 나만의 개성 있는 키링으로 변신!<br>업사이클링의 재미와 의미를 함께 느껴보세요.'
    },    
    {
        id: '4',
        img: 'https://i.postimg.cc/Kj2PD52C/image.png',
        width: 300,
        height: 200,
        title: '친환경 요정 소환! 모루 쨩<br>(환경사랑 모루 인형 만들기)',
        description: '알록달록 모루로 만드는 귀여운 인형!<br>나만의 친환경 요정 ‘모루쨩’을 만들어 지구를 지키는 메시지도 전해보아요.'
    },    
    {
        id: '5',
        img: 'https://i.postimg.cc/gjHvS6cj/POP.png',
        width: 300,
        height: 200,
        title: '에코 톡톡! 환경을 뽑아봐<br>(QR환경퀴즈 + 환경 공모전)',
        description: '환경을 주제로 한 삼행시 또는 환경 글귀를 적어 응모통에 넣어보세요!<br>정성껏 적어준 카드 중에서 랜덤으로 선물을 드려요(공연시간)'
    },
    {
        id: '6',
        img: 'https://i.postimg.cc/fWcjT17s/1.png',
        width: 300,
        height: 200,
        title: '1분 요리 연구소: 나만의 레시피 실험실<br>(창작요리 만들기)',
        description: '주어진 재료로 1분 안에 나만의 레시피를 뚝딱! 아이디어와 순발력이 빛나는 요리 실험실에서 창의적인 요리사로 거듭나보세요.'
    },
    {
        id: '7',
        img: 'https://i.postimg.cc/CLwCZJJq/image.png',
        width: 300,
        height: 200,
        title: '냉장고를 부탁해: 지구를 지키는 COOL한 요리<br>(과일에이드 만들기)',
        description: '과일이 시원한 에이드로 변신!<br>알뜰하고 똑똑한 재료 활용으로 지구도 지키고, 맛도 잡는 친환경 쿨 레시피를 체험해보세요.'
    },
    {
        id: '8',
        img: 'https://i.postimg.cc/m2VY7M66/image.png',
        width: 300,
        height: 200,
        title: '에코 스쿱: 삥스크림<br>(뻥튀기 + 아이스크림 만들기)',
        description: '바삭한 뻥튀기와 시원한 아이스크림의 만남!<br>친환경 디저트 ‘삥스크림’을 직접 만들어보며 에코 간식을 경험해보세요.'
    },
    {
        id: '9',
        img: 'https://i.postimg.cc/2SKnKYYQ/image.png',
        width: 300,
        height: 200,
        title: '마들렌에 Green 세상<br>(마들렌 꾸미기)',
        description: '부드러운 마들렌 위에 환경을 주제로 한 나만의 데코를 얹어보세요!<br>맛있게 즐기며 지구에 대한 생각도 한 스푼 더!'
    },
    {
        id: '10',
        img: 'https://i.postimg.cc/jjnyV1qG/image.png',
        width: 300,
        height: 200,
        title: '에코 트래블링: in 샌드위치<br>(샌드위치 만들기)',
        description: '로컬푸드 재료로 만드는 샌드위치!<br>나만의 개성 있는 샌드위치를 만들며 건강한 먹거리와 친환경 식습관을 배워보는 시간이랍니다.'
    },
    {
        id: '11',
        width: 300,
        height: 200,
        title: '친환경 꽃갈피 만들기',
        description: '친환경 나무로 만들어진 꽃갈피(책갈피)를 만들어봐요~'
    }
];

localStorage.setItem('boothData', JSON.stringify(booths));

const savedBooths = JSON.parse(localStorage.getItem('boothData'));

savedBooths.forEach(booth => {
    createBooth(booth.id, booth.img, booth.width, booth.height, booth.title, booth.description);
});
