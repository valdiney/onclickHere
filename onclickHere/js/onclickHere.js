
    

      function showAndCloseAreas() { /*...*/ } 
         
          showAndCloseAreas.prototype.showAndClose = function( area, button, captionButtonAfter, captionButtonBefore, classBefore, classAfter ) {

              return button.onclick = function() {
                
                 if( area.style.display === 'none' ) {
                    
                     area.style.display = 'block';
                     button.innerHTML = captionButtonBefore || '';
                     button.classList.add(classAfter) || '';

                     button.classList.remove(classBefore) || ''; // Retira a class de baixo...
                       
                     return false;

                 }

                 else {

                     area.style.display = 'none';
                     button.innerHTML = captionButtonAfter || '';
                     button.classList.add(classBefore) || '';

                     button.classList.remove(classAfter) || ''; // Retira a class de cima...
                   
                     return false;

                 }

              } // end showAndClose...

            } // end showAndCloseAreas...

          


/////////////////////////////////////////////////////////////////////////////////////////////////////

        
