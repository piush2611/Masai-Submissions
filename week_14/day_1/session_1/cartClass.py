class ShoppingCart:
    itemsPresentInCart = {}

    def __init__(self, customerId):
        self.customerId = customerId
    
    def addItem(self, product, price):
        flag = False
        for key, value in self.itemsPresentInCart.items():
            if key == product:
                flag = True
        if flag:
            print(product + " already in cart")
        else:
            self.itemsPresentInCart[product] = price
            print(product + " added")


    def removeItem(self, product):
        flag = False
        for key, value in self.itemsPresentInCart.items():
            if key == product:
                flag = True
        if flag:
            self.itemsPresentInCart.pop(product)
            print(product + " removed from the cart ")
        else:
            print(product + " not present in cart !")

n = ShoppingCart(10)
n.addItem("jute", "20")
n.removeItem("jute")