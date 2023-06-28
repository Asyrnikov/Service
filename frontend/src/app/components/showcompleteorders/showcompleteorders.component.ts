import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from 'src/app/models/job';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-showcompleteorders',
  templateUrl: './showcompleteorders.component.html',
  styleUrls: ['./showcompleteorders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ShowcompleteordersComponent implements OnInit {

  form: FormGroup;
  orders: Order[] = [];
  id: number;
  jobs: Job[] = [];
  users: User[] = [];

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['expand', 'registration_date', 'user.firstname', 'user.lastname', 'user.email', 'user.phone_number', 'cost', 'paid', 'checked'];
  displayedColumnsJobs: string[] = ['jobLabel', 'name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrderService,
    private jobService: JobService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
    this.dataSource.sort.sortChange.subscribe(() => (this.dataSource.paginator!.pageIndex = 0));
  }

  ngOnInit(): void {
    this.getCompletedOrders(1);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm: any, key: any) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  nestedFilterCheck(search: any, data: any, key: any) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  getCompletedOrders(completed: number) {
    this.orderService.getCompletedOrders(completed).subscribe(orders => {
      this.dataSource.data = orders
    });
  }
  getProperty = (obj: any, path: any) => (
    path.split('.').reduce((o: any, p: any) => o && o[p], obj)
  )

}
