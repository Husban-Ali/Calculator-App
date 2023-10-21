// Task 2 Calculator 
a = +prompt("Enter First Number")
    b = +prompt("Enter Second Number Number")
    c = prompt("Enter Operator (e.g + ,- ,* ,/)")

    if(c==='+'){
        var add = a+b;
      alert(add)
    }
    else if(c==='*'){
        alert(a*b)
      }
      else if(c==='-'){
        alert(a-b)
      }
      else if(c==='/'){
        alert(a/b)
      }
      else if (a === isNan || b === isNan){
          alert("Input can only be integer")
      }
      else{
        alert("Error! You have put wrong input")
      }

