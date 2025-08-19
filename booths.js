const booths = [
    {
        id: '1',
        img: 'https://i.postimg.cc/fTT5XFDx/image.png',
        width: 300,
        height: 200,
        title: '재미있게! 올바르게! 분리수거 Game<br><분리수거가 더 즐거워지는 캠페인>',
        description: '버려진 카드를 분리수거통에 ‘착!’, 탁구공을 ‘톡!’ 골인지점에 넣어보세요.<br>환경도 지키고 간식도 챙기는 즐거운 친환경 게임!'
    },
    {
        id: '2',
        img: 'https://i.postimg.cc/nh0GB3g9/image.png',
        width: 300,
        height: 200,
        title: '컬러링 환경티슈 케이스<br><숲·바다·북극을 물들이는 작은 손길>',
        description: '숲, 바다, 북극이 담긴 티슈 케이스 도안을 색칠해보세요.<br>작은 손길로 알록달록 채우다 보면 지구가 더 아름다워집니다. 🌍🎨'
    },    
    {
        id: '3',
        img: 'https://i.postimg.cc/xCbGrnCL/image.png',
        width: 300,
        height: 200,
        title: '지구바람 손선풍기 만들기<br><환경을 품은 시원한 바람 한 줌>',
        description: '손잡이를 꾹 누르면 팬이 빙글 돌아가요.<br>전기 없이도 솔솔 시원한 바람을 느낄 수 있는 특별한 친환경 손선풍기! 🌿💨'
    },    
    {
        id: '4',
        img: 'https://i.postimg.cc/J0Nbnxjn/image.png',
        width: 300,
        height: 200,
        title: '나만의 우드트리 만들기<br><작은 나무가 자라는 시간>',
        description: '나무 키트를 색칠하고 조립해 나만의 단풍나무와 둥근나무를 만들어보세요.<br>작은 손길로 만드는 특별한 나무가 여러분의 공간을 채웁니다. 🌳✨'
    },    
    {
        id: '5',
        img: 'https://i.postimg.cc/GhRFN01s/image.png',
        width: 300,
        height: 200,
        title: '나만의 분리수거 북아트<br><책 속에 담은 환경이야기>',
        description: '포일아트 기법으로 나만의 분리수거함 북아트를 만들어보세요.<br>재활용과 환경 이야기가 담긴 특별한 책을 직접 완성할 수 있어요. 📚♻️'
    },
    {
        id: '6',
        img: 'https://i.postimg.cc/52Nw4wy4/image.png',
        width: 300,
        height: 200,
        title: '업사이클 작품 전시+분리배출 퀴즈+환경 캠페인<br><쓰임 팡! 활용 팡! 우리는 지구 지킴이>',
        description: '버려진 플라스틱이 새롭게 변신하고, 분리배출 퀴즈와 환경 캠페인 참여로 지구 지킴이 모험을 즐겨보세요! 🌍✨'
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
        img: 'https://i.postimg.cc/k5qc315q/image.png',
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
