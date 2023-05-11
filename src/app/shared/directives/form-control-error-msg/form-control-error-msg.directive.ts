//original source: https://github.com/srikanthmadasu/angular-error-msg-directive
import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { ValidationMessageService } from '../../services/validation/validation-message.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appFormControlErrorMsg]',
  standalone: true,
})
export class FormControlErrorMsgDirective implements OnInit, OnDestroy {
  @Input() validationMsgId: string;

  errorSpanIdArray: string[] = [];
  statusChangeSubscription: Subscription;

  constructor(private elRef: ElementRef, private control: NgControl, private validationMessageService: ValidationMessageService) {}

  ngOnInit(): void {
    if (this.control.statusChanges) {
      this.statusChangeSubscription = this.control.statusChanges.subscribe(status => {
        if (status == 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

  @HostListener('blur', ['$event'])
  handleBlurEvent(event) {
    if (this.control.value == null || this.control.value == '') {
      if (this.control.errors) this.showError();
      else this.removeError();
    }
  }

  private showError() {
    this.removeError();
    if (!this.control.errors) {
      return;
    }
    const valErrors: ValidationErrors = this.control.errors;

    Object.keys(valErrors).forEach((key, index) => {
      const errorSpanId = `${this.validationMsgId}-${index}-${new Date()}-error-msg`;
      const errorMsgKey = `${this.validationMsgId}-${key}-msg`;
      const errorMsg = this.validationMessageService.getValidationMsg(errorMsgKey);
      const errSpan = `<span style="color:red;" id="${errorSpanId}">${errorMsg}</span>`;
      this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
      this.errorSpanIdArray.push(errorSpanId);
    });
  }

  private removeError(): void {
    this.errorSpanIdArray.forEach(errorId => {
      const errorElement = document.getElementById(errorId);
      if (errorElement) errorElement.remove();
    });
  }
}
