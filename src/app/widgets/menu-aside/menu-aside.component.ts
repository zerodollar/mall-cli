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
  private menuTree: Array<SysMenu> =[];

  
  //constructor(private userServ: UserService, public router: Router, private auth: AuthService) {
  constructor(private auth: AuthService, private sysmenu: SysMenuService) {

  }

  ngOnInit() {
    this.sysmenu.getSysMenuList()
    .then(menus => this.arrangeMenu(menus))
  }

  arrangeMenu(menus: Array<SysMenu>){
    if(!menus){
       console.log("not find menus")
      return
    }
    //console.log(menus)
     this.menuList =  menus.sort(sortbyMenu);
    // console.log(this.menuList)
     for (let item of this.menuList) {
       //TODO 遍历添加
       //console.log("item id = "+ item.id)
       if( item.level == "01"){
           //this.menuTree[this.menuTree.length] = item;
           this.menuTree.push(item);
           continue;
       }
      


      if( item.level == "02"){
       for (let out in this.menuTree){
          if (this.menuTree[out].id == item.parentid){
            if (this.menuTree[out].subMenu == undefined){
              this.menuTree[out].subMenu = [];
            }
            this.menuTree[out].subMenu.push(item);
           break;
       }
       }
       continue;
      }

      if( item.level == "03"){
        for (let i in this.menuTree){
          
        if(this.menuTree[i].subMenu == undefined){
          //console.log("not parent"+this.menuTree[i].id);
          continue;
        }
        //console.log(" parent is "+this.menuTree[i].id);
          for(let j in this.menuTree[i].subMenu){
          if (this.menuTree[i].subMenu[j].id == item.parentid){
            //console.log(" parenttt is "+this.menuTree[i].subMenu[j].id );
            if (this.menuTree[i].subMenu[j].subMenu == undefined){
              this.menuTree[i].subMenu[j].subMenu = [];
            }
            this.menuTree[i].subMenu[j].subMenu.push(item);
           break;
       }       
       }
       continue;
        }
       continue;  
      }



     }

   // console.log( this.menuTree)
   
  }
 
   

}
