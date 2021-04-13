class HangHoa {
	id;
	ten;
	giaThanh;
	nhaSX;
	giamGia;
	ngayNhap;
	constructor(id, ten, giaThanh, nhaSX, giamGia, ngayNhap) {
		this.id = id;
		this.ten = ten;
		this.giaThanh = giaThanh;
		this.nhaSX = nhaSX;
		this.giamGia = giamGia;
		this.ngayNhap = ngayNhap;
	}
}

class DoGiaDung extends HangHoa {
	doBen;
	constructor(id, ten, giaThanh, nhaSX, ngayNhap, doBen) {
		super(id, ten, giaThanh, nhaSX, 0.1, ngayNhap);
		this.doBen = doBen;
	}
}

class QuanAo extends HangHoa {
	xuatXu;
	chatLieu;
	constructor(id, ten, giaThanh, nhaSX, ngayNhap, xuatXu, chatLieu) {
		super(id, ten, giaThanh, nhaSX, 0.05, ngayNhap);
		this.xuatXu = xuatXu;
		this.chatLieu = chatLieu;
	}
}

class DoAn extends HangHoa {
	vi;
	constructor(id, ten, giaThanh, nhaSX, ngayNhap, vi) {
		super(id, ten, giaThanh, nhaSX, 0.02, ngayNhap);
		this.vi = vi;
	}
}
