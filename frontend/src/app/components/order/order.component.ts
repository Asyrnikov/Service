import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { Order } from 'src/app/models/order';
import { JobService } from 'src/app/services/job.service';
import { OrderService } from 'src/app/services/order.service';
import { TypeService } from 'src/app/services/type.service';
import * as moment from 'moment';
import { AuthService } from 'src/app/shared/auth.service';

interface TypeCheckbox {
  type: string,
  jobs: Job[],
  isChecked: boolean,
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  form: FormGroup;
  types: TypeCheckbox[] = [];
  jobs: Job[] = [];

  typeI: boolean = true;

  id: number;

  order: Order;

  constructor(
    // private jobService: JobService,
    private typeService: TypeService,
    private orderService: OrderService,
    private authService: AuthService,

    private router: Router,
    private activeRouter: ActivatedRoute,
  ) {
    this.order = {
      id: 0,
      registration_date: moment().format('YYYY-MM-DD HH:mm'),
      paid: false,
      checked: false,
      completed: false,
      cost: 0,
      user_id: 0,

      jobs: [],
    }
  }

  ngOnInit(): void {
    // this.getJobs();
    this.getTypes();

    this.form = new FormGroup({
      registration_date: new FormControl(this.order.registration_date, [Validators.required]),
      jobs: new FormControl(this.order.jobs, [Validators.required, Validators.min(1)]),
      // paid: new FormControl(this.order.paid, [Validators.required]),
      // checked: new FormControl(this.order.checked, [Validators.required]),
      // completed: new FormControl(this.order.completed, [Validators.required]),
      // cost: new FormControl(this.order.cost, [Validators.required]),
      // user_id: new FormControl(this.order.user_id, [Validators.required]),
      // type_id: new FormControl(this.order.type_id, [Validators.required, Validators.min(1)]),
      // job_id: new FormControl(this.order.job_id, [Validators.required, Validators.min(1)])
    });
  }

  get f() {return this.form.controls}

  getTypes() {
    this.typeService.getTypes().subscribe(types => {
      this.types = types.map<TypeCheckbox>(type => ({ type: type.type, jobs: type.jobs, isChecked: true}));
      this.calculateJobs();
    });
  }
  // getJobs() {
  //   this.jobService.getJobs().subscribe((data)=> {
  //     this.jobs = data;
  //   });
  // }

  onSubmit() {
    if(this.form.invalid) {
      return;
    }

    Object.assign(this.order, this.form.value)

    if(this.id) {
      this.updateOrder();
    } else {
      this.storeOrder();

    }

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

  storeOrder() {
    this.authService.profileUser().subscribe((user) => {
      this.order.user_id = user.id;
      this.order.cost = this.order.jobs?.reduce<number>((accumulator, job) => {
        accumulator = accumulator + job.count;
        return accumulator;
      }, 0) ?? 0;
      this.orderService.storeOrder(this.order).subscribe((data) => {
        if (data) {
          this.router.navigate(['']);
        }
      });
    });
  }
  updateOrder() {
    this.orderService.updateOrder(this.order).subscribe((data) => {
      if(data) {
        this.router.navigate(['']);
      }
    });
  }
}
