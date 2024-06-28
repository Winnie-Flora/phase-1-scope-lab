var customerName='bob';

function upperCaseCustomerName (){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    console.log(setBestCustomer);
    return (bestCustomer='not bob');
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob';
}

const leastFavoriteCustomer='Dan';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='Lin';
}

