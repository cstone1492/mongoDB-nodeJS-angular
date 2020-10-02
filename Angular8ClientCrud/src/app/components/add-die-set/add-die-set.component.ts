import { Component, OnInit } from '@angular/core';
import { DieSetService } from 'src/app/services/die-set.service';

@Component({
  selector: 'app-add-die-set',
  templateUrl: './add-die-set.component.html',
  styleUrls: ['./add-die-set.component.css']
})
export class AddDieSetComponent implements OnInit {

  dieSet = {
    name: '',
    dieTypes: []
  }

  submitted = false; 

  dieTypes = [6, 20]

  constructor(private dieSetService: DieSetService) { }

  ngOnInit(): void {
  }

  onCheckboxChange(e) {
    const dieTypesCheck: FormArray = this.dieSetForm.get('dieTypesCheck') as FormArray;

    if (e.target.checked) {
      dieTypesCheck.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      dieTypesCheck.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          dieTypesCheck.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  saveDieSet() {
    const data = {
      name: this.dieSet.name,
      dieTypes: this.dieSet.dieTypes
    };

    this.dieSetService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDieSet() {
    this.submitted = false;
    this.dieSet = {
      name: '',
      dieTypes: []
    };
  }

}
