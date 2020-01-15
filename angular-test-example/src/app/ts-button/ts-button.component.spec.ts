import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TsButtonComponent } from './ts-button.component';

describe('TsButtonComponent', () => {
  let component: TsButtonComponent;
  let fixture: ComponentFixture<TsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TsButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('컴포넌트가 정상적으로 생성된다.', () => {
    expect(component).toBeTruthy();
  });

  it('컴포넌트가 생성되면, 버튼 엘리먼트가 생성되어 null이 아니다.', () => {
    expect(fixture.debugElement.nativeElement.querySelector('button')).not.toBeNull();
  });

  it(`버튼 엘리먼트에 써있는 텍스트는 "ts-button" 이다.`, () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent).toContain('ts-button');
  });

  it(`버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다`, () => {
    // Given

    // When
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    // Then
    const p: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(p.textContent).toContain('버튼이 방금 눌렸다.');
  });

  it(`버튼이 클릭하기 전에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.`, () => {
    // Then
    const p: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(p.textContent).toContain('버튼이 눌리지 않았다.');
  });

  it(`버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.`, () => {
    // When
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    tick(5000);
    fixture.detectChanges();

    // Then
    const p: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(p.textContent).toContain('버튼이 눌리지 않았다.');

  });

  it(`버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.`, fakeAsync(() => {
    // When
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    //
    const before = button.disabled;

    tick(5000);
    fixture.detectChanges();

    //
    const after = button.disabled;

    expect(before).toBeTruthy();
    expect(after).toBeFalsy();
  }));

});
