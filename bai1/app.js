class Meme {
	id;
	name;
	image;
	dateModified;
	constructor(id, name, image, dateModified) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.dateModified = dateModified;
	}
	show() {
		let meme = document.getElementById("box");
		meme.innerHTML = `<img src="${this.image}" alt="">
		<h1>Đây là ${this.name} được khởi tạo ngày ${this.dateModified}</h1>`;
	}
	update(data) {
		this.id = data.id;
		this.name = data.name;
		this.image = data.image;
		this.dateModified = data.dateModified;
	}
}

let a = new Meme(
	1,
	"Hỏi chấm",
	"https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/12/21/confusednickyoung-16085260310741369924969.jpg",
	"12/4/2021"
);

a.show();

class MemeCollection {
	id;
	name;
	owner;
	memes = [];
	constructor(id, name, owner, memes) {
		this.id = id;
		this.name = name;
		this.owner = owner;
		this.memes = memes;
	}
	add(newMeme) {
		if (newMeme instanceof Meme) {
			this.memes.push(newMeme);
		}
	}
}
