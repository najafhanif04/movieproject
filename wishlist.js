// Initialize wishlist array to store movie names
let wishlist = [];

// Function to add movie to wishlist
function addToWishlist(movieName) {
    // Check if the movie is already in the wishlist
    if (!wishlist.includes(movieName)) {
        wishlist.push(movieName);  // Add movie to the wishlist
        renderWishlist();  // Update the wishlist display
    } else {
        alert('Movie is already in your wishlist!');  // Prevent duplicates
    }
}

// Function to remove a movie from wishlist
function removeFromWishlist(index) {
    wishlist.splice(index, 1);  // Remove movie at the specified index
    renderWishlist();  // Re-render the updated wishlist
}

// Function to display the wishlist in the UI
function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist');  // Select the wishlist container element
    wishlistContainer.innerHTML = '';  // Clear current wishlist display

    // Loop through each movie in the wishlist array
    wishlist.forEach((movie, index) => {
        // Create a new list item for each movie
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${movie}
            <button class="wishlist-item-btn" onclick="removeFromWishlist(${index})">
                <i class="fa fa-trash"></i>  <!-- Trash icon to remove movie -->
            </button>
        `;
        wishlistContainer.appendChild(listItem);  // Add the new list item to the wishlist container
    });
}
