var element = document.getElementById('wiki__text');  

 
// add a new toolbar button, but first check if there is a toolbar
if (typeof window.toolbar !== 'undefined') {
    window.toolbar[window.toolbar.length] = {
        type: "intextsearch", // we have a new type that links to the function
        title: "intextsearch",
        icon: "../../plugins/intextsearch/icon.png",
        key:'a'
        
    };    
}




function addBtnActionIntextsearch($btn, props, edid) {
    // initialize stuff if required
    // ...
 
    $btn.click(function() {
      intextsearch();

        return false;
    });
 
    return 'click';
}





function intextsearch(){
 if(document.getElementById('intextsearchid')==null){
         jQuery(document.createElement('div'))
               .dialog({
                    autoOpen: false,
                    draggable: true,
                    resizable: true,
                    width: '100%',
                    height: '100%'
               })
               .html(
                    '<select id="itsearchengine"><option value="https://www.wolframalpha.com/input?i=">wolframalpha</option><option value="https://www.bing.com/search?q=">Bing</option><option value="https://swisscows.com/en/web?query=">SwissCows</option><option value="https://en.wikipedia.org/wiki/">Wikipedia</option><br></select><option value="https://www.freecollocation.com/search?word=">freecollocation</option><iframe id="intextsearchurl" height="500px" width="100%" class="page group" overflow="wrap">'
                    )
               .parent()
               .attr('id','intextsearchid')
               .attr('onclick','intextsearchidhide()')
               .css({
                    'position':    'absolute',
                    'top':         '0px',
                    'left':        '0px',                
                    'height':'100%',
                    'width':'100%'
                   })
               .hide()
               .appendTo('.summary');

 }

            var seltext = window.getSelection().toString();    
                document.getElementById("intextsearchurl").src = jQuery('#itsearchengine').val() + seltext;  
                jQuery("#intextsearchid").toggle();    
            
            }

   

        
function intextsearchidhide(){
    jQuery("#intextsearchid").toggle();

}            
