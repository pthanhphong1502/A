import { Component } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tab';
  activeTab: string = 'Personal Details';
  activeDropdownTab: string = 'Personal Details';

  // Dữ liệu giả mạo
  // tabsData = [
  //   { name: 'Personal Details', component: TabComponent },
  //   { name: 'Account Details', component: Tab1Component },
  //   { name: 'Other Details', component: TabComponent }
  // ];

  lstTab = [
    {
      name: 'Sơ yếu lý lịch',
      tabs: [
        { name: 'Personal Details', component: TabComponent },
        { name: 'Account Details', component: Tab1Component },
        { name: 'Other Details', component: TabComponent }
      ]
    },
    {
      name: 'Pháp lý',
      tabs: [
        { name: 'Xyz', component: Tab2Component },
        { name: 'Abc', component: Tab3Component },
        { name: 'Oth Det', component: Tab2Component }
      ]
    }
  ];

  onTabClick(tab: any) {
    this.activeTab = tab;
    this.activeDropdownTab = tab;
  }

  clickTab(item: any) {
    this.activeTab = item.tabs[0].name; // Mặc định chọn tab con đầu tiên
    this.activeDropdownTab = item.tabs[0].name;
  }

  clickDropdownTab(tab: any) {
    this.activeDropdownTab = tab;
    // Tìm tab chứa component tương ứng với tab được chọn trong lstTab
    for (let group of this.lstTab) {
      for (let t of group.tabs) {
        if (t.name === tab) {
          this.activeTab = t.name; // Cập nhật activeTab
          return; // Kết thúc vòng lặp khi tìm thấy tab
        }
      }
    }
  }

}
