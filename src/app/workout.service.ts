import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: any[] = [];

  constructor() {
    this.loadWorkouts();
  }

  addWorkout(workout: any) {
    this.workouts.push(workout);
    this.saveWorkouts();
  }

  getWorkouts() {
    return this.workouts;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  private saveWorkouts() {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.setItem('workouts', JSON.stringify(this.workouts));
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    } else {
      console.warn('localStorage is not available');
    }
  }

  private loadWorkouts() {
    if (this.isLocalStorageAvailable()) {
      try {
        const savedWorkouts = localStorage.getItem('workouts');
        if (savedWorkouts) {
          this.workouts = JSON.parse(savedWorkouts);
        }
      } catch (e) {
        console.error('Error loading from localStorage', e);
      }
    } else {
      console.warn('localStorage is not available');
    }
  }
}
