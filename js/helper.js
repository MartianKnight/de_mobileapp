/*
This file contains all of the code running in the background that makes resumeBuilder.js possible.

These are HTML strings. Use JavaScript functions to
replace the %data% placeholder text you see in them.
*/

// Nav
var HTMLnavBarHeaderStart = "<div class='navbar-header'>";
var HTMLnavButton = "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> " +
    "<span class='sr-only'>Toggle navigation</span>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
  "</button>";
var HTMLnavBrand = "<a class='navbar-brand' href='#'>" +
  "<img class='img-circle img-responsive' src='' alt='Logo' />" +
  "</a>";
var HTMLnavBarHeaderEnd = "</div>";

// Nav Bar


/*
<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  <ul class="nav navbar-nav">

    <li class="active" id="MAP">
      <a href="#">
        <span class="glyphicon glyphicon-file"></span> JCF
      </a>
    </li>

    <li class="active" id="JCF">
      <a href="#">
        <span class="glyphicon glyphicon-file"></span> JCF
      </a>
    </li>

    <li id="HELP">
      <a href="#">
        <span class="glyphicon glyphicon-map-marker"></span> HELP
      </a>
    </li>

    <li><a href="#">Link</a></li>
  </ul>

  <form class="navbar-form navbar-right" role="search">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>

  <ul class="nav navbar-nav navbar-right">

  </ul>

</div><!-- /.navbar-collapse -->
*/
// JCF form

// JCF details

// Map

// Missing something


// Header
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span><hr/>";

// Contact Information
var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";
