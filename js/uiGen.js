
console.log("Entered uiGen.js");
var navbar = {
  "organizations": [
    {
      "name": "Habitat for Humanity",
      "location": "Charlotte, NC",
      "dates": "2009 - Future",
      "url": "http://www.habitatcharlotte.org/",
      "description": "This is what i did"
    },
    {
      "name": "Citizens School",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.citizenschools.org/",
      "description": "This is what i did"
    }
  ]
}

navbar.display = function() {
  console.log("Entered navbar.display");
  var idNav = "#de-navbar";
  var formattedStart = HTMLnavBarHeaderStart;
  $(idNav).append(HTMLnavBarHeaderStart);
  $(idNav).append(HTMLnavButton);
  $(idNav).append(HTMLnavBrand);
  $(idNav).append(HTMLnavBarHeaderEnd);
}

navbar.display();



function populateJCF() {

}

function populateMAP() {

}
function populateHELP() {

}

var volunteer = {
  "organizations": [
    {
      "name": "Habitat for Humanity",
      "location": "Charlotte, NC",
      "dates": "2009 - Future",
      "url": "http://www.habitatcharlotte.org/",
      "description": "This is what i did"
    },
    {
      "name": "Citizens School",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.citizenschools.org/",
      "description": "This is what i did"
    },
    {
      "name": "Mens Homeless Shelter",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.mensshelterofcharlotte.org/",
      "description": "This is what i did"
    },
    {
      "name": "Toastmasters",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://highenergy.toastmastersclubs.org/",
      "description": "This is what i did"
    },
    {
      "name": "Habitat for Young Professionials",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.hypcharlotte.org/",
      "description": "This is what i did"
    },
    {
      "name": "Apparo",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "http://www.apparo.org/",
      "description": "This is what i did"
    },
    {
      "name": "Assistant Soccer Coach",
      "location": "Charlotte, NC",
      "dates": "2014 - Future",
      "url": "#",
      "description": "This is what i did"
    }
  ]
}
volunteer.display = function() {
  // Volunteer
  $("#volunteer").append(HTMLvolunteerStart);
  for (voluntee in volunteer.organizations) {

    var formattedName = HTMLvolunteerName.replace("%data%", volunteer.organizations[voluntee].name);
    formattedName = formattedName.replace("%url%", volunteer.organizations[voluntee].url);
    var formattedDates = HTMLvolunteerDates.replace("%data%", volunteer.organizations[voluntee].dates);
    var formattedLocation = HTMLvolunteerLocation.replace("%data%", volunteer.organizations[voluntee].location);
    var formattedDescription = HTMLvolunteerDescription.replace("%data%", volunteer.organizations[voluntee].description);

    $(".volunteer-entry:last").append(formattedName);
    $(".volunteer-entry:last").append(formattedDates);
    $(".volunteer-entry:last").append(formattedLocation);
    $(".volunteer-entry:last").append(formattedDescription);
  }
}

//volunteer.display();

$(document).ready(function() {
  $('#MAP').click(function() {
    //var iName = inName() || function(){};
    //$('#name').html(iName);
  });

  $('#JCF').click(function() {

  });

  $('#HELP').click(function() {

  });

})
