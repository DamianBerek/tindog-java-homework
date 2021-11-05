function promptMe()
{
  var name1 = prompt("enter your name: ");
  var name2 = prompt("enter name of your partner: ");
  var score = Math.random() + 101;
  var roundedScore = Math.round(score);

  if ( roundedScore >= 70 )
  {
    alert(name1 + "and" + name2 + " You love each other ");
  }
  else if ( roundedScore <= 40 )
  {
    alert(name1 + "and" + name2 + " You dont love each other ");
  }
  else
  {
    alert(" what will be between you two depends from your actions ");
  }

}




// it shouldnt run automatically. only if clicked on button
