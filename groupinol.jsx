function PaymentButton(){
    const amount = 45;
    function handlePayment(){
        console.log(amount)
    }
    return(<button onClick={handlePayment}>Pay</button>

    )
}
PaymentButton()