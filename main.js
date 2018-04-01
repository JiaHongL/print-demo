import Print from './components/print.component/print.component.js';
import Setting from './components/setting.component/setting.component.js';
import List from './components/list.component/list.component.js';


export default class MainController {
    constructor() {
        this.SettingComponent = new Setting({
            fn: this.print,
            this: this
        });
        this.ListComponent = new List();
        this.PrintComponent = new Print();

        this.SettingComponent.render('SettingComponent');
        this.ListComponent.render('ListComponent');
    }

    addItem() {}

    print() {
        let params = {
            setting: this.SettingComponent.getComponentData(),
            list: this.ListComponent.getComponentData(),
        }
        this.PrintComponent.render('PrintComponent', params);
    }

}