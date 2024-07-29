import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  name: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    this.workoutService.addWorkout({
      name: this.name,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    });

    this.name = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
