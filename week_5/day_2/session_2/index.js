var data = [];
        function submit() {
            data = []
            var product = document.getElementById("product").value;
            var price = document.querySelector(".price").value;
            var qnt = document.querySelector(".quantity").value
            var obj = {
                product: product,
                price: price,
                quantity: qnt,
            }
            data.push(obj);
            document.getElementById("product").value = "";
            document.querySelector(".price").value = "";
            document.querySelector(".quantity").value = "";
        }


        function showTable() {
            var table = document.querySelector("table")

            for (var i = 0; i < data.length; i++) {
                var newRow = document.createElement("tr")

                var addProduct = document.createElement("td")
                addProduct.textContent = data[i].product;
                newRow.appendChild(addProduct)
                var addPrice = document.createElement("td")
                addPrice.textContent = data[i].price;
                newRow.appendChild(addPrice);
                var addQnt = document.createElement("td")
                addQnt.textContent = data[i].quantity
                newRow.appendChild(addQnt)
                newRow.setAttribute("class", "row")
                table.append(newRow)
            }
        }

        function chnageStyle() {
            var fontSize = document.getElementById("sizeOfFont").value
            var fontColor = document.getElementById("colorOfFont").value
            var bgc = document.getElementById("bgc").value
            var newRow = document.querySelectorAll(".row")
            for (var i = 0; i < newRow.length; i++) {

                newRow[i].style.fontSize = fontSize
                newRow[i].style.color = fontColor
                if (i % 2 == 0) {
                    newRow[i].style.backgroundColor = bgc;
                }
            }

        }