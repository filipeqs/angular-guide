import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    projectForm: FormGroup;
    status = ['Stable', 'Critical', 'Finished'];
    formSubmited = false;

    ngOnInit(): void {
        this.projectForm = new FormGroup({
            name: new FormControl(null, [Validators.required], this.validateProjectNameAsync),
            mail: new FormControl(null, [Validators.required, Validators.email]),
            projectStatus: new FormControl('Stable'),
        });
    }

    validateProjectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') return { nameIsInvalid: true };
        else return null;
    }

    validateProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test') resolve({ nameIsInvalid: true });
                else resolve(null);
            }, 1000);
        });

        return promise;
    }

    onSubmit() {
        console.log(this.projectForm);
        this.formSubmited = true;
    }
}
