// Destruindo objetos

// Deletando o arquivo da 'cloud'
myObject.destroy({
  success: function(myObject) {
    
  },
  error: function(myObject, error) {
    
    
  }
});

// Deletando uma propriedade apenas
myObject.unset("playerName");
myObject.save();
