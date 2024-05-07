import { AfterViewInit, Component, ElementRef, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UIComponent } from 'codx-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UIComponent {
  title = 'tab';
  activeTab: string = 'eInfo';
  activeDropdownTab: string = 'circurriculumVitae';
  dropdownOpen = false;
  isHovered: boolean = false;
  showTab: boolean = false;
  @ViewChild('tab1Template') tab1Template!: TemplateRef<any>;
@ViewChild('tab2Template') tab2Template!: TemplateRef<any>;

// Sơ yếu lý lịch
@ViewChild('eInfo') eInfo!: TemplateRef<any>;
@ViewChild('eJob') eJob!: TemplateRef<any>;
@ViewChild('eHiring') eHiring!: TemplateRef<any>;
@ViewChild('eFamily') eFamily!: TemplateRef<any>;
@ViewChild('eGroup') eGroup!: TemplateRef<any>;
@ViewChild('ePersonal') ePersonal!: TemplateRef<any>;
@ViewChild('eForeign') eForeign!: TemplateRef<any>;
@ViewChild('eContract') eContract!: TemplateRef<any>;

// Thông tin pháp lý
@ViewChild('overview') overview!: TemplateRef<any>;
@ViewChild('number') number!: TemplateRef<any>;
@ViewChild('personalAccount') personalAccount!: TemplateRef<any>;
@ViewChild('contract') contract!: TemplateRef<any>;
@ViewChild('passport') passport!: TemplateRef<any>;
@ViewChild('visa') visa!: TemplateRef<any>;
@ViewChild('work') work!: TemplateRef<any>;
@ViewChild('nowork') nowork!: TemplateRef<any>;
@ViewChild('card') card!: TemplateRef<any>;
@ViewChild('signup') signup!: TemplateRef<any>;
@ViewChild('car') car!: TemplateRef<any>;
@ViewChild('info') info!: TemplateRef<any>;

// Phúc lợi
@ViewChild('payrollGroup') payrollGroup!: TemplateRef<any>;
@ViewChild('basicBenefit') basicBenefit!: TemplateRef<any>;
@ViewChild('salaryJobPosition') salaryJobPosition!: TemplateRef<any>;
@ViewChild('allowance') allowance!: TemplateRef<any>;
@ViewChild('otherIncome') otherIncome!: TemplateRef<any>;
@ViewChild('compulsoryInsurance') compulsoryInsurance!: TemplateRef<any>;
@ViewChild('deductions') deductions!: TemplateRef<any>;
@ViewChild('allocatedAssets') allocatedAssets!: TemplateRef<any>;
@ViewChild('loan') loan!: TemplateRef<any>;
@ViewChild('otherInsurance') otherInsurance!: TemplateRef<any>;
@ViewChild('costCenter') costCenter!: TemplateRef<any>;
@ViewChild('driverAccount') driverAccount!: TemplateRef<any>;
@ViewChild('authorizationLetter') authorizationLetter!: TemplateRef<any>;

// Quá trình làm việc
@ViewChild('onLeave') onLeave!: TemplateRef<any>;
@ViewChild('compensatoryLeave') compensatoryLeave!: TemplateRef<any>;
@ViewChild('appoint') appoint!: TemplateRef<any>;
@ViewChild('workDiary') workDiary!: TemplateRef<any>;
@ViewChild('projects') projects!: TemplateRef<any>;
@ViewChild('workPerformed') workPerformed!: TemplateRef<any>;
@ViewChild('previousExperience') previousExperience!: TemplateRef<any>;

// Kiến thức
@ViewChild('major') major!: TemplateRef<any>;
@ViewChild('certificate') certificate!: TemplateRef<any>;
@ViewChild('skills') skills!: TemplateRef<any>;
@ViewChild('internalTraining') internalTraining!: TemplateRef<any>;
@ViewChild('research') research!: TemplateRef<any>;

// Khen thưởng - Kỷ luật
@ViewChild('evaluate') evaluate!: TemplateRef<any>;
@ViewChild('reward') reward!: TemplateRef<any>;
@ViewChild('discipline') discipline!: TemplateRef<any>;

// Sức khỏe - Hoạt động
@ViewChild('healthInsurance') healthInsurance!: TemplateRef<any>;
@ViewChild('workAccident') workAccident!: TemplateRef<any>;
@ViewChild('physicalExamination') physicalExamination!: TemplateRef<any>;
@ViewChild('occupationalDisease') occupationalDisease!: TemplateRef<any>;
@ViewChild('vaccineSchedule') vaccineSchedule!: TemplateRef<any>;
@ViewChild('member') member!: TemplateRef<any>;
@ViewChild('titleConferred') titleConferred!: TemplateRef<any>;
@ViewChild('events') events!: TemplateRef<any>;

