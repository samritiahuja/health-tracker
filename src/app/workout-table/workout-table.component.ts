import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-table.component.html',
  styleUrls: ['./workout-table.component.css']
})
export class WorkoutTableComponent implements OnInit {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
  }
}
