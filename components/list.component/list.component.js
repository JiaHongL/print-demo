import DemoPNG01 from '../../assets/03.jpg';
import DemoPNG02 from '../../assets/04.jpg';
import DemoPNG03 from '../../assets/05.jpg';
import DemoPNG04 from '../../assets/06.jpg';
import DemoPNG05 from '../../assets/07.jpg';

export default class List {
    constructor() {
        this.ListComponentName = '';
    }

    _createItem() {
        var panelHtml =
            `<div class="w3-col s12 m6 l3">
                <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                    <div class="w3-display-container w3-center" style="padding:20px;">
                        <div class="w3-display-container w3-round" style="width:100%;;height:208px;position:relative;">
                            <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;">
                            <i class="material-icons w3-display-middle" style="font-size:40px;">&#xE439;</i>
                            <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                        </div>
                        <div class="w3-section w3-center">
                            <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;"></textarea>
                        </div>
                        <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                    </div>
                </div>
            </div>`;
        let temp = document.createElement('div');
        temp.innerHTML = panelHtml;
        let htmlObject = temp.firstChild;
        htmlObject.querySelectorAll('.AddImg')[0].addEventListener("change", (event) => {
            event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
            event.target.parentNode.children[1].style = 'display:none;';
        }, false);
        htmlObject.querySelectorAll('.RemovePanel')[0].onclick = (e) => {
            this._removeItem(e);
        };
        return htmlObject;
    }

    _removeItem(e) {
        e.target.parentNode.parentNode.parentNode.remove();
    }

    _create() {
        let ListComponentElement = document.getElementById(this.ListComponentName);
        let ListElement = document.getElementById('PanelList');
        let LiElement = this._createItem();
        ListElement.insertBefore(LiElement, ListElement.children[ListElement.children.length - 1]);
    }

    render(id) {
        this.ListComponentName = id;
        let ListComponentElement = document.getElementById(this.ListComponentName);
        ListComponentElement.className = 'w3-container no-print';
        var listHtml =
            `<div id="PanelList" class="w3-row-padding">
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                        <div class="w3-display-container w3-center" style="padding:20px;">
                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">
                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="` + DemoPNG01 + `">
                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>
                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                            </div>
                            <div class="w3-section w3-center">
                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">這麼健康的東西 你真的要吃？</textarea>
                            </div>
                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                        </div>
                    </div>
                </div>
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                        <div class="w3-display-container w3-center" style="padding:20px;">
                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">
                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="` + DemoPNG02 + `">
                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>
                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                            </div>
                            <div class="w3-section w3-center">
                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">別忘了切肉的同時 也是在運動</textarea>
                            </div>
                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                        </div>
                    </div>
                </div>
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                        <div class="w3-display-container w3-center" style="padding:20px;">
                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">
                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="` + DemoPNG03 + `">
                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>
                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                            </div>
                            <div class="w3-section w3-center">
                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">就算你不吃冰 冰也會因為你融化</textarea>
                            </div>
                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                        </div>
                    </div>
                </div>
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                        <div class="w3-display-container w3-center" style="padding:20px;">
                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">
                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="` + DemoPNG04 + `">
                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>
                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                            </div>
                            <div class="w3-section w3-center">
                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">其實櫻桃沒有丸子</textarea>
                            </div>
                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                        </div>
                    </div>
                </div>
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">
                        <div class="w3-display-container w3-center" style="padding:20px;">
                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">
                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="` + DemoPNG05 + `">
                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>
                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >
                            </div>
                            <div class="w3-section w3-center">
                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">口渴的時候 冷暖都喝</textarea>
                            </div>
                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>
                        </div>
                    </div>
                </div>
                <div class="w3-col s12 m6 l3">
                    <div class="w3-panel w3-white w3-round w3-border w3-border-teal" style="padding:0;height:320px;">
                        <div class="w3-display-container" style="height:100%;">
                            <i id="AddPanel" class="material-icons w3-display-middle" style="color:#009688;font-size: 100px;padding: 110px 95px;">&#xE145;</i>
                        </div>
                    </div>
                </div>
            </div>`;

        let temp = document.createElement('div');
        temp.innerHTML = listHtml;
        let htmlObject = temp.firstChild;
        ListComponentElement.appendChild(htmlObject);
        
        Array.from(ListComponentElement.getElementsByClassName('ListItems')).forEach((item) => {
            item.querySelectorAll('.AddImg')[0].addEventListener("change", (event) => {
                event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
                event.target.parentNode.children[1].style = 'display:none;';
            }, false);
            item.querySelectorAll('.RemovePanel')[0].onclick = (e) => {
                this._removeItem(e);
            };
        });


        ListComponentElement.querySelectorAll('#AddPanel')[0].onclick = () => {
            this._create();
        };
    }

    getComponentData() {
        let Data = [];
        Array.from(document.getElementsByClassName('ListItems')).forEach((item) => {
            Data.push({
                Src: item.querySelectorAll('.Photo')[0].src,
                Desc: item.querySelectorAll('.Desc')[0].value
            });
        });

        return Data;
    }


}