def factorial(n):
    if n <= 1:
        return n
    else:
        ans = factorial(n-1) + factorial(n-2)
        return ans

def cube(n):
    return n*n*n

