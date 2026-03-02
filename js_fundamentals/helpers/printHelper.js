export function printAge(age){
    console.log(age)
}

// export class CustomerDetails {

//     printFirstName(firstName){
//         console.log(firstName)
//     }

//     printLastName(lastName){
//         console.log(lastName)
//     }
// }

// Other - remove constrictor

class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print last name
     * @param {string} lastName 
     */

    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()
