const handleCart = (req, res, db) => {
const { id, title, price } = req.body;
	db.insert({
        id: id,
        title: title,
        price:price
      })
      .into('cart')
      .then( function (result) {
          res.json({ success: true, message: 'ok' });     
       })

}
module.exports = {
  handleCart: handleCart
};

