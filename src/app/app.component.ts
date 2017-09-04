import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark blue">
      <logo><a uiSref="products" class="navbar-brand">Whenever Color</a></logo>
      <!-- Collapsible content -->
      <links>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a uiSref="cart" class="nav-link waves-light" mdbRippleRadius><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</a>
          </li>
          <li class="nav-item">
            <a uiSref="profile" class="nav-link waves-light" mdbRippleRadius><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
          </li>
        </ul>
        <!-- Search form -->
        <!-- <form class="form-inline  waves-light" mdbRippleRadius>
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
        </form> -->
      </links>
    </mdb-navbar>
    <!-- <nav class="collapse navbar-collapse" id="navbarSupportedContent-4">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link waves-effect waves-light" href="javascript:;;"><i class="fa fa-envelope"></i> Contact <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="javascript:;;"><i class="fa fa-gear"></i> Settings</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> Profile </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
              <a class="dropdown-item waves-effect waves-light" href="javascript:;;">My account</a>
              <a class="dropdown-item waves-effect waves-light" href="javascript:;;">Log out</a>
            </div>
        </li>
      </ul>
    </nav> -->
    <ui-view></ui-view>
  `,
  styles: []
})
export class AppComponent {
}
