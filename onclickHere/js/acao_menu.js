var button_cardapio = document.getElementById('button_cardapio'),
     cardapio = document.getElementById('cardapio');
     cardapio.style.display = 'none';

  var novoEvento = new showAndCloseAreas();
      novoEvento.showAndClose( 
      cardapio, 
      button_cardapio, 
      'Cardápio', 
      'Fechar cardápio X', 
      'antes', 
      'depois'
  );
     
//////////////////////////////////////////////////////



 var button_cardapio2 = document.getElementById('button_cardapio2'),
     cardapio2 = document.getElementById('cardapio2');
     cardapio2.style.display = 'none';

  var novoEvento2 = new showAndCloseAreas();
      novoEvento2.showAndClose( 
      cardapio2, 
      button_cardapio2, 
      'Cardápio', 
      'Fechar', 
      'antes',
      'depois'
  );

  /////////////////////////////////////////////////

  var button_cardapio3 = document.getElementById('button_cardapio3'),
      cardapio3 = document.getElementById('cardapio3');
      cardapio3.style.display = 'none';

  var novoEvento3 = new showAndCloseAreas();
      novoEvento3.showAndClose( 
      cardapio3, 
      button_cardapio3, 
      'Cardápio', 
      'Fechar', 
      'antes',
      'depois'
  );
