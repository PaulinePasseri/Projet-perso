document.addEventListener("DOMContentLoaded", function() {
    const beforeContainers = document.querySelectorAll('.before .container');
    const afterContainers = document.querySelectorAll('.after .container');

    beforeContainers.forEach((beforeContainer, index) => {
        beforeContainer.addEventListener('click', function() {
            // Afficher le container "after" correspondant
            afterContainers[index].style.visibility = 'visible';
            afterContainers[index].style.opacity = '1'; // Optionnel : pour une transition plus fluide
        });
    });

    // Cacher tous les containers "after" au début
    afterContainers.forEach(afterContainer => {
        afterContainer.style.visibility = 'hidden';
        afterContainer.style.opacity = '0'; // Optionnel : pour une transition plus fluide
    });
});