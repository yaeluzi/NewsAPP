import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      this.isMobile = result.matches;
      this.adjustSidenavMode(); // Llama a esta función cuando cambia el estado del breakpoint
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  private adjustSidenavMode() {
    if (this.sidenav) { // Verifica que sidenav esté definido
      if (this.isMobile) {
        this.sidenav.mode = 'over'; // Modo overlay para móviles
        this.sidenav.close(); // Asegúrate de que esté cerrado inicialmente
      } else {
        this.sidenav.mode = 'side'; // Modo side para pantallas más grandes
        this.sidenav.open(); // Asegúrate de que esté abierto inicialmente
      }
    }
  }
}
