/*
_______________________________________________________________________________________________________________________________
        
       ⭐️ Connected Hover ⭐️
       ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺
        –  When "hovering" -> add effect to all elements that share the same class



    Event Listeners
    ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺
*/
    // Trigger function if mouse enters or leaves the spacer element in the main text
    document.querySelectorAll('.comment-link').forEach(element => {
        element.addEventListener('mouseenter', handleHoverIn);
        element.addEventListener('mouseleave', handleHoverOut);
        });
    
        // Trigger function if mouse enters or leaves the comment block in the marginalia
        document.querySelectorAll('.comment').forEach(element => {
        element.addEventListener('mouseenter', handleHoverIn);
        element.addEventListener('mouseleave', handleHoverOut);
        });
    
    
    
    
    /*
        Functions
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺
    */
        function handleHoverIn(event) {
        // Adds .comment-link to the linked elements
        /* Uses classes (.c1 – .cNumber), this could also work with the data attribute, 
           but I did not want to clutter the html code with additional data attributes. 
           The classes I used are are already functioning as unique identifieres. 
        */
            // -event- refers to the interaction event that was detected by the eventListener
            const target = event.currentTarget; // extract the HTML element from the event instance
            let classList = Array.from(target.classList); // get the classes of the element and put them into an array
    
            // Check if 'comment-link' or '.comment' exists and remove it, so it does not interfere with the .cNumber classes
            if (classList.includes('comment-link')) {  // check if .comment-link is part of the array. If true ->
                const searchClass = classList.indexOf('comment-link'); // use indexOf to find the exact location in the array, save it
                classList.splice(searchClass, 1); // remove .comment-link by deleting it from it‘s position in the array. 1 -> delete 1 element
            }

            if (classList.includes('comment')) {  // check if .comment is part of the array. If true ->
                const searchClass = classList.indexOf('comment'); // use indexOf to find the exact location in the array, save it
                classList.splice(searchClass, 1); // remove .comment by deleting it from it‘s position in the array. 1 -> delete 1 element
            }
    
            // add .connected-hover to every element in the array -> in this case all potentioal .cNumber classes wich is only 1
            classList.forEach(classElement => { // loop through the array (in this case only once)
                const sameClassElements = document.querySelectorAll(`.${classElement}`); // get all elements with the same .cNumber class
                sameClassElements.forEach(element => element.classList.add('connected-hover')); // assign all elements the .connected-hover class
            });     
        }
    
        function handleHoverOut(event) {
        // delete .connected-hover classes from all elements once the mouse leaves the element
            document.querySelectorAll('.connected-hover').forEach(element =>{ // select all elements with .connected-hover and loop through them
                element.classList.remove('connected-hover') // delete .connected-hover from the element
            });
        }
    
    
    
    
    
    
    
    
    
    
    /*
    _______________________________________________________________________________________________________________________________
    */    
    
        // var allCssColors = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];
            
        // var rngDark = Math.floor(Math.random(1)*allCssColors.length);
        // var rngMid = Math.floor(Math.random(1)*allCssColors.length);
        // var rngLight = Math.floor(Math.random(1)*allCssColors.length);
    
        // var dark = allCssColors[rngDark];
        // var mid = allCssColors[rngMid];
        // var light = allCssColors[rngLight];
    
        // document.documentElement.style.setProperty('--chapterColor', dark);
        // document.documentElement.style.setProperty('--chapterAccent', mid);
        // document.documentElement.style.setProperty('--fontColor', light);
    
    
        // Change the font on selection
    
        //     function permaSelection(selectionColor, fontColor) {
        //     const selection = window.getSelection();
        //     const selectedText = selection.toString();
    
        //     if (selectedText !== "") {
        //         const range = selection.getRangeAt(0);
        //         const span = document.createElement("span");
        //         span.style.backgroundColor = selectionColor;
        //         span.style.color = fontColor;
    
        //         range.surroundContents(span);
        //         selection.removeAllRanges();
        //         selection.addRange(range);
        //     }
        // }
    
        // document.addEventListener("mouseup", function () {
        //     const selectionColor = "var(--light)"; // Specify your desired font here
        //     const fontColor = "var(--dark)"; 
        //     permaSelection(selectionColor, fontColor);
        // });
    
    
    
    
    
    
    
    
    