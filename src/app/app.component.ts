import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'tab';
  activeTab: string = 'eInfo';
  activeDropdownTab: string = 'circurriculumVitae';
  dropdownOpen = false;
  isHovered: boolean = false;
  showTab: boolean = false;


  //Test
  @ViewChild('tab1Template') tab1Template!: TemplateRef<any>;
  @ViewChild('tab2Template') tab2Template!: TemplateRef<any>;

  // So yeu ly lich
  @ViewChild('eInfo') eInfo!: TemplateRef<any>;
  @ViewChild('eJob') eJob!: TemplateRef<any>;
  @ViewChild('eHiring') eHiring!: TemplateRef<any>;
  @ViewChild('eFamily') eFamily!: TemplateRef<any>;
  @ViewChild('eGroup') eGroup!: TemplateRef<any>;
  @ViewChild('ePersonal') ePersonal!: TemplateRef<any>;
  @ViewChild('eForeign') eForeign!: TemplateRef<any>;
  @ViewChild('eContract') eContract!: TemplateRef<any>;

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

  toggleTab(): void {
    this.showTab = !this.showTab;
    console.log(111);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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

  constructor() { }

  ngAfterViewInit(): void {
    this.lstTab = [
      {
        name: 'circurriculumVitae',
        icon: 'icon-attach_money',
        text: 'Sơ yếu lý lịch',
        tabs: [
          { text: 'THÔNG TIN CÁ NHÂN', name: 'eInfo', template: this.eInfo, active: true, icon: 'icon-attach_money' },
          { text: 'THÔNG TIN CÔNG VIỆC', name: 'eJob', template: this.eJob, active: true, icon: 'icon-attach_money' },
          { text: 'THÔNG Tin tuyển dụng', name: 'eHiring', template: this.eHiring, active: true, icon: 'icon-attach_money' },
          { text: 'THân nhân', name: 'eFamily', template: this.eFamily, active: true, icon: 'icon-attach_money' },
          { text: 'THÔNG TIN đảng - đoàn', name: 'eGroup', template: this.eGroup, active: true, icon: 'icon-attach_money' },
          { text: 'Tiểu sử cá nhân', name: 'ePersonal', template: this.ePersonal, active: true, icon: 'icon-attach_money' },
          { text: 'LAo động nước ngoài', name: 'eForeign', template: this.eForeign, active: true, icon: 'icon-attach_money' },
          { text: 'Hồ sơ cần nộp', name: 'eContract', template: this.eContract, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Thông tin pháp lý',
        name: 'legalInfo',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Tổng quan', name: 'overview', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Số bảo hiểm - Số lao động', name: 'number', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Tài khoản cá nhân', name: 'personalAccount', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Hợp đồng lao động', name: 'contract', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Hộ chiếu', name: 'passport', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Thị thực', name: 'visa', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Giấy phép lao động', name: 'work', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Miễn giấy phép lao động', name: 'nowork', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Thẻ tạm trú', name: 'card', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Đăng ký tạm trú', name: 'signup', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Giấy phép lái xe', name: 'car', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Thông tin ủy quyền', name: 'info', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Phúc lợi',
        name: 'benefit',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Nhóm tính lương', name: 'payrollGroup', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Lương cơ bản', name: 'basicBenefit', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Lương theo vị trí công việc', name: 'salaryJobPosition', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Phụ cấp', name: 'allowance', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Thu nhập khác', name: 'otherIncome', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Bảo hiểm bắt buộc', name: 'compulsoryInsurance', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Khấu trừ khác', name: 'deductions', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Tài sản cấp phát', name: 'allocatedAssets', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Tiền vay', name: 'loan', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Bảo hiểm khác', name: 'otherInsurance', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Trung tâm chi phí', name: 'costCenter', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Tài khoản tài xế', name: 'driverAccount', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Giấy ủy quyền', name: 'authorizationLetter', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Quá trình làm việc',
        name: 'workingProcess',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Nghỉ phép', name: 'onLeave', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Nghỉ bù', name: 'compensatoryLeave', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Bổ nhiệm - Điều chuyển', name: 'appoint', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Nhật ký công tác', name: 'workDiary', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Dự án tham gia', name: 'projects', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Công việc thực hiện', name: 'workPerformed', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
	        { text: 'Kinh nghiệm trước đây', name: 'previousExperience', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Kiến thức',
        name: 'knowledge',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Chuyên ngành đào tạo', name: 'specializedTraining', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Chứng chỉ', name: 'certificate', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Kỹ năng', name: 'skills', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Đào tạo nội bộ', name: 'internalTraining', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Công trình nghiên cứu', name: 'researchProject', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Khen thưởng - Kỹ luật',
        name: 'bonus',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Đánh giá', name: 'evaluate', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Khen thưởng', name: 'bonusChild', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Kỷ luật', name: 'discipline', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Sức khỏe - Hoạt động',
        name: 'healthInfo',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Thẻ bảo hiểm y tế', name: 'healthInsurance', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Tai nạn lao động', name: 'laborAccident', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Khám sức khỏe', name: 'physicalExamination', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Bệnh nghề nghiệp', name: 'occupationalDisease', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Lịch tiêm vaccine', name: 'vaccineSchedule', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Hội viên', name: 'member', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Danh hiệu được phong', name: 'titleConferred', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Sự kiện', name: 'events', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Thôi việc',
        name: 'quitJob',
	      icon: 'icon-attach_money',
        tabs: [
          { text: 'Quyết toán thôi việc', name: 'severanceSettlement', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
          { text: 'Chi tiết bàn giao', name: 'handoverDetails', template: this.tab2Template, active: true, icon: 'icon-attach_money' },
          { text: 'Quá trình duyệt đơn', name: 'applicationProcess', template: this.tab1Template, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Theo dõi thay đổi',
        name: 'followChange',
	      icon: 'icon-attach_money',
        tabs: [
        ]
      },
      {
        text: 'Thành tích - Vị trí kế thừa',
        name: 'achievements',
	      icon: 'icon-attach_money',
        tabs: [
        ]
      },
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
