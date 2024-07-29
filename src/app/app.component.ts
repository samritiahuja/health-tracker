import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutTableComponent } from './workout-table/workout-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WorkoutFormComponent, WorkoutTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health Challenge Tracker';
}
