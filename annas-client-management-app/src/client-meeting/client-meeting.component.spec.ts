import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeetingComponent } from './client-meeting.component';

describe('ClientMeetingComponent', () => {
  let component: ClientMeetingComponent;
  let fixture: ComponentFixture<ClientMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
