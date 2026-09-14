/* ===== Maison Furniture — Shared JS ===== */
(function () {
  'use strict';

  /* ---------- Product Data ---------- */
  var PRODUCTS = [
    // Sofas
    { id: 1, name: 'Aria Gray Velvet Sofa', category: 'Sofas', price: 1299, oldPrice: 1599, rating: 4.8, reviews: 214, badge: 'sale', image: 'https://images.pexels.com/photos/11295890/pexels-photo-11295890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A sophisticated gray velvet sofa with plush cushions and a sturdy hardwood frame. Perfect for contemporary living rooms.' },
    { id: 2, name: 'Lumiere Beige Sectional', category: 'Sofas', price: 1899, rating: 4.9, reviews: 187, badge: 'hot', image: 'https://images.pexels.com/photos/8135269/pexels-photo-8135269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Luxurious beige sectional with ultra-soft cushions, designed for both comfort and timeless elegance.' },
    { id: 3, name: 'Nordic Minimalist Sofa', category: 'Sofas', price: 1099, rating: 4.6, reviews: 92, image: 'https://images.pexels.com/photos/12277216/pexels-photo-12277216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A cozy minimalist sofa with clean lines, side table integration, and Scandinavian-inspired design.' },
    { id: 4, name: 'Botanical Print Sofa', category: 'Sofas', price: 1199, rating: 4.5, reviews: 76, image: 'https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Comfortable sofa with botanical-themed pillows, perfect for a modern spacious living room.' },
    { id: 5, name: 'Minimalist White Sofa', category: 'Sofas', price: 879, rating: 4.4, reviews: 58, image: 'https://images.pexels.com/photos/8580720/pexels-photo-8580720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant and simple white sofa with minimalist design. Brightens any living space effortlessly.' },
    { id: 6, name: 'Velour Green Accent Sofa', category: 'Sofas', price: 1199, rating: 4.8, reviews: 167, badge: 'new', image: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A bold green velour sofa with soft cushions. A statement piece for any stylish living room.' },
    { id: 7, name: 'Rose Plush Loveseat', category: 'Sofas', price: 849, rating: 4.5, reviews: 63, image: 'https://images.pexels.com/photos/8135295/pexels-photo-8135295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant pink loveseat with plush pillows, adding a warm pop of color to any room.' },
    { id: 8, name: 'Contemporary Gray Couch', category: 'Sofas', price: 999, rating: 4.6, reviews: 84, image: 'https://images.pexels.com/photos/6920628/pexels-photo-6920628.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Comfortable gray couch with turquoise accent chair. Contemporary design for modern homes.' },

    // Dining
    { id: 9, name: 'Rustic Wood Dining Set', category: 'Dining', price: 1499, rating: 4.7, reviews: 143, badge: 'hot', image: 'https://images.pexels.com/photos/7180275/pexels-photo-7180275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy dining set with wooden table, ceramic plates, and cushioned chairs in a minimalist style.' },
    { id: 10, name: 'Modern Shadow Dining Set', category: 'Dining', price: 1299, rating: 4.5, reviews: 78, image: 'https://images.pexels.com/photos/9962719/pexels-photo-9962719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Modern dining table and chairs with a sleek design that plays with light and shadow.' },
    { id: 11, name: 'Vintage Wood Dining Set', category: 'Dining', price: 1199, rating: 4.6, reviews: 91, image: 'https://images.pexels.com/photos/13097272/pexels-photo-13097272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy indoor dining set featuring a wooden table and chairs with vintage charm.' },
    { id: 12, name: 'Sunlit Wicker Dining Set', category: 'Dining', price: 1799, oldPrice: 2199, rating: 4.8, reviews: 112, badge: 'sale', image: 'https://images.pexels.com/photos/3935326/pexels-photo-3935326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A sunlit dining room set featuring a wooden table and wicker chairs for luxury interior design.' },
    { id: 13, name: 'Chandelier Dining Set', category: 'Dining', price: 2299, rating: 4.9, reviews: 67, badge: 'new', image: 'https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Spacious dining room set with wooden furniture and an elegant chandelier under natural light.' },
    { id: 14, name: 'Pendant Light Dining Set', category: 'Dining', price: 1599, rating: 4.5, reviews: 54, image: 'https://images.pexels.com/photos/27497441/pexels-photo-27497441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant dining area with wood table, chairs, and pendant lights for warm ambiance.' },
    { id: 15, name: 'Ecuadorian Wood Dining Set', category: 'Dining', price: 1399, rating: 4.6, reviews: 73, image: 'https://images.pexels.com/photos/27952969/pexels-photo-27952969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A stylish wooden dining table with chairs in a modern room. Crafted from sustainable wood.' },
    { id: 16, name: 'Modern Plant Dining Set', category: 'Dining', price: 1699, rating: 4.7, reviews: 89, image: 'https://images.pexels.com/photos/20548025/pexels-photo-20548025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Modern dining room set with wooden furniture, plants, and elegant decor under natural lighting.' },

    // Bedroom
    { id: 17, name: 'Stone Accent Platform Bed', category: 'Bedroom', price: 1099, rating: 4.6, reviews: 102, image: 'https://images.pexels.com/photos/12913382/pexels-photo-12913382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A cozy, minimalist platform bed with stone wall accent in a modern interior setting.' },
    { id: 18, name: 'Scandinavian Bedroom Set', category: 'Bedroom', price: 1899, oldPrice: 2299, rating: 4.8, reviews: 156, badge: 'sale', image: 'https://images.pexels.com/photos/12289357/pexels-photo-12289357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy and stylish Scandinavian bedroom set with modern furniture and decor.' },
    { id: 19, name: 'Headboard Bedroom Suite', category: 'Bedroom', price: 2199, rating: 4.7, reviews: 98, image: 'https://images.pexels.com/photos/4300056/pexels-photo-4300056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy bedroom suite with stylish headboard, pillows, and mirrored side tables.' },
    { id: 20, name: 'Warm Modern Bed Frame', category: 'Bedroom', price: 899, rating: 4.5, reviews: 71, image: 'https://images.pexels.com/photos/36657301/pexels-photo-36657301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Warm and inviting modern bed frame with a neatly arranged setup and stylish decor.' },
    { id: 21, name: 'Elegant Decor Bed Set', category: 'Bedroom', price: 1599, rating: 4.8, reviews: 134, badge: 'hot', image: 'https://images.pexels.com/photos/29640156/pexels-photo-29640156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant and cozy modern bedroom featuring chic decor, lamps, and a comfortable bed setup.' },
    { id: 22, name: 'Minimalist Bedroom Set', category: 'Bedroom', price: 1299, rating: 4.4, reviews: 52, image: 'https://images.pexels.com/photos/12904231/pexels-photo-12904231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A cozy modern bedroom featuring minimalist furniture and decor pieces for stylish comfort.' },
    { id: 23, name: 'Neutral Mirror Bedroom Set', category: 'Bedroom', price: 1799, rating: 4.6, reviews: 87, image: 'https://images.pexels.com/photos/7546290/pexels-photo-7546290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Inviting bedroom with stylish decor, featuring a neutral-toned bed and mirrored closet.' },
    { id: 24, name: 'Quilted Bed Frame Set', category: 'Bedroom', price: 999, rating: 4.7, reviews: 76, badge: 'new', image: 'https://images.pexels.com/photos/9899875/pexels-photo-9899875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Inviting bedroom with a sunlit window and decorative pillows on a quilted bed frame.' },

    // Storage
    { id: 25, name: 'Glass Display Cabinet', category: 'Storage', price: 799, rating: 4.5, reviews: 68, image: 'https://images.pexels.com/photos/9490222/pexels-photo-9490222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant glass display cabinet with shelves for books and collectibles. Modern and functional.' },
    { id: 26, name: 'Wooden Bookshelf Tower', category: 'Storage', price: 599, rating: 4.7, reviews: 115, badge: 'hot', image: 'https://images.pexels.com/photos/7167083/pexels-photo-7167083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Rows of books on a tall wooden bookshelf. Spacious and modern for any apartment.' },
    { id: 27, name: 'Beige Wooden Wardrobe', category: 'Storage', price: 899, oldPrice: 1099, rating: 4.6, reviews: 94, badge: 'sale', image: 'https://images.pexels.com/photos/7005283/pexels-photo-7005283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Big beige wooden wardrobe with empty shelves. Perfect for modern apartment storage.' },
    { id: 28, name: 'Minimalist Bookshelf Set', category: 'Storage', price: 449, rating: 4.5, reviews: 61, image: 'https://images.pexels.com/photos/6956505/pexels-photo-6956505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish minimalist bookshelf with vases and books. Clean design for modern interiors.' },
    { id: 29, name: 'Vintage Star Bookshelf', category: 'Storage', price: 549, rating: 4.4, reviews: 38, image: 'https://images.pexels.com/photos/18154120/pexels-photo-18154120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A vintage bookshelf with a unique red star design, filled with books and collectibles.' },
    { id: 30, name: 'Cozy Wood Bookshelf', category: 'Storage', price: 399, rating: 4.6, reviews: 72, badge: 'new', image: 'https://images.pexels.com/photos/18857982/pexels-photo-18857982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A wooden shelf with books, houseplants, and decorative items for a cozy room.' },
    { id: 31, name: 'Antique Wooden Cabinet', category: 'Storage', price: 749, rating: 4.7, reviews: 53, image: 'https://images.pexels.com/photos/7166629/pexels-photo-7166629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant vintage interior cabinet with antique details and warm wooden tones.' },
    { id: 32, name: 'Home Library Bookshelf', category: 'Storage', price: 649, rating: 4.8, reviews: 88, image: 'https://images.pexels.com/photos/36873346/pexels-photo-36873346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A cozy wooden bookshelf filled with a diverse collection of books for your home library.' },

    // Tables
    { id: 33, name: 'Minimalist Wood Coffee Table', category: 'Tables', price: 549, rating: 4.8, reviews: 189, badge: 'hot', image: 'https://images.pexels.com/photos/7607461/pexels-photo-7607461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A minimalist wooden coffee table with a vase and marble candle holder. Chic and functional.' },
    { id: 34, name: 'Stone Top Coffee Table', category: 'Tables', price: 629, oldPrice: 799, rating: 4.7, reviews: 112, badge: 'sale', image: 'https://images.pexels.com/photos/27164977/pexels-photo-27164977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'An elegant modern coffee table with a textured stone top, paired with a cozy couch.' },
    { id: 35, name: 'Wooden Console Side Table', category: 'Tables', price: 349, rating: 4.6, reviews: 78, image: 'https://images.pexels.com/photos/12277020/pexels-photo-12277020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A minimalist wooden console table with a potted plant. Perfect for entryways and hallways.' },
    { id: 36, name: 'Side Table with Decor', category: 'Tables', price: 249, rating: 4.5, reviews: 54, image: 'https://images.pexels.com/photos/14063637/pexels-photo-14063637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Minimalist side table with a book and decorative stone. Perfect for modern homes.' },
    { id: 37, name: 'Round Lounge Coffee Table', category: 'Tables', price: 479, rating: 4.7, reviews: 96, badge: 'new', image: 'https://images.pexels.com/photos/4170018/pexels-photo-4170018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Contemporary lounge coffee table with a sleek round design. Perfect for modern seating areas.' },
    { id: 38, name: 'Rustic Accent Side Table', category: 'Tables', price: 199, rating: 4.4, reviews: 42, image: 'https://images.pexels.com/photos/6078540/pexels-photo-6078540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A small side table with colorful flowers in a glass vase. Adds warmth to any decorated room.' },

    // Chairs
    { id: 39, name: 'Twin Gray Armchairs', category: 'Chairs', price: 698, rating: 4.6, reviews: 87, image: 'https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Two contemporary gray armchairs in a minimalist interior with a yellow accent wall.' },
    { id: 40, name: 'Yellow Accent Armchair', category: 'Chairs', price: 399, oldPrice: 499, rating: 4.7, reviews: 124, badge: 'sale', image: 'https://images.pexels.com/photos/34984836/pexels-photo-34984836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A bright yellow armchair against a white minimalist wall. Modern design elegance.' },
    { id: 41, name: 'Wooden Beige Armchair', category: 'Chairs', price: 449, rating: 4.8, reviews: 98, badge: 'hot', image: 'https://images.pexels.com/photos/9042081/pexels-photo-9042081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A contemporary wooden armchair with soft beige cushions. Sleek design and exceptional comfort.' },
    { id: 42, name: 'Green Patterned Armchair', category: 'Chairs', price: 549, rating: 4.5, reviews: 61, image: 'https://images.pexels.com/photos/8135262/pexels-photo-8135262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish green armchair with luxurious fabric, intricate patterns, and a vintage wooden finish.' },
    { id: 43, name: 'Blue Striped Chair', category: 'Chairs', price: 479, rating: 4.6, reviews: 73, image: 'https://images.pexels.com/photos/8135276/pexels-photo-8135276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Beautiful blue striped chair with ornate detailing. Adds character to any living space.' },
    { id: 44, name: 'Red Wood Accent Chair', category: 'Chairs', price: 379, rating: 4.7, reviews: 85, badge: 'new', image: 'https://images.pexels.com/photos/12212553/pexels-photo-12212553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish red armchair with wooden legs in a warm, minimalist living room setting.' },
    { id: 45, name: 'Vintage Green Armchairs', category: 'Chairs', price: 898, rating: 4.5, reviews: 44, image: 'https://images.pexels.com/photos/8135266/pexels-photo-8135266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Two vintage green armchairs with ornate cushions set against a beige wall.' },
    { id: 46, name: 'Orange Blue Designer Chair', category: 'Chairs', price: 529, rating: 4.4, reviews: 37, image: 'https://images.pexels.com/photos/2766975/pexels-photo-2766975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Modern orange and blue chairs with a unique designer aesthetic. A conversation starter.' },

    // Desks
    { id: 47, name: 'Glass Wood Office Desk', category: 'Desks', price: 699, rating: 4.7, reviews: 89, badge: 'hot', image: 'https://images.pexels.com/photos/13075330/pexels-photo-13075330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Sleek and stylish home office desk with wooden furniture and a glass top surface.' },
    { id: 48, name: 'Minimalist Wood Desk', category: 'Desks', price: 449, rating: 4.6, reviews: 72, image: 'https://images.pexels.com/photos/265096/pexels-photo-265096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A minimalist home office desk with wooden surface. Clean design for productive workspaces.' },
    { id: 49, name: 'Dark Wood Office Set', category: 'Desks', price: 799, oldPrice: 999, rating: 4.5, reviews: 58, badge: 'sale', image: 'https://images.pexels.com/photos/3847582/pexels-photo-3847582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A warm, dark-toned home office set with a wooden table and contemporary chairs.' },
    { id: 50, name: 'White Minimalist Desk', category: 'Desks', price: 399, rating: 4.8, reviews: 105, badge: 'new', image: 'https://images.pexels.com/photos/36123565/pexels-photo-36123565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A minimalistic workspace desk with white surface and wooden legs. Bright and productive.' },
    { id: 51, name: 'Bright Window Desk Set', category: 'Desks', price: 549, rating: 4.6, reviews: 67, image: 'https://images.pexels.com/photos/15062127/pexels-photo-15062127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Bright modern home office with a minimalist desk and lamp by the window. Inspiring setup.' },
    { id: 52, name: 'Organized Wood Desk', category: 'Desks', price: 479, rating: 4.5, reviews: 51, image: 'https://images.pexels.com/photos/373904/pexels-photo-373904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A well-organized workspace featuring a wooden desk with storage for books and supplies.' },

    // Outdoor
    { id: 53, name: 'Garden Bistro Set', category: 'Outdoor', price: 449, rating: 4.6, reviews: 83, image: 'https://images.pexels.com/photos/36248315/pexels-photo-36248315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Bistro table and chairs set in a sunny garden with vibrant green surroundings.' },
    { id: 54, name: 'Tropical Rattan Patio Set', category: 'Outdoor', price: 899, rating: 4.8, reviews: 112, badge: 'hot', image: 'https://images.pexels.com/photos/14024758/pexels-photo-14024758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A serene patio set with rattan chairs overlooking a lush tropical garden. Perfect for relaxation.' },
    { id: 55, name: 'Wooden Garden Table Set', category: 'Outdoor', price: 599, oldPrice: 749, rating: 4.5, reviews: 64, badge: 'sale', image: 'https://images.pexels.com/photos/32076746/pexels-photo-32076746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A serene outdoor patio set featuring a wooden table and chairs amidst a garden setting.' },
    { id: 56, name: 'White Garden Chair Trio', category: 'Outdoor', price: 299, rating: 4.4, reviews: 41, image: 'https://images.pexels.com/photos/29666133/pexels-photo-29666133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Three white garden chairs arranged on a fresh green lawn. Clean and classic outdoor seating.' },
    { id: 57, name: 'Rattan Terrace Set', category: 'Outdoor', price: 1099, rating: 4.7, reviews: 78, badge: 'new', image: 'https://images.pexels.com/photos/26793170/pexels-photo-26793170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Modern outdoor rattan furniture set on a stylish terrace. Weather-resistant and elegant.' },
    { id: 58, name: 'Iron Lawn Set', category: 'Outdoor', price: 399, rating: 4.5, reviews: 52, image: 'https://images.pexels.com/photos/34589102/pexels-photo-34589102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'White iron table and chairs set on a vibrant green lawn. Timeless outdoor elegance.' },
    { id: 59, name: 'Wicker Sofa Patio Set', category: 'Outdoor', price: 1299, rating: 4.8, reviews: 94, image: 'https://images.pexels.com/photos/34005890/pexels-photo-34005890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Cozy outdoor patio set with stylish floral-patterned cushions on a wicker sofa and glass table.' },
    { id: 60, name: 'Rattan Garden Lounge', category: 'Outdoor', price: 999, rating: 4.6, reviews: 67, image: 'https://images.pexels.com/photos/27975920/pexels-photo-27975920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Outdoor seating with rattan furniture set in a lush garden patio. Ideal for relaxation.' },

    // Lounge
    { id: 61, name: 'White Lounge Chair', category: 'Lounge', price: 549, rating: 4.6, reviews: 76, image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Elegant white lounge chair with cushions on plush carpet. Perfect for relaxation.' },
    { id: 62, name: 'Leather Stone Wall Chair', category: 'Lounge', price: 679, rating: 4.7, reviews: 63, image: 'https://images.pexels.com/photos/32113529/pexels-photo-32113529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A stylish indoor sitting area featuring leather chairs and a plant against a rustic stone wall.' },
    { id: 63, name: 'Lounge Corner Chair', category: 'Lounge', price: 449, oldPrice: 579, rating: 4.5, reviews: 48, badge: 'sale', image: 'https://images.pexels.com/photos/12277631/pexels-photo-12277631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish lounge corner with modern chair and potted plant in a minimalist setting.' },
    { id: 64, name: 'Black Leather Lounge Set', category: 'Lounge', price: 899, rating: 4.8, reviews: 107, badge: 'hot', image: 'https://images.pexels.com/photos/35378690/pexels-photo-35378690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish black leather lounge chair with ottoman in a modern setting. Ultimate comfort.' },
    { id: 65, name: 'Modern Living Armchair', category: 'Lounge', price: 529, rating: 4.6, reviews: 81, image: 'https://images.pexels.com/photos/8389906/pexels-photo-8389906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Stylish modern armchair in a beautifully designed living room with wooden flooring.' },
    { id: 66, name: 'Mid-Century Lounge Set', category: 'Lounge', price: 1199, rating: 4.9, reviews: 143, badge: 'new', image: 'https://images.pexels.com/photos/33084139/pexels-photo-33084139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Mid-century modern chairs and sofa in a sunlit living room. Timeless design at its finest.' },
    { id: 67, name: 'Bedroom Leather Chair', category: 'Lounge', price: 599, rating: 4.5, reviews: 55, image: 'https://images.pexels.com/photos/7227653/pexels-photo-7227653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'Leather armchair placed near a table and bed. Adds sophistication to a modern bedroom.' },
    { id: 68, name: 'Brown Leather Office Chair', category: 'Lounge', price: 449, rating: 4.7, reviews: 89, image: 'https://images.pexels.com/photos/11090556/pexels-photo-11090556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', desc: 'A brown leather office chair showcasing luxury and comfort. Perfect for executive spaces.' }
  ];

  var CATEGORIES = ['Sofas', 'Dining', 'Bedroom', 'Storage', 'Tables', 'Chairs', 'Desks', 'Outdoor', 'Lounge'];

  /* ---------- Cart (localStorage) ---------- */
  var CART_KEY = 'maison_cart';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
  }

  function addToCart(id) {
    var product = PRODUCTS.find(function (p) { return p.id === id; });
    if (!product) return;
    var cart = getCart();
    var existing = cart.find(function (c) { return c.id === id; });
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    }
    saveCart(cart);
    openCart();
    showToast(product.name + ' added to cart');
  }

  function removeFromCart(id) {
    var cart = getCart().filter(function (c) { return c.id !== id; });
    saveCart(cart);
  }

  function updateQty(id, qty) {
    if (qty <= 0) { removeFromCart(id); return; }
    var cart = getCart();
    var item = cart.find(function (c) { return c.id === id; });
    if (item) item.quantity = qty;
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function cartTotal() {
    return getCart().reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
  }

  function cartCount() {
    return getCart().reduce(function (sum, item) { return sum + item.quantity; }, 0);
  }

  /* ---------- UI Updates ---------- */
  function updateCartCount() {
    var count = cartCount();
    var els = document.querySelectorAll('.cart-count');
    els.forEach(function (el) {
      if (count > 0) {
        el.textContent = count;
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  function renderCartItems() {
    var cart = getCart();
    var body = document.getElementById('cart-body');
    var footer = document.getElementById('cart-footer');
    if (!body) return;

    if (cart.length === 0) {
      body.innerHTML = '<div class="cart-empty">' +
        '<div class="cart-empty-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></div>' +
        '<p class="semibold">Your cart is empty</p>' +
        '<p class="muted">Browse our collection and find something you love.</p>' +
        '<a href="/shop.html" class="btn btn-primary btn-sm">Start Shopping</a>' +
        '</div>';
      if (footer) footer.style.display = 'none';
      return;
    }

    body.innerHTML = cart.map(function (item) {
      return '<div class="cart-item">' +
        '<div class="cart-item-img"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
        '<div class="cart-item-info">' +
        '<h4>' + item.name + '</h4>' +
        '<p class="cart-item-price">$' + item.price + '</p>' +
        '<div class="qty-control">' +
        '<button class="qty-btn" onclick="Maison.updateQty(' + item.id + ', ' + item.quantity - 1 + ')">-</button>' +
        '<span class="qty-val">' + item.quantity + '</span>' +
        '<button class="qty-btn" onclick="Maison.updateQty(' + item.id + ', ' + item.quantity + 1 + ')">+</button>' +
        '</div>' +
        '</div>' +
        '<div class="flex items-center gap-2">' +
        '<span class="cart-item-total">$' + item.price * item.quantity + '</span>' +
        '<button class="cart-item-remove" onclick="Maison.removeFromCart(' + item.id + ')"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></button>' +
        '</div>' +
        '</div>';
    }).join('') + '<button class="cart-clear" onclick="Maison.clearCart()">Clear all items</button>';

    if (footer) {
      footer.style.display = 'block';
      var subtotalEl = document.getElementById('cart-subtotal');
      if (subtotalEl) subtotalEl.textContent = '$' + cartTotal();
    }
  }

  function openCart() {
    var overlay = document.getElementById('cart-overlay');
    var drawer = document.getElementById('cart-drawer');
    if (overlay) overlay.classList.add('open');
    if (drawer) drawer.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeCart() {
    var overlay = document.getElementById('cart-overlay');
    var drawer = document.getElementById('cart-drawer');
    if (overlay) overlay.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.querySelector('span').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2500);
  }

  /* ---------- Product rendering ---------- */
  function badgeHtml(badge) {
    if (!badge) return '';
    var map = { sale: 'badge-sale', new: 'badge-new', hot: 'badge-hot' };
    var labels = { sale: 'Sale', new: 'New', hot: 'Bestseller' };
    return '<span class="badge ' + (map[badge] || 'badge-dark') + '">' + labels[badge] + '</span>';
  }

  function starsHtml(rating) {
    var full = Math.round(rating);
    var html = '<span class="stars">';
    for (var i = 1; i <= 5; i++) {
      html += i <= full ? '\u2605' : '<span class="stars-empty">\u2605</span>';
    }
    html += '</span>';
    return html;
  }

  function productCardHtml(p) {
    return '<div class="card" onclick="window.location.href=\'/product.html?id=' + p.id + '\'">' +
      '<div class="card-img">' +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
      (p.badge ? '<div style="position:absolute;top:12px;left:12px;">' + badgeHtml(p.badge) + '</div>' : '') +
      '</div>' +
      '<div class="card-body">' +
      '<div class="flex items-center gap-2 mb-1">' +
      starsHtml(p.rating) +
      '<span class="text-xs muted">(' + p.reviews + ')</span>' +
      '</div>' +
      '<h3 class="card-title">' + p.name + '</h3>' +
      '<div class="flex items-center justify-between mt-2">' +
      '<div>' +
      '<span class="card-price">$' + p.price + '</span>' +
      (p.oldPrice ? '<span class="card-price-old">$' + p.oldPrice + '</span>' : '') +
      '</div>' +
      '<button class="icon-btn" onclick="event.stopPropagation();Maison.addToCart(' + p.id + ')" aria-label="Add to cart">' +
      '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="18" height="18"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function getProductById(id) {
    return PRODUCTS.find(function (p) { return p.id === parseInt(id); });
  }

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  /* ---------- Init ---------- */
  function init() {
    updateCartCount();
    renderCartItems();

    // Menu toggle
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function () { navLinks.classList.toggle('open'); });
    }

    // Cart open/close
    var cartBtns = document.querySelectorAll('[data-cart-open]');
    cartBtns.forEach(function (btn) { btn.addEventListener('click', openCart); });
    var cartClose = document.getElementById('cart-close');
    if (cartClose) cartClose.addEventListener('click', closeCart);
    var overlay = document.getElementById('cart-overlay');
    if (overlay) overlay.addEventListener('click', closeCart);
  }

  /* ---------- Expose ---------- */
  window.Maison = {
    PRODUCTS: PRODUCTS,
    CATEGORIES: CATEGORIES,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateQty: updateQty,
    clearCart: clearCart,
    openCart: openCart,
    closeCart: closeCart,
    productCardHtml: productCardHtml,
    badgeHtml: badgeHtml,
    starsHtml: starsHtml,
    getProductById: getProductById,
    getQueryParam: getQueryParam,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
