function Detail() {
    const det = [
        {id: 1, name: 'package 1', price: '4000'},
        {id: 2, name: 'package 2', price: '8000'},
        {id: 3, name: 'package 3', price: '10000'},
        {id: 4, name: 'package 4', price: '15000'}
      ];

    return (
        <div>

            {det.map((product) => <ProductCLick key={product.id} name={product.name} price={product.price}/>)}
       
        </div>
    )
}

export default Detail