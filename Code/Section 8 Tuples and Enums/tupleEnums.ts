// const stuff: (string | number)[] = ['asd', 'asdasd', 'asdasd', 2]

// Fixed Length array of 3 numbers
const color: [number, number, number] = [255,0,255] 


type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]
/*
Tuples don't prevent you from pushing on more elements onto the tuple.
*/

// Array of tuples.
const responses: HTTPResponse[] = [[404,"Not Found"], [200,"OK"]]

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED; // Type is OrderStatus.DELIVERED

// Takes a arguement of type OrderStatus
function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)


enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234
}


