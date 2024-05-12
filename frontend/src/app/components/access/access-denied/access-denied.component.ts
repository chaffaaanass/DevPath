import { Component, OnInit } from '@angular/core';
import { AccessDeniedService } from '../../../services/access/access-denied.service';
@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent implements OnInit {

  accessDeniedMessage!: string;

  constructor(private accessDeniedService: AccessDeniedService) { }

  ngOnInit(): void {
    this.getAccessDeniedMessage();
  }

  getAccessDeniedMessage(): void {
    this.accessDeniedService.getAccessDeniedMessage()
      .subscribe(message => this.accessDeniedMessage = message);
  }
}
