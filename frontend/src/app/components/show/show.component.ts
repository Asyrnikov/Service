import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from 'src/app/models/job';
import { Order } from 'src/app/models/order';
import { JobService } from 'src/app/services/job.service';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ShowComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  orders: Order[] = [];
  id: number;
  jobs: Job[] = [];

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['expand', 'registration_date', 'cost', 'paid', 'checked', 'completed'];
  displayedColumnsJobs: string[] = ['jobLabel', 'name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrderService,
    private jobService: JobService,
    private authService: AuthService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sortChange.subscribe(() => (this.dataSource.paginator!.pageIndex = 0));
  }

  ngOnInit(): void {
    this.authService.profileUser().subscribe((user) => {
      this.getMyOrders(user.id);
    });
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getMyOrders(userId: number) {
    this.orderService.getMyOrders(userId).subscribe(orders => {
      this.dataSource.data = orders;
    });
  }

}