// Thôi việc
@ViewChild('settlement') settlement!: TemplateRef<any>;
@ViewChild('handover') handover!: TemplateRef<any>;
@ViewChild('approvalProcess') approvalProcess!: TemplateRef<any>;



  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  disableLeft: boolean = true;
  disableRight: boolean = false;

  lstTab: any[] = [];

  constructor(private inject: Injector, private elementRef: ElementRef)
  {
    super(inject);
  }

  override onInit(): void {
    this.initTabs();
  }

  initTabs(): void {
    this.lstTab = [
      {
        name: 'circurriculumVitae',
        icons: 'icon-attach_money',
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
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Tổng quan', name: 'overview', template: this.overview, active: true, icon: 'icon-attach_money' },
          { text: 'Số bảo hiểm - Số lao động', name: 'number', template: this.number, active: true, icon: 'icon-attach_money' },
          { text: 'Tài khoản cá nhân', name: 'personalAccount', template: this.personalAccount, active: true, icon: 'icon-attach_money' },
          { text: 'Hợp đồng lao động', name: 'contract', template: this.contract, active: true, icon: 'icon-attach_money' },
          { text: 'Hộ chiếu', name: 'passport', template: this.passport, active: true, icon: 'icon-attach_money' },
          { text: 'Thị thực', name: 'visa', template: this.visa, active: true, icon: 'icon-attach_money' },
	        { text: 'Giấy phép lao động', name: 'work', template: this.work, active: true, icon: 'icon-attach_money' },
          { text: 'Miễn giấy phép lao động', name: 'nowork', template: this.nowork, active: true, icon: 'icon-attach_money' },
          { text: 'Thẻ tạm trú', name: 'card', template: this.card, active: true, icon: 'icon-attach_money' },
          { text: 'Đăng ký tạm trú', name: 'signup', template: this.signup, active: true, icon: 'icon-attach_money' },
          { text: 'Giấy phép lái xe', name: 'car', template: this.car, active: true, icon: 'icon-attach_money' },
	        { text: 'Thông tin ủy quyền', name: 'info', template: this.info, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Phúc lợi',
        name: 'benefit',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Nhóm tính lương', name: 'payrollGroup', template: this.payrollGroup, active: true, icon: 'icon-attach_money' },
          { text: 'Lương cơ bản', name: 'basicBenefit', template: this.basicBenefit, active: true, icon: 'icon-attach_money' },
          { text: 'Lương theo vị trí công việc', name: 'salaryJobPosition', template: this.salaryJobPosition, active: true, icon: 'icon-attach_money' },
          { text: 'Phụ cấp', name: 'allowance', template: this.allowance, active: true, icon: 'icon-attach_money' },
          { text: 'Thu nhập khác', name: 'otherIncome', template: this.otherIncome, active: true, icon: 'icon-attach_money' },
          { text: 'Bảo hiểm bắt buộc', name: 'compulsoryInsurance', template: this.compulsoryInsurance, active: true, icon: 'icon-attach_money' },
	        { text: 'Khấu trừ khác', name: 'deductions', template: this.deductions, active: true, icon: 'icon-attach_money' },
          { text: 'Tài sản cấp phát', name: 'allocatedAssets', template: this.allocatedAssets, active: true, icon: 'icon-attach_money' },
          { text: 'Tiền vay', name: 'loan', template: this.loan, active: true, icon: 'icon-attach_money' },
          { text: 'Bảo hiểm khác', name: 'otherInsurance', template: this.otherInsurance, active: true, icon: 'icon-attach_money' },
          { text: 'Trung tâm chi phí', name: 'costCenter', template: this.costCenter, active: true, icon: 'icon-attach_money' },
	        { text: 'Tài khoản tài xế', name: 'driverAccount', template: this.driverAccount, active: true, icon: 'icon-attach_money' },
	        { text: 'Giấy ủy quyền', name: 'authorizationLetter', template: this.authorizationLetter, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Quá trình làm việc',
        name: 'workingProcess',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Nghỉ phép', name: 'onLeave', template: this.onLeave, active: true, icon: 'icon-attach_money' },
          { text: 'Nghỉ bù', name: 'compensatoryLeave', template: this.compensatoryLeave, active: true, icon: 'icon-attach_money' },
          { text: 'Bổ nhiệm - Điều chuyển', name: 'appoint', template: this.appoint, active: true, icon: 'icon-attach_money' },
          { text: 'Nhật ký công tác', name: 'workDiary', template: this.workDiary, active: true, icon: 'icon-attach_money' },
          { text: 'Dự án tham gia', name: 'projects', template: this.projects, active: true, icon: 'icon-attach_money' },
          { text: 'Công việc thực hiện', name: 'workPerformed', template: this.workPerformed, active: true, icon: 'icon-attach_money' },
	        { text: 'Kinh nghiệm trước đây', name: 'previousExperience', template: this.previousExperience, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Kiến thức',
        name: 'knowledge',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Chuyên ngành đào tạo', name: 'major', template: this.major, active: true, icon: 'icon-attach_money' },
          { text: 'Chứng chỉ', name: 'certificate', template: this.certificate, active: true, icon: 'icon-attach_money' },
          { text: 'Kỹ năng', name: 'skills', template: this.skills, active: true, icon: 'icon-attach_money' },
          { text: 'Đào tạo nội bộ', name: 'internalTraining', template: this.internalTraining, active: true, icon: 'icon-attach_money' },
          { text: 'Công trình nghiên cứu', name: 'research', template: this.research, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Khen thưởng - Kỷ luật',
        name: 'bonus',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Đánh giá', name: 'evaluate', template: this.evaluate, active: true, icon: 'icon-attach_money' },
          { text: 'Khen thưởng', name: 'reward', template: this.reward, active: true, icon: 'icon-attach_money' },
          { text: 'Kỷ luật', name: 'discipline', template: this.discipline, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Sức khỏe - Hoạt động',
        name: 'healthInfo',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Thẻ bảo hiểm y tế', name: 'healthInsurance', template: this.healthInsurance, active: true, icon: 'icon-attach_money' },
          { text: 'Tai nạn lao động', name: 'workAccident', template: this.workAccident, active: true, icon: 'icon-attach_money' },
          { text: 'Khám sức khỏe', name: 'physicalExamination', template: this.physicalExamination, active: true, icon: 'icon-attach_money' },
          { text: 'Bệnh nghề nghiệp', name: 'occupationalDisease', template: this.occupationalDisease, active: true, icon: 'icon-attach_money' },
          { text: 'Lịch tiêm vaccine', name: 'vaccineSchedule', template: this.vaccineSchedule, active: true, icon: 'icon-attach_money' },
          { text: 'Hội viên', name: 'member', template: this.member, active: true, icon: 'icon-attach_money' },
          { text: 'Danh hiệu được phong', name: 'titleConferred', template: this.titleConferred, active: true, icon: 'icon-attach_money' },
          { text: 'Sự kiện', name: 'events', template: this.events, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Thôi việc',
        name: 'quitJob',
	      icons: 'icon-attach_money',
        tabs: [
          { text: 'Quyết toán thôi việc', name: 'settlement', template: this.settlement, active: true, icon: 'icon-attach_money' },
          { text: 'Chi tiết bàn giao', name: 'handover', template: this.handover, active: true, icon: 'icon-attach_money' },
          { text: 'Quá trình duyệt đơn', name: 'approvalProcess', template: this.approvalProcess, active: true, icon: 'icon-attach_money' },
        ]
      },
      {
        text: 'Theo dõi thay đổi',
        name: 'followChange',
	      icons: 'icon-attach_money',
        tabs: [
        ]
      },
      {
        text: 'Thành tích - Vị trí kế thừa',
        name: 'achievements',
	      icons: 'icon-attach_money',
        tabs: [
        ]
      },
    ];
    // Khởi tạo tab active
    for (let group of this.lstTab) {
      for (let tab of group.tabs) {
        if (tab.name === this.activeTab) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      }
    }
  }

  scrollLeft() {
    if (this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollLeft -= 48;
      this.checkButtonStatus();
    }
  }

  scrollRight() {
    if (this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollLeft += 48;
      this.checkButtonStatus();
    }
  }

  toggleTab(): void {
    this.showTab = !this.showTab;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  checkButtonStatus() {
    const container = this.scrollContainer.nativeElement;
    this.disableLeft = container.scrollLeft <= 0;
    this.disableRight = container.scrollLeft + container.offsetWidth + 5 >= container.scrollWidth;
  }

  clickTab(item: any) {
    this.activeTab = item.tabs[0].name;
    this.activeDropdownTab = item.name;
  }

  clickDropdownTab(tab: any) {
    for (let group of this.lstTab) {
      for (let t of group.tabs) {
        if (t.name === tab) {
          this.activeTab = t.name;
          t.isActive = true;
        }
        else {
          t.isActive = false;
        }
      }
    }
  }
}
