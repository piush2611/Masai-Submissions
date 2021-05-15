import time

def decorator(func):
    def innerFunc(*argv, **kwargs):
        entryTime = time.time()
        func(*argv, **kwargs)
        exitTime = time.time()
        print("Time taken for execution ", exitTime - entryTime)
    return innerFunc



@decorator
def perimeter(side):
    print(4*side)

perimeter(5)