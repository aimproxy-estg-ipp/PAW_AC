const index = async (req, res, next) => {
    return res.render('index', {
        navigation: [
            { name: 'Customers', module: 'customers' },
            { name: 'Employees', module: 'employees' },
            { name: 'Purchases', module: 'purchases' },
            { name: 'Books', module: 'books' },
        ],
    })
}

module.exports = {
    index,
}