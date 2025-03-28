import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-navigator',
  templateUrl: './tool-navigator.component.html',
  styleUrl: './tool-navigator.component.css',
})
export class ToolNavigatorComponent {
  constructor(private router: Router) {}
  navigateToCreateTask() {
    this.router.navigate(['/task-create']);
  }
  navigateToListTask() {
    this.router.navigate(['/task-list']);
  }
}
