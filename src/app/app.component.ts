import { AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'tab';
  activeTab: string = 'THÔNG TIN CÁ NHÂN';
  activeDropdownTab: string = 'Sơ yếu lý lịch';

  @ViewChild('tab1Template') tab1Template!: TemplateRef<any>;
  @ViewChild('tab2Template') tab2Template!: TemplateRef<any>;

  lstTab: any[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.lstTab = [
      {
        name: 'Sơ yếu lý lịch',
        tabs: [
          { name: 'THÔNG TIN CÁ NHÂN', template: this.tab1Template },
          { name: 'THÔNG TIN CÔNG VIỆC', template: this.tab2Template },
          // { name: 'THÔNG TIN TUYỂN DỤNG', component: TabComponent },
          // { name: 'THÂN NHÂN', component: Tab1Component },
          // { name: 'THÔNG TIN ĐẢNG - ĐOÀN', component: TabComponent },
          // { name: 'TIỂU SỬ CÁ NHÂN', component: Tab1Component },
          // { name: 'LAO ĐỘNG NƯỚC NGOÀI', component: TabComponent },
          // { name: 'HỒ SƠ CẦN NỘP', component: Tab1Component },
        ]
      },
      {
        name: 'Pháp lý',
        tabs: [
          { name: 'Tổng quan', template: this.tab1Template },
          { name: 'Số bảo hiểm - Số lao động', template: this.tab2Template },
          // { name: 'Tài khoản cá nhân', component: Tab2Component },
          // { name: 'Hợp đồng lao động', component: Tab2Component },
          // { name: 'Hộ chiếu', component: Tab3Component },
          // { name: 'Thị thực', component: Tab2Component },
          // { name: 'Giấy phép lao động', component: Tab2Component },
          // { name: 'Miễn giấy phép lao động', component: Tab3Component },
          // { name: 'Thẻ tạm trú', component: Tab2Component },
          // { name: 'Đăng ký tạm trú', component: Tab2Component },
          // { name: 'Giấy phép lái xe', component: Tab3Component },
          // { name: 'Thông tin ủy quyền', component: Tab2Component },
        ]
      }
    ];
  }

  


  clickTab(item: any) {
    this.activeTab = item.tabs[0].name; // Mặc định chọn tab con đầu tiên
    this.activeDropdownTab = item.name;
    console.log(item.name);
    console.log(item.tabs[0].name);
  }

  clickDropdownTab(tab: any) {
    // Gán giá trị của group.name cho activeDropdownTab
    // Tìm tab chứa component tương ứng với tab được chọn trong lstTab
    for (let group of this.lstTab) {
        for (let t of group.tabs) {
            if (t.name === tab) {
                this.activeTab = t.name;
                console.log(t.name)
                console.log(this.activeTab)
                console.log(this.activeDropdownTab)
                return; // Kết thúc vòng lặp khi tìm thấy tab
            }
        }
    }
  }
}
