import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
    selector: '.tasksBox',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.less']
})
export class TasksBoxComponent implements OnInit {

    private messages: Message[];
    private tasksLength: {} = { 0: '9' };
    @Input() public user;

    constructor() {
        // TODO 
    }

  ngOnInit() {
  }

}
