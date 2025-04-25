const booths = [
    {
        id: '1',
        img: 'https://i.postimg.cc/zXw6cC95/1.jpg',
        width: 300,
        height: 200,
        title: '친환경 화분 만들기',
        description: '옥수수전분으로 만든 3D프린터 화분<br>흙 대신 커피 찌꺼기 사용'
    },
    {
        id: '2',
        img: 'https://i.postimg.cc/qv4QpWns/img020206-1-m.jpg',
        width: 300,
        height: 200,
        title: '친환경 화분 만들기',
        description: '옥수수전분으로 만든 3D프린터 화분<br>흙 대신 커피 찌꺼기 사용'
    },    {
        id: '3',
        img: 'https://i.postimg.cc/rwjjsgCv/posri2.png',
        width: 300,
        height: 200,
        title: '친환경 화분 만들기',
        description: '옥수수전분으로 만든 3D프린터 화분<br>흙 대신 커피 찌꺼기 사용'
    },    {
        id: '4',
        img: 'https://i.postimg.cc/VNNRCMK5/1160531-930240-1930.jpg',
        width: 300,
        height: 200,
        title: '친환경 화분 만들기',
        description: '옥수수전분으로 만든 3D프린터 화분<br>흙 대신 커피 찌꺼기 사용'
    },    
    {
        id: '5',
        img: 'https://i.postimg.cc/fbgvjLPC/1006355-218050-1913.jpg',
        width: 300,
        height: 200,
        title: '로봇팔 체험하기',
        description: '아두이노 이용<br>자동화'
    },
    {
        id: '6',
        img: 'https://i.postimg.cc/prtxr2PV/99-AA6-C395-E40-D1-D12-E.png',
        width: 300,
        height: 200,
        title: '로봇팔 체험하기',
        description: '아두이노 이용<br>자동화'
    },
    {
        id: '7',
        img: 'https://i.postimg.cc/GtJRsZpF/images.jpg',
        width: 300,
        height: 200,
        title: '로봇팔 체험하기',
        description: '아두이노 이용<br>자동화'
    },
    {
        id: '8',
        img: 'https://i.postimg.cc/YCyHgNts/114208953-1.jpg',
        width: 300,
        height: 200,
        title: '로봇팔 체험하기',
        description: '아두이노 이용<br>자동화'
    }
];

localStorage.setItem('boothData', JSON.stringify(booths));

const savedBooths = JSON.parse(localStorage.getItem('boothData'));

savedBooths.forEach(booth => {
    createBooth(booth.id, booth.img, booth.width, booth.height, booth.title, booth.description);
});
