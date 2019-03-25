import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtBooksComponent } from './bought-books.component';

describe('BoughtBooksComponent', () => {
	let component: BoughtBooksComponent;
	let fixture: ComponentFixture<BoughtBooksComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ BoughtBooksComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(BoughtBooksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
