window.onscroll = function() {doStuff()};

var pageElements = document.getElementsByClassName("anchor");
// console.log(pageElements);

for(var i = 0; i < pageElements.length; i++){
    // console.log(pageElements[i].getBoundingClientRect());
    /*
    if(pageElement[i].getBoundingClientRect().top < scrollY){
        console.log(pageElement[i]);
    }
    */
}


function doStuff() {
    // console.log(window.scrollY);
    // console.log(window.pageYOffset);
    // console.log(document.element.scrollTop);

    // console.log(this.oldScroll > this.scrollY); // this is false when going down and true when going up
    var scrollingUp = this.oldScroll > this.scrollY;
    var scrollingDown = this.oldScroll < this.scrollY;

    var pageElements = document.getElementsByClassName("anchor");
    for(var i = 0; i < pageElements.length; i++){
        var top = pageElements[i].getBoundingClientRect().top - 80;
        var bottom = pageElements[i].getBoundingClientRect().bottom - 80;
        var id = pageElements[i].id;
        

        // the problem now is the case when the scroll is exactly between two sections
        
        /*
        console.log(pageElements[i].getBoundingClientRect().top - 80); // -80 for header
        console.log(pageElements[i].getBoundingClientRect().height);
        console.log(window.scrollY)
        console.log(pageElements[i].getBoundingClientRect().bottom);
        console.log(" ");
        */
        // if top is negative and bottom is positive then we are on the element
        // if both are positive we're above
        // if both are negative we're below
        if(top <= 30 && bottom >= 20){
            // console.log(top);
            // console.log(bottom);
            // console.log("on mass");
            document.getElementById(id + "Menu").classList.add("active");
        } else {
            document.getElementById(id + "Menu").classList.remove("active");
        }// YEEEEEEEEEEEEEEEEESSSSSSSSSSS THIS WORKS WOOOOOOOOOOOOOHOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!
        
    }
    //#region 
    /*
    var pageElements = document.getElementsByClassName("anchor");
    for(var i = 0; i < pageElements.length; i++){
        // so an element is active as long as it's not above the screen
        if(0 <= pageElements[i].getBoundingClientRect().y - 80 <= 20){
            
            pageElements[i].classList.add("active")
            
            /*
            console.log(pageElements[i]);
            console.log(pageElements[i].getBoundingClientRect().top);
            console.log(pageElements[i].getBoundingClientRect().bottom);
            console.log(window.scrollY);
            *
            if(pageElements[i].id == "massAnchor"){
                console.log(pageElements[i]);
                console.log(pageElements[i].getBoundingClientRect().y - 80); // will give 0 when the element is at the top of the page
                // console.log(pageElements[i].getBoundingClientRect().height); // hives height of element
                // console.log(window.scrollY); // gives the position of the page on the screen - 0 when page is at top, more when page isn't at top
                // pageElements[i].classList.add("active");
            }
        } else if(pageElements[i].getBoundingClientRect().y < -20) {
            pageElements[i].classList.remove("active");
            console.log("test");
        }
    }
    */
   //#endregion

    // change this so it's only when the scroll is at the top of the page
    if(window.scrollY == 0) {
        document.getElementById("header").classList.add("headerBig");
        document.getElementById("header").classList.remove("headerSmall");

        document.getElementById("SideNav").classList.remove("up");
        document.getElementById("SideNav").classList.add("down");
        // document.getElementById("sideNav").object_position

        document.getElementById("rotational").style.display = "inline";
        document.getElementById("translational").style.display = "inline";
        document.getElementById("ramp").style.display = "inline";

        document.getElementById("rotational").style.visibility = "visible";
        document.getElementById("translational").style.visibility = "visible";
        document.getElementById("ramp").style.visibility = "visible";
    }

    if(window.scrollY != 0) {
        document.getElementById("header").classList.remove("headerBig");
        document.getElementById("header").classList.add("headerSmall");

        document.getElementById("SideNav").classList.remove("down");
        document.getElementById("SideNav").classList.add("up");

        document.getElementById("rotational").style.visibility = "hidden";
        document.getElementById("translational").style.visibility = "hidden";
        document.getElementById("ramp").style.visibility = "hidden";
    }

    this.oldScroll = this.scrollY;

    if(window.pageYOffset <= 0){
        // console.log("Bottom of page");
    }

    if(window.scrollY < 0){
        // console.log("scrolling up");
    }

    if(window.scrollY >= 80){
        /*
        document.getElementById("header").classList.remove("headerBig");
        document.getElementById("header").classList.add("headerSmall");

        document.getElementById("sideNav").classList.add("sticky");

        document.getElementById("rotational").style.display = "none";
        document.getElementById("translational").style.display = "none";
        document.getElementById("ramp").style.display = "none";
        */

    } else {
        /*
        document.getElementById("header").classList.add("headerBig");
        document.getElementById("header").classList.remove("headerSmall");

        document.getElementById("sideNav").classList.remove("sticky");

        document.getElementById("rotational").style.display = "inline";
        document.getElementById("translational").style.display = "inline";
        document.getElementById("ramp").style.display = "inline";
        */
    }

    if ((window.innerHeight + window.scrollY) <= 0) {
        // you're at the bottom of the page
        // console.log("Bottom of page");
        
        document.getElementById("header").classList.add("headerBig");
        document.getElementById("header").classList.remove("headerSmall");

        
    //#region 
    // // // // scrollFunction();
    // if(document.getElementById("sideNav").style.marginTop.parseInt() == 219){

    // }
    /*
    if(document.getElementById("header").style.height == 80){
        document.getElementById("sideNav").style.marginTop = "-219px";
   
        document.getElementById("sideNav").style.objectPosition = "0px 0px";
        document.getElementById("sideNav").style.position = "absolute";
    }
    */
   // // // // // // // // // // // // // /// // // // // // // // // document.getElementById("body").style.marginTop = "100px";
    //#endregion
    }

}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sideNav").classList.add("sticky");

        document.getElementById("rotational").style.display = "none";
        document.getElementById("translational").style.display = "none";
        document.getElementById("ramp").style.display = "none";
    
        document.getElementById("header").classList.remove("headerBig");
        document.getElementById("header").classList.add("headerSmall");
    } else if(document.body.scrollBottom > 50 || document.documentElement.scrollBottom > 50){
        document.getElementById("header").classList.add("headerBig");
        document.getElementById("header").classList.remove("headerSmall");
        /*
        document.getElementById("rotational").style.display = "inline";
        document.getElementById("translational").style.display = "inline";
        document.getElementById("ramp").style.display = "inline";
    
        document.getElementById("header").classList.remove("headerSmall");
        document.getElementById("header").classList.add("headerBig");
        */
    }

    /*
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("sideNav").classList.add("sticky");
    
        document.getElementById("header").style.height = "80px";

        document.getElementById("rotational").style.display = "none";
        document.getElementById("translational").style.display = "none";
        document.getElementById("ramp").style.display = "none";
    

    /*
    document.getElementById("sideNav").style.marginTop = "0px";
    document.getElementById("sideNav").style.paddingTop = "0px";
    document.getElementById("sideNav").style.float = "top";
    document.getElementById("sideNav").style.paddingBottom = "370px";
    document.getElementById("sideNav").style.marginBottom = "370px";
    document.getElementById("sideNav").style.position = "absolute";
    document.getElementById("sideNav").style.objectPosition = "0% 0%";
    */

   // // // // // // // // // // // // // // // // document.getElementById("sideNav").style.marginTop = "-219px";
   
   /*
   document.getElementById("sideNav").style.objectPosition = "0px 0px";
   document.getElementById("sideNav").style.position = "absolute";
   *//*
    // // // // // // // // // // // // // // // // document.getElementById("background").marginTop = "-219px";
   // document.getElementById("sideNav").style.objectPosition = "0px 100px";
   } else {
        document.getElementById("sideNav").classList.remove("sticky");
    // // // // // // // // // // // // // // // // document.getElementById("sideNav").style.marginTop = "0px";
    
    
        document.getElementById("header").style.height = "350px";

        document.getElementById("rotational").style.display = "block";
        document.getElementById("translational").style.display = "block";
        document.getElementById("ramp").style.display = "block";

        document.getElementById("background").style.marginTop = "350px";
    
  }
  */
}