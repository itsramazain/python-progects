var col1=$(".col1")
var col2=$(".col2")
var col3=$(".col3")
var col4=$(".col4")
var col5=$(".col5")
var col6=$(".col6")
var col7=$(".col7")
var cells=$("button")
var redP=prompt("PlyerOne: enter you name you'll be red")
var blue=prompt("PlyerTwo: enter you name you'll be blue")
$("#turn").text(redP+" :its your turn select a colum ")
var cellColor={cellName:color}
console.log(cells.eq(0).css("background-color"))
function whoWon(){
   if(cellColor[cells.eq(0).attr('id')]=='red' && cellColor[cells.eq(1).attr('id')]=='red' && cellColor[cells.eq(2).attr('id')]=="red" && cellColor[cells.eq(3).attr('id')] =='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+"red WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor[cells.eq(1).attr('id')]=='red' && cellColor[cells.eq(2).attr('id')]=="red" && cellColor[cells.eq(3).attr('id')]=="red" && cellColor[cells.eq(4).attr('id')]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor[cells.eq(4).attr('id')]=="red" && cellColor["cel3"]=="red" && cellColor["cel4"]=="red" && cellColor["cel5"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel3"]=="red" && cellColor["cel4"]=="red" && cellColor["cel5"]=="red" && cellColor["cel6"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel7"]=="red" && cellColor["cel8"]=="red" && cellColor["cel9"]=="red" &&cellColor["cel10"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel8"]=="red" && cellColor["cel9"]=="red" && cellColor["cel10"]=="red" && cellColor["cel11"]=='red'){
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel9"]=="red" && cellColor["cel10"]=="red" && cellColor["cel11"]=="red" && cellColor["cel12"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel10"]=="red" && cellColor["cel11"]=="red" && cellColor["cel12"]=="red" && cellColor["cel13"]=='red'){
            console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel14"]=="red" && cellColor["cel15"]=="red" && cellColor["cel16"]=="red" && cellColor["cel17"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel15"]=="red" && cellColor["cel16"]=="red" && cellColor["cel17"]=="red" && cellColor["cel18"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel16"]=="red" && cellColor["cel17"]=="red" && cellColor["cel18"]=="red" && cellColor["cel19"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel17"]=="red" && cellColor["cel18"]=="red" && cellColor["cel19"]=="red" && cellColor["cel20"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(2000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel21"]=="red" && cellColor["cel22"]=="red" && cellColor["cel23"]=="red" && cellColor["cel24"]=='red'){
        console.log("red won")
           $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel22"]=="red" && cellColor["cel23"]=="red" && cellColor["cel24"]== "red" && cellColor["cel25"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel23"]=="red" && cellColor["cel24"]== "red" && cellColor["cel25"]== "red" && cellColor["cel26"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel24"]=="red" && cellColor["cel25"]== "red" && cellColor["cel26"]== "red" && cellColor["cel27"]=='red)'){

        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel28"]=="red" && cellColor["cel29"]== "red" && cellColor["cel30"]== "red" && cellColor["cel31"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+"red WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel29"]=="red" && cellColor["cel30"]== "red" && cellColor["cel31"]== "red" && cellColor["cel32"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel30"]== "red" && cellColor["cel31"]== "red" && cellColor["cel32"]== "red" && cellColor["cel33"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel31"]== "red" && cellColor["cel32"]== "red" && cellColor["cel33"]== "red" && cellColor["cel34"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel35"]=="red" && cellColor["cel36"]== "red" && cellColor["cel37"]=="red" && cellColor["cel38"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel36"]== "red" && cellColor["cel37"]== "red" && cellColor["cel38"]== "red" && cellColor["cel39"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel37"]=="red" && cellColor["cel38"]== "red" && cellColor["cel39"]== "red" && cellColor["cel40"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]== "red" && cellColor["cel39"]== "red" && cellColor["cel40"]== "red" && cellColor["cel41"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel0"]== "red" && cellColor["cel7"]=="red" && cellColor["cel14"]== "red" && cellColor["cel21"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel0"]=="red" && cellColor["cel7"]=="red" && cellColor["cel14"]== "red" && cellColor["cel21"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel14"]=="red" && cellColor["cel21"]== "red" && cellColor["cel28"]== "red" && cellColor["cel35"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel8"]=="red" && cellColor["cel15"]== "red" && cellColor["cel22"]== "red" && cellColor["cel29"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel1"]== "red" && cellColor["cel8"]== "red" && cellColor["cel15"]== "red" && cellColor["cel22"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel15"]== "red" && cellColor["cel22"]== "red" && cellColor["cel29"]== "red" && cellColor["cel36"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel2"]== "red" && cellColor["cel9"]== "red" && cellColor["cel16"]== "red" && cellColor["cel23"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel9"]== "red" && cellColor["cel16"]== "red" && cellColor["cel23"]== "red" && cellColor["cel30"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel16"]== "red" && cellColor["cel23"]== "red" && cellColor["cel30"]== "red" && cellColor["cel37"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel14"]=="red" && cellColor["cel21"]== "red" && cellColor["cel28"]== "red" && cellColor["cel35"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]=="red" && cellColor["cel10"]=="red" && cellColor["cel17"]== "red" && cellColor["cel24"]=='red)'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)



   }else if(cellColor["cel10"]=="red" && cellColor["cel17"]=="red" && cellColor["cel24"]=="red" && cellColor["cel31"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel17"]=="red" && cellColor["cel24"]=="red" && cellColor["cel31"]=="red" && cellColor["cel38"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel4"]=="red" && cellColor["cel11"]=="red" && cellColor["cel18"]== "red" && cellColor["cel25"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel1"]=="red" && cellColor["cel18"]== "red" && cellColor["cel25"]== "red" && cellColor["cel32"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel18"]=="red" && cellColor["cel25"]=="red" && cellColor["cel23"]=="red" && cellColor["cel24"]=='red)'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel12"]=="red" && cellColor["cel19"]== "red" && cellColor["cel26"]== "red" && cellColor["cel33"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(2000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel5"]=="red" && cellColor["cel12"]== "red" && cellColor["cel19"]== "red" && cellColor["cel26"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(2000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel6"]=="red" && cellColor["cel13"]== "red" && cellColor["cel20"]== "red" && cellColor["cel27"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)



   }else if(cellColor["cel19"]=="red" && cellColor["cel26"]== "red" && cellColor["cel33"]=="red" && cellColor["cel40"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel20"]== "red" && cellColor["cel27"]== "red" && cellColor["cel34"]== "red" && cellColor["cel41"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel0"]== "red" && cellColor["cel8"]== "red" && cellColor["cel16"]== "red" && cellColor["cel24"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel7"]== "red" && cellColor["cel15"]=="red" && cellColor["cel23"]== "red" && cellColor["cel31"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel14"]=="red" && cellColor["cel22"]== "red" && cellColor["cel30"]== "red" && cellColor["cel38"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel1"]=="red" && cellColor["cel9"]== "red" && cellColor["cel17"]== "red" && cellColor["cel25"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel2"]=="red" && cellColor["cel10"]== "red" && cellColor["cel18"]== "red" && cellColor["cel26"]=='red'){
    console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]== "red" && cellColor["cel11"]== "red" && cellColor["cel19"]== "red" && cellColor["cel27"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel6"]== "red" && cellColor["cel12"]== "red" && cellColor["cel18"]=="red" && cellColor["cel24"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel13"]== "red" && cellColor["cel19"]== "red" && cellColor["cel25"]== "red" && cellColor["cel31"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel20"]== "red" && cellColor["cel26"]== "red" && cellColor["cel32"]== "red" && cellColor["cel38"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel5"]== "red" && cellColor["cel11"]== "red" && cellColor["cel17"]== "red" && cellColor["cel23"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel4"]=="red" && cellColor["cel10"]== "red" && cellColor["cel16"]=="red" && cellColor["cel22"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]== "red" && cellColor["cel9"]== "red" && cellColor["cel15"]== "red" && cellColor["cel21"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel35"]== "red" && cellColor["cel29"]== "red" && cellColor["cel23"]== "red" && cellColor["cel17"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel36"]== "red" && cellColor["cel30"]== "red" && cellColor["cel24"]== "red" && cellColor["cel18"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]== "red" && cellColor["cel32"]== "red" && cellColor["cel26"]== "red" && cellColor["cel20"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel41"]== "red" && cellColor["cel33"]=="red" && cellColor["cel25"]== "red" && cellColor["cel17"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel40"]=="red" && cellColor["cel32"]== "red" && cellColor["cel24"]== "red" && cellColor["cel16"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel39"]== "red" && cellColor["cel31"]== "red" && cellColor["cel23"]== "red" && cellColor["cel15"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]== "red" && cellColor["cel30"]== "red" && cellColor["cel22"]== "red" && cellColor["cel14"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel12"]== "red" && cellColor["cel18"]== "red" && cellColor["cel24"]== "red" && cellColor["cel30"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel11"]== "red" && cellColor["cel17"]== "red" && cellColor["cel23"]== "red" && cellColor["cel29"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel10"]== "red" && cellColor["cel16"]== "red" && cellColor["cel22"]== "red" && cellColor["cel28"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel33"]== "red" && cellColor["cel25"]== "red" && cellColor["cel17"]== "red" && cellColor["cel9"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel32"]== "red" && cellColor["cel24"]== "red" && cellColor["cel16"]== "red" && cellColor["cel8"]=='red'){
        console.log("red won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+redP+" WON</h1>")
            $(".fad").slideUp(5000)





   }else if(cellColor["cel0"]=="blue" && cellColor["cel1"]== "blue" && cellColor["cel2"]== "blue" && cellColor["cel3"] =='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel1"]== "blue" && cellColor["cel2"]== "blue" && cellColor["cel3"]== "blue" && cellColor["cel4"]=='blue'){
        console.log("blue")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel2"]== "blue" && cellColor["cel3"]== "blue" && cellColor["cel4"]== "blue" && cellColor["cel5"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel3"]== "blue" && cellColor["cel4"]== "blue" && cellColor["cel5"]== "blue" && cellColor["cel6"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel7"]== "blue" && cellColor["cel8"]== "blue" && cellColor["cel9"]== "blue" && cellColor["cel10"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel8"]== "blue" && cellColor["cel9"]== "blue" && cellColor["cel10"]== "blue" && cellColor["cel11"]=='blue'){
            console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel9"]=="blue" && cellColor["cel10"]== "blue" && cellColor["cel11"]== "blue" && cellColor["cel12"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel10"]=="blue" && cellColor["cel11"]== "blue" && cellColor["cel12"]=="blue" && cellColor["cel13"]=='blue'){
            console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel14"]== "blue" && cellColor["cel15"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel17"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel15"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel17"]== "blue" && cellColor["cel18"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+"red WON</h1>")
            $(".fad").slideUp(5000)

    }else if(cellColor["cel16"]== "blue" && cellColor["cel17"]== "blue" && cellColor["cel18"]== "blue" && cellColor["cel19"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel17"]=="blue" && cellColor["cel18"]== "blue" && cellColor["cel19"]== "blue" && cellColor["cel20"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel21"]== "blue" && cellColor["cel22"]== "blue" && cellColor["cel23"]== "blue" && cellColor["cel24"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel22"]=="blue" && cellColor["cel23"]== "blue" && cellColor["cel24"]== "blue" && cellColor["cel25"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel23"]== "blue" && cellColor["cel24"]== "blue" && cellColor["cel25"]== "blue" && cellColor["cel26"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel24"]== "blue" && cellColor["cel25"]== "blue" && cellColor["cel26"]== "blue" && cellColor["cel27"]=='blue'){

        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel28"]== "blue" && cellColor["cel29"]== "blue" && cellColor["cel30"]== "blue" && cellColor["cel31"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel29"]== "blue" && cellColor["cel30"]== "blue" && cellColor["cel31"]== "blue" && cellColor["cel32"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel30"]== "blue" && cellColor["cel31"]== "blue" && cellColor["cel32"]== "blue" && cellColor["cel33"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel31"]== "blue" && cellColor["cel32"]== "blue" && cellColor["cel33"]== "blue" && cellColor["cel34"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel35"]== "blue" && cellColor["cel36"]== "blue" && cellColor["cel37"]== "blue" && cellColor["cel38"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel36"]=="blue" && cellColor["cel37"]== "blue" && cellColor["cel38"]== "blue" && cellColor["cel39"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel37"]== "blue" && cellColor["cel38"]== "blue" && cellColor["cel39"]== "blue" && cellColor["cel40"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]== "blue" && cellColor["cel39"]== "blue" && cellColor["cel40"]== "blue" && cellColor["cel41"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel0"]== "blue" && cellColor["cel7"]== "blue" && cellColor["cel14"]== "blue" && cellColor["cel21"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel0"]== "blue" && cellColor["cel7"]== "blue" && cellColor["cel14"]== "blue" && cellColor["cel21"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel14"]=="blue" && cellColor["cel21"]== "blue" && cellColor["cel28"]== "blue" && cellColor["cel35"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel8"]== "blue" && cellColor["cel15"]== "blue" && cellColor["cel22"]== "blue" && cellColor["cel29"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel1"]=="blue" && cellColor["cel8"]== "blue" && cellColor["cel15"]== "blue" && cellColor["cel22"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel15"]== "blue" && cellColor["cel22"]== "blue" && cellColor["cel29"]== "blue" && cellColor["cel36"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel2"]== "blue" && cellColor["cel9"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel23"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel9"]=="blue" && cellColor["cel16"]=="blue" && cellColor["cel23"]== "blue" && cellColor["cel30"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel16"]== "blue" && cellColor["cel23"]== "blue" && cellColor["cel30"]== "blue" && cellColor["cel37"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel14"]=="blue" && cellColor["cel21"]=="blue" && cellColor["cel28"]=="blue" && cellColor["cel35"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]=="blue" && cellColor["cel10"]=="blue" && cellColor["cel17"]=="blue" && cellColor["cel24"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)



   }else if(cellColor["cel10"]=="blue" && cellColor["cel17"]== "blue" && cellColor["cel24"]=="blue" && cellColor["cel31"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel17"]=="blue" && cellColor["cel24"]=="blue" && cellColor["cel31"]=="blue" && cellColor["cel38"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel4"]=="blue" && cellColor["cel11"]=="blue" && cellColor["cel18"]=="blue" && cellColor["cel25"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel1"]==cellColor["cel18"]==cellColor["cel25"]==cellColor["cel32"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel18"]==cellColor["cel25"]==cellColor["cel23"]==cellColor["cel24"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel12"]==cellColor["cel19"]==cellColor["cel26"]==cellColor["cel33"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel5"]=="blue" && cellColor["cel12"]== "blue" && cellColor["cel19"]== "blue" && cellColor["cel26"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel6"]=="blue" && cellColor["cel13"]== "blue" && cellColor["cel20"]=="blue" && cellColor["cel27"]=='blue'){
        console.log("red won")
            $('.bored').fadeOut(2000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)



   }else if(cellColor["cel19"]== "blue" && cellColor["cel26"]== "blue" && cellColor["cel33"]== "blue" && cellColor["cel40"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel20"]== "blue" && cellColor["cel27"]== "blue" && cellColor["cel34"]== "blue" && cellColor["cel41"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)


   }else if(cellColor["cel0"]=="blue" && cellColor["cel8"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel24"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if (cellColor["cel7"]=="blue" && cellColor["cel15"]== "blue" && cellColor["cel23"]== "blue" && cellColor["cel31"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel14"]== "blue" && cellColor["cel22"]== "blue" && cellColor["cel30"]=="blue" && cellColor["cel38"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel1"]=="blue" && cellColor["cel9"]== "blue" && cellColor["cel17"]== "blue" && cellColor["cel25"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel2"]=="blue" && cellColor["cel10"]=="blue" && cellColor["cel18"]== "blue" && cellColor["cel26"]=='blue'){
    console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]=="blue" && cellColor["cel11"]== "blue" && cellColor["cel19"]== "blue" && cellColor["cel27"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel6"]=="blue" && cellColor["cel12"]=="blue" && cellColor["cel18"]== "blue" && cellColor["cel24"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel13"]=="blue" && cellColor["cel19"]== "blue" && cellColor["cel25"]== "blue" && cellColor["cel31"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel20"]=="blue" && cellColor["cel26"]=="blue" && cellColor["cel32"]=="blue" && cellColor["cel38"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel5"]== "blue" && cellColor["cel11"]== "blue" && cellColor["cel17"]== "blue" && cellColor["cel23"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel4"]=="blue" && cellColor["cel10"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel22"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel3"]=="blue" && cellColor["cel9"]=="blue" && cellColor["cel15"]== "blue" && cellColor["cel21"]=='blue'){
        console.log("blue won")
        $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)
   }else if(cellColor["cel35"]=="blue" && cellColor["cel29"]== "blue" && cellColor["cel23"]== "blue" && cellColor["cel17"]=='blue'){
        console.log("blue won")
           $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel36"]=="blue" && cellColor["cel30"]== "blue" && cellColor["cel24"]== "blue" && cellColor["cel18"]== "blue" && 'blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]=="blue" && cellColor["cel32"]=="blue" && cellColor["cel26"]=="blue" && cellColor["cel20"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel41"]=="blue" && cellColor["cel33"]=="blue" && cellColor["cel25"]=="blue" && cellColor["cel17"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel40"]=="blue" && cellColor["cel32"]=="blue" && cellColor["cel24"]=="blue" && cellColor["cel16"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel39"]=="blue" && cellColor["cel31"]=="blue" && cellColor["cel23"]=="blue" && cellColor["cel15"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel38"]=="blue" && cellColor["cel30"]=="blue" && cellColor["cel22"]=="blue" && cellColor["cel14"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel12"]=="blue" && cellColor["cel18"]=="blue" && cellColor["cel24"]=="blue" && cellColor["cel30"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel11"]=="blue" && cellColor["cel17"]=="blue" && cellColor["cel23"]== "blue" && cellColor["cel29"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel10"]=="blue" && cellColor["cel16"]=="blue" && cellColor["cel22"]=="blue" && cellColor["cel28"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel33"]=="blue" && cellColor["cel25"]=="blue" && cellColor["cel17"]=="blue" && cellColor["cel9"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)

   }else if(cellColor["cel32"]=="blue" && cellColor["cel24"]== "blue" && cellColor["cel16"]== "blue" && cellColor["cel8"]=='blue'){
        console.log("blue won")
            $('.bored').fadeOut(5000)
            $('.bored').html("<h1 id=\"won\">"+blue+" WON</h1>")
            $(".fad").slideUp(5000)
   }
}
red='on'
function color(col){
    for (var i=0;i<col1.length;i++){
    col.eq(i).on("click",function(){

        if (col.eq(-1).css('background-color')==='rgb(255, 255, 255)'  ) {
            if(red=='on'){
                col.eq(-1).css('background-color',"red")
                red='off'
                $("#turn").text(blue+" :its your turn select a colum ")
                cellColor[col.eq(-1).attr('id')]='red'
                whoWon()
                $("#turn").text(blue+" :its your turn select a colum ")




            }else{
               col.eq(-1).css('background-color','blue')
                red='on'
                cellColor[col.eq(-1).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")

            }

        }else if (col.eq(-2).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-2).css('background-color','red')
                red='off'
                cellColor[col.eq(-2).attr('id')]='red'
                whoWon()
                $("#turn").text(blue+" :its your turn select a colum ")

            }else{
               col.eq(-2).css('background-color','blue')
                red='on'
                cellColor[col.eq(-2).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")

            }

        }else if (col.eq(-3).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-3).css('background-color','red')
                red='off'
                cellColor[col.eq(-3).attr('id')]='red'
                whoWon()
                $("#turn").text(blue+" :its your turn select a colum ")

            }else{
               col.eq(-3).css('background-color','blue')
                red='on'
                cellColor[col.eq(-3).attr('id')]='blue'
               whoWon()
               $("#turn").text(redP+" :its your turn select a colum ")
            }

        } else if (col.eq(-4).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-4).css('background-color','red')
                red='off'
            cellColor[col.eq(-4).attr('id')]='red'
            whoWon()
            $("#turn").text(blue+" :its your turn select a colum ")
            }else{
               col.eq(-4).css('background-color','blue')
                red='on'
                cellColor[col.eq(-4).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")

            }

        }else if (col.eq(-5).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-5).css('background-color','red')
                red='off'
            cellColor[col.eq(-5).attr('id')]='red'
            whoWon()
            $("#turn").text(blue+" :its your turn select a colum ")

            }else{
               col.eq(-5).css('background-color','blue')
                red='on'
                cellColor[col.eq(-5).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")


            }

        } else if (col.eq(-6).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-6).css('background-color','red')
                red='off'
                cellColor[col.eq(-6).attr('id')]='red'
                whoWon()
                $("#turn").text(blue+" :its your turn select a colum ")


            }else{
               col.eq(-6).css('background-color','blue')
                red='on'
                cellColor[col.eq(-1).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")

            }

        }else if (col.eq(-7).css('background-color')==='rgb(255, 255, 255)'){

            if(red=='on'){
                col.eq(-7).css('background-color','red')
                red='off'
                cellColor[col.eq(-7).attr('id')]='red'
                whoWon()
                $("#turn").text(blue+" :its your turn select a colum ")

            }else{
               col.eq(-7).css('background-color','blue')
                red='on'
                cellColor[col.eq(-1).attr('id')]='blue'
                whoWon()
                $("#turn").text(redP+" :its your turn select a colum ")


            }

        }

    })
}

}

color(col1)
color(col2)
color(col3)
color(col4)
color(col5)
color(col6)
color(col7)
