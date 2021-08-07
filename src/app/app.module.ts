import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxTablePaginationModule } from "ngx-table-pagination";
import { NgxPaginationModule } from "ngx-pagination";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule, NgxTablePaginationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
