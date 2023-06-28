import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeService } from 'src/app/services/type.service';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

interface TypeCheckbox {
  type: string,
  jobs: Job[],
  isChecked: boolean,
}

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  form: FormGroup;
  types:TypeCheckbox[] = [];
  id: number;
  jobs: Job[] = [];

  constructor(
    private typeService: TypeService,
  ) {}

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.typeService.getTypes().subscribe(types => {
      this.types = types.map<TypeCheckbox>(type => ({ type: type.type, jobs: type.jobs, isChecked: true}));
      this.calculateJobs();
    });
  }

  switchType(event: Event) {
    const target = <HTMLInputElement>event.target;
    const isChecked = target.checked;
    const id = target.id;
    this.types = this.types.map(type => ({...type, isChecked: type.type === id ? isChecked : type.isChecked}));
    this.calculateJobs();
  }

  calculateJobs() {
    this.jobs = this.types.reduce<Job[]>((accumulator, type) => {
      type.isChecked && accumulator.push(...type.jobs);
      return accumulator;
    }, []);
  }
}