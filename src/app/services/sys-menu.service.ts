import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { SysMenu } from '../models/sys-menu';


//TODO  这里和mall-api协商 系统菜单返回的格式，是平铺／还是树形, api返回tree形比较好
// 返回给前台的都是tree形

@Injectable()
export class SysMenuService {
// private headers = new Headers({'Content-Type': 'application/json'});
private sysMenuUrl = 'http://localhost:8080/v1/SYS_MENU_INF';  // URL to web api
  constructor(private http: Http) {}
  getSysMenuList(): Promise<SysMenu[]> {
      return this.http.get(this.sysMenuUrl,
                          {headers: new Headers({  'Origin': 'http://localhost:4200'})    })
                  .toPromise()
                 .then(response => response.json().data as SysMenu[])
                 .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  

}
