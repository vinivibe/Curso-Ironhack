// Rover Object Goes Here
// ======================
var moonCar = {
  directions: "N",
  x: 0,
  y: 0,
  travelLog:[]
}
var obstacles = {
  positionA: [0,1]
}
function commands(arg1){
  for (var i =0; i < arg1.length; i++){
    if(arg1[i] == "l"){
      turnLeft()
    }else if (arg1[i] == "r"){
      turnRight()
    }else if (arg1[i] == "f"){
      moveForward()
    }else if (arg1[i]== "b"){
      moveBackwards()
    }else{
      console.log("Ta locão, esse comando não existe")
    }
  }
}
function turnLeft(){
  if (moonCar.directions == "N"){
    console.log("turnLeft was called!");
    moonCar.directions = "W"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "W"){
    console.log("turnLeft was called!");
    moonCar.directions = "S"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "S"){
    console.log("turnLeft was called!");
    moonCar.directions = "E"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "E"){
    console.log("turnLeft was called!");
    moonCar.directions = "N"
    console.log("Hover is now facing "+ moonCar.directions)
  }
}
function turnRight(){
  if (moonCar.directions == "N"){
    console.log("turnRight was called!");
    moonCar.directions = "E"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "E"){
    console.log("turnRight was called!");
    moonCar.directions = "S"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "S"){
    console.log("turnRight was called!");
    moonCar.directions = "W"
    console.log("Hover is now facing "+ moonCar.directions)
  }else if (moonCar.directions == "W"){
    console.log("turnRight was called!");
    moonCar.directions = "N"
    console.log("Hover is now facing "+ moonCar.directions)
  }
}
function moveForward(){
  if (moonCar.directions == "N"){
    console.log("moveForwards was called!");
    moonCar.directions = "N"
    if (moonCar.y > 0 && moonCar.y < 9 && moonCar.x > 0 && moonCar.x < 9){
      moonCar.y--
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "W"){
    console.log("moveForwards was called!");
    moonCar.directions = "W"
    if (moonCar.y > 0 && moonCar.y < 9/* && moonCar.x > 0 && moonCar.x < 9*/){
      moonCar.x--
      if (moonCar.x == obstacles.positionA[0],moonCar.y == obstacles.positionA[1]){
        moonCar.x++
        console.log("Existe um obstaculo")
        console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
      }else{
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
      }
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "S"){
    console.log("moveForwards was called!");
    moonCar.directions = "S"
    if (moonCar.y >= 0 && moonCar.y < 9/* && moonCar.x >= 0 && moonCar.x < 9*/){
      moonCar.y++
        if (moonCar.x == obstacles.positionA[0],moonCar.y == obstacles.positionA[1]){
          moonCar.y--
          console.log("Existe um obstaculo, que bosta")
          console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
        }else{
        moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
        console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
        }
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "E"){
    console.log("moveForwards was called!");
    moonCar.directions = "E"
    if (moonCar.y >= 0 && moonCar.y < 9 && moonCar.x >= 0 && moonCar.x < 9){
      moonCar.x++
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }
}
function moveBackwards(){
  if (moonCar.directions == "N"){
    console.log("moveBackwards was called!");
    moonCar.directions = "N"
    if (moonCar.y >= 0 && moonCar.y < 9 /*&& moonCar.x >= 0 && moonCar.x <= 9*/){
      moonCar.y++
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "W"){
    console.log("moveBackwards was called!");
    moonCar.directions = "W"
    if (/*moonCar.y > 0 && moonCar.y < 9 && */moonCar.x >= 0 && moonCar.x < 9){
      moonCar.x++
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "S"){
    console.log("moveBackwards was called!");
    moonCar.directions = "S"
    if (moonCar.y > 0 && moonCar.y <= 9/* && moonCar.x >= 0 && moonCar.x < 9*/){
      moonCar.y--
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }else if (moonCar.directions == "E"){
    console.log("moveBackwards was called!");
    moonCar.directions = "E"
    if (/*moonCar.y >= 0 && moonCar.y < 9 && */moonCar.x > 0 && moonCar.x <= 9){
      moonCar.x--
      moonCar.travelLog.push([moonCar.x,moonCar.y,moonCar.directions])
      console.log("Hover is now facing "+ moonCar.directions +" e a posição dele é "+ moonCar.x, moonCar.y)
    }else{
      console.log("Nao e possivel")
    }
  }
}
// Comandos
commands("rfrlbf")
console.log(moonCar.directions)
console.log(moonCar.travelLog)






