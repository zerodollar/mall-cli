import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { SysMenu } from '../models/sys-menu';
import { environment } from '../../environments/environment';


//TODO  这里和mall-api协商 系统菜单返回的格式，是平铺／还是树形, api返回tree形比较好
// 返回给前台的都是tree形

@Injectable()
export class SysMenuService {
// private headers = new Headers({'Content-Type': 'application/json'});
private sysMenuUrl = environment.apiurl +  'v1/SYS_MENU_INF';  // URL to web api


  constructor(private http: Http) {}
  getSysMenuList(): Promise<SysMenu[]> {
    /* 1 .then(function(value){
                console.log("in promise1 ---- success");
                console.log(value.json());
                return value.json();
            })
        2 .then(response => response.json().data as SysMenu[])
    */
      return this.http.get(this.sysMenuUrl)
                  .toPromise()
                  .then(response => response.json() as SysMenu[])
                 .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  

}
