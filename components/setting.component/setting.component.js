import DemoImg from '../../assets/02.jpg'
export default class Setting {

    constructor(printBtnObj) {
        this._print = printBtnObj['fn'].bind(printBtnObj.this);
    }

    render(id) {
        let SettingComponentElement = document.getElementById(id);
        SettingComponentElement.className = 'w3-container no-print';
        var settingHtml =
            `<form name="SettingForm" class="w3-container w3-margin w3-teal w3-round w3-padding-16">
            <div class="w3-row-padding">
                <div class="w3-col s12 m5 l5" style="position:relative;">
                    <img name="ImgSrc" src="` + DemoImg + `" class="w3-border" alt="Norway" style="width:100%;height:290px;">
                    <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:100%;height:290px;opacity:0;" >
                </div>
                <div class="w3-col s12 m7 l7">
                    <div class="w3-row-padding w3-margin-bottom">
                        <div class="w3-half">
                            <label>標題</label>
                            <input name="Title" class="w3-input w3-border w3-round" type="text" value="快樂來至於滿足感" placeholder="">
                        </div>
                        <div class="w3-half">
                            <label>副標題</label>
                            <input name="SubTitle" class="w3-input w3-border w3-round" type="text" value="呷飽祙?" placeholder="">
                        </div>
                    </div>
                    <div class="w3-row-padding w3-margin-bottom">
                        <div class="w3-half">
                            <label>日期</label>
                            <input name="Date" class="w3-input w3-border w3-round" type="text" value="2018/04/01" placeholder="">
                        </div>
                        <div class="w3-half">
                            <label>作者</label>
                            <input name="Author" class="w3-input w3-border w3-round" type="text" value="林小肥" placeholder="">
                        </div>
                    </div>
                    <div class="w3-row-padding w3-margin-bottom">
                        <div class="w3-half">
                            <label>頁尾</label>
                            <input name="FooterStr" class="w3-input w3-border w3-round" type="text" value="我是頁尾啦~~~" placeholder="">
                        </div>
                        <div class="w3-half">
                            <label>頁尾位置</label>
                            <p style="margin:0;">
                                <input id="RadioL" class="w3-radio" type="radio" name="Position" value="left" >
                                <label for="RadioL">靠左</label>
                                <input id="RadioC"class="w3-radio" type="radio" name="Position" value="center" >
                                <label for="RadioC" for="male">置中</label>
                                <input id="RadioR" class="w3-radio" type="radio" name="Position" value="right" checked>
                                <label for="RadioR">靠右</label>
                            </p>
                        </div>
                    </div>
                    <div class="w3-row-padding w3-margin-bottom">
                        <div class="w3-col">
                            <button id="Print" type="button" class="w3-button w3-block w3-khaki" style="color:white">
                                    列印
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>`;

        let temp = document.createElement('div');
        temp.innerHTML = settingHtml;
        let htmlObject = temp.firstChild;
        htmlObject.querySelectorAll('.AddImg')[0].addEventListener("change", (event) => {
            event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
        }, false);
        htmlObject.querySelectorAll('#Print')[0].onclick = (e) => {
            this._print();
        };
        SettingComponentElement.appendChild(htmlObject);
    }

    getComponentData() {
        let SettingForm = document.forms['SettingForm'];
        let Data = {
            Title: SettingForm.Title.value,
            SubTitle: SettingForm.SubTitle.value,
            ImageSrc: SettingForm.ImgSrc.src,
            Date: SettingForm.Date.value,
            Author: SettingForm.Author.value,
            Footer: SettingForm.FooterStr.value,
            FooterPosition: SettingForm.Position.value
        }
        return Data;
    }

}