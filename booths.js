const booths = [
    {
        id: '1',
        img: 'https://i.postimg.cc/0273vtjK/ESD.png',
        width: 300,
        height: 200,
        title: '오호~ 친환경 물병이다!'<br>'(오호 만들기)',
        description: '해조류 성분으로 만든 신기한 친환경 물병, 오호(Ooho)! 직접 만들고 지구를 지키는 한 모금의 가치를 만들어보세요.'
    },
    {
        id: '2',
        img: 'https://i.postimg.cc/PqkqHqfd/image.png',
        width: 300,
        height: 200,
        title: '과일청 에이드 만들기 체험',
        description: '과일청을 활용해 내 취향에 맞는 에이드를 만들어보는 체험활동!<br>새콤달콤한 한 잔 속에 친환경 메시지를 담아, 환경 보호에 한 걸음 더 다가가 봅시다.'
    },    
    {
        id: '3',
        img: 'https://i.postimg.cc/TPLS94kK/image.jpg',
        width: 300,
        height: 200,
        title: '친환경 화분 만들기와 로봇팔 및 인공지능 체험하기',
        description: '사탕수수와 옥수수전분으로 만든 3D프린터 화분 만들기 체험!<br>친환경 화분을 만들어 봐요.'
    },    
    {
        id: '4',
        img: 'https://i.postimg.cc/vHTjv478/image.jpg',
        width: 300,
        height: 200,
        title: '환경 개선 챌린지',
        description: '스파이크 프라임을 사용해 도로 위 쓰레기를 피해 운전하고 쓰레기를 수거하는 자동차 주행 체험<br>엔트리를 활용하여 분리수거의 방법을 자세히 살펴보는 게임 체험'
    },    
    {
        id: '5',
        img: 'https://i.postimg.cc/TYp1qSHv/image.png',
        width: 300,
        height: 200,
        title: '방긋방긋 바다친구 만나기',
        description: '거제지역에 서식하는 해양보호종인 상괭이(돌고래)보호를 위한 체험부스<br>상쾡이 엽서만들기, 상괭이 포토존 운영 등'
    },
    {
        id: '6',
        img: 'https://i.postimg.cc/jdm58XGw/POP.png',
        width: 300,
        height: 200,
        title: '지구를 위한 퀴즈, 나를 위한 소원',
        description: 'QR코드를 스캔해 환경 퀴즈 5문제에 도전하세요!(소정의 선물 있어요!!)<br>퀴즈를 마친 참가자는 친환경 재생지 카드에 나의 환경 실천 다짐 또는 지구에게 전하고 싶은 한 마디를 적어봐요.'
    },
    {
        id: '7',
        img: 'https://i.postimg.cc/TYp1qSHv/image.png',
        width: 300,
        height: 200,
        title: '방긋방긋 바다친구 만나기',
        description: '거제지역에 서식하는 해양보호종인 상괭이(돌고래)보호를 위한 체험부스<br>상쾡이 엽서만들기, 상괭이 포토존 운영 등'
    },
    {
        id: '8',
        img: 'https://i.postimg.cc/TYp1qSHv/image.png',
        width: 300,
        height: 200,
        title: '방긋방긋 바다친구 만나기',
        description: '거제지역에 서식하는 해양보호종인 상괭이(돌고래)보호를 위한 체험부스<br>상쾡이 엽서만들기, 상괭이 포토존 운영 등'
    },
    {
        id: '9',
        img: 'https://i.postimg.cc/TYp1qSHv/image.png',
        width: 300,
        height: 200,
        title: '방긋방긋 바다친구 만나기',
        description: '거제지역에 서식하는 해양보호종인 상괭이(돌고래)보호를 위한 체험부스<br>상쾡이 엽서만들기, 상괭이 포토존 운영 등'
    },
    {
        id: '10',
        img: 'https://i.postimg.cc/TYp1qSHv/image.png',
        width: 300,
        height: 200,
        title: '방긋방긋 바다친구 만나기',
        description: '거제지역에 서식하는 해양보호종인 상괭이(돌고래)보호를 위한 체험부스<br>상쾡이 엽서만들기, 상괭이 포토존 운영 등'
    }
];

localStorage.setItem('boothData', JSON.stringify(booths));

const savedBooths = JSON.parse(localStorage.getItem('boothData'));

savedBooths.forEach(booth => {
    createBooth(booth.id, booth.img, booth.width, booth.height, booth.title, booth.description);
});
