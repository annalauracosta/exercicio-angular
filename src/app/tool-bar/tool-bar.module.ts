import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolNavigatorComponent } from './tool-navigator/tool-navigator.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolNavigatorComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [ToolNavigatorComponent],
})
export class ToolBarModule {}
