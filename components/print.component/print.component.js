import './print.component.scss';
export default class Print {

	constructor() {}

	render(id, params) {
		let PrintComponentElement = document.getElementById(id);
		PrintComponentElement.innerHTML = '';

		// footer 
		let footerHtml =
			`<div class="print-footer footer-` + params.setting.FooterPosition + `">
				<span>` + params.setting.Footer + `</span>
			</div>`;
		let footerTemp = document.createElement('div');
		footerTemp.innerHTML = footerHtml;
		let footerHtmlObject = footerTemp.firstChild;
		PrintComponentElement.appendChild(footerHtmlObject);

		// cover
		let coverHtml =
			`<div class="print-page print-cover-page">
				<div class="cover-headline-block">
					<h1 class="title">` + params.setting.Title + `</h1>
					<h2 class="sub-title">` + params.setting.SubTitle + `</h2>
				</div>
				<div class="cover-photo-block">
					<img class="photo" src="` + params.setting.ImageSrc + `" alt="">
				</div>
				<div class="cover-info-block">
					<p class="author">作者：
						<span class="underline">` + params.setting.Author + `</span>
					</p>
					<p class="date">日期：
						<span class="underline">` + params.setting.Date + `</span>
					</p>
				</div>
				<div class="page-number"></div>
			</div>`;
		let coverTemp = document.createElement('div');
		coverTemp.innerHTML = coverHtml;
		let coverHtmlObject = coverTemp.firstChild;
		PrintComponentElement.appendChild(coverHtmlObject);

		// table
		let Tables = [];
		for (var i = 0, len = params.list.length; i < len; i += 4) {
			Tables.push(params.list.slice(i, i + 4));
		};
		if (Tables.length > 0) {
			var Count = 4 - Tables[Tables.length - 1].length
			for (let index = 0; index < Count; index++) {
				Tables[Tables.length - 1].push({
					'Src': '',
					'Desc': '',
				});
			};
		};

		for (let index = 0; index < Tables.length; index++) {
			let tableHtml =
				`<div class="print-page">
					<h3 class="page-title">相關照片</h3>
					<table class="print-table">
						<tr>
							<td>
								<div class="td-img">
									<img src="` + Tables[index][0].Src + `" alt="">
								</div>
							</td>
							<td>
								<div class="td-img">
									<img src="` + Tables[index][1].Src + `" alt="">
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="td-description">
									<span>` + Tables[index][0].Desc + `</span>
								</div>
							</td>
							<td>
								<div class="td-description">
									<span>` + Tables[index][1].Desc + `</span>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="td-img">
									<img src="` + Tables[index][2].Src + `" alt="">
								</div>
							</td>
							<td>
								<div class="td-img">
									<img src="` + Tables[index][3].Src + `" alt="">
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="td-description">
									<span>` + Tables[index][2].Desc + `</span>
								</div>
							</td>
							<td>
								<div class="td-description">
									<span>` + Tables[index][3].Desc + `</span>
								</div>
							</td>
						</tr>
					</table>
					<div class="page-number"></div>
				</div>`;
			let tableTemp = document.createElement('div');
			tableTemp.innerHTML = tableHtml;
			let tableHtmlObject = tableTemp.firstChild;
			PrintComponentElement.appendChild(tableHtmlObject);
		};

		// print
		window.print();
	}
}