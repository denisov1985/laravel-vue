<template>
  <div clas="wrapper" style="background-color: #F4F7F6;">
    <header class="main-header">
      <div class="inside-header">
        <!-- Logo -->
        <router-link class="logo" to="/">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <b class="logo-mini">
            <span class="light-logo"><img src="/images/logo-light.png" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-light.png" alt="logo"></span>
            <span class="dark-logo"><img src="/images/logo-dark.png" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-dark.png" alt="logo"></span>
          </b>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg">
          <img src="/images/logo-light-text.png" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-light-text.png" alt="logo" class="light-logo">
          <img src="/images/logo-dark-text.png" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-dark-text.png" alt="logo" class="dark-logo">
        </span>
        </router-link>
        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle d-block d-lg-none" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <ul class="navbar-nav mr-auto mt-md-0">
            <!-- .Megamenu -->
            <li class="nav-item dropdown mega-dropdown"> <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-th-large"></i></a>
              <div class="dropdown-menu scale-up-down">
                <ul class="mega-dropdown-menu row">
                  <li class="col-lg-3 col-md-3 col-12 m-b-30">
                    <h5 class="m-b-20">Apps</h5>
                    <!-- List style -->
                    <ul class="list-style-none">
                      <li><a href="pages/app/app-ticket.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/app/app-ticket.html">Support Ticket</a></li>
                      <li><a href="pages/app/app-chat.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/app/app-chat.html">Chats App</a></li>
                      <li><a href="pages/app/profile.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/app/profile.html">Profile App</a></li>
                      <li><a href="pages/app/calendar.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/app/calendar.html">Calendar App</a></li>
                    </ul>
                  </li>
                  <li class="col-lg-3 col-md-3 col-12 m-b-30">
                    <h5 class="m-b-20">Widgets</h5>
                    <!-- List style -->
                    <ul class="list-style-none">
                      <li><a href="pages/widgets/weather.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/widgets/weather.html">Weather Widgets</a></li>
                      <li><a href="pages/widgets/blog.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/widgets/blog.html">Blog Widgets</a></li>
                      <li><a href="pages/widgets/chart.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/widgets/chart.html">Chart Widgets</a></li>
                      <li><a href="pages/widgets/social.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/widgets/social.html">Social Widgets</a></li>
                    </ul>
                  </li>
                  <li class="col-lg-3 col-md-3 col-12 m-b-30">
                    <h5 class="m-b-20">Charts</h5>
                    <!-- List style -->
                    <ul class="list-style-none">
                      <li><a href="pages/charts/chartjs.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/charts/chartjs.html">ChartJs</a></li>
                      <li><a href="pages/charts/flot.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/charts/flot.html">Flot Charts</a></li>
                      <li><a href="pages/charts/morris.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/charts/morris.html">Morris Charts</a></li>
                      <li><a href="pages/charts/inline.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/charts/inline.html">Inline charts</a></li>
                    </ul>
                  </li>
                  <li class="col-lg-3 col-md-3 col-12 m-b-30">
                    <h5 class="m-b-20">Extra Pages</h5>
                    <!-- List style -->
                    <ul class="list-style-none">
                      <li><a href="pages/samplepage/invoice.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/samplepage/invoice.html">Invoice</a></li>
                      <li><a href="pages/samplepage/login.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/samplepage/login.html">Login</a></li>
                      <li><a href="pages/samplepage/404.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/samplepage/404.html">404</a></li>
                      <li><a href="pages/samplepage/maintenance.html" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/main/pages/samplepage/maintenance.html">Maintenance</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <!-- /.Megamenu -->
          </ul>

          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

              <li class="search-box">
                <a class="nav-link hidden-sm-down" href="javascript:void(0)"><i class="mdi mdi-magnify"></i></a>
                <form class="app-search" style="display: none;">
                  <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>
                </form>
              </li>

              <!-- Messages -->
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="mdi mdi-email faa-horizontal animated"></i>
                </a>
                <ul class="dropdown-menu scale-up">
                  <li class="header">You have 5 messages</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 200px;"><ul class="menu inner-content-div" style="overflow: hidden; width: auto; height: 200px;">
                      <li><!-- start message -->
                        <a href="#">
                          <div class="pull-left">
                            <img src="/images/user2-160x160.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user2-160x160.jpg" class="rounded-circle" alt="User Image">
                          </div>
                          <div class="mail-contnet">
                            <h4>
                              Lorem Ipsum
                              <small><i class="fa fa-clock-o"></i> 15 mins</small>
                            </h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                          </div>
                        </a>
                      </li>
                      <!-- end message -->
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="/images/user3-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                          </div>
                          <div class="mail-contnet">
                            <h4>
                              Nullam tempor
                              <small><i class="fa fa-clock-o"></i> 4 hours</small>
                            </h4>
                            <span>Curabitur facilisis erat quis metus congue viverra.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="/images/user4-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                          </div>
                          <div class="mail-contnet">
                            <h4>
                              Proin venenatis
                              <small><i class="fa fa-clock-o"></i> Today</small>
                            </h4>
                            <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="/images/user3-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                          </div>
                          <div class="mail-contnet">
                            <h4>
                              Praesent suscipit
                              <small><i class="fa fa-clock-o"></i> Yesterday</small>
                            </h4>
                            <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="/images/user4-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                          </div>
                          <div class="mail-contnet">
                            <h4>
                              Donec tempor
                              <small><i class="fa fa-clock-o"></i> 2 days</small>
                            </h4>
                            <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                          </div>
                        </a>
                      </li>
                    </ul><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 1; right: 1px; height: 109.589px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 1; right: 1px;"></div></div>
                  </li>
                  <li class="footer"><a href="#">See all e-Mails</a></li>
                </ul>
              </li>
              <!-- Notifications -->
              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="mdi mdi-bell faa-ring animated"></i>
                </a>
                <ul class="dropdown-menu scale-up">
                  <li class="header">You have 7 notifications</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 200px;"><ul class="menu inner-content-div" style="overflow: hidden; width: auto; height: 200px;">
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-success"></i> Curabitur id eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-users text-red"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-danger"></i> Nunc fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user text-danger"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                        </a>
                      </li>
                    </ul><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 1; right: 1px; height: 142.857px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 1; right: 1px;"></div></div>
                  </li>
                  <li class="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              <!-- Tasks -->
              <li class="dropdown tasks-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="mdi mdi-message faa-vertical animated"></i>
                </a>
                <ul class="dropdown-menu scale-up">
                  <li class="header">You have 6 tasks</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 200px;"><ul class="menu inner-content-div" style="overflow: hidden; width: auto; height: 200px;">
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Lorem ipsum dolor sit amet
                            <small class="pull-right">30%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-aqua" style="width: 30%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">30% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Vestibulum nec ligula
                            <small class="pull-right">20%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-danger" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Donec id leo ut ipsum
                            <small class="pull-right">70%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-light-blue" style="width: 70%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">70% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Praesent vitae tellus
                            <small class="pull-right">40%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-yellow" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">40% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Nam varius sapien
                            <small class="pull-right">80%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-red" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">80% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                      <li><!-- Task item -->
                        <a href="#">
                          <h3>
                            Nunc fringilla
                            <small class="pull-right">90%</small>
                          </h3>
                          <div class="progress xs">
                            <div class="progress-bar progress-bar-primary" style="width: 90%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">90% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <!-- end task item -->
                    </ul><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 1; right: 1px; height: 98.0392px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 1; right: 1px;"></div></div>
                  </li>
                  <li class="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              <!-- User Account -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="/images/user5-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user5-128x128.jpg" class="user-image rounded-circle" alt="User Image">
                </a>
                <ul class="dropdown-menu scale-up">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="/images/user5-128x128.jpg" tppabs="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user5-128x128.jpg" class="float-left rounded-circle" alt="User Image">

                    <p>
                      Juliya Brus
                      <small class="mb-5">jb@gmail.com</small>
                      <a href="#" class="btn btn-danger btn-sm btn-rounded">View Profile</a>
                    </p>
                  </li>
                  <!-- Menu Body -->
                  <li class="user-body">
                    <div class="row no-gutters">
                      <div class="col-12 text-left">
                        <a href="#"><i class="ion ion-person"></i> My Profile</a>
                      </div>
                      <div class="col-12 text-left">
                        <a href="#"><i class="ion ion-email-unread"></i> Inbox</a>
                      </div>
                      <div class="col-12 text-left">
                        <a href="#"><i class="ion ion-settings"></i> Setting</a>
                      </div>
                      <div role="separator" class="divider col-12"></div>
                      <div class="col-12 text-left">
                        <a href="#"><i class="ti-settings"></i> Account Setting</a>
                      </div>
                      <div role="separator" class="divider col-12"></div>
                      <div class="col-12 text-left">
                        <a href="#"><i class="fa fa-power-off"></i> Logout</a>
                      </div>
                    </div>
                    <!-- /.row -->
                  </li>
                </ul>
              </li>
              <!-- Control Sidebar Toggle Button -->
              <li>
                <a href="#" data-toggle="control-sidebar"><i class="fa fa-cog fa-spin"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <div class="main-nav">
      <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li v-for="item in menuItems" :key="item.path" class="nav-item" v-bind:class="{ active: item.path == $route.path }">
              <router-link class="nav-link" :to="item.path">
                <span class="active-item-here"></span>
                <span>{{ item.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="content-wrapper" style="min-height: 850px;">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>

        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="breadcrumb-item"><a href="#">Tables</a></li>
          <li class="breadcrumb-item active">Simple</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <slot></slot>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: false,
        default: 'Default page title',
      }
    },

    computed: {
      menuItems () {
        return [{
          title: 'Dashboard',
          path: '/dashboard'
        }, {
          title: 'My Advertisers',
          path: '/advertisers'
        }, {
          title: 'Bookings',
          path: '/bookings'
        }, {
          title: 'Ads',
          path: '/campaigns'
        }, {
          title: 'Promocodes',
          path: '/promocodes'
        }]
      }
    }
  }
</script>

