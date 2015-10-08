var globalName = 'the world';
var name = globalName;

function USA() {
  var nationalName = 'United States of America';
  var name = nationalName;
  var capital = 'Washington D.C.';

  function nevada() {
    var name = 'Nevada';
    var capital = 'Carson City';
    console.log(capital + ' is the capital of ' + name + ' in ' + nationalName
                + ' in ' + globalName);
  }

  function northDakota() {
    var name = 'North Dakota';
    var capital = 'Bismark';
    console.log(capital + ' is the capital of ' + name + ' in ' + nationalName
                + ' in ' + globalName);
  }

  console.log(capital + ' is the capital of ' + name + ' in ' + globalName);
  nevada();
  northDakota();
}

USA();