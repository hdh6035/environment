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
        img: 'https://i.postimg.cc/zXw6cC95/1.jpg',
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
