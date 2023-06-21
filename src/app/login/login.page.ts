import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController) {

    this.formularioLogin = this.fb.group({
      'user': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async login() {
    var f = this.formularioLogin.value;
    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Incomplete data',
        message: 'You must fill in all the data',
        buttons: ['Acept']
      });
      await alert.present();
      return;
    }
    var user = {
      user: f.user,
      password: f.password
    }
    localStorage.setItem('user',JSON.stringify(user))
  }

}
