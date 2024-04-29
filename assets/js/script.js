// Array of image sources
var imageSources = [
  {
    src: "./assets/images/img1.png",
    // title: "Image 1",
    description: "Description for Image 1",
  },
  {
    src: "./assets/images/img2.png",
    // title: "Image 2",
    description: "Description for Image 2",
  },
  {
    src: "./assets/images/img3.png",
    // title: "Image 3",
    description: "Description for Image 3",
  },
  {
    src: "./assets/images/img4.png",
    // title: "Image 4",
    description: "Description for Image 4",
  },
  {
    src: "./assets/images/img5.png",
    // title: "Image 5",
    description: "Description for Image 5",
  },
  {
    src: "./assets/images/img6.png",
    // title: "Image 6",
    description: "Description for Image 6",
  },
  {
    src: "./assets/images/plant.png",
    // title: "Image 7",
    description: "Description for Image 7",
  },
  {
    src: "./assets/images/cat.png",
    // title: "Image 8",
    description: "Description for Image 8",
  },
  {
    src: "./assets/images/dog.png",
    // title: "Image 9",
    description: "Description for Image 9",
  },
  {
    src: "./assets/images/fish.png",
    // title: "Image 10",
    description: "Description for Image 10",
  },
  {
    src: "./assets/images/football.png",
    // title: "Image 11",
    description: "Description for Image 11",
  },
  {
    src: "./assets/images/nerdNote.png",
    // title: "Image 12",
    description: "Description for Image 12",
  },
  {
    src: "./assets/images/mac.png",
    // title: "Image 13",
    description: "Description for Image 13",
  },
  {
    src: "./assets/images/linux.png",
    // title: "Image 14",
    description: "Description for Image 14",
  },
  {
    src: "./assets/images/window.png",
    // title: "Image 15",
    description: "Description for Image 15",
  },
  {
    src: "./assets/images/git.png",
    // title: "Image 16",
    description: "Description for Image 16",
  },
  {
    src: "./assets/images/gitBash.png",
    // title: "Image 17",
    description: "Description for Image 17",
  },
  {
    src: "./assets/images/github.png",
    // title: "Image 18",
    description: "Description for Image 18",
  },
  {
    src: "./assets/images/gitlab.png",
    // title: "Image 19",
    description: "Description for Image 19",
  },
  {
    src: "./assets/images/propertyValue.png",
    // title: "Image 20",
    description: "Description for Image 20",
  },
  {
    src: "./assets/images/plant2.png",
    // title: "Image 21",
    description: "Description for Image 21",
  },
  {
    src: "./assets/images/read.png",
    // title: "Image 22",
    description: "Description for Image 22",
  },
  {
    src: "./assets/images/plant4.png",
    // title: "Image 23",
    description: "Description for Image 23",
  },
  {
    src: "./assets/images/OnTheJob.png",
    // title: "Image 24",
    description: "Description for Image 24",
  },
  {
    src: "./assets/images/note.png",
    // title: "Image 25",
    description: "Description for Image 25",
  },
  {
    src: "./assets/images/nerdNote.png",
    // title: "Image 26",
    description: "Description for Image 26",
  },
  {
    src: "./assets/images/love.png",
    // title: "Image 27",
    description: "Description for Image 27",
  },
  {
    src: "./assets/images/light.png",
    // title: "Image 28",
    description: "Description for Image 28",
  },
  {
    src: "./assets/images/hint.png",
    // title: "Image 29",
    description: "Description for Image 29",
  },
  {
    src: "./assets/images/dhammaWheel.png",
    // title: "Image 30",
    description: "Description for Image 30",
  },
  {
    src: "./assets/images/deepDive1.png",
    // title: "Image 31",
    description: "Description for Image 31",
  },
  {
    src: "./assets/images/assignment.png",
    // title: "Image 32",
    description: "Description for Image 32",
  },
  // Add more image objects as needed
];

var currentIndex = 0;
var totalImages = imageSources.length;

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateImageVisibility();
}

// Function to show the previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateImageVisibility();
}

// Function to update image visibility based on currentIndex
function updateImageVisibility() {
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = ""; // Clear existing images

  var imgDiv = document.createElement("div"); // Create a container for the current image
  imgDiv.classList.add("imageItem");

  var img = document.createElement("img");
  img.src = imageSources[currentIndex].src;
  img.alt = imageSources[currentIndex].title;
  imgDiv.appendChild(img);

  // Create title and paragraph for image name and text description
  var title = document.createElement("div");
  title.classList.add("title");
  title.textContent = imageSources[currentIndex].title;
  imgDiv.appendChild(title);

  var description = document.createElement("div");
  description.classList.add("description");
  description.textContent = imageSources[currentIndex].description;
  imgDiv.appendChild(description);

  // Append image container to body
  imageContainer.appendChild(imgDiv);
}

// Show the initial image
updateImageVisibility();
