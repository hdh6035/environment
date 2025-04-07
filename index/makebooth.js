class Booth {
    constructor(id, imgSrc, imgWidth, imgHeight, title, description) {
        this.id = id;
        this.imgSrc = imgSrc;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.title = title;
        this.description = description;
    }

    createBoothElement() {
        const container = document.createElement('div');
        container.id = this.id;
        container.style.display = 'none';

        const innerDiv = document.createElement('div');

        const img = document.createElement('img');
        img.src = this.imgSrc;
        img.width = this.imgWidth;
        img.height = this.imgHeight;

        const h2 = document.createElement('h2');
        h2.innerHTML = this.title;

        const p = document.createElement('p');
        p.innerHTML = this.description;

        innerDiv.appendChild(img);
        innerDiv.appendChild(h2);
        innerDiv.appendChild(p);
        container.appendChild(innerDiv);

        return container;
    }
}

function createBooth(id, imgSrc, imgWidth, imgHeight, title, description) {
    const booth = new Booth(id, imgSrc, imgWidth, imgHeight, title, description);
    const boothElement = booth.createBoothElement();
    document.body.appendChild(boothElement);
    return boothElement;
}
