import { AfterViewInit, Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
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
  activeTab: string = 'eInfo';
  activeDropdownTab: string = 'circurriculumVitae';

  @ViewChild('tab1Template') tab1Template!: TemplateRef<any>;
  @ViewChild('tab2Template') tab2Template!: TemplateRef<any>;
  
  ///////////////
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  disableLeft: boolean = true;
  disableRight: boolean = false;


  scrollLeft() {
    if (this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollLeft -= 48; // Khoảng cuộn khi nhấn nút trái
      this.checkButtonStatus();
    }
  }

  scrollRight() {
    if (this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollLeft += 48; // Khoảng cuộn khi nhấn nút phải
      this.checkButtonStatus();
      const container = this.scrollContainer.nativeElement;
      console.log(container.scrollLeft + container.offsetWidth)
      console.log(container.scrollWidth)
    }
  }

  checkButtonStatus() {
    const container = this.scrollContainer.nativeElement;
    // Kiểm tra nếu đã đến cận cảng bên trái
    this.disableLeft = container.scrollLeft <= 0;
    // Kiểm tra nếu đã đến cận cảng bên phải
    this.disableRight = container.scrollLeft + container.offsetWidth + 5 >= container.scrollWidth;
  }
  ////////////////



  lstTab: any[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.lstTab = [
      {
        name: 'circurriculumVitae',
        text: 'Sơ yếu lý lịch',
        tabs: [
          { text: 'THÔNG TIN CÁ NHÂN', name: 'eInfo', template: this.tab1Template, active: true },
          { text: 'THÔNG TIN CÔNG VIỆC', name: 'eJob', template: this.tab2Template, active: true },
          { text: 'THÔNG Tin tuyển dụng', name: 'eHiring', template: this.tab1Template, active: true },
          { text: 'THân nhân', name: 'eFamily', template: this.tab2Template, active: true },
          { text: 'THÔNG TIN đảng - đoàn', name: 'eGroup', template: this.tab1Template, active: true },
          { text: 'Tiểu sử cá nhân', name: 'ePersonal', template: this.tab2Template, active: true },
          { text: 'LAo động nước ngoài', name: 'eForeign', template: this.tab1Template, active: true },
          { text: 'Hồ sơ cần nộp', name: 'eContract', template: this.tab2Template, active: true },
          // { name: 'THÔNG TIN TUYỂN DỤNG', component: TabComponent },
          // { name: 'THÂN NHÂN', component: Tab1Component },
          // { name: 'THÔNG TIN ĐẢNG - ĐOÀN', component: TabComponent },
          // { name: 'TIỂU SỬ CÁ NHÂN', component: Tab1Component },
          // { name: 'LAO ĐỘNG NƯỚC NGOÀI', component: TabComponent },
          // { name: 'HỒ SƠ CẦN NỘP', component: Tab1Component },
        ]
      },
      {
        text: 'Pháp lý', // 'Pháp lý
        name: 'legalInfo',
        tabs: [
          { text: 'Tổng quan', name: 'overview', template: this.tab1Template, active: true },
          { text: 'Số bảo hiểm - Số lao động', name: 'number', template: this.tab2Template, active: true },
          { text: 'Tài khoản cá nhân', name: 'personalAccount', template: this.tab1Template, active: true },
          { text: 'Hợp đồng lao động', name: 'contract', template: this.tab2Template, active: true },
          { text: 'Hộ chiếu', name: 'passport', template: this.tab1Template, active: true },
          { text: 'Thị thực', name: 'visa', template: this.tab2Template, active: true },
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
