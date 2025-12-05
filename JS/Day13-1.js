//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                         BOM                                          //
//                                                                                      //
//--------------------------------------------------------------------------------------//

console.log(window);


// ---- Screen Object --------------------------------------------------------------------
console.log(screen.width);
console.log(screen.height);

console.log(screen.availWidth);
console.log(screen.availHeight);


// ---- Location Object ------------------------------------------------------------------
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);
// console.log(location.search);
// console.log(location.hash);
// console.log(location.assign("https://www.youtube.com/"));
// console.log(location.reload());
// console.log(location.replace("http://127.0.0.1:5501/JS/Day11-1.html"));


// ---- History Object -------------------------------------------------------------------
console.log(history.length);    //Displays the number of webpages in session history (no.of visited pages)
// history.back();         //Opens previous page
// history.forward();   //Opens next page (The page that you came back from.)
// history.go(3);       // Jumps to given number of pages in history
// history.go(-2);     // + for forward and - for backward


// ---- Console Object -------------------------------------------------------------------
console.warn("Hello Warning!");
console.error("Hello Error!!!");
console.info("This is info...");