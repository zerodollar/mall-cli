export class SysMenu {
    public category: string;
    public id: string;
    public name: string;
    public pos: string;
    public parentid: string;
    public level: string;
    public url: string;
    public icon: string;
    public status: string;
    public subMenu: Array<SysMenu>;

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.pos = data.pos || '';
    }

}
