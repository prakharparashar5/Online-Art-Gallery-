const featuredArt = [
    {title: "Flowers Painting", img: "images/art1.jpg", type: "Painting", desc: "A colorful floral artwork that celebrates nature's beauty.", price: 150},
    {title: "Sifaka Lemur", img: "images/art2.jpg", type: "Sculpture", desc: "A detailed sculpture of the rare Sifaka Lemur.", price: 250},
    {title: "Thrasher Magazine", img: "images/art3.jpg", type: "Painting", desc: "Bold strokes and vibrant colors inspired by youth culture.", price: 120},
    {title: "Nightwatch Painting", img: "images/art4.jpg", type: "Painting", desc: "A moody masterpiece evoking timeless curiosity.", price: 200},
    {title: "Seahorse Sculpture", img: "images/art5.jpg", type: "Sculpture", desc: "An intricate sculpture capturing the elegance of a seahorse.", price: 300},
    {title: "Costa Concordia", img: "images/art6.jpg", type: "Photography", desc: "A powerful photographic moment frozen in time.", price: 180},
    {title: "City Street Sketch", img: "images/art8.avif", type: "Sketching", desc: "A lifelike pencil portrait showcasing emotion and detail.", price: 70},
    {title: "Pencil Portrait", img: "images/art9.jpg", type: "Sketching", desc: "Urban sketch capturing the beast.", price: 80},
    {title: "Cyber World", img: "images/art10.jpg", type: "Digital Art", desc: "A futuristic take on digital landscapes and imagination.", price: 110},
    {title: "Fantasy Forest", img: "images/art11.jpg", type: "Digital Art", desc: "Mystical creatures and glowing trees inhabit this digital forest.", price: 130},
    {title: "Arabic Calligraphy", img: "images/art12.jpg", type: "Calligraphy", desc: "Elegant Arabic calligraphy with a spiritual tone.", price: 90},
    {title: "Inspirational Quote", img: "images/art13.avif", type: "Calligraphy", desc: "Motivational quote beautifully styled with ink and brush.", price: 85},
    {title: "Color Splash", img: "images/art14.jpg", type: "Abstract", desc: "A vibrant explosion of color and emotion.", price: 140},
    {title: "Geometric Illusion", img: "images/art15.jpg", type: "Abstract", desc: "Shapes and lines that bend perception and depth.", price: 160}
  ];

$(document).ready(() => {
  const container = $('#featuredArt');

  featuredArt.forEach(art => {
    const url = `product-details.html?title=${encodeURIComponent(art.title)}&type=${encodeURIComponent(art.type)}&img=${encodeURIComponent(art.img)}&desc=${encodeURIComponent(art.desc)}&price=${encodeURIComponent(art.price)}`;


    container.append(`
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${art.img}" class="card-img-top" alt="${art.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${art.title}</h5>
            <p class="card-text"><strong>Type:</strong> ${art.type}</p>
            <p class="card-text"><strong>Price:</strong> ₹${art.price}</p>
            <a href="${url}" class="btn btn-primary mt-auto">View Details</a>
          </div>
        </div>
      </div>
    `);
  });
});
