document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.services-list li');
    let lastActiveService = null;

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            
            // Find the closest .services-container to determine the current carousel
            const parentContainer = this.closest('.services-container');
            const relevantContents = parentContainer.querySelectorAll('.service-content');
            const relevantItems = parentContainer.querySelectorAll('.services-list li');

            // Remove active class from all sections within this carousel
            relevantItems.forEach(i => i.classList.remove('active'));
            relevantContents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked item and its corresponding content
            this.classList.add('active');
            document.getElementById(service).classList.add('active');

            // Keep track of the last active service
            lastActiveService = document.getElementById(service);
        });
    });

    // Keep the last opened section active if clicking outside the carousel
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.services-container') && lastActiveService) {
            lastActiveService.classList.add('active');
        }
    });
});
