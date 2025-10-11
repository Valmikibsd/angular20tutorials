import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './compnents/admin/admin';
import { User } from "./compnents/user/user";
import { DataBinding } from './compnents/data-binding/data-binding';
import { SignalEx } from './compnents/signal-ex/signal-ex';
import { Controlflow } from './compnents/controlflow/controlflow';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20tutorials';
}
