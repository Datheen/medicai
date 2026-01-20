import { Component } from '@angular/core';
import { Navigation } from "../../components/navigation/navigation";
import { Table } from "../../components/table/table";
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  imports: [Navigation, Table, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
