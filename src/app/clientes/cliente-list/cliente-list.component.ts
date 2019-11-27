import { Component, OnInit } from "@angular/core";
import { Cliente } from "../cliente";
import { ClientesService } from "../clientes.service";

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"]
})
export class ClienteListComponent implements OnInit {
  constructor(private clienteService: ClientesService) {}

  clientes: Cliente[] = [];
  criterio: String;
  searchText: String;

  ngOnInit() {
    /*this.clientes = [      {
        codigo: 1,
        nome: "Carlos",
        cargo: "Professor",
        endereco: "Rua teste, 65, Jardim das Palmeiras",
        cidade: "Uberlandia",
        cep: "38400-00",
        pais: "Brasil",
        telefone: "349990909",
        fax: "434343434"
      },
      {
        codigo: 2,
        nome: "Ricardo",
        cargo: "Professor",
        endereco: "Rua teste, 67, Jardim das Lagrimas",
        cidade: "Uberlandia",
        cep: "38400-00",
        pais: "Brasil",
        telefone: "3432327892",
        fax: "000000"
      }];*/

    this.clienteService.getAll().subscribe(
      data => (this.clientes = data),
      err => alert("Aconteceu um erro!" + err)
    );
    this.clienteService.clientesChanged.subscribe((observable: any) =>
      observable.subscribe(data => (this.clientes = data))
    );
  }
}
