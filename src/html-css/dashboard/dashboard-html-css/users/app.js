// Attendez que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionnez tous les éléments avec la classe 'trash'
    const trashIcons = document.querySelectorAll('.trash');
  
    // Ajoutez un gestionnaire d'événements à chaque icône
    trashIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        // 'this' se réfère à l'icône sur laquelle le clic a été effectué
        // 'this.parentElement' se réfère au parent <p>, et 'this.parentElement.parentElement' est le <div class="utilisateur">
        this.parentElement.parentElement.remove();
      });
    });
  });
  