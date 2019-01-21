<template>
  <div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#adminlte-buttons" data-toggle="tab" aria-expanded="false">adminlte buttons</a>
      </li>
      <li>
        <a href="#iview-buttons" data-toggle="tab" aria-expanded="false">Iview buttons</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="adminlte-buttons">
        <section>
          <h4 class="page-header">Buttons</h4>
          <p>Various types of buttons. Using the base class <code>.btn</code></p>
          <table class="table table-bordered text-center">
            <tbody>
            <tr>
              <th>Normal</th>
              <th>Large <code>.btn-lg</code></th>
              <th>Small <code>.btn-sm</code></th>
              <th>X-Small <code>.btn-xs</code></th>
              <th>Flat <code>.btn-flat</code></th>
              <th>Disabled <code>.disabled</code></th>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-default">Default</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-default btn-lg">Default</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-default btn-sm">Default</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-default btn-xs">Default</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-default btn-flat">Default</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-default disabled">Default</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-primary">Primary</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-primary btn-lg">Primary</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-primary btn-sm">Primary</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-primary btn-xs">Primary</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-primary btn-flat">Primary</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-primary disabled">Primary</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-success">Success</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-success btn-lg">Success</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-success btn-sm">Success</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-success btn-xs">Success</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-success btn-flat">Success</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-success disabled">Success</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-info">Info</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-info btn-lg">Info</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-info btn-sm">Info</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-info btn-xs">Info</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-info btn-flat">Info</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-info disabled">Info</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-danger">Danger</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-danger btn-lg">Danger</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-danger btn-sm">Danger</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-danger btn-xs">Danger</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-danger btn-flat">Danger</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-danger disabled">Danger</button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-block btn-warning">Warning</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-warning btn-lg">Warning</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-warning btn-sm">Warning</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-warning btn-xs">Warning</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-warning btn-flat">Warning</button>
              </td>
              <td>
                <button type="button" class="btn btn-block btn-warning disabled">Warning</button>
              </td>
            </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h4 class="page-header">block button</h4>
          <button type="button" class="btn btn-default btn-block">.btn-block</button>
          <button type="button" class="btn btn-default btn-block btn-flat">.btn-block .btn-flat</button>
          <button type="button" class="btn btn-default btn-block btn-sm">.btn-block .btn-sm</button>
        </section>
        <section>
          <h4 class="page-header">button group</h4>
          <p>
            Horizontal button groups are easy to create with bootstrap. Just add your buttons
            inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
          </p>

          <table class="table table-bordered">
            <tbody>
            <tr>
              <th>Button</th>
              <th>Icons</th>
              <th>Flat</th>
              <th>Dropdown</th>
            </tr>
            <!-- Default -->
            <tr>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default">Left</button>
                  <button type="button" class="btn btn-default">Middle</button>
                  <button type="button" class="btn btn-default">Right</button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-default"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-default"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-default">1</button>
                  <button type="button" class="btn btn-default">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- ./default -->
            <!-- Info -->
            <tr>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-info">Left</button>
                  <button type="button" class="btn btn-info">Middle</button>
                  <button type="button" class="btn btn-info">Right</button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-info"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-info"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-info"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-info">1</button>
                  <button type="button" class="btn btn-info">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /. info -->
            <!-- /.danger -->
            <tr>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger">Left</button>
                  <button type="button" class="btn btn-danger">Middle</button>
                  <button type="button" class="btn btn-danger">Right</button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger">1</button>
                  <button type="button" class="btn btn-danger">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.danger -->
            <!-- warning -->
            <tr>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning">Left</button>
                  <button type="button" class="btn btn-warning">Middle</button>
                  <button type="button" class="btn btn-warning">Right</button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-warning">1</button>
                  <button type="button" class="btn btn-warning">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.warning -->
            <!-- success -->
            <tr>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-success">Left</button>
                  <button type="button" class="btn btn-success">Middle</button>
                  <button type="button" class="btn btn-success">Right</button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-success"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-success"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-success"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-success">1</button>
                  <button type="button" class="btn btn-success">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.success -->
            </tbody>
          </table>
        </section>
        <section>
          <h4 class="page-header">
            vertical button group
          </h4>
          <p>
            Vertical button groups are easy to create with bootstrap. Just add your buttons
            inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
          </p>

          <table class="table table-bordered">
            <tbody>
            <tr>
              <th>Button</th>
              <th>Icons</th>
              <th>Flat</th>
              <th>Dropdown</th>
            </tr>
            <!-- Default -->
            <tr>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-default">Top</button>
                  <button type="button" class="btn btn-default">Middle</button>
                  <button type="button" class="btn btn-default">Bottom</button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-default"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-default"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-default"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-default">1</button>
                  <button type="button" class="btn btn-default">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- ./default -->
            <!-- Info -->
            <tr>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-info">Top</button>
                  <button type="button" class="btn btn-info">Middle</button>
                  <button type="button" class="btn btn-info">Bottom</button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-info"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-info"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-info"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-info">1</button>
                  <button type="button" class="btn btn-info">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /. info -->
            <!-- /.danger -->
            <tr>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-danger">Top</button>
                  <button type="button" class="btn btn-danger">Middle</button>
                  <button type="button" class="btn btn-danger">Bottom</button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-danger"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-danger">1</button>
                  <button type="button" class="btn btn-danger">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.danger -->
            <!-- warning -->
            <tr>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-warning">Top</button>
                  <button type="button" class="btn btn-warning">Middle</button>
                  <button type="button" class="btn btn-warning">Bottom</button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-warning"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-warning">1</button>
                  <button type="button" class="btn btn-warning">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.warning -->
            <!-- success -->
            <tr>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-success">Top</button>
                  <button type="button" class="btn btn-success">Middle</button>
                  <button type="button" class="btn btn-success">Bottom</button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-success"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-success"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-success"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-left"></i></button>
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-center"></i></button>
                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-right"></i></button>
                </div>
              </td>
              <td>
                <div class="btn-group-vertical">
                  <button type="button" class="btn btn-success">1</button>
                  <button type="button" class="btn btn-success">2</button>

                  <div class="btn-group">
                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a href="#">Dropdown link</a></li>
                      <li><a href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <!-- /.success -->
            </tbody>
          </table>
        </section>
        <section>
          <h4 class="page-header">Aplication buttons</h4>
          <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a&gt;</code> tag to achieve the following:</p>
          <a class="btn btn-app">
            <i class="fa fa-edit"></i> Edit
          </a>
          <a class="btn btn-app">
            <i class="fa fa-play"></i> Play
          </a>
          <a class="btn btn-app">
            <i class="fa fa-repeat"></i> Repeat
          </a>
          <a class="btn btn-app">
            <i class="fa fa-pause"></i> Pause
          </a>
          <a class="btn btn-app">
            <i class="fa fa-save"></i> Save
          </a>
          <a class="btn btn-app">
            <span class="badge bg-yellow">3</span>
            <i class="fa fa-bullhorn"></i> Notifications
          </a>
          <a class="btn btn-app">
            <span class="badge bg-green">300</span>
            <i class="fa fa-barcode"></i> Products
          </a>
          <a class="btn btn-app">
            <span class="badge bg-purple">891</span>
            <i class="fa fa-users"></i> Users
          </a>
          <a class="btn btn-app">
            <span class="badge bg-teal">67</span>
            <i class="fa fa-inbox"></i> Orders
          </a>
          <a class="btn btn-app">
            <span class="badge bg-aqua">12</span>
            <i class="fa fa-envelope"></i> Inbox
          </a>
          <a class="btn btn-app">
            <span class="badge bg-red">531</span>
            <i class="fa fa-heart-o"></i> Likes
          </a>
        </section>
        <section>
          <h4 class="page-header">different colors</h4>
          <p>Mix and match with various background colors. Use base class <code>.btn</code> and add any available
            <code>.bg-*</code> class</p>
          <p>
            <button type="button" class="btn bg-maroon btn-flat margin">.btn.bg-maroon.btn-flat</button>
            <button type="button" class="btn bg-purple btn-flat margin">.btn.bg-purple.btn-flat</button>
            <button type="button" class="btn bg-navy btn-flat margin">.btn.bg-navy.btn-flat</button>
            <button type="button" class="btn bg-orange btn-flat margin">.btn.bg-orange.btn-flat</button>
            <button type="button" class="btn bg-olive btn-flat margin">.btn.bg-olive.btn-flat</button>
          </p>

          <p>
            <button type="button" class="btn bg-maroon margin">.btn.bg-maroon</button>
            <button type="button" class="btn bg-purple margin">.btn.bg-purple</button>
            <button type="button" class="btn bg-navy margin">.btn.bg-navy</button>
            <button type="button" class="btn bg-orange margin">.btn.bg-orange</button>
            <button type="button" class="btn bg-olive margin">.btn.bg-olive</button>
          </p>
        </section>
        <section>
          <h4 class="page-header">
            button addon
          </h4>
          <p>With dropdown</p>

          <div class="input-group margin">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Action
                <span class="fa fa-caret-down"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <!-- /btn-group -->
            <input type="text" class="form-control">
          </div>
          <!-- /input-group -->
          <p>Normal</p>

          <div class="input-group margin">
            <div class="input-group-btn">
              <button type="button" class="btn btn-danger">Action</button>
            </div>
            <!-- /btn-group -->
            <input type="text" class="form-control">
          </div>
          <!-- /input-group -->
          <p>Flat</p>

          <div class="input-group margin">
            <input type="text" class="form-control">
            <span class="input-group-btn">
                            <button type="button" class="btn btn-info btn-flat">Go!</button>
                            </span>
          </div>
        </section>
        <section>
          <h4 class="page-header">
            split button
          </h4>
          <p>Normal split buttons:</p>

          <div class="margin">
            <div class="btn-group">
              <button type="button" class="btn btn-default">Action</button>
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info">Action</button>
              <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-danger">Action</button>
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-success">Action</button>
              <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-warning">Action</button>
              <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          <!-- flat split buttons -->
          <p>Flat split buttons:</p>

          <div class="margin">
            <div class="btn-group">
              <button type="button" class="btn btn-default btn-flat">Action</button>
              <button type="button" class="btn btn-default btn-flat dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info btn-flat">Action</button>
              <button type="button" class="btn btn-info btn-flat dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-danger btn-flat">Action</button>
              <button type="button" class="btn btn-danger btn-flat dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-success btn-flat">Action</button>
              <button type="button" class="btn btn-success btn-flat dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-warning btn-flat">Action</button>
              <button type="button" class="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div class="tab-pane" id="iview-buttons">
        <section>
          <h4 class="page-header">buttons</h4>
          <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
          <table class="table table-bordered text-center">
            <tbody>
            <tr>
              <th>Normal</th>
              <th>Large <code>size="large"</code></th>
              <th>Small <code>size="small"</code></th>
              <th>Circle <code>shape="circle"</code></th>
              <th>Loading <code>loading</code></th>
              <th>Disabled <code>disabled</code></th>
            </tr>
            <tr>
              <td>
                <Button>Default</Button>
              </td>
              <td>
                <Button size="large">Default</Button>
              </td>
              <td>
                <Button size="small">Default</Button>
              </td>
              <td>
                <Button shape="circle">Default</Button>
              </td>
              <td>
                <Button loading>Default</Button>
              </td>
              <td>
                <Button disabled>Default</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="primary">Primary</Button>
              </td>
              <td>
                <Button type="primary" size="large">Primary</Button>
              </td>
              <td>
                <Button type="primary" size="small">Primary</Button>
              </td>
              <td>
                <Button type="primary" shape="circle">Primary</Button>
              </td>
              <td>
                <Button type="primary" loading>Primary</Button>
              </td>
              <td>
                <Button type="primary" disabled>Primary</Button>
              </td>
            </tr>
            <tr style="background:gray;">
              <td>
                <Button ghost>Ghost</Button>
              </td>
              <td>
                <Button ghost size="large">Ghost</Button>
              </td>
              <td>
                <Button ghost size="small">Ghost</Button>
              </td>
              <td>
                <Button ghost shape="circle">Ghost</Button>
              </td>
              <td>
                <Button ghost loading>Ghost</Button>
              </td>
              <td>
                <Button ghost disabled>Ghost</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="dashed">Dashed</Button>
              </td>
              <td>
                <Button type="dashed" size="large">Dashed</Button>
              </td>
              <td>
                <Button type="dashed" size="small">Dashed</Button>
              </td>
              <td>
                <Button type="dashed" shape="circle">Dashed</Button>
              </td>
              <td>
                <Button type="dashed" loading>Dashed</Button>
              </td>
              <td>
                <Button type="dashed" disabled>Ghost</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="text">Text</Button>
              </td>
              <td>
                <Button type="text" size="large">Text</Button>
              </td>
              <td>
                <Button type="text" size="small">Text</Button>
              </td>
              <td>
                <Button type="text" shape="circle">Text</Button>
              </td>
              <td>
                <Button type="text" loading>Text</Button>
              </td>
              <td>
                <Button type="text" disabled>Text</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="info">Info</Button>
              </td>
              <td>
                <Button type="info" size="large">Info</Button>
              </td>
              <td>
                <Button type="info" size="small">Info</Button>
              </td>
              <td>
                <Button type="info" shape="circle">Info</Button>
              </td>
              <td>
                <Button type="info" loading>Info</Button>
              </td>
              <td>
                <Button type="info" disabled>Info</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="success">Success</Button>
              </td>
              <td>
                <Button type="success" size="large">Success</Button>
              </td>
              <td>
                <Button type="success" size="small">Success</Button>
              </td>
              <td>
                <Button type="success" shape="circle">Success</Button>
              </td>
              <td>
                <Button type="success" loading>Success</Button>
              </td>
              <td>
                <Button type="success" disabled>Success</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="warning">Warning</Button>
              </td>
              <td>
                <Button type="warning" size="large">Warning</Button>
              </td>
              <td>
                <Button type="warning" size="small">Warning</Button>
              </td>
              <td>
                <Button type="warning" shape="circle">Warning</Button>
              </td>
              <td>
                <Button type="warning" loading>Warning</Button>
              </td>
              <td>
                <Button type="warning" disabled>Warning</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button type="error">Error</Button>
              </td>
              <td>
                <Button type="error" size="large">Error</Button>
              </td>
              <td>
                <Button type="error" size="small">Error</Button>
              </td>
              <td>
                <Button type="error" shape="circle">Error</Button>
              </td>
              <td>
                <Button type="error" loading>Error</Button>
              </td>
              <td>
                <Button type="error" disabled>Error</Button>
              </td>
            </tr>
            </tbody>
          </table>

        </section>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name:"Buttons"
  }
</script>

