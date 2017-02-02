import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SysMenu } from '../../models/sys-menu';
import { SysMenuService } from '../../services/sys-menu.service';

function sortbyMenu(n1,n2 : SysMenu):number{
    if (n1.category < n2.category){
      return -1;
    }
    if (n1.category > n2.category){
      return 1;
    }
    if (n1.level < n2.level){
      return -1;
    }
    if (n1.level > n2.level){
      return 1;
    }
    if (n1.pos < n2.pos){
      return -1;
    }
    if (n1.pos > n2.pos){
      return 1;
    }
    if (n1.id < n2.id){
      return -1;
    }
    if (n1.id > n2.id){
      return 1;
    }
    return 0;
  }

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.less']
})
export class MenuAsideComponent implements OnInit {
  private currMenuId: string;
  private menuList: Array<SysMenu>;
  private menuTree: Array<SysMenu>;

  
  //constructor(private userServ: UserService, public router: Router, private auth: AuthService) {
  constructor(private auth: AuthService, private sysmenu: SysMenuService) {

  }

  ngOnInit() {
    this.sysmenu.getSysMenuList()
    .then(menus => this.arrangeMenu(menus))
  }

  arrangeMenu(menus: Array<SysMenu>){
     this.menuList =  menus;
     for (let item of menus.sort(sortbyMenu)) {
       //TODO 遍历添加
       if( item.level == "01"){
           this.menuTree.push(item);
           continue;
       }
       for (let out in this.menuTree){
         if (this.menuTree[out].id == item.parentid){
           this.menuTree[out].subMenu.push(item);
         }
       }       
     }
  }
 
   

}
