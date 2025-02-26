document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");

    // Lấy sản phẩm từ LocalStorage (nếu có)
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Khi submit form, thêm sản phẩm vào danh sách và lưu vào LocalStorage
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Lấy dữ liệu từ form
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        const image = document.getElementById("product-image").value;
        const category = document.getElementById("product-category").value;

        // Tạo đối tượng sản phẩm
        const newProduct = { name, price, image, category };

        // Thêm sản phẩm vào danh sách và lưu lại vào LocalStorage
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));

        alert("Sản phẩm đã được thêm thành công!");

        // Reset form
        productForm.reset();
    });
});