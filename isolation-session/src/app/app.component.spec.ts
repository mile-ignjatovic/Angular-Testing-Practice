import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    Given(async () => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                AppComponent
            ],
        });
        component = TestBed.get(AppComponent);
    });

    describe('INIT', () => {
        Then(() => {
            expect(component).toBeTruthy();
            expect(component.title).toEqual('isolation-session');
        });
    });
});